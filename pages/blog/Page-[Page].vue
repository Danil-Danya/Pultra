<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Blog :cards="postStore.posts.data" />
    <Pagination class="pagination__blog" :pagination="postStore.posts.pagination" />
</template>

<script setup>
    import { usePostsStore } from '@/entities/posts/store.js';
    import { useRoute } from 'vue-router';
    
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Pagination from '@/features/pagination/Pagination.vue';

    import Blog from '@/shared-ui/pages/blog/Blog.vue';


    const postStore = usePostsStore();
    const route = useRoute();

    const pageNumber = parseInt(route.path.split('-')[1]) || 1;

    const pagination = {
        page: pageNumber,
        per_page: 8,
    }

    await postStore.fetchAll(pagination);

    watch(async () => route.fullPath,
        async () => {
            await ostStore.fetchAll(pagination);
        }
    );


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
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/blog/'
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>