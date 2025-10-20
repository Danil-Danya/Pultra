<template>
    <section class="modal">
        <div class="modal__content">
            <div class="modal__data">
                <div class="modal__info">
                    <h2 class="modal__title">{{ title }}</h2>
                    <p class="modal__text">{{ text }}</p>
                </div>
                <span class="modal__icon">
                    <CloseIcon @click="closeModal" />
                </span>
            </div>
            <div class="modal__form">
                <ModalForm :type="type" />
            </div>
        </div>
    </section>
</template>

<script setup>

    const CloseIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Close.vue'));

    const ModalForm = defineAsyncComponent(() => import('@/features/forms/ModalForm.vue'));

    const emit = defineEmits(['closeModal']);

    const props = defineProps({
        title: String,
        text: String,
        type: String,
        inputs: Array
    })

    const closeModal = () => {
        emit('closeModal');
    }

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/features/modals/player-modal.scss';
</style>