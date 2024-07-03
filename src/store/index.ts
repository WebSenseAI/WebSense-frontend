import { defineStore } from 'pinia';

// Define your store with defineStore
export const useUserInfoStore = defineStore('userInfoStore', {
    state: () => ({
        email: "",
        family_name: "",
        given_name: "",
        id: "",
        name: "",
        picture: "",
        verified_email: false,
    }),
    getters: {
        fullName: (state) => `${state.given_name} ${state.family_name}`,
        isLoggedIn: (state) => state.email !== "",
        userInfo: (state) => ({
            email: state.email,
            family_name: state.family_name,
            given_name: state.given_name,
            id: state.id,
            name: state.name,
            picture: state.picture,
            verified_email: state.verified_email,
        }),
    },
    actions: {
        setUserInfo(userInfo: any) {
            this.email = userInfo.email;
            this.family_name = userInfo.family_name;
            this.given_name = userInfo.given_name;
            this.id = userInfo.id;
            this.name = userInfo.name;
            this.picture = userInfo.picture;
            this.verified_email = userInfo.verified_email;
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