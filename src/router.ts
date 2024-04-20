import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/home.vue'
import SetupView from './views/setup.vue'
import DemoView from './views/demo.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/setup', component: SetupView },
    { path: '/demo', component: DemoView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router