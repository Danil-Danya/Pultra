<template>
    <div class="about__card">
        <div class="about__card-left">
            <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  :src="icon" alt="Иконка" class="about__card-icon">
        </div>
        <div class="about__card-right">
            <h3 class="about__card-title">{{ title }}</h3>
            <p class="about__text">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        },

        icon: {
            type: String,
            required: true
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/about/card-about.scss';
</style>
