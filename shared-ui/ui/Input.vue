<template>
    <input :type="text" class="input" :placeholder="placeholder">
</template>

<script setup>

    const props = defineProps({
        type: {
            type: String,
            default: 'text'
        },

        placeholder: {
            type: String,
            required: true
        }
    })

</script>
