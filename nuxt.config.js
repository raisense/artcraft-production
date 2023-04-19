export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - " + "ArtCraft Production",
    title: "ArtCraft Production" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: {
    color: "white",
    height: "5px"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/scroll-lock.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/prismic",
    "@nuxtjs/composition-api/module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-i18n"
  ],

  i18n: {
    locales: ["en", "ru", "uz"],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: "ru",
      messages: {
        en: {
          navbar: {
            projects: "Projects",
            clients: "Clients",
            services: "Services",
            contact: "Contacts"
          },
          Homepage: "Homepage",
          "Social links": "Social networks",
          "Contact us": "Contact us",
          Send: "Send",
          "First name": "First name",
          "E-mail": "E-mail",
          "Phone number": "Your phone number",
          "Your message": "Your message here",
          Year: "Year",
          Website: "Website",
          "Our Services": "Our Services",
          "Work examples": "Work examples",
          Copyright: "All rights reserved",
          "Other projects": "other projects",
          Next: "Next",
          Prev: "Prev"
        },
        ru: {
          navbar: {
            projects: "Проекты",
            clients: "Клиенты",
            services: "Услуги",
            contact: "Контакты"
          },
          Homepage: "Главная страница",
          "Social links": "Социальные сети",
          "Contact us": "Напишите нам",
          Send: "Отправить",
          "First name": "Ваше Имя",
          "E-mail": "E-mail",
          "Phone number": "Ваш номер телефона",
          "Your message": "Ваше сообщение",
          Year: "Год",
          Website: "Веб-сайт",
          "Our Services": "Наши услуги",
          "Work examples": "Примеры работ",
          Copyright: "Все права защищены",
          "Other projects": "другие работы",
          Next: "Следующий",
          Prev: "Предыдущий"
        },
        uz: {
          navbar: {
            projects: "Loyihalar",
            clients: "Mijozlar",
            services: "Xizmatlar",
            contact: "Aloqa"
          },
          Homepage: "Bosh sahifa",
          "Social links": "Biz ijtimoiy tarmoqlardamiz",
          "Contact us": "Biz bilan bogʻlaning",
          Send: "Joʻnatish",
          "First name": "Ismingiz",
          "E-mail": "E-mail",
          "Phone number": "Telefon raqamingiz",
          "Your message": "Xabarni kiriting",
          Year: "Yil",
          Website: "Veb-sayt",
          "Our Services": "Bizning xizmatlar",
          "Work examples": "Ishdan namunalar",
          Copyright: "Barcha huquqlar himoyalangan",
          "Other projects": "boshqa loyihalar",
          Next: "Keyingilari",
          Prev: "Oldingilari"
        }
      }
    }
  },

  router: {
    middleware: ["base"]
  },

  prismic: {
    endpoint: "https://artcraft-design.cdn.prismic.io/api/v2",
    modern: true
    /* see configuration for more */
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  generate: {
    // choose to suit your project
    interval: 2000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
