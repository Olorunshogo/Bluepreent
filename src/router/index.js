
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import NotificationView from '../views/NotificationView.vue';
import SellView from '../views/SellView.vue';
import DashboardView from '../views/DashboardView.vue';
import PostView from '../views/PostView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import LogoutView from '../views/LogoutView.vue';

// Creating the router instance
// The router instance is created by calling the createRoter()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'contact', component: ContactView, },
    { path: '/notification', name: 'notification', component: NotificationView, },
    { path: '/sell', name: 'sell', component: SellView, },
    { path: '/dashboard', component: DashboardView, },
    { path: '/post', component: PostView, },
    { path: '/login', name:'login', component: LoginView, },
    { path: '/register', name: 'register', component: RegisterView, },
    { path: '/logout', name: 'logout', component: LogoutView, },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: LoginView,
    //   route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    // },
  ]
})

export default router
