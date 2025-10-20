import { defineStore } from 'pinia';
import ProjectService from '@/entities/projects/service.js';

const useProjectStore = defineStore('projects', {
    state: () => ({
        projects: [],
        currentProject: {}
    }),

    actions: {
        async fetchAll(params) {
            this.projects = await ProjectService.getAll(params);
        },

        async fetchOneBySlug(slug) {
            this.currentProject = await ProjectService.getOneBySlug(slug);     
        }
    }
})

export {
    useProjectStore
}