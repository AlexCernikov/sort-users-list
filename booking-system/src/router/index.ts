import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/myBookings',
    name: 'myBookings',
    component: () => import('../views/MyBookingsView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('../views/ContactUsView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '/admin/dashboard',
        component: () => import('../views/DashboardView.vue'),
      },
      {
        path: '/admin/users',
        component: () => import('../views/UsersView.vue'),
      },
      {
        path: '/admin/reservations',
        component: () => import('../views/ReservationsView.vue'),
      },
      {
        path: '/admin/entities',
        component: () => import('../views/EntitiesView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('data');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/');
  } else {
    next();
  }
});
export default router;
