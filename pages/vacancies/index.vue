<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Vacancies />
    <VacanciesSection />
    <Slogan />
</template>

<script setup>
    import VacanciesSection from '@/shared-ui/sections/VacanciesSection.vue';
    import Vacancies from '@/shared-ui/pages/vacancies/Vacancies.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Slogan from '@/shared-ui/pages/vacancies/Slogan.vue';

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
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>