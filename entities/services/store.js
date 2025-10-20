import { defineStore } from 'pinia';
import ServicesService from '@/entities/services/service.js';

const useServicesStore = defineStore('services', {
    state: () => ({
        services: [],
        currentService: {}
    }),

    actions: {
        async fetchAll() {
            this.services = await ServicesService.getAll();
        },

        async fetchOneBySlug(slug) {
            this.currentService = await ServicesService.getOneBySlug(slug);     
        }
    }
})

export {
    useServicesStore
}
