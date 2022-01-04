import Vue from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js'
import Quasar from 'https://cdn.jsdelivr.net/npm/quasar@2/dist/quasar.umd.prod.js'
import HomePage from './pages/HomePage.js'


const app = Vue.createApp(HomePage)
app.use(Quasar, {config:{}})
app.mount('#app')