import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Singleton client — only created when env vars are present.
// Callers must guard with isSupabaseConfigured() before use.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (null as any as ReturnType<typeof createClient>);

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function getSupabaseClient() {
  if (!isSupabaseConfigured()) return null;
  return supabase;
}
