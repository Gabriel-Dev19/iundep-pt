export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Detective privado em Lisboa | Porto | Évora  | Braga | Faro | Coimbra | Aveiro ',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A IUNDEP Detectives é uma agência de investigação que atende demandas de investigação empresarial, investigação conjugal, localização de pessoas desaparecidas, programa de telemóvel e outros serviços' },
      { name: 'theme-color', content: '#00649e' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#00649e' },
      { name: 'msapplication-navbutton-color', content: '#00649e' },
      { name: 'facebook-domain-verification', content: '9vg03wzmxuw7k3sar73udi4u6pqfvk' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p', crossorigin: 'anonymous' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css', rel: 'stylesheet' }
    ],
    script: [
      {
        type: 'module',
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
      },
      {
        nomodule: '',
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/gtm',
    '@nuxt/postcss8'
  ],

  gtm: {
    id: 'GTM-NH6P5LC'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'vue-scrollto/nuxt',
    ['vue-scrollto/nuxt'],
    'nuxt-facebook-pixel-module'
  ],
  sitemap: {
    hostname: 'https://iundep.com.br/'
  },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '523497425836390',
    autoPageView: true,
    disabled: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  router: {
    scrollBehavior () {}
  },

  loading: {
    color: '#00d86c',
    height: '3px',
    continuous: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
