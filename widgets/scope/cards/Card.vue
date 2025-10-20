<template>
    <div class="scope__card">
        <img :src="image" alt="Картинка слайдер" class="scope__card-img">
        <div class="scope__card-content">
            <p class="scope__card-text">{{ index }}</p>
            <h3 class="scope__card-title">{{ title }}</h3>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        image: String,
        index: String,
        title: String
    })

</script>