import { getServer, removeServer, postServer, putServer } from './apiService';

export async function createChatBot(botInfo: any, userId: string) {
    const requestData = {
        name: botInfo.name,
        website: botInfo.website,
        description: botInfo.description,
        message: botInfo.message,
        key: botInfo.key,
        user_id: userId,
    };
    try {
        const response = await postServer('/api/bot/new', requestData);
        return response;
    } catch (error) {
        console.error('Error creating chat bot:', error);
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
export async function deleteBot() {
    try {
        const response = await removeServer(`/api/bot/remove`);
        return response;
    } catch (error) {
        console.error('Error deleting chat bot:', error);
        return null;
    }
}

export async function editBot(botId: string, botInfo: any) {
    try {
        const response = await putServer(`/api/bot/edit/${botId}`, botInfo);
        return response;
    } catch (error) {
        console.error('Error editing chat bot:', error);
        return null;
    }
}

export async function fetchBotInfo() {
    try {
        const response = await getServer(`/api/bot/info`);
        return response;
    } catch (error) {
        console.error('Error fetching chat bot information:', error);
        return null;
    }
}

export async function isBotExists() {
    return !!fetchBotInfo();
}
