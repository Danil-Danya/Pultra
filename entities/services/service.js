import api from '@/api/api.init.js';

class ServicesService {
    async getAll () {
        try {
            const { $api } = useNuxtApp();

            const response = await $api.get('/services');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getOneBySlug (slug) {
        try {
            const { $api } = useNuxtApp();

            const response = await $api.get(`/services/${slug}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new ServicesService();