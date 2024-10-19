// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Maliont | Your favorite products from 2023",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "",
        },
        {
          name: "yandex-verification",
          content: "",
        },
        {
          name: "description",
          content: "Your favorite products from 2023",
        },
        { name: "keywords", content: "Maliont, Kuerton" },
        { name: "author", content: "Maliont" },
      ],
    },
  },

  plugins: ["~/plugins/yandex-metrika.js", "~/plugins/maliont-default.js"],
  compatibilityDate: "2024-09-14",
  modules: ["@nuxtjs/sitemap"],
  site: {
    url: "https://maliont.github.io/",
    name: "Maliont | Your favorite products from 2023",
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  compatibilityDate: "2024-04-03",
});
