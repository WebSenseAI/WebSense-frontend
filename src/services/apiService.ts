import { supabase } from "./supabaseService";
import { SERVER_URL } from '@/utils/url';
import axios, { AxiosRequestConfig } from "axios";

const session = (await supabase.auth.getSession()).data.session;

const headers: AxiosRequestConfig = {
    'headers' : {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${session?.access_token}`
    },
    
}

export async function postServer(url:any, post_data:any){
    try {
        const response = await axios.post(url, post_data, headers);
        return response;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}

export async function getServer(url:any){
    const URL = `${SERVER_URL}${url}`
    try {
        const response = await axios.get(URL, headers);
        return response;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}
