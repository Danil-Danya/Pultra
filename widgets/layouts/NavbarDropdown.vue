<template>
    <ul class="navbar__dropdown-list" v-if="list">
        <li class="navbar__dropdown-li" v-for="link in list" :key="link">
            <NuxtLink :to="`${link.link}/`" class="navbar__dropdown-link">{{ link.text }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>

    const props = defineProps({
        list: {
            type: Array,
            required: true,
            validator: (value) => Array.isArray(value) && value.every((item) =>
                typeof item.text === 'string' &&
                typeof item.link === 'string'
            )
        }
    })

</script>
