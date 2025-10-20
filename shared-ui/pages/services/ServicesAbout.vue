<template>
    <section class="services__about">
        <div class="container">
            <div class="services__about-content">
                <h1 class="title services__about-title">услуги Проектировщикам</h1>
            </div>
            <div class="services__about-container">
                <Card v-for="card in servicesStore.services.data"
                    :key="card"
                    :title="card.title"
                    :image="card.imageFull"
                    :slug="card.slug"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Card from '@/widgets/services/card/Card.vue';

    import { useServicesStore } from '@/entities/services/store.js';

    const servicesStore = useServicesStore();

    await servicesStore.fetchAll();

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/services/services-about.scss';
</style>
