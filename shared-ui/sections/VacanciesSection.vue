<template>
    <section class="vacancies__section">
        <div class="container">
            <div class="vacancies__section-content">
                <Card
                    :conditions="cards.conditions"
                    :title="cards.title"
                    :price="cards.price"
                    :image="cards.image"
                    v-for="item in 6"
                    :link="cards.link"
                    :key="item"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
    import Card from '@/widgets/sections/vacancies/card/Card.vue';

    const cards = ref({
        title: 'Менеджер по работе с ключевыми клиентами',
        conditions: [
            'от 1-го года',
            '5-ти дневная рабочая неделя'
        ],
        price: 50000,
        link: '/',
        image: '/images/vacancies/ph2.png'
    })
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/vacancies.scss';
</style>
