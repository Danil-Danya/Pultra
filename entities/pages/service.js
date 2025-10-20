class PagesService {
    async getContactsPage () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/pages/contacts');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getAboutPage () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/pages/about');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getHomePage () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/pages/home');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getCooperationPage () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/pages/cooperation');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }


    async getGeneralData () {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/common');
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getMenu (location) {
        try {
            const { $api } = useNuxtApp();
    
            const response = await $api.get('/menus/' + location);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new PagesService();