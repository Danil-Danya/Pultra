<template>
    <section class="advantages">
        <div class="advantages__content">
            <div class="advantages__title-container">
                <h2 class="title advantages__title">Преимущества</h2>
            </div>
            <div class="advantages__container-content">
                <AdvantagesCard 
                    v-for="item in advantages"
                    :key="item"
                    :image="item.icon"
                    :title="item.title"
                    :text="item.text"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

    import AdvantagesCard from '@/widgets/catalog/card/AdvantagesCard.vue';

    import { useRoute } from 'vue-router';
    import { useCatalogStore } from '@/entities/catalog/store';

    const route = useRoute();
    const catalogStore = useCatalogStore();

    await catalogStore.fetchProductCard(route.params.card);
    const advantages = ref(catalogStore.productCard.advantages.list)

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/catalog/advantages.scss';
</style>