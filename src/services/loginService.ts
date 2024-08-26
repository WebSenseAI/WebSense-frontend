import { supabase } from '@/services/supabaseService';
import { Provider } from '@supabase/supabase-js';

export const loginWithOauth = async (service: Provider) => {
    console.log(window.location.origin)
    await supabase.auth.signInWithOAuth({
        provider: service,
        options: {
            redirectTo: window.location.origin + '/login'
        }
    })
}

