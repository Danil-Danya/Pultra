<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Heading :title="heading.title" :text="heading.text" />
    <WhatsApp />
    <Catalog />
    <Quality />
    <Information />
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
    import Catalog from '@/shared-ui/pages/catalog/Catalog.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';

    import { useRoute } from 'vue-router'

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
        },
        {
            link: '/contacts',
            text: 'Композитный профиль'
        },
    ]);

    const heading = ref({
        title: 'Композитный профиль',
        text: [
            'Завод композитных материалов «Пултра» специализируется на производстве композитного профиля методом пултрузии — технологией, обеспечивающей высокую прочность и однородность изделий. Наш профиль отличается легкостью, стойкостью к коррозии и долговечностью.',
            'Мы предлагаем широкий ассортимент композитных профилей для различных отраслей: строительства, энергетики, транспорта и других. Продукция «Пултра» сочетает инновационные материалы и передовые технологии для надежных и эффективных решений.'
        ]
    })

    useHead({
        title: 'Композитный профиль – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>