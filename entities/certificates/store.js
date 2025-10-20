import { defineStore } from 'pinia';
import CertificatesService from './services.js';

const useCertificatesStore = defineStore('certificates', {
    state: () => ({
        certificates: [],
        currentCertificate: {}
    }),

    actions: {
        async fetchAll(pagination) {
            this.certificates = await CertificatesService.getAll(pagination);
        },

        async fetchOne(slug) {
            this.currentCertificate = await CertificatesService.getOneBySlug(slug);
        }
    }
});

export {
    useCertificatesStore
};
