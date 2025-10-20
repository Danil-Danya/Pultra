<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Heading :title="heading.title" :text="heading.text" />
    <WhatsApp />
    <Goods :catalog="catalog" />
    <Quality />
    <Info :blocks="blocks" v-if="blocks" />
    <Project />
    <Consultation />
    <About />
    <Blog />
    <Question />
</template>

<script setup>
    import Consultation from '@/shared-ui/sections/ConsultationsSection.vue';
    import Info from '@/shared-ui/sections/Info.vue';
    import WhatsApp from '@/shared-ui/sections/WhatsAppSection.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Quality from '@/shared-ui/sections/QualitySection.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import Heading from '@/shared-ui/sections/HeadingSection.vue';
    import Goods from '@/shared-ui/pages/catalog/Goods.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';

    import parseHtmlToData from '@/utils/HTMLToJSONParser'; 

    import { useCatalogStore } from '@/entities/catalog/store';

    const catalogStore = useCatalogStore();
    await catalogStore.fetchCatalogWare();

    const catalog = computed(() => catalogStore.catalogWare.data.categories);
    const blocks = computed(() => parseHtmlToData(catalogStore.catalogWare.data.seo.text));

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/contacts',
            text: 'Каталог изделий'
        }
    ]);

    const heading = ref({
        title: 'Каталог изделий',
        text: [
            'Завод композитных материалов «Пултра» производит изделия и конструкции из высококачественных композитов, полученных методом пултрузии. Мы предлагаем надежные и долговечные решения для различных отраслей.',
            'В нашем каталоге представлены композитные ограждения, площадки обслуживания, лестничные сходы, смотровые ходы и другие конструкции, сочетающие прочность, легкость и устойчивость к коррозии.'
        ],
        image: {
            url: '/images/heading/ph.png',
            alt: 'Каталог продукции PULTRA'
        }
    })

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Каталог изделий – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>