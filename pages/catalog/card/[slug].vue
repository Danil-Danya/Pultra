<template :key="$route.fullPath">
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Presentation :title="presentation.title" :text="presentation.text" />
    <Data />
    <Quality />
    <Information />
    <Project />
    <Consultation />
    <Application title="Возможно вас заинтересует" v-if="!isMobile" />
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
            link: '/catalog/products',
            text: 'Каталог изделий'
        },
        {
            link: '/catalog/category/kompozitny-profil',
            text: 'Квадратный профиль'
        },
        {
            link: '/catalog/product/kompozitny-kavadratny-profil',
            text: 'Композитный квадратный профиль'
        },
        {
            link: '/contacts',
            text: 'Композитный квадратный профиль 10мм'
        },
    ]);

    const presentation = {
        title: 'Композитный квадратный профиль 10мм',
        text: [
            'Завод композитных материалов «Пултра» производит квадратный профиль методом пултрузии — технологией непрерывного вытягивания, обеспечивающей высокую прочность и однородность изделий. Такой профиль отличается легкостью, стойкостью к коррозии и долговечностью.',
            'Наш композитный профиль квадратного сечения идеально подходит для строительства, промышленности и других сфер, где важны надежность и устойчивость к внешним воздействиям. «Пултра» гарантирует качество и долговечность своей продукции.'
        ]
    }

    const heading = ref({
        title: 'Композитный квадратный профиль 10мм',
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

    onMounted(() => {
        checkInMobileDevice();
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>