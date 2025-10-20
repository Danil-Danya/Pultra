<template>
    <label :for="for" class="label" :class="color ? color : null">{{ text }}</label>
</template>

<script setup>

    const props = defineProps({
        for: {
            type: String,
            required: true
        },

        color: {
            type: String,
            default: 'white'
        },

        text: {
            type: String,
            required: true
        }
    })

</script>
