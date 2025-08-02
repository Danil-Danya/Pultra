<template>
    <section class="goods">
        <div class="container">
            <div class="goods__content">
                <GoodsCard 
                    v-for="good in goodsList"
                    :title="good.title"
                    :image="good.image"
                    :link="good.link"
                    :key="good"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
    
    import GoodsCard from '@/widgets/catalog/card/GoodsCard.vue';

    const goodsList = ref([
        {
            title: 'Площадки обслуживания',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
        {
            title: 'Кабеленесущие системы',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
        {
            title: 'Лестницы и лестничные марши',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
        {
            title: 'Смотровые ходы',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
        {
            title: 'Перильные ограждения',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
        {
            title: 'Лестничные сходы',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
        {
            title: 'Столбы, опоры, мачты',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
        {
            title: 'Вентиляция',
            image: '/images/catalog/goods/ph.png',
            link: '/'
        },
    ])

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/catalog/goods.scss';
</style>
