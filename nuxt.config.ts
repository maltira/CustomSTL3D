// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
  ],
  googleFonts: {
    families: {
      // a simple name
      Roboto: true,

      // a name with spaces
      'Josefin+Sans': true,

      // specific font weights
      Lato: [100, 300],
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      title: 'CustomSTL3D',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'A library of 3D models for your project' },
        { property: 'og:title', content: 'CustomSTL3D' },
        { property: 'og:description', content: 'A library of 3D models for your project' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' }
      ]
    }
  }
})