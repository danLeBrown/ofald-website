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
        { name: 'description', content: 'Supporting individuals with autism and learning disabilities in Nigeria. Join us in creating an inclusive society.' },
        { name: 'keywords', content: 'autism, learning disabilities, Nigeria, OFALD, special education, inclusive society' },
        { property: 'og:site_name', content: 'OFALD' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },

  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  typescript: {
    strict: true,
    typeCheck: false // Disabled due to vue-tsc dependency issues
  }
})
