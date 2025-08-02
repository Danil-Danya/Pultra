<template>
    <label class="custom-checkbox">
        <input type="checkbox" />
        <span class="checkmark" :class="color ? color : null"></span>
    </label>
</template>

<script setup>
    const props = defineProps({
        color: {
            type: String,
            default: 'white'
        }
    })
</script>
