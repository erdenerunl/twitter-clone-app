import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LeftSidebar from "@/components/shared/sidebars/LeftSidebar.vue"
import RightSidebar from "@/components/shared/sidebars/RightSidebar.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      LeftSidebar,
      RightSidebar
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component:{ 
    default:  () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    LeftSidebar,
    RightSidebar
  }},
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
