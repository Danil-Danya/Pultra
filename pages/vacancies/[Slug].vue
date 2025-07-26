<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Vacancy />
    <VacanciesSection />
</template>

<script setup>
    import VacanciesSection from '@/shared-ui/sections/VacanciesSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Vacancy from '@/shared-ui/pages/vacancies/Vacancy.vue';

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
        },
        {
            link: '/vacancies',
            text: 'Менеджер отдела продаж'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Вакансии – Менеджер отдела продаж',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>