<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <AboutProject :title="aboutProjectContent.title" :texts="aboutProjectContent.texts" />
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
    import Project from '@/shared-ui/pages/projects/Projects.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';

    const aboutProjectContent = ref({
        title: 'Наши проекты',
        texts: [
            'Компания «Завод композитных изделий "Пултра"» гордится своими достижениями и успешными проектами, реализованными совместно с нашими партнёрами и заказчиками. Каждый реализованный проект — это подтверждение высокого качества нашей продукции и профессионализма команды, способной решать задачи любой сложности.',
            'Мы рады, что смогли внести свой вклад в развитие различных отраслей, обеспечив надёжные и своевременные поставки композитных изделий. Наши проекты — это примеры того, как современные технологии и индивидуальный подход помогают достигать поставленных целей и воплощать в жизнь самые амбициозные идеи.'
        ]
    })


    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/proekty',
            text: 'Проекты'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Проекты – PULTRA',
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/proekty/'
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>