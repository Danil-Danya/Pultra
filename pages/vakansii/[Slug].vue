<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Vacancy :content="currentVacancy" v-if="currentVacancy" />
    <VacanciesSection />
</template>

<script setup>
    import VacanciesSection from '@/shared-ui/sections/VacanciesSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Vacancy from '@/shared-ui/pages/vacancies/Vacancy.vue';

    import { useVacanciesStore } from '@/entities/vacancies/store.js';
    import { useRoute } from 'vue-router';

    const route = useRoute();


    const vacanciesStore = useVacanciesStore();
    await vacanciesStore.fetchOneBySlug(route.params.Slug);

    console.log(route.params);
    const currentVacancy = computed(() => vacanciesStore.currentVacancy);

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/vakansii',
            text: 'Вакансии'
        },
        {
            link: '/vacancies',
            text: vacanciesStore.currentVacancy.title
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: vacanciesStore.currentVacancy?.seoBlock?.seoTitle || 'Вакансии – Менеджер отдела продаж',
        meta: [
            {
                name: 'description',
                content: vacanciesStore.currentVacancy?.seoBlock?.seoDescription || 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            },
            {
                name: 'robots',
                content: `${vacanciesStore.currentVacancy?.seoBlock?.seoNoindex ? 'noindex' : 'index'},${vacanciesStore.currentVacancy?.seoBlock?.seoNofollow ? 'nofollow' : 'follow'}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: vacanciesStore.currentVacancy?.seoBlock?.canonicalUrl
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>