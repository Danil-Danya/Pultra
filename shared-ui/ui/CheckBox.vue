<template>
    <label class="custom-checkbox">
        <input type="checkbox" 
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
        />
        <span class="checkmark" :class="color ? color : null"></span>
    </label>
</template>

<script setup>

    const props = defineProps({
        color: {
            type: String,
            default: 'white'
        },

        modelValue: { 
            type: Boolean, 
            default: false 
        }
    })

    const emit = defineEmits(['update:modelValue']);

</script>
