import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["users/isAuthenticated"];
  if (to.name === "Home" && isAuthenticated) {
    console.log('otantike kullanıcı', isAuthenticated );
    next();
  } 
  else if (to.name === "Login" && !isAuthenticated) next();
})

export default router
