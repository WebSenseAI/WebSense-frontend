import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/home.vue'
import SetupView from './views/setup.vue'
import DemoView from './views/demo.vue'
import GoogleLogin from './views/google_login.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/setup', component: SetupView },
    { path: '/demo', component: DemoView },
    { path: '/login', component: GoogleLogin },
]

const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes,
})

export default router