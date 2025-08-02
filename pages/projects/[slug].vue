<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <AboutProject :title="aboutProjectContent.title" :texts="aboutProjectContent.texts" />
    <Presentation :title="presentation.title" :text="presentation.text" class="project-presentation" />
    <Application title="Комплект поставки" v-if="!isMobile" />
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

    const aboutProjectContent = ref({
        title: 'Обустройство и фиксация кабельных трасс',
        texts: [
            'Компания «Завод композитных изделий "Пултра"» гордится своими достижениями и успешными проектами, реализованными совместно с нашими партнёрами и заказчиками. Каждый реализованный проект — это подтверждение высокого качества нашей продукции и профессионализма команды, способной решать задачи любой сложности.',
            'Мы рады, что смогли внести свой вклад в развитие различных отраслей, обеспечив надёжные и своевременные поставки композитных изделий. Наши проекты — это примеры того, как современные технологии и индивидуальный подход помогают достигать поставленных целей и воплощать в жизнь самые амбициозные идеи.'
        ]
    })

    const presentation = {
        title: 'Об объекте',
        text: [
            'Мигаловский мост — важный транспортный объект, расположенный в городе Тверь. Этот мост соединяет разные районы города и обеспечивает удобное движение для автомобилей и пешеходов, играя значимую роль в инфраструктуре региона.',
            'Для реализации проекта реконструкции Мигаловского моста компания «Пултра» поставила современные композитные материалы: решетчатый настил, перильное ограждение и двутавр композитный. Использование этих изделий позволило повысить долговечность и безопасность конструкции, а также снизить затраты на обслуживание моста в будущем.',
            'Мы гордимся тем, что приняли участие в таком значимом для города проекте. Надёжные и инновационные решения от компании «Пултра» способствуют развитию городской инфраструктуры и делают передвижение по Мигаловскому мосту более комфортным и безопасным для всех жителей и гостей Твери.'
        ]
    }

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
            link: '/projects',
            text: 'Проекты'
        },
        {
            link: '/projects',
            text: 'Обустройство и фиксация кабельных трасс'
        },
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Проекты – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>