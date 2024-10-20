import { getServer} from './apiService';


export async function getChatCount() {
    try {
        const response = await getServer(`/api/statistics/basic`);
        return response;
    } catch (error) {
        console.error('Error fetching basic statistics:', error);
        return null;
    }
}