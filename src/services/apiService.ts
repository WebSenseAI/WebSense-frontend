import { supabase } from "./supabaseService";
import { SERVER_URL } from '@/utils/url';
import axios, { AxiosRequestConfig } from "axios";


const getHeaders = async () => {
    const session = (await supabase.auth.getSession()).data.session;
    const headers: AxiosRequestConfig = {
        'headers' : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${session?.access_token}`
        },
        
    }
    return headers;
}



export async function postServer(url:any, post_data:any){
    const URL = `${SERVER_URL}${url}`    
    try {
        const response = await axios.post(URL, post_data, await getHeaders());
        return response;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}

export async function getServer(url:any){
    const URL = `${SERVER_URL}${url}`
    try {
        const response = await axios.get(URL, await getHeaders());
        return response;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}

export async function removeServer(url:any) {
    const URL = `${SERVER_URL}${url}`
    try {
        const response = await axios.delete(URL, await getHeaders())
        return response;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}


export async function putServer(url: any, data: any) {
    const URL = `${SERVER_URL}${url}`
    try {
        const response = await axios.put(URL, data, await getHeaders());
        return response;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}
