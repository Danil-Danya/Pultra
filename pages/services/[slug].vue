<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Service />
    <ServicesOther />
</template>

<script setup>
    import ServicesOther from '@/shared-ui/pages/services/ServicesOther.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Service from '@/shared-ui/pages/services/Service.vue';

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/sevices',
            text: 'Услуги проектировщикам'
        },
        {
            link: '/sevices',
            text: 'Предоставление динамических блоков для Autodesk AutoCAD'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Услуги – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>