import { defineStore } from 'pinia';
import PagesService from '@/entities/pages/service.js';

const usePagesStore = defineStore('pages', {
    state: () => ({
        home: {},
        about: {},
        general: {},
        contacts: {},
        cooperation: {},
        menu: []
    }),

    actions: {
        async fetchHomePage () {
            this.home = await PagesService.getHomePage();
        },

        async fetchAboutPage () {
            this.about = await PagesService.getAboutPage();
        },

        async fetchContacts () {
            this.contacts = await PagesService.getContactsPage();
        },

        async fetchGeneralData () {
            this.general = await PagesService.getGeneralData();
        },

        async fetchCooperation () {
            this.cooperation = await PagesService.getCooperationPage();
        },

        async fetchMenu (location) {
            this.menu = await PagesService.getMenu(location);
        }
    }
})

export {
    usePagesStore
}