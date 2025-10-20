<template>
    <section class="catalog">
        <div class="container">
            <div class="catalog__content">
                <h2 class="catalog__title title">каталог продукции</h2>
                <div class="catalog__card-container">
                    <Card
                        v-for="(card, index) in categories"
                        :key="index"
                        :title="card.title"
                        :image="card.image"
                        :link="card.link"
                        :recommends="card?.items"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Card from '@/widgets/catalog/card/Card.vue';

    import animateCatalog from '@/plugins/animations/sections/catalog.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';

    useGsapCleanup();

    const props = defineProps({
        categories: {
            type: Array,
            required: true
        }
    })

    onMounted(() => {
        animateCatalog();
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/index/catalog.scss'
</style>
