import 'picnic'
import './style.styl'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'material-icons'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// app.mixin({ methods: { formatDate } })
app.use(VueQueryPlugin)
app.mount('#app')
