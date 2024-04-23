import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            email: "",
            family_name: "",
            given_name: "",
            id: "",
            locale: "",
            name: "",
            picture: "",
            verified_email: false,
            bot_id: "",
        },
        bot: {
            description: "",
            id: "",
            key: "",
            message: "",
            name: "",
            website: ""
        }

    }),
    getters: {
        getUserGetter: (state) => {
            return state.user || {}
        },
        getBotGetter: (state) => {
            return state.bot || {}
        },
        getAllInfoGetter: (state) => {
            return {
                user: state.user,
                bot: state.bot
            }
        }
    },
    actions: {
        setUserAction(user: any) {
            this.user = user
        },
        setBotInfoAction(bot: any) {
            this.user.bot_id = bot.id
            this.bot = bot
        },
    },
})