import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';

import App from './App.vue'
import router from './router'

//axios.defaults.baseURL="https://jsonplaceholder.typicode.com/todos/"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
