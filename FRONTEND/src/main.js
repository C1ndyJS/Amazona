import { createApp } from 'vue'


import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)

// Optionally install the BootstrapVue icon components plugin

app.use(router)


app.mount('#app')
