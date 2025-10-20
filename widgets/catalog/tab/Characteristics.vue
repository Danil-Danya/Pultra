<template>
    <div class="characteristics">
        <h2 class="characteristics__title">Основные характеристики</h2>
        <div class="characteristics__content">
            <div class="characteristics__block" v-for="characteristics in productCharacteristics" :key="characteristics">
                <h3 class="characteristics__block-title">{{ characteristics.title }}</h3>
                <div class="characteristics__block-item" v-for="item in characteristics.table" :key="item">
                    <p class="characteristics__text characteristics__text-param">{{ item.title }}</p>
                    <p class="characteristics__text characteristics__text-value">{{ item.value }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { useCatalogStore } from '@/entities/catalog/store';

    const catalogStore = useCatalogStore();
    const productCharacteristics = catalogStore.productCard.characteristics.list;

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tab/characteristics.scss';
</style>