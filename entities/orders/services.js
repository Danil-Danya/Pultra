class OrderService {
    async createOrder (payload) {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.post('/orders', payload);
            return response;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new OrderService();