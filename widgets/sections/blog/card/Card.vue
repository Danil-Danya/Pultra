<template>
    <div class="blog__slider-card">
        <NuxtLink :to="link" class="blog__slider-image-link">
            <img :src="image" alt="Превью" class="blog__slider-image">
        </NuxtLink>
        <p class="blog__slider-card-date">{{ date }}</p>
        <NuxtLink :to="link" class="blog__slider-title-link">
            <h3 class="blog__slider-card-title">{{ title }}</h3>
        </NuxtLink>
        <p class="blog__slider-card-text">{{ text }}</p>
        <NuxtLink :to="link" class="blog__slider-more">
            <p class="blog__slider-button-text">читать полностью</p>
            <span class="blog__slider-more-text">
                <ArrowButton class="blog__slider-more-icon" />
            </span>
        </NuxtLink>
    </div>
</template>

<script setup>

    const ArrowButton = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Arrow.vue'));

    const props = defineProps({
        image: {
            type: String,
            required: true
        },

        date: {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        text: {
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
    @import '@/assets/styles/ui/shared/widgets/blog/blog-card.scss';
</style>