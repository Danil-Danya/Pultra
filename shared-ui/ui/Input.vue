<template>
    <input 
        ref="inputRef"
        :type="type" 
        class="input" 
        :class="error ? 'input-red' : null" 
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    >
</template>

<script setup>

    import IMask from "imask";

    const props = defineProps({
        type: {
            type: String,
            default: 'text'
        },

        error: {
            type: [String, Boolean],
        },

        placeholder: {
            type: String,
            required: true
        },

        modelValue: { 
            type: [String, Number], 
            default: '' 
        }
    })

    const emit = defineEmits(['update:modelValue']);

    const inputRef = ref(null);
    let mask;

    onMounted(() => {
        if (props.type === 'tel') {
            mask = IMask(inputRef.value, {
                mask: "+{7} (000) 000-00-00",
            });
    
            mask.on("accept", () => {
                emit("update:modelValue", mask.value);
            });
        }
    });

</script>
