// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/content'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'OFALD - Olubukola Foundation for Autism and Learning Disability',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Supporting individuals with autism and learning disabilities in Nigeria' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  }
})
