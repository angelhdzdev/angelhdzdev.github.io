

import HomePage from './pages/HomePage.js'


const app = Vue.createApp(HomePage)
app.use(Quasar, {config:{}})
app.mount('#app')