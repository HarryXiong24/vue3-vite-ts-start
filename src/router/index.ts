import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
      keepAlive: true,
    },
    component: () => import('../views/Home/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
      keepAlive: true,
    },
    component: () => import('../views/About/index.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
