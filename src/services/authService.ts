import { supabase } from './supabaseService';

const AUTH_TOKEN_KEY = 'sessionUser';

export async function fetchUserInfo() {
    return (await supabase.auth.getSession()).data.session?.user.user_metadata; 
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
