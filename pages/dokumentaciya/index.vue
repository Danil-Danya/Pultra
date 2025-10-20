<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Docs :docsList="docsStore.docs.docsList" />
    <Pagination :pagination="docsStore.docs.pagination" path="/dokumentaciya" class="pagination-docs" />
    <Question />
</template>

<script setup>

    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Docs from '@/shared-ui/pages/docs/Docs.vue';
    import Pagination from '@/features/pagination/Pagination.vue';

    import { useDocsStore } from '@/entities/docs/store';
    import { useRoute } from 'vue-router';

    const Question = defineAsyncComponent(() => import('@/shared-ui/sections/QuestionSection.vue'));

    const route = useRoute();

    const pageNumber = parseInt(route.path.split('-')[1]) || 1;

    const pagination = {
        page: pageNumber,
        per_page: 8,
    }

    const docsStore = useDocsStore();

    await docsStore.fetchAll(pagination);

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/dokumentaciya',
            text: 'Документация'
        },
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Документация - PULTRA',
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/dokumentaciya/'
            }
        ]
    })


</script>