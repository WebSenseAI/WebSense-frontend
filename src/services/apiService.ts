import { supabase } from "./supabaseService";
import { SERVER_URL } from '@/utils/url';
import { useAxios } from "@/composables/axios";


const getHeaders = async () => {
    const session = (await supabase.auth.getSession()).data.session;
    const headers = {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${session?.access_token}`
    }
    return headers;
}

let axiosInstance: ReturnType<typeof useAxios>;


const initializeAxios = async () => {
    const headers = await getHeaders();
    axiosInstance = useAxios(SERVER_URL, headers);
};

initializeAxios();

export async function postServer(url:any, post_data:any){
    try {
        await axiosInstance.post(url, post_data);
        return axiosInstance.data.value;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}

export async function getServer(url:any){
    try {
        await axiosInstance.get(url);
        return axiosInstance.data.value;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}

export async function removeServer(url:any) {
    try {
        await axiosInstance.remove(url)
        return axiosInstance.data.value;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}


export async function putServer(url: any, data: any) {
    try {
        await axiosInstance.put(url, data);
        return axiosInstance.data.value;
    } catch (error) {
        console.error('Error occured on API service', error);
        return null;
    }
}
