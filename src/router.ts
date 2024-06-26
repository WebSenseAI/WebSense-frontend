import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/home.vue'
import SetupView from './views/setup.vue'
import DemoView from './views/demo.vue'
import LoginButtons from './views/login_buttons.vue'
import LoadingBot from './views/loading_bot.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/setup', component: SetupView },
    { path: '/demo', component: DemoView },
    { path: '/login', component: LoginButtons },
    { path: '/loadingbot', component: LoadingBot },
]

const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes,
})

export default router