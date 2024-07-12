// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  app:{
    head:{
      title:"NuxtShravan's",
      meta:[{
        name:"description",content:"everything about Products"
      }],
      link:[{
        rel:"stylesheet" ,href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }]
    }
  }
})