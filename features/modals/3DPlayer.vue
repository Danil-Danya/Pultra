<template>
    <section class="modal">
        <div class="modal__content">
            <div class="modal__data">
                <h2 class="modal__title">3Д модель</h2>
                <span class="modal__icon">
                    <CloseIcon @click="closeModal" />
                </span>
            </div>
            <div class="modal__player">
                <Player3D :modelUrl="modelUrl" />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Player3D from '@/features/players/3DPlayer.vue';

    const CloseIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Close.vue'));

    const emit = defineEmits(['closeModal']);

    const props = defineProps({
        modelUrl: {
            type: String,
            required: true
        }
    })

    console.log(props.modelUrl);
    

    const closeModal = () => {
        emit('closeModal');
    }

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/features/modals/player-modal.scss';
</style>