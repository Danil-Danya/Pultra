<template>
    <Solution />
    <Catalog />
    <About />
    <Quality />
    <Project />
    <Consultation />
    <Blog />
    <Question />
    <Information /> 
</template>

<script setup>
    import Consultation from '@/shared-ui/sections/ConsultationsSection.vue';
    import Information from '@/shared-ui/sections/InformationSection.vue'
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import Quality from '@/shared-ui/sections/QualitySection.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import Solution from '@/shared-ui/pages/index/Solutions.vue';
    import Catalog from '@/shared-ui/pages/index/Catalog.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';

    definePageMeta({ layout: 'default-layout' });

    useHead({
        title: 'Завод композитных материалов и изделий – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>