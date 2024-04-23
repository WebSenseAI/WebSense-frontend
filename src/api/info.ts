import axios from "axios";
import { useUserStore } from '../store/pina';
import { SERVER_URL } from "../utils";

export const fetchUserInfo = async () => {
    const store = useUserStore()
    try {
        // Make a GET request to the Flask server to fetch user info
        const response = await axios.get(`${SERVER_URL}/userinfo`, {
            withCredentials: true,
        });
        store.setUserAction(response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching user information:', error);
    }
};

export const fetchUserBotInfo = async (id: string) => {
    const store = useUserStore()
    try {
        // Make a GET request to the Flask server to fetch user info
        const response = await axios.get(`${SERVER_URL}/api/user/bot/${id}`, {
            withCredentials: true,
        });
        store.setBotInfoAction(response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching user information:', error);
    }
};