import { useAxios } from '@/composables/axios';
import { normalizedUser } from '@/utils/normalizers/userNoramlizer';
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
        return normalizedUser(data.value?.user_metadata);
    }
};

export async function isLoggedIn() {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    console.log('accessToken', accessToken);

    if (accessToken) {
        localStorage.setItem('access_token', accessToken);
        return true;
    } 

    try {
        await get(`${SERVER_URL}/auth/status/${localStorage.getItem('access_token')}`);
        const { authenticated } = data.value;

        if (authenticated) {
            return true;
        }
    } catch (error: any) {
        console.error('Error checking authentication status:', error.response?.data || error.message);
    } 
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
