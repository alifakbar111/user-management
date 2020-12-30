export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'test-lanius',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],
  css: ['~assets/scss/index.scss'],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  env: {
    baseUrl:
      process.env.BASE_URL ||
      'https://user-mgmt-c46b3-default-rtdb.firebaseio.com',
  },
}
