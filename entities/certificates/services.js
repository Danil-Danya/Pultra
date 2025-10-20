class CertificatesService {
    async getAll(pagination) {
        try {
            const { $api } = useNuxtApp();
            
            const response = await $api.get('/pages/certificates', {
                params: {
                    ...pagination
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async getOneBySlug(slug) {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get(`/certificates/${slug}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new CertificatesService();
