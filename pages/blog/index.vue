<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Blog />
    <Pagination class="pagination__blog" />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Pagination from '@/features/pagination/Pagination.vue';

    import Blog from '@/shared-ui/pages/blog/Blog.vue';


    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/blog',
            text: 'Блог'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Блог – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>