import { createClient } from '@supabase/supabase-js'
import type { Database } from '~/types/supabase.generated'

let client: ReturnType<typeof createClient<Database>> | null = null

export function useSupabaseAdmin() {
  if (!client) {
    const config = useRuntimeConfig()
    client = createClient<Database>(config.public.supabaseUrl, config.supabaseServiceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })
  }
  return client
}
