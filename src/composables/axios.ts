import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ref, Ref } from 'vue';

interface AxiosState {
    loading: Ref<boolean>;
    error: Ref<string | null>;
    data: Ref<any>;
}

export function useAxios(baseURL: string,): { get: (url: string) => Promise<any>, post: (url: string, data: any) => Promise<any>, remove: (url: string, data?: any) => Promise<any>, put: (url: string, data: any) => Promise<any> } & AxiosState {
    const instance: AxiosInstance = axios.create({
        baseURL,
        timeout: 5000,
    });

    const error: Ref<string | null> = ref(null);
    const loading: Ref<boolean> = ref(false);
    const data: Ref<any> = ref(null);

    async function get(url: string): Promise<any> {
        loading.value = true;
        try {
            const response: AxiosResponse<any> = await instance.get(url, {
                withCredentials: true,
            });
            data.value = response.data;
            error.value = null;
        } catch (err) {
            handleRequestError(err);
        } finally {
            loading.value = false;
        }
    }

    async function post(url: string, data: any): Promise<any> {
        loading.value = true;
        try {
            const response: AxiosResponse<any> = await instance.post(url, data);
            data.value = response.data;
            error.value = null;
        } catch (err) {
            handleRequestError(err);
        } finally {
            loading.value = false;
        }
    }

    async function remove(url: string, data?: any): Promise<any> {
        loading.value = true;
        try {
            const response: AxiosResponse<any> = await instance.delete(url);
            data.value = response.data;
            error.value = null;
        } catch (err) {
            handleRequestError(err);
        } finally {
            loading.value = false;
        }
    }
    async function put(url: string, data: any): Promise<any> {
        loading.value = true;
        try {
            const response: AxiosResponse<any> = await instance.put(url, data);
            data.value = response.data;
            error.value = null;
        } catch (err) {
            handleRequestError(err);
        } finally {
            loading.value = false;
        }
    }


    function handleRequestError(err: unknown): void {
        if (err instanceof AxiosError) {
            error.value = err.message || 'An error occurred';
            console.error('XXX_Axios request error:', err);
        } else {
            error.value = 'An error occurred';
            console.error('XXX_Unknown request error:', err);
        }
    }

    return { get, post, remove, loading, error, put, data };
}
