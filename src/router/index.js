import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
import Stories from '../views/stories/Stories';
import Login from '../views/login/Login'
import * as api from '../api'

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
});

router.beforeEach(async (to, from, next) => {
  const loginRoute = to.name === 'Login';
  if (loginRoute) {
    if (localStorage.getItem('token')) {
      next({name: 'Home'});
    }
    next();
    return;
  }

  try {
    const response = await api.auth.getUser();
    if (response.data) {
      localStorage.setItem('login', response.data.login);
      localStorage.setItem('avatar', response.data.avatar_url);
    }
    if (response.status === 401) throw new Error();
    next();
  } catch (err) {
    next({name: 'Login'});
  }
});

export default router
