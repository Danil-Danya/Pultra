<template>
    <div class="blog__card">
        <NuxtLink :to="`/blog/${link}/`" class="blog__image-link">
            <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  :src="image" alt="Превью" class="blog__image">
        </NuxtLink>
        <p class="blog__card-date">{{ date }}</p>
        <NuxtLink :to="`/blog/${link}/`" class="blog__title-link">
            <h3 class="blog__card-title">{{ title }}</h3>
        </NuxtLink>
        <p class="blog__card-text">{{ text }}</p>
        <NuxtLink :to="`/blog/${link}/`" class="blog__more">
            <p class="blog__button-text">читать полностью</p>
            <span class="blog__more-text">
                <ArrowButton class="blog__more-icon" />
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