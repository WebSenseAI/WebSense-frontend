import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';
import LoginView from '@/views/LoginView.vue';
import SetupView from '@/views/SetupView.vue';

import { isLoggedIn } from '@/services/authService';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/setup',
        name: 'Setup',
        component: SetupView,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes,
});

router.beforeEach(async (to, from, next) => {
    // Check if the route requires authentication and the user is not logged in
    const isLogged = await isLoggedIn();

    if (to.meta.requiresAuth && !isLogged) {
        // Redirect to login page or show a message
        next('/login'); // Redirect to login page
    } else {
        // Continue navigation
        next();
    }
});

export default router;
