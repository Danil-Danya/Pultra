<template>
    <p v-if="text" class="invalid-error">{{ text }}</p>
</template>

<script setup>
    const props = defineProps({
        text: { type: String, default: '' }
    });
</script>
