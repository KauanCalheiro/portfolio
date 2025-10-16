// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  nitro: {
    preset: 'github-pages'
  },

  app: {
    baseURL: '/portfolio/',
    head: {
      title: 'Kauan Calheiro 🖖🏼',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'Welcome to my portfolio website' },
        { name: 'author', content: 'Kauan Morinel Calheiro' },
        { name: 'keywords', content: 'Kauan Morinel Calheiro' },
        { name: 'keywords', content: 'Kauan Calheiro' },
        { name: 'keywords', content: 'Kauan Morinel' },
        { name: 'keywords', content: 'Kauan M C' },
        { name: 'keywords', content: 'Kauan M Calheiro' },
        { name: 'keywords', content: 'Kauan Morinel C' },
        { name: 'google-site-verification', content: '9Ow6Qh3AvahGlmFrmEu7mRx4eP18TyX8MLMwDhXfYnA' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
      ]
    },
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-qrcode',
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [{
      code: 'pt_br',
      file: 'pt_br.json',
    }, {
      code: 'en',
      file: 'en.json',
    }, {
      code: 'pt',
      file: 'pt.json',
    }]
  },

  qrcode: {
    options: {
      variant: 'rounded',
      radius: 1
    },
  },

  icon: {
    clientBundle: {
      scan: true,
      icons: [
        'emojione-v1:flag-for-brazil',
        'emojione-v1:flag-for-united-states',
        'emojione-v1:flag-for-portugal',
        'mdi:chat-bubble-outline',
        'mdi:lightbulb-on-outline',
        'mdi:account-group-outline',
        'mdi:auto-mode',
        'mdi:clock-time-three-outline',
        'mdi:heart-outline',
        'mdi:globe',
        'mdi:monitor-dashboard',
        'mdi:code-braces-box',
        'mdi:code-greater-than-or-equal',
        'mdi:backpack',
        'mdi:school',
        'mdi:robot-industrial',
        'mdi:home',
        'mdi:information',
        'mdi:timeline',
        'mdi:school',
        'mdi:certificate',
        'mdi:briefcase',
        'mdi:contacts',
        'devicon:html5',
        'devicon:css3',
        'devicon:javascript',
        'devicon:typescript',
        'devicon:vuejs',
        'devicon:nuxt',
        'devicon:tailwindcss',
        'devicon:bootstrap',
        'devicon:nodejs',
        'devicon:php',
        'devicon:laravel',
        'devicon:python',
        'devicon:java',
        'devicon:spring',
        'devicon:postgresql',
        'devicon:mysql',
        'devicon:mongodb',
        'devicon:git',
        'devicon:github',
        'devicon:gitlab',
        'devicon:docker',
        'devicon:kubernetes',
        'devicon:linux',
        'devicon:vscode',
        'devicon:bash',
        'devicon:openapi',
        'mdi:clipboard-multiple-outline',
        'mdi:clipboard-check-multiple-outline',
        'mdi:check-decagram',
        'mdi:stop-remove',
        'mdi:alert',
        'mdi:information',
        'mdi:bell',
      ],
      sizeLimitKb: 1000
    }
  },

  compatibilityDate: '2025-07-16'
})
