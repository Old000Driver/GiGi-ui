import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import GJA from './components/GJA.vue';
// @ts-ignore
import GJA2 from './components/GJA2.vue'


const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: GJA},
    {path: '/2', component: GJA2}

  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
