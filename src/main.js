import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import '../src/assets/css/fonts.css';
import '../src/assets/css/styles.css';
import '../src/assets/css/tailwind.css';
const app = createApp(App);
app.use(router);
app.mount('#app');