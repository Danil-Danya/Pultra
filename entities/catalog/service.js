class CatalogService {
    async getCatalog () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/common/allcategory');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getCatalogProduct () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/pages/catalog__product');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getCatalogWare () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/pages/catalog__ware');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getTargetCategoryBySlug (slug) {
        const { $api } = useNuxtApp();
        const [resCategory, resWare] = await Promise.allSettled([
            $api.get(`/pages/category__product/${slug}`),
            $api.get(`/pages/category__ware/${slug}`)
        ]);

        if (resCategory.status === 'fulfilled' && resCategory.value.status === 200) {
            return resCategory.value.data;
        }
        if (resWare.status === 'fulfilled' && resWare.value.status === 200) {
            return resWare.value.data;
        }

        return null;
    }

    async getProductBySlug (slug) {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get(`/pages/category__product/${slug}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getGoodsBySlug (slug) {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get(`/pages/category__ware/${slug}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getProductCardBySlug (slug) {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get(`/product/${slug}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new CatalogService();