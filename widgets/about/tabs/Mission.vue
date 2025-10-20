<template>
    <div class="mission">
        <div class="mission__content">
            <div class="mission__content-left">
                <h2 class="mission__title">Ценности которых <span class="mission__title-orange">мы</span> придерживаемся</h2>
                <div class="mission__content-container">
                    <div class="mission__content-item" v-for="item in missionValues" :key="item">
                        <img loading="lazy"  class="mission__icon" :src="item.icon" alt="Иконка" format="webp" preload fetchpriority="high">
                        <p class="mission__content-text">{{ item.text }}</p>
                    </div>
                </div>
            </div>
            <div class="mission__content-right">
                <img loading="lazy"  class="mission__img" src="/images/about/mission/ph.png" alt="Картинка" format="webp" preload fetchpriority="high">
            </div>
        </div>
        <div class="mission__slogan">
            <div class="mission__slogan-container">
                <div class="mission__slogan-item" v-for="slogan in missionSlogans" :key="slogan">
                    <h3 class="mission__slogan-title">{{ slogan.title }}</h3>
                    <p class="mission__slogan-text">{{ slogan.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const missionValues = ref([
        {
            text: 'Качество и надёжность продукции',
            icon: '/images/about/mission/icon1.svg'
        },
        {
            text: 'Инновации и развитие',
            icon: '/images/about/mission/icon2.svg'
        },
        {
            text: 'Открытость и честность в работе',
            icon: '/images/about/mission/icon3.svg'
        },
        {
            text: 'Ответственность перед клиентами и партнёрами',
            icon: '/images/about/mission/icon4.svg'
        },
        {
            text: 'Забота об экологии и устойчивое производство',
            icon: '/images/about/mission/icon5.svg'
        },
        {
            text: 'Профессионализм и командная работа',
            icon: '/images/about/mission/icon6.svg'
        },
    ]);

    const missionSlogans = ref([
        {
            title: 'наша миссия',
            text: 'Обеспечивать клиентов высококачественными композитными материалами, способствующими созданию современных, безопасных и долговечных объектов, внедряя передовые технологии и поддерживая высокий стандарт сервиса.'
        },
        {
            title: 'Наша цель:',
            text: 'Стать ведущим производителем композитных изделий в России, предлагая инновационные и надёжные решения для развития инфраструктуры и промышленности.'
        },
    ]);

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tab/mission.scss';
</style>