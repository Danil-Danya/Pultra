<template>
    <input :type="text" class="input" :class="color ? color : null" :placeholder="placeholder">
</template>

<script setup>

    const props = defineProps({
        type: {
            type: String,
            default: 'text'
        },

        color: {
            type: String,
            default: 'white'
        },

        placeholder: {
            type: String,
            required: true
        }
    })

</script>
