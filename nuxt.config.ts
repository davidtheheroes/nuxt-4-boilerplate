// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: { strict: true, typeCheck: true },

  modules: ['@nuxt/eslint', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode',
  },
  eslint: {
    config: {
      standalone: true,
    },
  },

  runtimeConfig: {
    // Server-only
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379',
    sessionSecret: process.env.SESSION_SECRET,

    // Public — expose in browser
    public: {
      supabaseUrl: process.env.SUPABASE_URL ?? '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY ?? '',
      apiBase: process.env.API_BASE_URL ?? '/api',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://example.com',
    },
  },
})
