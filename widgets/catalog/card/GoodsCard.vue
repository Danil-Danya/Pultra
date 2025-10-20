<template>
    <div class="goods__card">
        <NuxtLink :to="`${link}/`" class="goods__card-content">
            <div class="goods__card-left">
                <img loading="lazy"  class="goods__card-img" :src="image" alt="Картинка" format="webp" preload fetchpriority="high">
                <h3 class="goods__card-title">{{ title }}</h3>
            </div>
            <div class="goods__card-right">
                <button class="goods__card-button">
                    <ArrowIcon />
                </button>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>

    const ArrowIcon = defineAsyncComponent(() => import('@/shared-ui/icons/catalog/Arrow.vue'));

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        link: {
            type: String,
            required: true
        },
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/catalog/card-goods.scss';
</style>
