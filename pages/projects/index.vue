<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <AboutProject />
    <Project />
    <Consultation />
    <About />
    <Question class="question__project" />
    <Blog class="blog__project" />
</template>

<script setup>
    import Consultation from '@/shared-ui/sections/ConsultationsSection.vue';
    import AboutProject from '@/shared-ui/pages/projects/AboutProject.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/projects',
            text: 'Проекты'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Проекты – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>