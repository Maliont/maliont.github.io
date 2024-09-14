// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Maliont | Your favorite products from 2023",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "uwnbhUSpJZkAIJqTBX2BtzkYQz4mjc39LbXkmoMAtas",
        },
        {
          name: "yandex-verification",
          content: "73ec2ea07e6390d3",
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

  compatibilityDate: "2024-09-14",
});
