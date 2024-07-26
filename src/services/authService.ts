import { useAxios } from '@/composables/axios';
import { SERVER_URL } from '@/utils/url';

const AUTH_TOKEN_KEY = 'sessionUser';

const { get, data } = useAxios(SERVER_URL);

export async function fetchUserInfo() {
    try {
        await get('/api/userinfo');
    } catch (error) {
        console.error('Error fetching user information:', error);
    } finally {
        login(data.value?.id || null);
        return data.value;
    }
};

export async function isLoggedIn(): Promise<boolean> {
    await fetchUserInfo()
    const sessionInfo = sessionStorage.getItem(AUTH_TOKEN_KEY);
    return !!sessionInfo && sessionInfo !== 'null';
}

export function login(token: string): void {
    // Store the authentication token in browser storage
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
}

export async function logout(): Promise<void> {
    console.log('logout');
    try {
        await get('/auth/logout');
    } catch (error) {
        console.error('Error fetching user information:', error);
    } finally {
        sessionStorage.removeItem(AUTH_TOKEN_KEY);
        window.location.reload();
    }
}
