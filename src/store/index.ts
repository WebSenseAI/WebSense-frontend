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
        website: "",
        isReady: "",
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
            this.isReady = botInfo.is_ready; 
        },
    }
});

export const useChatBasicStatsStore = defineStore('chatBasicStatsStore', {
    state: () => ({
        message_count : 0,
        user_count : 0
    }),
    actions: {
        setBasicStats(chatBasic: any) {
            this.$state = chatBasic;
        }
    },
})

export const useChatComprehensiveStatsStore = defineStore('chatComprehensiveStatsStore', {
    state: () => ({
        message_count : 0,
        user_count : 0,
        countries : [],
        country_count : 0,
        time_periods : {
            "Morning" : 0,
            "Afternoon" : 0,
            "Evening" : 0,
            "Late Night" : 0
        },
        top_words : []
    }),
    actions: {
        setComprehensiveStats(chatComprehensive: any) {
            this.$state = chatComprehensive;
        }
    }
})