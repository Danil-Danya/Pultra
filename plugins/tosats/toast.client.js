import Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toastify, {
    autoClose: 3000,
    position: 'top-right',
    theme: 'light'
  })
})
