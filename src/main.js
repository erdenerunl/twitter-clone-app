import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/main.scss'
import '@/assets/variable.scss'


// Global component reg.
import LeftSidebar from "@/components/shared/sidebars/LeftSidebar.vue"
import RightSidebar from "@/components/shared/sidebars/RightSidebar.vue"

createApp(App)
.use(store)
.use(router)
.component("left-sidebar",LeftSidebar)
.component("right-sidebar",RightSidebar)
.mount('#app')


