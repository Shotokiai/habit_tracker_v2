import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Enhanced logging for production debugging
if (typeof window !== 'undefined') {
  console.log('🔧 Supabase Configuration Check:');
  console.log('- Environment:', process.env.NODE_ENV);
  console.log('- URL configured:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('- Key configured:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  console.log('- URL preview:', supabaseUrl?.substring(0, 30) + '...');
  
  if (supabaseUrl.includes('placeholder') || supabaseAnonKey.includes('placeholder')) {
    console.warn('⚠️ Supabase not configured - using fallback values');
    console.warn('📱 App will work with local storage only');
    console.warn('🔍 Check environment variables in production deployment');
  } else {
    console.log('✅ Supabase configured properly');
    console.log('🌍 Production registration should work');
  }
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      headers: {
        'x-application-name': 'habit-tracker',
      },
    },
  }
)

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !supabaseUrl.includes('placeholder') && !supabaseAnonKey.includes('placeholder');
};

// Production debugging helper
export const debugSupabaseConnection = async () => {
  try {
    console.log('🧪 Testing Supabase connection...');
    const { data, error } = await supabase.from('users').select('count', { count: 'exact' }).limit(1);
    
    if (error) {
      console.error('❌ Supabase connection test failed:', error);
      return false;
    }
    
    console.log('✅ Supabase connection test successful');
    return true;
  } catch (err) {
    console.error('🚨 Supabase connection test exception:', err);
    return false;
  }
};

// Helper for production environment detection
export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

// Helper to get environment info
export const getEnvironmentInfo = () => {
  return {
    isProduction: isProduction(),
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseConfigured: isSupabaseConfigured(),
    nodeEnv: process.env.NODE_ENV,
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
  };
};