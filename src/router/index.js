import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
import Stories from '../views/stories/Stories';
import Login from '../views/login/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
