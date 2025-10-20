import { defineStore } from 'pinia';
import VacanciesService from '@/entities/vacancies/service.js';

const useVacanciesStore = defineStore('vacancies', {
    state: () => ({
        vacancies: [],
        currentVacancy: null
    }),

    actions: {
        async fetchAll() {
            this.vacancies = await VacanciesService.getAll();
        },

        async fetchOneBySlug(slug) {
            this.currentVacancy = await VacanciesService.getOneBySlug(slug);     
        }
    }
})

export {
    useVacanciesStore
}