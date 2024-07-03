import { useAxios } from '@/composables/axios';
import { SERVER_URL } from '@/utils/url';

const { post, get, remove, data } = useAxios(SERVER_URL);

export async function createChatBot(botInfo: any, userId: string) {
    try {
        await post('/api/new/bot', {
            name: botInfo.name,
            website: botInfo.website,
            description: botInfo.description,
            message: botInfo.message,
            key: botInfo.key,
            user_id: userId,
        });
    } catch (error) {
        console.error('Error creating chat bot:', error);
    } finally {
        return data.value;
    }
}

export async function fetchBotInfo(botId: string) {
    try {
        await get(`/api/user/bot/${botId}`);
    } catch (error) {
        console.error('Error fetching chat bot information:', error);
    } finally {
        return data.value;
    }
}

export async function isBotExists(botId: string) {
    return !!fetchBotInfo(botId);
}

export async function deleteBot(botId: string) {
    try {
        await remove(`/api/bot/remove/${botId}`);
    } catch (error) {
        console.error('Error deleting chat bot:', error);
    } finally {
        return data.value;
    }
}