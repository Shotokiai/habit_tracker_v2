import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Log configuration status for debugging
if (typeof window !== 'undefined') {
  if (supabaseUrl.includes('placeholder') || supabaseAnonKey.includes('placeholder')) {
    console.warn('⚠️ Supabase not configured - using fallback values');
    console.warn('📱 App will work with local storage only');
  } else {
    console.log('✅ Supabase configured properly');
  }
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !supabaseUrl.includes('placeholder') && !supabaseAnonKey.includes('placeholder');
};