// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }

  app: {
    head: {
      title: 'ВДНХ'
    }
  },
  css: [
    // SCSS file in the project
    "@/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
  modules: [
    'nuxt3-leaflet'
  ]
})
