<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Presentation :title="presentation.title" :text="presentation.text" :galery="galery" :model="model3D" :video="video" v-if="galery.length" />
    <Heading :title="heading.title" :text="heading.text" :image="heading.image" v-else />
    <WhatsApp />
    <Catalog :categories="subCategories" v-if="subCategories.length" />
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
    import Presentation from '@/shared-ui/sections/PresentationSection.vue';
    import Information from '@/shared-ui/sections/InformationSection.vue';
    import WhatsApp from '@/shared-ui/sections/WhatsAppSection.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Quality from '@/shared-ui/sections/QualitySection.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import Heading from '@/shared-ui/sections/HeadingSection.vue';
    import Catalog from '@/shared-ui/pages/catalog/Catalog.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';
    import Info from '@/shared-ui/sections/Info.vue';

    import parseHtmlToData from '@/utils/HTMLToJSONParser';

    import { useRoute } from 'vue-router'

    import { useCatalogStore } from '@/entities/catalog/store.js';

    const catalogStore = useCatalogStore();
    const route = useRoute();

    await catalogStore.fetchTargetCategory(route.params.category);

    const categories = catalogStore.targetCategory;

    const galery = catalogStore.targetCategory.data.media?.gallery;
    const model3D = catalogStore.targetCategory.data.media['3D'];
    const video = catalogStore.targetCategory.data.media?.video;
    const blocks = computed(() => parseHtmlToData(catalogStore.targetCategory.data.seo.text));

    const heading = computed(() => {
        if (categories) {
            return {
                title: categories.h1,
                text: categories.description.split('\r\n\r\n'),
                image: categories.image
            }
        }
    })

    const subCategories = computed(() => {
        return categories.data.subcategories.map((subCategory) => {
            return {
                title: subCategory.title,
                link: `/izdeliya/${route.params.category}/${subCategory.slug}`,
                image: subCategory.image
            }
        })
    })

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
            link: '/izdeliya',
            text: 'Изделия'
        },
        {
            link: '/contacts',
            text: catalogStore.targetCategory.title
        },
    ]);

    const presentation = {
        title: catalogStore.targetCategory.h1,
        text: catalogStore.targetCategory.description.split('\n')
    }

    // const heading = ref({
    //     title: 'Композитный профиль',
    //     text: [
    //         'Завод композитных материалов «Пултра» специализируется на производстве композитного профиля методом пултрузии — технологией, обеспечивающей высокую прочность и однородность изделий. Наш профиль отличается легкостью, стойкостью к коррозии и долговечностью.',
    //         'Мы предлагаем широкий ассортимент композитных профилей для различных отраслей: строительства, энергетики, транспорта и других. Продукция «Пултра» сочетает инновационные материалы и передовые технологии для надежных и эффективных решений.'
    //     ]
    // })

    useHead({
        title: catalogStore.targetCategory.seoBlock.seoTitle,
        meta: [
            {
                name: 'description',
                content: catalogStore.targetCategory.seoBlock.seoDescription
            },
            {
                name: 'robots',
                content: `${catalogStore.targetCategory.seoBlock.seoNoindex ? 'noindex' : 'index'},${catalogStore.targetCategory.seoBlock.seoNofollow ? 'nofollow' : 'follow'}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: catalogStore.targetCategory.seoBlock.canonicalUrl
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>