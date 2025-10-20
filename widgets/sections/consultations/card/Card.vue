<template>
    <div class="consultation__card">
        <div class="consultation__card-content">
            <div class="consultation__card-left">
                <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  :src="image" alt="Иконка" class="consultation__card-icon">
            </div>
            <div class="consultation__card-right">
                <h3 class="consultation__card-title">{{ title }}</h3>
                <p class="consultation__card-text">{{ text }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>

    const props = defineProps({
        image: {
            required: true,
            type: String
        },

        title: {
            required: true,
            type: String
        },

        text: {
            required: true,
            type: String
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/consultation/consultation-card.scss';
</style>
