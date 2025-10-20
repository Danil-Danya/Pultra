import axios from 'axios';
import convertKeysToCamelCase from '@/utils/convertKeysToCamelCase';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const api = axios.create({
        baseURL: config.public.apiBaseURL,
        //timeout: 5000,
    });

    api.interceptors.response.use((response) => {
        if (response.data) {
            response.data = convertKeysToCamelCase(response.data);
        }

        return response;
    });

    return {
        provide: {
            api,
        },
    };
});
