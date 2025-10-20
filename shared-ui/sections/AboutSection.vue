<template>
    <section class="about">
        <div class="container">
            <div class="about__content">
                <div class="about__title-container">
                    <h2 class="title about__title">
                        <span class="about__title-text">Завод композитных материалов и изделий –</span>
                        <span class="about__title-text orange"> PULTRA</span>
                    </h2>
                </div>
                <div class="about__content-container">
                    <div class="about__left">
                        <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  src="/images/about/about.png" alt="about" class="about__image">
                    </div>
                    <div class="about__right">
                        <div class="about__right-content">
                            <div class="about__text-container">
                                <p class="about__text">Компании Pultra предлагает композитные материалы для большинства отраслей промышленности. Мы предлагаем качественные композитные материалы. Изделия из композита присутствуют в летательных аппаратах, морских и речных суднах,  на строительных площадках и в перерабатывающей отрасли. Они являются важным усиливающим и защитным элементом, используются как изоляторы или в качестве проводника тока.</p>
                            </div>
                            <div class="about__card-container">
                                <Card 
                                    v-for="card in cardList"
                                    :key="card"
                                    :title="card.title"
                                    :text="card.text"
                                    :icon="card.icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import Card from '@/widgets/sections/about/card/Card.vue';
    import animateAbout from '@/plugins/animations/sections/about.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';
    import { nextTick } from 'vue';

    useGsapCleanup();

    const cardList = ref([{
        title: 'Изделия любой сложности',
        text: 'Разработка и производство на заказ изделий разной сложности, сечений, форм.',
        icon: '/images/about/icons/icon1.svg'
    }, {
        title: 'Рекомендации для вас',
        text: 'Разрабатываем персональные рекомендации конкретно под вашу сферу применения',
        icon: '/images/about/icons/icon2.svg'
    }, {
        title: 'Консультации',
        text: 'Отвечаем на все возникающие вопросы с привлечением экспертов нашей компании',
        icon: '/images/about/icons/icon3.svg'
    }, {
        title: 'Контроль качества',
        text: 'Перед отгрузкой вся продукция проходит контроль качества в лаборатории.',
        icon: '/images/about/icons/icon4.svg'
    }])

    onMounted(async () => {
        await nextTick();

        setTimeout(() => {
            animateProject()
        }, 1000);
    });

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/about.scss';
</style>