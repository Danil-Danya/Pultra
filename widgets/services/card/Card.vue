<template>
    <div class="services__card">
        <div class="services__card-content">
            <div class="services__card-left">
                <img loading="lazy"  class="services__card-img" :src="image" alt="Картинка" format="webp" preload fetchpriority="high">
            </div>
            <div class="services__card-right">
                <h3 class="services__card-title">{{ title }}</h3>
                <NuxtLink :to="`/proektirovshchikam/${slug}/`" class="services__card-link">
                    Подробнее
                    <span class="services__card-icon">
                        <ArrowIcon />
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

    const ArrowIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Arrow.vue'));

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        slug: {
            type: String,
            required: true
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/services/services-card.scss';
</style>