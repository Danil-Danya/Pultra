<template>
    <section class="modal">
        <div class="modal__content">
            <div class="modal__data">
                <h2 class="modal__title">Видео</h2>
                <span class="modal__icon">
                    <CloseIcon @click="closeModal" />
                </span>
            </div>
            <div class="modal__player">
                <VideoPlayer :src="videoUrl" />
            </div>
        </div>
    </section>
</template>

<script setup>

    import VideoPlayer from "@/features/players/VideoPlayer.vue";
    const CloseIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Close.vue'));

    const emit = defineEmits(['closeModal']);

    const props = defineProps({
        videoUrl: {
            type: String,
            required: false
        }
    })

    const closeModal = () => {
        emit('closeModal');
    }

</script>


<style lang="scss">
    @import 'plyr/dist/plyr.css';
    @import '@/assets/styles/ui/shared/features/modals/player-modal.scss';
</style>
