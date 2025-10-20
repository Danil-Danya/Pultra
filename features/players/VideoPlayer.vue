<template>
    <video ref="video" class="plyr" controls playsinline>
        <source :src="src" :type="type" />
    </video>
</template>

<script setup>

    import { onMounted, ref } from 'vue'
    import Plyr from 'plyr'

    const props = defineProps({
        src: { type: String, required: true },
        type: { type: String, default: 'video/mp4' }
    })

    const video = ref(null)

    onMounted(() => {
        if (video.value) {
            const player = new Plyr(video.value, {
                controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
            })
        }
    })

</script>
