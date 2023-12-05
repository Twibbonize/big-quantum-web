import 'animate.css';
import 'remixicon/fonts/remixicon.css';
import '@/assets/quantum.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueWriter from 'vue-writer';
import Vue3Lottie from 'vue3-lottie';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueWriter);
app.use(Vue3Lottie);

app.mount('#app');
