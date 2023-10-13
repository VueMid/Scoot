import {
    createApp
} from 'vue';
import {
    MotionPlugin
} from '@vueuse/motion';
import {
    Toast,
    options
} from './libs/toast';
import "vue-toastification/dist/index.css";
import App from './App.vue';
import router from './router';
import '../src/assets/css/fonts.css';
import '../src/assets/css/styles.css';
import '../src/assets/css/tailwind.css';
const app = createApp(App);
app.use(router);
app.use(Toast, options)
app.use(MotionPlugin);
app.mount('#app');