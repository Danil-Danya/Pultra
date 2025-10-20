import { defineStore } from 'pinia';
import DocsService from './services.js'

const useDocsStore = defineStore('docs', {
    state: () => ({
        docs: [],
        currentDoc: {}
    }),

    actions: {
        async fetchAll(pagination) {
            this.docs = await DocsService.getAll(pagination);
        },

        async fetchOne(slug) {
            this.currentDoc = await DocsService.getOneBySlug(slug);
        }
    }
})

export {
    useDocsStore
}
