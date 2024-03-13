import 'picnic'
import './style.styl'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { createPinia } from 'pinia'
import ParticipantsList from './components/ParticipantsList.vue'
import TournamentOverview from './components/TournamentOverview.vue'
import SettingsView from './components/SettingsView.vue'

const About = { template: '<div>About</div>' }
const routes = [
  { path: '/', component: ParticipantsList },
  { path: '/tournaments', component: TournamentOverview },
  { path: '/settings', component: SettingsView },
  { path: '/about', component: About }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
