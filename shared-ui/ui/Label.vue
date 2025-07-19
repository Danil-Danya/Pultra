<template>
    <label :for="for" class="label">{{ text }}</label>
</template>

<script setup>

    const props = defineProps({
        for: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        }
    })

</script>
