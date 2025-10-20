<template>
    <div class="career">
        <div class="career__content">
            <h2 class="career__content-title">Работа в ООО “Пултра”</h2>
        </div>
        <div class="career__container" v-if="vacancies">
            <CareerSlider :content="vacancies" />
            <NuxtLink to="/vakansii" class="career__button">Все вакансии</NuxtLink>
        </div>
    </div>
</template>

<script setup>

    import CareerSlider from "@/features/sliders/CareerSlider.vue";

    import { usePagesStore } from '@/entities/pages/store.js';

    const pagesStore = usePagesStore();
    await pagesStore.fetchAboutPage();

    const about = computed(() => pagesStore.about.data);
    const vacancies = computed(() => pagesStore.about.data.vacancies.data);

    console.log(vacancies.value);
    
</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tab/career.scss';
</style>