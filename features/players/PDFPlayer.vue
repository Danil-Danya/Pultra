<template>
    <div class="docs__player">
        <iframe :src="file" width="100%" height="1000px"></iframe>
    </div>
</template>

<script setup>

    const props = defineProps({
        file: String
    })

</script>
