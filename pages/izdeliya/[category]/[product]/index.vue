<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Presentation :title="presentation.title" :text="presentation.text" :galery="galery" :model="model3D" :video="video" />
    <Parameters :products="goods" v-if="goods" />
    <WhatsApp />
    <Quality />
    <Info :blocks="blocks" v-if="blocks" />
    <!-- <Application title="Применение Композитного профиля" v-if="!isMobile && interested.length" /> -->
    <Colors />
    <Project />
    <Consultation />
    <!-- <Application title="Возможно вас заинтересует" v-if="!isMobile && interested.length" /> -->
    <About />
    <Blog />
    <Question />
</template>

<script setup>
    import Consultation from '@/shared-ui/sections/ConsultationsSection.vue';
    import Presentation from '@/shared-ui/sections/PresentationSection.vue';
    import Application from '@/shared-ui/sections/ApplicationSection.vue';
    import Information from '@/shared-ui/sections/InformationSection.vue';
    import Parameters from '@/shared-ui/pages/catalog/Parameters.vue';
    import Colors from '@/shared-ui/pages/catalog/Colors.vue'
    import WhatsApp from '@/shared-ui/sections/WhatsAppSection.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Quality from '@/shared-ui/sections/QualitySection.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';
    import Info from '@/shared-ui/sections/Info.vue';

    import parseHtmlToData from '@/utils/HTMLToJSONParser';

    import { useCatalogStore } from '@/entities/catalog/store';
    import { useRoute } from 'vue-router';

    const catalogStore = useCatalogStore();
    const route = useRoute();

    await catalogStore.fetchGoods(route.params.product);

    const blocks = computed(() => parseHtmlToData(catalogStore.goods.data.seo.text));

    const goods = catalogStore.goods.data.products;
    const galery = catalogStore.goods.data.media.gallery;
    const model3D = catalogStore.goods.data.media['3D'];
    const video = catalogStore.goods.data.media.video;
    // //const interested = catalogStore.goods.data.mightBeInterested;

    const isMobile = ref(false);

    const checkInMobileDevice = () => {
        if (window.innerWidth < 1120) {
            isMobile.value = true;
        }
    }

    const breadCrumbsList = computed(() => {
        if (catalogStore.goods.breadcrumbs.length) {
            return [
                {
                    link: '/',
                    text: 'Главная',
                },
                {
                    link: '/izdeliya',
                    text: 'Каталог изделий'
                },
                {
                    link: `/izdeliya/${route.params.category}`,
                    text: catalogStore.goods.breadcrumbs[0].title
                },
                {
                    link: `/catalog/goods/${catalogStore.goods.slug}`,
                    text: catalogStore.goods.title
            }
            ]
        }
        else {
            return [
                {
                    link: '/',
                    text: 'Главная',
                },
                {
                    link: '/izdeliya',
                    text: 'Каталог изделий'
                },
                {
                    text: catalogStore.goods.title
                },
            ]
        }
    });

    const presentation = {
        title: catalogStore.goods.h1,
        text: catalogStore.goods.description.split('\n')
    }

    const heading = ref({
        title: 'каталог изделий',
        text: [
            'Завод композитных материалов «Пултра» производит изделия и конструкции из высококачественных композитов, полученных методом пултрузии. Мы предлагаем надежные и долговечные решения для различных отраслей.',
            'В нашем каталоге представлены композитные ограждения, площадки обслуживания, лестничные сходы, смотровые ходы и другие конструкции, сочетающие прочность, легкость и устойчивость к коррозии.'
        ]
    })

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: catalogStore.goods.seoBlock.seoTitle,
        meta: [
            {
                name: 'description',
                content: catalogStore.goods.seoBlock.seoDescription
            },
            {
                name: 'robots',
                content: `${catalogStore.goods.seoBlock.seoNoindex ? 'noindex' : 'index'},${catalogStore.goods.seoBlock.seoNofollow ? 'nofollow' : 'follow'}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: catalogStore.goods.seoBlock.canonicalUrl
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