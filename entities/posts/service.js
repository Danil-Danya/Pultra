class PostService {
    async getAll (pagination) {
        try {
            const { $api } = useNuxtApp();
            
            const response = await $api.get('/posts', {
                params: {
                    ...pagination
                }
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
    
            const response = await $api.get(`/posts/${slug}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new PostService();