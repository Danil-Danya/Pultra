<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Content from '@/shared-ui/pages/about/Content.vue'
    import About from '@/shared-ui/pages/about/About.vue';


    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/sevices',
            text: 'Услуги'
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