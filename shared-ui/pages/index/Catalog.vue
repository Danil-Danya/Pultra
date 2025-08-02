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

    useGsapCleanup();

    const cardList = ref([{
        title: 'Композитный профиль',
        image: 'images/catalog/categories/ph.png',
        link: '#',
        items: [{
            images: [
                { link: '', image: 'images/catalog/items/composite-profile/ph.png' },
                { link: '', image: 'images/catalog/items/composite-profile/ph-1.png' },
                { link: '', image: 'images/catalog/items/composite-profile/ph-2.png' },
                { link: '', image: 'images/catalog/items/composite-profile/ph-3.png' },
            ],
            lastCount: '+3'
        }]
    }, {
        title: 'Настил композитный',
        image: 'images/catalog/categories/ph-1.png',
        link: '#',
        items: [{
            images: [
                { link: '', image: 'images/catalog/items/fastening-profiled-sheeting/ph.png' },
                { link: '', image: 'images/catalog/items/fastening-profiled-sheeting/ph-1.png' },
                { link: '', image: 'images/catalog/items/fastening-profiled-sheeting/ph-2.png' },
                { link: '', image: 'images/catalog/items/fastening-profiled-sheeting/ph-3.png' },
            ],
            lastCount: '+5'
        }]
    }, {
        title: 'Лестницы и лестничные сходы',
        image: 'images/catalog/categories/ph-2.png',
        link: '#',
        items: [{
            images: [
                { link: '', image: 'images/catalog/items/lestnitsy/ph.png' },
                { link: '', image: 'images/catalog/items/lestnitsy/ph-2.png' },
                { link: '', image: 'images/catalog/items/lestnitsy/ph-3.png' },
            ],
            lastCount: '+3'
        }]
    }, {
        title: 'Ограждения композитные',
        image: 'images/catalog/categories/ph-3.png',
        link: '#',
        items: [{
            images: [
                { link: '', image: 'images/catalog/items/ogorozhdenia/ph.png' },
                { link: '', image: 'images/catalog/items/ogorozhdenia/ph-2.png' },
                { link: '', image: 'images/catalog/items/ogorozhdenia/ph-3.png' },
                { link: '', image: 'images/catalog/items/ogorozhdenia/ph-4.png' },
            ],
            lastCount: '+6'
        }]
    }, {
        title: 'Смотровые ходы',
        image: 'images/catalog/categories/ph-4.png',
        link: '#',
    }, {
        title: 'Площадки обслуживания',
        image: 'images/catalog/categories/ph-5.png',
        link: '#',
        items: [{
            images: [
                { link: '', image: 'images/catalog/items/ploshadky/ph.png' },
                { link: '', image: 'images/catalog/items/ploshadky/ph-1.png' },
                { link: '', image: 'images/catalog/items/ploshadky/ph-2.png' },
                { link: '', image: 'images/catalog/items/ploshadky/ph-3.png' },
            ],
            lastCount: '+5'
        }]
    }, {
        title: 'Блок-боксы',
        image: 'images/catalog/categories/ph-6.png',
        link: '#',
    }, {
        title: 'Досмотровые эстакады',
        image: 'images/catalog/categories/ph-7.png',
        link: '#',
    },])

    onMounted(() => {
        animateCatalog();
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/index/catalog.scss'
</style>
