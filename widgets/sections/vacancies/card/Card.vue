<template>
    <div class="vacancies__card">
        <div class="vacancies__card-image-container">
            <img loading="lazy"  :src="image" alt="Вакансия" format="webp" preload fetchpriority="high"  class="vacancies__card-img">
        </div>
        <div class="vacancies__card-text-container">
            <h3 class="vacancies__card-title">{{ title }}</h3>
            <ul class="vacancies__card-list">
                <li class="vacancies__card-text-li" v-for="condition in conditions" :key="condition">
                    <p class="vacancies__card-text">{{ condition }}</p>
                </li>
            </ul>
            <h3 class="vacancies__card-price">от {{ price }} руб/мес</h3>
        </div>
        <div class="vacancies__card-button-container">
            <NuxtLink :to="`/vakansii/${link}/`" class="vacancies__card-button">Подробнее</NuxtLink>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        image: {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        link: {
            type: String,
            required: true
        },

        conditions: {
            type: Array,
            required: true
        }
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/vacancies/vacancies-card.scss';
</style>