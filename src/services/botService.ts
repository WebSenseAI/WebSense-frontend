import { useAxios } from '@/composables/axios';
import { SERVER_URL } from '@/utils/url';

const { post, get, remove, put, data } = useAxios(SERVER_URL);

export async function createChatBot(botInfo: any, userId: string) {
    try {
        await post('/api/bot/new', {
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

// export async function deleteBot(botId: string) {
//     try {
//         await remove(`/api/bot/remove/${botId}`);
//     } catch (error) {
//         console.error('Error deleting chat bot:', error);
//     } finally {
//         return data.value;
//     }
// }
export async function deleteBot(botId: string) {
    try {
        await remove(`/api/bot/remove`);
    } catch (error) {
        console.error('Error deleting chat bot:', error);
    } finally {
        return true;
    }
}

export async function editBot(botId: string, botInfo: any) {
    try {
        await put(`/api/bot/edit/${botId}`, botInfo);
    } catch (error) {
        console.error('Error editing chat bot:', error);
    } finally {
        return data.value;
    }
}

export async function fetchBotInfo(botId: string) {
    try {
        await get(`/api/bot/info`);
    } catch (error) {
        console.error('Error fetching chat bot information:', error);
    } finally {
        return data.value;
    }
}

export async function isBotExists(botId: string) {
    return !!fetchBotInfo(botId);
}
