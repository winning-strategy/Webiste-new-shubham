import { createClient } from '@supabase/supabase-js'

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// ===================================
// CLIENT-SIDE SUPABASE CLIENT
// (Safe to use in browser and client components)
// ===================================

// Singleton client-side Supabase client
// IMPORTANT: Use this singleton instance to avoid multiple GoTrueClient instances
// which can cause undefined behavior in the browser
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ===================================
// AUTH UTILITIES
// ===================================

export const auth = {
  // Get current user
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  },

  // Get current session
  getCurrentSession: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    return session
  },

  // Sign up with email and password
  signUp: async (email: string, password: string, metadata?: Record<string, unknown>) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
        emailRedirectTo: typeof window !== 'undefined' ? window.location.origin : undefined,
      },
    })
    return { data, error }
  },

  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Update user password
  updatePassword: async (password: string) => {
    const { data, error } = await supabase.auth.updateUser({ password })
    return { data, error }
  },

  // Reset password
  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/reset-password`,
    })
    return { data, error }
  },

  // Update user (generic method for email, password, or metadata)
  updateUser: async (attributes: { email?: string; password?: string; data?: Record<string, unknown> }) => {
    const { data, error } = await supabase.auth.updateUser(attributes)
    return { data, error }
  },
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

export const utils = {
  // Check if user is authenticated
  isAuthenticated: async () => {
    const session = await auth.getCurrentSession()
    return !!session
  },

  // Format auth errors for display
  formatAuthError: (error: { message?: string } | null) => {
    if (!error || !error.message) return null

    const errorMessages: Record<string, string> = {
      'Invalid login credentials': 'Invalid email or password',
      'Email not confirmed': 'Please check your email and click the confirmation link',
      'User already registered': 'An account with this email already exists',
      'Password should be at least 6 characters': 'Password must be at least 6 characters long',
    }

    return errorMessages[error.message] || error.message || 'An unexpected error occurred'
  },
}

// Default export
export default supabase

