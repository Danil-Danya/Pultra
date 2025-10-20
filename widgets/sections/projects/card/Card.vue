<template>
    <div class="project__card">
        <div class="project__card-image">
            <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  :src="image" alt="Превью">
        </div>
        <div class="project__card-content">
            <p class="project__card-date">{{ date }}</p>
            <h2 class="project__card-title">{{ title }}</h2>
            <p class="project__card-text">{{ text }}</p>
        </div>
        <div class="project__card-button">
            <NuxtLink :to="`${link}/`" class="project__card-button-link">
                <p class="project__card-button-text">Подробнее о проекте</p>
                <span class="project__card-button-icon">
                    <ArrowCard />
                </span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const ArrowCard = defineAsyncComponent(() => import('@/shared-ui/icons/project/ArrowCard.vue'));

    const props = defineProps({
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

        image: {
            type: String,
            required: true
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/project/project-card.scss';
</style>
