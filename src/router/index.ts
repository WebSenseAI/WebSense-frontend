import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '@/views/HomePageView.vue';
import LoginView from '@/views/LoginView.vue';
import SetupView from '@/views/SetupView.vue';
import HowToUseView from '@/views/HowToUseView.vue';
import { isLoggedIn } from '@/services/authService';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: HomePageView,
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
    {
        path: '/howtouse',
        name: 'HowToUse',
        component: HowToUseView,
        meta: { requiresAuth: true },
    }
];

const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes,
});

router.beforeEach(async (to, _, next) => {
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
