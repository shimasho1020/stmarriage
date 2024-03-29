const GAID = 'G-LVM1BSG65Q'
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GAID}');`

export default {
  loading: '~/components/loading.vue',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '結婚相談所 セントマリアージュ青山',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: '三菱の結婚相談所「ダイヤモンドファミリークラブ」にて多くの会員様の幸せを叶えてきた経験をもとに、きめ細やかなサポートをおこないます。幅広い年齢層の方々のご成婚実績が多数ございますので、経験豊かなカウンセラーに安心してお任せください。'
      },
      {hid: 'og:site_name', property: 'og:site_name', content: '結婚相談所 セントマリアージュ青山'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://st-mariage.com/'},
      {hid: 'og:title', property: 'og:title', content: '結婚相談所 セントマリアージュ青山'},
      {hid: 'og:image', property: 'og:image', content: '/images/jewelry_hero.webp'},
      {
        hid: 'og:description',
        property: 'og:description',
        content: '三菱の結婚相談所「ダイヤモンドファミリークラブ」にて多くの会員様の幸せを叶えてきた経験をもとに、きめ細やかなサポートをおこないます。幅広い年齢層の方々のご成婚実績が多数ございますので、経験豊かなカウンセラーに安心してお任せください。'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: '結婚相談所 セントマリアージュ青山' },
      { name: 'twitter:description', content: '三菱の結婚相談所「ダイヤモンドファミリークラブ」にて多くの会員様の幸せを叶えてきた経験をもとに、きめ細やかなサポートをおこないます。幅広い年齢層の方々のご成婚実績が多数ございますので、経験豊かなカウンセラーに安心してお任せください。' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/ring_logo__32.png', size: "32x32"},
    ],
    script: [
      {
        hid: 'GAsrc',
        src: 'https://www.googletagmanager.com/gtag/js?id=' + GAID,
        defer: true,
      },
      {
        hid: 'GAcode',
        innerHTML: GAcode,
        defer: true,
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'GAsrc': ['innerHTML'],
      'GAcode': ['innerHTML']
    },
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  },

  generate: {
    fallback: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/index.js',
    '@/plugins/routerOptions.js',
    '@/plugins/firebase.js',
    { src: '~/plugins/vuejs-datepicker.js', mode: 'client', ssr: false },
    { src: '~/plugins/VueAwesomeSwiper.js', mode: 'client' },
    { src: '~/plugins/chartjs.js', ssr: false },
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
    '@nuxtjs/google-fonts',
    '@nuxtjs/dotenv',
    // "@nuxtjs/google-gtag",
  ],

  googleFonts: {
    families: {
      'Zen+Antique+Soft': true,
    },
    display: 'block',
    download: true,
    inject: true,
    overwriting: true,
  },

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
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       // apiKey: process.env.FB_API_KEY,
    //       // authDomain: process.env.FB_AUTH_DOMAIN,
    //       // projectId: process.env.FB_PROJECT_ID,
    //       // storageBucket: process.env.FB_STORAGE_BUCKET,
    //       // messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    //       // appId: process.env.FB_ID,
    //       // measurementId: process.env.FB_MEASUREMENT_ID,
    //     },
    //     services: {
    //       auth: true,
    //       firestore: true,
    //       storage: true
    //     }
    //   }
    // ],
    '@nuxtjs/axios',
  ],

  axios: {
    // proxy: true
  },

  vuetify: {
    defaultAssets: {
      font: false,
      icons: false
    }
  },

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

  env: {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_ID,
    measurementId: process.env.FB_MEASUREMENT_ID,
  },
}
