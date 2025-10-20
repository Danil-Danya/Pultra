<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Heading :title="heading.title" :text="heading.text" :image="heading.image" />
    <WhatsApp />
    <Items :categories="categories" />
    <Quality />
    <Info :blocks="blocks" />
    <Project />
    <Consultation />
    <About />
    <Blog />
    <Question />
</template>

<script setup>
    import Consultation from '@/shared-ui/sections/ConsultationsSection.vue';
    import Information from '@/shared-ui/sections/InformationSection.vue';
    import WhatsApp from '@/shared-ui/sections/WhatsAppSection.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Quality from '@/shared-ui/sections/QualitySection.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import Heading from '@/shared-ui/sections/HeadingSection.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Items from '@/shared-ui/pages/catalog/Items.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';
    import Info from '@/shared-ui/sections/Info.vue';

    import parseHtmlToData from '@/utils/HTMLToJSONParser';

    import { useCatalogStore } from '@/entities/catalog/store.js';
    import { useRoute } from 'vue-router';

    const catalogStore = useCatalogStore();
    await catalogStore.fetchCatalogProduct();

    const categories = computed(() => catalogStore.catalogProduct.data.categories);
    const blocks = computed(() => parseHtmlToData(catalogStore.catalogProduct.data.seo.text));

    definePageMeta({
        layout: 'site-layout',
        key: route => route.fullPath,
        keepalive: false
    })

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/contacts',
            text: 'Каталог продукции'
        }
    ]);

    const heading = ref({
        title: 'Каталог продукции',
        text: [
            'Завод композитных материалов «Пултра» специализируется на производстве высококачественных композитных профилей, настилов и листов методом пултрузии. Наша продукция отличается прочностью, легкостью и устойчивостью к коррозии.',
            'В каталоге представлены разнообразные изделия, которые идеально подходят для строительства, промышленности и других отраслей. Мы гарантируем надежность и долговечность каждой позиции, отвечающей современным стандартам качества.'
        ],
        image: {
            url: '/images/heading/ph.png',
            alt: 'Каталог продукции PULTRA'
        }
    })

    useHead({
        title: 'Каталог продукции – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>    