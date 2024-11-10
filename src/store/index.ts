import { defineStore } from 'pinia';

// Define your store with defineStore
export const useUserInfoStore = defineStore('userInfoStore', {
    state: () => ({
        picture: "",
        user_name: "",
        email: "",
        full_name: "",
        phone_verified: "",
        id: "",
    }),
    getters: {
        userInfo: (state) => state,
    },
    actions: {
        setUserInfo(userInfo: any) {
            this.$state = userInfo;
        },
    }
});


export const useBotInfoStore = defineStore('botInfoStore', {
    state: () => ({
        description: "",
        id: "",
        key: "",
        message: "",
        name: "",
        website: ""
    }),
    getters: {
        fullName: (state) => `${state.name}`,
        botExists: (state) => state.id !== "",
    },
    actions: {
        setBotInfo(botInfo: any) {
            this.description = botInfo.description;
            this.id = botInfo.id;
            this.key = botInfo.key;
            this.name = botInfo.name;
            this.message = botInfo.message;
            this.website = botInfo.website;
        },
    }
});

export const useChatBasicStatsStore = defineStore('chatBasicStatsStore', {
    state: () => ({
        data : [],
        chat_count : 0,
        user_count : 0
    }),
    actions: {
        setBasicStats(chatBasic: any) {
            this.$state = chatBasic;
        }
    },
})