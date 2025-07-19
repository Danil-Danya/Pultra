<template>
    <section class="project">
        <div class="container">
            <div class="project__content">
                <h2 class="title project__title">Наш опыт в масштабных проектах</h2>
                <div class="project__card-container">
                    <Card 
                        v-for="card in cardList"
                        :key="card"
                        :date="card.date"
                        :title="card.title"
                        :text="card.text"
                        :link="card.link"
                        :image="card.image"
                    />
                    <div class="project__button-container">
                        <NuxtLink to="#" class="project__button-link">
                            <p class="project__button-text">Все проекты</p>
                            <span class="project__button-icon">
                                <ArrowButton />
                            </span>
                        </NuxtLink>
                    </div>
                </div>
                <ProjectSlider class="project__slider"/>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Card from '@/widgets/sections/projects/card/Card.vue';
    import ProjectSlider from '@/features/sliders/PartnersSlider.vue';
    
    import animateProject from '@/plugins/animations/sections/project.section.js';

    const ArrowButton = defineAsyncComponent(() => import('@/shared-ui/icons/project/ArrowLink.vue'));

    const cardList = ref([{
        date: '[2025]',
        title: 'Обустройство и фиксация кабельных трасс',
        text: 'Композитные монтажные системы',
        link: '#',
        image: 'images/project/ph.png'
    }, {
        date: '[2025]',
        title: 'Обустройство и фиксация кабельных трасс',
        text: 'Композитные монтажные системы',
        link: '#',
        image: 'images/project/ph-1.png'
    }, {
        date: '[2025]',
        title: 'Обустройство и фиксация кабельных трасс',
        text: 'Композитные монтажные системы',
        link: '#',
        image: 'images/project/ph-2.png'
    }])

    onMounted(() => animateProject());

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/project.scss';
</style>