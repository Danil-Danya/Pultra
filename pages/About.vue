<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <About />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import About from '@/shared-ui/pages/about/About.vue';


    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/about',
            text: 'О компании'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'О компании – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>