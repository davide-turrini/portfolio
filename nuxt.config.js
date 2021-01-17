export default {
  target: 'static',
  ssr: false,
  loading: false,
  // Additional resources
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&display=swap' },
      { rel: 'stylesheet', href: '//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css' } ]
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules) lets use tailwind as our framework
  buildModules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS - https://tailwindcss.nuxtjs.org/
    'nuxt-animejs', // Anime JS - https://www.npmjs.com/package/nuxt-animejs
    '@nuxtjs/google-analytics' // Google Analytics - https://www.npmjs.com/package/@nuxtjs/google-analytics
  ],
  // Modules (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules)
  modules: [
    '@nuxt/content', // Nuxt Content - https://content.nuxtjs.org
    '@nuxtjs/device', // Device detection - https://github.com/nuxt-community/device-module
    'nuxt-i18n' // Internationalization support - https://i18n.nuxtjs.org/
  ],
  // Internationalization support configuration
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', file: 'i18n/en-US.js', name: 'English' },
      { code: 'it-IT', iso: 'it-IT-IT', file: 'i18n/it-IT.js', name: 'Italiano' },
      { code: 'fr', iso: 'fr-FR', file: 'i18n/fr-FR.js', name: 'Français' },
      { code: 'de', iso: 'de-DE', file: 'i18n/de-DE.js', name: 'Deutsche' }]
  },
  // Google Analytics configuration
  googleAnalytics: {
    id: 'UA-12301-2'
  }
}
