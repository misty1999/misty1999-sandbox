import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import UserProfile from './components/UserProfile.vue'
import 'highlight.js/styles/monokai.css'

const routes = [
  { path: '/', component: HomePage },
  { path: '/profile', component: UserProfile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.component('UserProfile', UserProfile)
app.mount('#app')
