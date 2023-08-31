import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue';
const AboutPage = () => import('../pages/AboutPage/AboutPage.vue')
const LocationPage = () => import('../pages/LocationPage/LocationPage.vue')
const CareersPage = () => import('../pages/CareersPage/CareersPage.vue')
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/location',
      name: 'location',
      component: LocationPage
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersPage
    },
  ]
})
export default router