"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, auth, utils } from '@/lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any | null }>;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: any | null }>;
  signOut: () => Promise<{ error: any | null }>;
  resetPassword: (email: string) => Promise<{ error: any | null }>;
  updatePassword: (password: string) => Promise<{ error: any | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialSessionChecked, setInitialSessionChecked] = useState(false);
  const isManualSessionRefreshRef = useRef(false);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    // Safety timeout - ensure loading never hangs
    loadingTimeoutRef.current = setTimeout(() => {
      if (loading && isMounted) {
        console.warn('AuthContext: Loading timeout reached - setting loading to false');
        setLoading(false);
        setInitialSessionChecked(true);
      }
    }, 3000); // 3 second absolute maximum

    // Get initial session
    const getInitialSession = async () => {
      try {
        console.log('AuthContext: Checking initial session...');
        const startTime = Date.now();
        
        const { data: { session }, error } = await supabase.auth.getSession();
        
        const duration = Date.now() - startTime;
        console.log(`AuthContext: Session check took ${duration}ms`);
        
        if (error) {
          console.error('AuthContext: Error getting session:', error);
        }
        
        if (isMounted) {
          if (session) {
            console.log('AuthContext: Session check complete - Authenticated');
            setSession(session);
            setUser(session.user);
          } else {
            console.log('AuthContext: Session check complete - Not authenticated');
            setUser(null);
            setSession(null);
          }
          setInitialSessionChecked(true);
          setLoading(false);
          if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
            loadingTimeoutRef.current = null;
          }
        }
      } catch (error) {
        console.error('AuthContext: Unexpected error in getInitialSession:', error);
        if (isMounted) {
          setUser(null);
          setSession(null);
          setInitialSessionChecked(true);
          setLoading(false);
          if (loadingTimeoutRef.current) {
            clearTimeout(loadingTimeoutRef.current);
            loadingTimeoutRef.current = null;
          }
        }
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!isMounted) return;
        
        // Handle different auth events
        if (event === 'SIGNED_OUT') {
          setUser(null);
          setSession(null);
          setLoading(false);
          // Only redirect on explicit sign out, not on session issues
          if (!isManualSessionRefreshRef.current) {
            router.push('/auth/signin');
          }
        } else if (event === 'SIGNED_IN') {
          setUser(session?.user || null);
          setSession(session);
          setLoading(false);
          
          // Only redirect on explicit sign in from auth pages, not on session restoration
          if (initialSessionChecked && !isManualSessionRefreshRef.current) {
            const currentPath = window.location.pathname;
            if (currentPath.startsWith('/auth/')) {
              router.push('/');
            }
          }
          
          // Reset the manual refresh flag
          if (isManualSessionRefreshRef.current) {
            isManualSessionRefreshRef.current = false;
          }
        } else if (event === 'TOKEN_REFRESHED') {
          setUser(session?.user || null);
          setSession(session);
          setLoading(false);
          // Reset the manual refresh flag after token refresh
          if (isManualSessionRefreshRef.current) {
            isManualSessionRefreshRef.current = false;
          }
        } else {
          setUser(session?.user || null);
          setSession(session);
          setLoading(false);
        }
      }
    );

    // Handle visibility changes to prevent session loss redirects
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && user) {
        // Mark that this is a manual session refresh to prevent redirect
        isManualSessionRefreshRef.current = true;
        // Refresh session when app becomes visible to ensure it's still valid
        supabase.auth.getSession().then(({ data: { session } }) => {
          // If session is null but user was previously authenticated, 
          // this is likely a real sign out, so allow redirect
          if (!session && user) {
            isManualSessionRefreshRef.current = false;
          }
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMounted = false;
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = null;
      }
      subscription.unsubscribe();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data, error } = await auth.signIn(email, password);
      
      if (error) {
        return { error: { ...error, message: utils.formatAuthError(error) } };
      }

      return { error: null };
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'An unexpected error occurred' } };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      setLoading(true);
      const metadata = fullName ? { full_name: fullName, name: fullName } : undefined;
      const { data, error } = await auth.signUp(email, password, metadata);
      
      if (error) {
        return { error: { ...error, message: utils.formatAuthError(error) } };
      }

      return { error: null };
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'An unexpected error occurred' } };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await auth.signOut();
      
      if (error) {
        return { error: { ...error, message: utils.formatAuthError(error) } };
      }

      return { error: null };
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'An unexpected error occurred' } };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { data, error } = await auth.resetPassword(email);
      
      if (error) {
        return { error: { ...error, message: utils.formatAuthError(error) } };
      }

      return { error: null };
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'An unexpected error occurred' } };
    }
  };

  const updatePassword = async (password: string) => {
    try {
      const { data, error } = await auth.updatePassword(password);
      
      if (error) {
        return { error: { ...error, message: utils.formatAuthError(error) } };
      }

      return { error: null };
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'An unexpected error occurred' } };
    }
  };

  const value: AuthContextType = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

