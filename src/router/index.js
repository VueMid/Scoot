import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue';
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage/AboutPage.vue'),
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../pages/LocationPage/LocationPage.vue'),
    },
  ]
})
export default router