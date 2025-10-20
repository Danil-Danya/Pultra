<template>
    <section class="services__other">
        <div class="container">
            <div class="services__other-content">
                <h2 class="services__other-title">другие услуги</h2>
            </div>
            <div class="services__other-container">
                <Card v-for="card in servicesData"
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

    const servicesData = ref([]);

    servicesData.value = servicesStore.services.data.slice(0, 3);

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/services/services-other.scss';
</style>