import 'animate.css';
import 'remixicon/fonts/remixicon.css';

// import '@/assets/plugins/open9.css';
// import '@/assets/plugins/softec.css';
import '@/assets/css/tailwind.css';

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
