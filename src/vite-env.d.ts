import axios from 'axios'

/// <reference types="vite/client" />

declare module 'vue' {
    interface ComponentCustomProperties {
        $axios: typeof axios
    }
}