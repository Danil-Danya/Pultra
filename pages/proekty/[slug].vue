<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <AboutProject :title="aboutProjectContent.title" :texts="aboutProjectContent.texts" />
    <Presentation :title="presentation.title" :text="presentation.text" :galery="galery" :model="model3D" :video="video" class="project-presentation" />
    <Information />
    <Project />
    <Consultation />
    <About />
    <Question class="question__project" />
    <Blog class="blog__project" />
</template>

<script setup>
    import Consultation from '@/shared-ui/sections/ConsultationsSection.vue';
    import Presentation from '@/shared-ui/sections/PresentationSection.vue';
    import AboutProject from '@/shared-ui/pages/projects/AboutProject.vue';
    import Information from '@/shared-ui/sections/InformationSection.vue';
    import Application from '@/shared-ui/sections/ApplicationSection.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Project from '@/shared-ui/sections/ProjectSection.vue';
    import About from '@/shared-ui/sections/AboutSection.vue';
    import Blog from '@/shared-ui/sections/BlogSection.vue';

    import parseHtmlToData from '~/utils/HTMLToJSONParser';

    import { useProjectStore } from '@/entities/projects/store';
    import { useRoute } from 'vue-router';

    const projectsStore = useProjectStore();
    const route = useRoute();

    await projectsStore.fetchOneBySlug(route.params.slug);
    const project = computed(() => projectsStore.currentProject);

    const aboutProjectContent = computed(() => ({
        title: project.value.title,
        texts: parseHtmlToData(project.value.data.firstScreen.text)[0].text.split('\n'),
        image: project.value.data.firstScreen.image
    }))

    const galery = projectsStore.currentProject.data.aboutObject.media.gallery;
    const model3D = projectsStore.currentProject.data.aboutObject.media['3D'];
    const video = projectsStore.currentProject.data.aboutObject.media.video;
    

    const presentation = computed(() => ({
        title: project.value.data.aboutObject.title,
        text: parseHtmlToData(project.value.data.aboutObject.text)[0].text.split('\n') || [parseHtmlToData(project.value.data.aboutObject.text)[0].text],
        galery: project.value.data.aboutObject.gallery
    }))    

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
            link: '/proekty',
            text: 'Проекты'
        },
        {
            link: '/proekty',
            text: project.value.title
        },
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: project.value.seoBlock.seoTitle || project.value.title + ' – PULTRA',
        meta: [
            {
                name: 'description',
                content: project.value.seoBlock.seoDescription
            },
            {
                name: 'robots',
                content: `${project.value.seoBlock.seoNoindex ? 'noindex' : 'index'},${project.value.seoBlock.seoNofollow ? 'nofollow' : 'follow'}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: project.value.seoBlock.canonicalUrl
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>