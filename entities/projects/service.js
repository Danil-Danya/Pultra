class ProjectService {
    async getAll (params) {
        try {
            const { $api } = useNuxtApp();

            const response = await $api.get('/pages/projects', {
                params
            });

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

            const response = await $api.get(`/projects/${slug}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new ProjectService();