<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Presentation :title="presentation.title" :text="presentation.text" :galery="galery" :model="model3D" :video="video" />
    <Parameters :products="products" v-if="products.length" />
    <WhatsApp />
    <Quality />
    <Info :blocks="blocks" v-if="blocks" />
    <Application title="Применение Композитного профиля" v-if="!isMobile && interested.length" />
    <Colors />
    <Project />
    <Consultation />
    <Application title="Возможно вас заинтересует" v-if="!isMobile && interested.length" />
    <About />
    <Blog />
    <Question />
</template>

<script setup>
    const Consultation = defineAsyncComponent(() => import('@/shared-ui/sections/ConsultationsSection.vue'));
    const Presentation = defineAsyncComponent(() => import('@/shared-ui/sections/PresentationSection.vue'));
    const Application = defineAsyncComponent(() => import('@/shared-ui/sections/ApplicationSection.vue'));
    const Parameters = defineAsyncComponent(() => import('@/shared-ui/pages/catalog/Parameters.vue'));
    const Colors = defineAsyncComponent(() => import('@/shared-ui/pages/catalog/Colors.vue'));
    const WhatsApp = defineAsyncComponent(() => import('@/shared-ui/sections/WhatsAppSection.vue'));
    const Question = defineAsyncComponent(() => import('@/shared-ui/sections/QuestionSection.vue'));
    const BreadCrumbs = defineAsyncComponent(() => import('@/shared-ui/sections/BreadCrumbs.vue'));
    const Quality = defineAsyncComponent(() => import('@/shared-ui/sections/QualitySection.vue'));
    const Project = defineAsyncComponent(() => import('@/shared-ui/sections/ProjectSection.vue'));
    const About = defineAsyncComponent(() => import('@/shared-ui/sections/AboutSection.vue'));
    const Blog = defineAsyncComponent(() => import('@/shared-ui/sections/BlogSection.vue'));
    const Info = defineAsyncComponent(() => import('@/shared-ui/sections/Info.vue'));

    import parseHtmlToData from '@/utils/HTMLToJSONParser';

    import { useCatalogStore } from '@/entities/catalog/store';
    import { useRoute } from 'vue-router';

    const catalogStore = useCatalogStore();
    const route = useRoute();

    await catalogStore.fetchProduct(route.params.product);

    const blocks = computed(() => parseHtmlToData(catalogStore.product.data.seo.text));

    const products = catalogStore.product.data.products;
    const galery = catalogStore.product.data.media.gallery;
    const model3D = catalogStore.product.data.media['3D'];
    const video = catalogStore.product.data.media.video;
    const interested = catalogStore.product.data.mightBeInterested;

    const isMobile = ref(false);

    const checkInMobileDevice = () => {
        if (window.innerWidth < 1120) {
            isMobile.value = true;
        }
    }

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/produkciya',
            text: 'Каталог продукции'
        },
        {
            link: `/produkciya/${route.params.category}`,
            text: catalogStore.product.breadcrumbs[0].title
        },
        {
            link: `/produkciya/${route.params.category}/${route.params.product}`,
            text: catalogStore.product.title
        },
    ]);

    const presentation = {
        title: catalogStore.product.h1,
        text: catalogStore.product.description.split('\n')
    }

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: catalogStore.product.seoBlock.seoTitle || (catalogStore.product.title + ' – PULTRA'),
        meta: [
            {
                name: 'description',
                content: catalogStore.product.seoBlock.seoDescription || catalogStore.product.description
            },
            {
                name: 'robots',
                content: `${catalogStore.product.seoBlock.seoNoindex ? 'noindex' : 'index'},${catalogStore.product.seoBlock.seoNofollow ? 'nofollow' : 'follow'}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: catalogStore.product.seoBlock.canonicalUrl
            }
        ]
    })



    onMounted(() => {
        checkInMobileDevice();
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>