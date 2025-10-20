<template>
    <section class="catalog">
        <div class="container">
            <div class="catalog__content">
                <h2 class="catalog__title title">каталог продукции</h2>
                <div class="catalog__card-container">
                    <Card
                        v-for="(card, index) in cards"
                        :key="index"
                        :title="card.title"
                        :image="card.image"
                        :link="card.link"
                        :recommends="card?.items"
                    />
                    <CatalogForm />
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import Card from '@/widgets/catalog/card/Card.vue';
    import CatalogForm from '@/features/forms/CatalogForm.vue';

    import animateCatalog from '@/plugins/animations/sections/catalog.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';
    import { useCatalogStore } from '@/entities/catalog/store.js';
    import { usePagesStore } from '@/entities/pages/store.js';

    const catalogStore = useCatalogStore();
    const pagesStore = usePagesStore();

    await catalogStore.fetchCatalog();
    await pagesStore.fetchHomePage();

    useGsapCleanup();

    //const categories = [...catalogStore.catalog.productCategories, ...catalogStore.catalog.wareCategories];

    const getCategoriesArray = (categories, type) => {
        return categories.map(cat => {
            const itemImages = (cat.subcategories).map(child => ({
                link: `${type}/${cat.slug}/${child.slug}`,
                image: child.image?.url ?? ''
            }));

            return {
                title: cat.name,
                image: cat.image ?? {},
                 link: `${type}/${cat.slug}`,
                items: itemImages.length
                    ? [{
                        images: itemImages.slice(0, 4),
                        lastCount: itemImages.length > 4
                            ? `+${itemImages.length - 4}`
                            : undefined
                    }]
                : undefined
            };
        })
    }

    const cardsProducts = getCategoriesArray(catalogStore.catalog.productCategories, 'produkciya');
    const cardsWares = getCategoriesArray(catalogStore.catalog.wareCategories, 'izdeliya');

    const cards = computed(() => {
        return [...cardsProducts, ...cardsWares];
    })
    

    onMounted(() => {
        animateCatalog();
        //console.log(categories.value);
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/index/catalog.scss'
</style>
