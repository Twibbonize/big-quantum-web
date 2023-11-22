import './assets/main.css'

import 'animate.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueWriter from 'vue-writer';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueWriter)

app.mount('#app')
