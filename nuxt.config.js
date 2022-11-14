import colors from 'vuetify/es5/util/colors'

export default {
  loading: '~/components/loading.vue',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - stmarriage',
    title: 'stmarriage',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/index.js',
    '@/plugins/routerOptions.js',
    '@/plugins/firebase.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // nuxt.config.js
  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
    },
    fileLoader: {
        // file-loader options
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      /**
       * After activation, plugins are automatically
       * registered and available globally
       */
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  styleResources: {
    sass: [
      './assets/style/variables.sass',
      './assets/style/common.sass',
    ],
    scss: [],
    less: [],
    stylus: [],
    hoistUseStatements: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBlsf86qWsZPIlV6hqEh7J3PIu-aa8hmi0",
          authDomain: "stmarriage-database.firebaseapp.com",
          projectId: "stmarriage-database",
          storageBucket: "stmarriage-database.appspot.com",
          messagingSenderId: "1079165802195",
          appId: "1:1079165802195:web:2b39de34622bdb890d2626",
          measurementId: "G-84XCX1D1F6"
        },
        services: {
          // auth: {
          //   persistence: 'local', // default
          //   initialize: {
          //     onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          //     onAuthStateChangedAction: 'onAuthStateChangedAction',
          //     subscribeManually: false
          //   },
          //   ssr: false, // default
          //   emulatorPort: 3000,
          //   emulatorHost: 'http://localhost',
          // },
          auth: true,
          firestore: true,
          storage: true
        }
      }
    ],
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv', { filename: `.env_${process.env.NODE_ENV}` }],
  ],

  axios: {
    // proxy: true
  },

  env: {
    // これを設定しないとNuxtでprocess.env.NODE_ENVを取得したときにデフォルトの値になってしまう
    NODE_ENV: process.env.NODE_ENV
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: true,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    },
  },
}
