<template>
    <section class="goods">
        <div class="container">
            <div class="goods__content">
                <GoodsCard 
                    v-for="good in goods"
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

    const props = defineProps({
        catalog: {
            type: Array,
            required: true
        }
    })

    const goods = computed(() => props.catalog.map(cat => ({
        title: cat.title,
        image: cat.image?.url ?? '/images/catalog/goods/ph.png',
        link: `/izdeliya/${cat.slug}`
    })));

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/catalog/goods.scss';
</style>
