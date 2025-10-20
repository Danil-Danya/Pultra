<template>
    <div class="item__card">
        <NuxtLink :to="`${link}/`" class="item__card-content">
            <div class="item__card-left">
                <img loading="lazy"  class="item__card-img" :src="image" alt="Категория" format="webp" preload fetchpriority="high">
                <h4 class="item__card-title">{{ title }}</h4>
            </div>

            <div class="item__card-right">
                <button class="item__card-button">
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

        link: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        }
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/catalog/card-items.scss';
</style>