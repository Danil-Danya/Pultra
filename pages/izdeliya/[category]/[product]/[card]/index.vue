<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Presentation :title="presentation.title" :text="presentation.text" :galery="galery" :model="model3D" :video="video" />
    <Data />
    <Quality />
    <Information />
    <Project />
    <Consultation />
    <Application title="С чем применяют" v-if="!isMobile" />
    <About />
    <WhatsApp />
    <Blog />
    <Question />
</template>

<script setup>
    import Consultation from '@/shared-ui/sections/ConsultationsSection.vue';
    import Presentation from '@/shared-ui/sections/PresentationSection.vue';
    import Application from '@/shared-ui/sections/ApplicationSection.vue';
    import Information from '@/shared-ui/sections/InformationSection.vue';
    import WhatsApp from '@/shared-ui/sections/WhatsAppSection.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Quality from '@/shared-ui/sections/QualitySection.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';
    import Data from '@/shared-ui/pages/catalog/Data.vue';

    import parseHtmlToData from '@/utils/HTMLToJSONParser';

    import { useCatalogStore } from '@/entities/catalog/store';
    import { useRoute } from 'vue-router';

    const catalogStore = useCatalogStore();
    const route = useRoute();

    await catalogStore.fetchProductCard(route.params.card);

    const isMobile = ref(false);

    const checkInMobileDevice = () => {
        if (window.innerWidth < 1120) {
            isMobile.value = true;
        }
    }

    const galery = catalogStore.productCard.common.media.gallery;
    const model3D = catalogStore.productCard.common.media['3D'];
    const video = catalogStore.productCard.common.media.video;
    

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/izdeliya/',
            text: 'Каталог изделий'
        },
        {
            link: `/izdeliya/${route.params.category}/`,
            text: catalogStore.productCard.breadcrumbs[0].title
        },
        {
            link: `/izdeliya/${route.params.category}/${route.params.product}`,
            text: catalogStore.productCard.breadcrumbs[1].title
        },
        {
            link: '/contacts',
            text: catalogStore.productCard.title
        },
    ]);

    const presentation = {
        title: catalogStore.productCard.title,
        text: [catalogStore.productCard.seoBlock.seoDescription]
    }

    definePageMeta({ layout: 'site-layout' });

    useSeoMeta({
        title: catalogStore.productCard.seoBlock.seoTitle,
        description: catalogStore.productCard.seoBlock.seoDescription,
        robots: `${catalogStore.productCard.seoBlock.seoNoindex ? 'noindex' : 'index'},${catalogStore.productCard.seoBlock.seoNofollow ? 'nofollow' : 'follow'}`
    })


    onMounted(() => {
        checkInMobileDevice();
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>