import { createClient } from '@supabase/supabase-js'

// Use environment variables if available, otherwise use production credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vvsazraadvhjpjtjjwkd.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2c2F6cmFhZHZoanBqdGpqd2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5OTI5MjMsImV4cCI6MjA4MjU2ODkyM30.zP6Tu-x6lAni6wRLsYhalBhH7NQPBHXI2tFrA7YBBfU'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)