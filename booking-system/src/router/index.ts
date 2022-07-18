import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('../views/ContactUsView.vue'),
  },
  {
    path: '/faqView',
    name: 'faqView',
    component: () => import('../views/FaqView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
