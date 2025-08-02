<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Heading :title="heading.title" :text="heading.text" />
    <WhatsApp />
    <Goods />
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
    import Goods from '@/shared-ui/pages/catalog/Goods.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';
    

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
        title: 'каталог изделий',
        text: [
            'Завод композитных материалов «Пултра» производит изделия и конструкции из высококачественных композитов, полученных методом пултрузии. Мы предлагаем надежные и долговечные решения для различных отраслей.',
            'В нашем каталоге представлены композитные ограждения, площадки обслуживания, лестничные сходы, смотровые ходы и другие конструкции, сочетающие прочность, легкость и устойчивость к коррозии.'
        ]
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