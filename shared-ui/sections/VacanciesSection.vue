<template>
    <section class="vacancies__section">
        <div class="container">
            <div class="vacancies__section-content">
                <Card
                    :conditions="[item.experience, item.workingTime]"
                    :title="item.title"
                    :price="item.price"
                    :image="item.imageThumbnail"
                    v-for="item in content"
                    :link="item.slug"
                    :key="item"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Card from '@/widgets/sections/vacancies/card/Card.vue';

    import { useVacanciesStore } from '@/entities/vacancies/store.js';

    const vacanciesStore = useVacanciesStore();
    //await vacanciesStore.fetchOneBySlug();

    const props = defineProps({
        content: {
            type: Object,
            required: true
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/vacancies.scss';
</style>
