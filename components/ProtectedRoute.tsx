"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

export function ProtectedRoute({ 
  children, 
  redirectTo = '/auth/signin', 
  requireAuth = true 
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const hasRedirectedRef = React.useRef(false);
  const [mounted, setMounted] = React.useState(false);

  // Track mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only redirect once auth check is complete
    if (!loading && !hasRedirectedRef.current && mounted) {
      console.log(`ProtectedRoute: Auth check complete - user: ${!!user}, requireAuth: ${requireAuth}`);
      
      if (requireAuth && !user) {
        // User is not authenticated and auth is required
        console.log('ProtectedRoute: Redirecting to sign-in (not authenticated)');
        hasRedirectedRef.current = true;
        router.push(redirectTo);
      } else if (!requireAuth && user) {
        // User is authenticated but shouldn't be (e.g., on login page)
        console.log('ProtectedRoute: Redirecting to home (already authenticated)');
        hasRedirectedRef.current = true;
        router.push('/');
      }
    }
    
    // Reset redirect flag when user state changes (e.g., login/logout)
    if (!loading && mounted) {
      const shouldReset = (requireAuth && user) || (!requireAuth && !user);
      if (shouldReset && hasRedirectedRef.current) {
        hasRedirectedRef.current = false;
      }
    }
  }, [user, loading, requireAuth, redirectTo, router, mounted]);

  // Show loading spinner while checking auth state or before mount
  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-300">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render children if auth requirements aren't met
  if (requireAuth && !user) {
    return null; // Will redirect via useEffect
  }

  if (!requireAuth && user) {
    return null; // Will redirect via useEffect
  }

  return <>{children}</>;
}

// Convenience components
export function RequireAuth({ children, redirectTo }: { children: React.ReactNode; redirectTo?: string }) {
  return (
    <ProtectedRoute requireAuth={true} redirectTo={redirectTo}>
      {children}
    </ProtectedRoute>
  );
}

export function RequireGuest({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute requireAuth={false}>
      {children}
    </ProtectedRoute>
  );
}

