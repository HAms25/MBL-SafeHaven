import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wscydeakrtleqkrowmly.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzY3lkZWFrcnRsZXFrcm93bWx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5MzI3OTEsImV4cCI6MjAwMzUwODc5MX0.4ynh31pYv8GhHiqYs-ZL4x2GTfeuTJiqWz2gWj6PwwQ";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
