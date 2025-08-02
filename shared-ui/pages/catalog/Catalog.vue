<template>
    <section class="catalog">
        <div class="container">
            <div class="catalog__content">
                <h2 class="catalog__title title">каталог продукции</h2>
                <div class="catalog__card-container">
                    <Card
                        v-for="(card, index) in cardList"
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

    const cardList = ref([{
        title: 'Квадратный профиль',
        image: 'images/catalog/profile/ph.png',
        link: '#',
    }, {
        title: 'Прямоугольный профиль',
        image: 'images/catalog/profile/ph-1.png',
        link: '#',
    }, {
        title: 'Круглый профиль',
        image: 'images/catalog/categories/ph-2.png',
        link: '#',
    }, {
        title: 'Угловой профиль',
        image: 'images/catalog/profile/ph-3.png',
        link: '#',
    }, {
        title: 'Швеллер профиль',
        image: 'images/catalog/profile/ph-4.png',
        link: '#',
    }, {
        title: 'Двутавр профиль',
        image: 'images/catalog/profile/ph-5.png',
        link: '#',
    },])

    onMounted(() => {
        animateCatalog();
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/index/catalog.scss'
</style>
