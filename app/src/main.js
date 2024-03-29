import 'animate.css';
import 'remixicon/fonts/remixicon.css';
import '@/assets/scss/style.scss';
import 'aos/dist/aos.css';
import { MotionPlugin } from '@vueuse/motion';

import { createApp, ref } from 'vue';
import { createPinia } from 'pinia';
import VueWriter from 'vue-writer';
import Vue3Lottie from 'vue3-lottie';
import debouce from 'lodash/debounce';

import mitt from 'mitt';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const isMobile = ref(window.innerWidth <= 768);
const resizeObserver = new ResizeObserver(
    debouce(() => {
        isMobile.value = window.innerWidth <= 768;
    }, 500)
);
resizeObserver.observe(document.body);
const eventBus = mitt();

app.provide('eventBus', eventBus);
app.provide('isMobile', isMobile);
app.use(createPinia());
app.use(router);
app.use(VueWriter);
app.use(Vue3Lottie);
app.use(MotionPlugin);

app.mount('#app');
