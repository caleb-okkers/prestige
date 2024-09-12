import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/stay',
    name: 'stay',
    component: () => import('@/views/StayView.vue')
  },
  {
    path: '/suites/:id',
    name: 'suite',
    component: () => import('@/views/SuiteDetails.vue')
  },
  {
    path: '/dine',
    name: 'dine',
    component: () => import('@/views/DineView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/admin-dashboard',
    name: 'admin',
    component: () => import('@/views/AdminDashboard.vue')
  }
  ,
  {
    path: '/user-dashboard',
    name: 'user',
    component: () => import('@/views/UserDashboard.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
