<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Service 
        :content="content"
        :title="servicesStore.currentService.title"
    />
    <ServicesOther />
</template>

<script setup>
    import ServicesOther from '@/shared-ui/pages/services/ServicesOther.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Service from '@/shared-ui/pages/services/Service.vue';

    import parseHtmlToServiceData from '@/utils/HTMLToJSONParser.js';

    import { useServicesStore } from '@/entities/services/store.js';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const servicesStore = useServicesStore();
    await servicesStore.fetchOneBySlug(route.params.slug);

    const content = computed(() => parseHtmlToServiceData(servicesStore.currentService.content));

    const breadCrumbsList = computed(() => [
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/proektirovshchikam',
            text: 'Услуги проектировщикам'
        },
        {
            link: `/proektirovshchikam/${servicesStore.currentService.slug}`,
            text: servicesStore.currentService.title
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: servicesStore.currentService.seoBlock.seoTitle || `${servicesStore.currentService.title} – PULTRA`,
        meta: [
            {
                name: 'description',
                content: servicesStore.currentService.seoBlock.seoDescription || 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            },
            {
                name: 'robots',
                content: `${servicesStore.currentService.seoBlock.seoNoindex ? 'noindex' : 'index'},${servicesStore.currentService.seoBlock.seoNofollow ? 'nofollow' : 'follow'}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: servicesStore.currentService.seoBlock.canonicalUrl
            }
        ]
    })



</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>