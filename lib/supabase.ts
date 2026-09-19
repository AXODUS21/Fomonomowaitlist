import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://gtnansvmyfbeazooyezy.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0bmFuc3ZteWZiZWF6b295ZXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NjE0MDcsImV4cCI6MjEwNTMzNzQwN30.EbgPNWHZtsE7YOZ3H1aEoe2TWEGIcddLFoGUleO8GQk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
