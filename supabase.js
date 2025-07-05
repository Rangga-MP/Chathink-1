import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// GANTI DENGAN URL & KUNCI ANON DARI PROYEK SUPABASE ANDA
const supabaseUrl = 'https://mipfcldoxozpydtbuevo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pcGZjbGRveG96cHlkdGJ1ZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MjU1MTEsImV4cCI6MjA2NzIwMTUxMX0.H6_SRBtuu1rCYP3ZlUGAYMn-Ph8CUvNJRFkiFb1CgMk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});