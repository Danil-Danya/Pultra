<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <BlogPage />
    <More />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import BlogPage from '@/shared-ui/pages/blog/BlogPage.vue';
    import More from '@/shared-ui/pages/blog/More.vue';

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/blog',
            text: 'Блог'
        },
        {
            link: '/blog',
            text: 'Применение композитных материалов в строительстве для усиления конструкций'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Применение композитных материалов в строительстве для усиления конструкций',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>