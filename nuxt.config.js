export default {
  target: 'static',
  ssr: false,
  loading: false,
  // External resources
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gruppo&display=swap' },
      { rel: 'stylesheet', href: '//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' } ]
  },
  // Internal resources
  css: ['~/assets'],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules) lets use tailwind as our framework
  buildModules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS - https://tailwindcss.nuxtjs.org/
    '@nuxtjs/google-analytics' // Google Analytics - https://www.npmjs.com/package/@nuxtjs/google-analytics
  ],
  // Modules (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules)
  modules: [
    '@nuxt/http', // Nuxt http - https://http.nuxtjs.org
    '@nuxt/content', // Nuxt Content - https://content.nuxtjs.org
    '@nuxtjs/device', // Device detection - https://github.com/nuxt-community/device-module
    'nuxt-i18n' // Internationalization support - https://i18n.nuxtjs.org/
  ],
  // Internationalization support configuration
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', file: '~i18n/en-US.js', name: 'English' },
      { code: 'it', iso: 'it', file: '~i18n/it.js', name: 'Italiano' },
      { code: 'fr', iso: 'fr', file: '~i18n/fr.js', name: 'Français' },
      { code: 'de', iso: 'de', file: '~i18n/de.js', name: 'Deutsche' }],
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./i18n/en-US.js').default,
        it: require('./i18n/it-IT.js').default,
        fr: require('./i18n/fr-FR.js').default,
        de: require('./i18n/de-DE.js').default
      }
    }
  },
  // Google Analytics configuration
  googleAnalytics: {
    id: 'UA-162587744-1'
  }
}
