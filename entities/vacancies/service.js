import api from '@/api/api.init.js';

class VacanciesService {
    async getAll () {
        try {
            const { $api } = useNuxtApp();

            const response = await $api.get('/vacancies');
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

            const response = await $api.get(`/vacancies/${slug}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new VacanciesService();