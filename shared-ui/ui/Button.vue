<template>
    <button v-if="type === 'button'" :class="`button button-${color}`">
        <slot name="icon" />
        <p class="button__text" v-if="text">
            {{ text }}
        </p>
    </button>

    <a :href="link" :class="`button button-${color}`" v-else>
        <slot name="icon" />
        <p class="button__text" v-if="text">
            {{ text }}
        </p>
    </a>
</template>

<script setup>
    const props = defineProps({
        text: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            default: 'button',
            validator: (value) => ['button', 'link'].includes(value),
        },

        color: {
            type: String,
            default: 'orange',
            validator: (value) => ['orange', 'white'].includes(value),
        },

        link: {
            type: String,
            required: true
        }
    })

</script>