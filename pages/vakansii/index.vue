<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Vacancies />
    <VacanciesSection :content="vacanciesStore.vacancies.data" />
    <Slogan />
</template>

<script setup>
    import VacanciesSection from '@/shared-ui/sections/VacanciesSection.vue';
    import Vacancies from '@/shared-ui/pages/vacancies/Vacancies.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Slogan from '@/shared-ui/pages/vacancies/Slogan.vue';

    import { useVacanciesStore } from '@/entities/vacancies/store.js';

    const vacanciesStore = useVacanciesStore();
    await vacanciesStore.fetchAll();
    

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/',
            text: 'О компании',
        },
        {
            link: '/vacancies',
            text: 'Вакансии'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Вакансии – PULTRA',
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/vakansii/'
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>