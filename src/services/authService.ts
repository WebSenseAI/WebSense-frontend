import { useAxios } from '@/composables/axios';
import { normalizedUser } from '@/utils/normalizers/userNoramlizer';
import { SERVER_URL } from '@/utils/url';
import { supabase } from './supabaseService';

const AUTH_TOKEN_KEY = 'sessionUser';

// const { get, data } = useAxios(SERVER_URL);

export async function fetchUserInfo() {
    // try {
    //     await get('/api/userinfo');
    // } catch (error) {
    //     console.error('Error fetching user information:', error);
    // } finally {
    //     login(data.value?.id || null);
    //     return normalizedUser(data.value?.user_metadata);
    // }
    return (await supabase.auth.getSession()).data.session?.user; 
};

export async function isLoggedIn() {
    return (await supabase.auth.getSession()).data.session !== null   
}

// NOTE TO @LUIS: supabase cli already deals with storing the session token in the local storage 
export function login(token: string): void {
    // Store the authentication token in browser storage
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
}

export async function logout(): Promise<void> {
    try {
        await supabase.auth.signOut();
    } catch (error) {
        console.error('Error fetching user information:', error);
    } finally {
        localStorage.removeItem('access_token');
        window.location.reload();
    }
}
