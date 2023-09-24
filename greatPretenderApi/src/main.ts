import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
/* import Component from 'vue-class-component';
import 'vue-class-component/hooks'; 
 */
import App from './App.vue'
import router from './router'

axios.defaults.baseURL="https://8080-leoadlerr-backendgreatp-dxesj3nczo7.ws-us104.gitpod.io/"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
