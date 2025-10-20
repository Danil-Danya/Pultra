<template>
    <div class="advantages__card">
        <div class="advantages__left">
            <img :src="image.url" :alt="image.alt" format="webp" preload fetchpriority="high">
        </div>
        <div class="advantages__right">
            <h3 class="advantages__card-title">{{ title }}</h3>
            <p class="advantages__card-text">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        image: {
            type: Object,
            required: true
        },

        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    })

</script>