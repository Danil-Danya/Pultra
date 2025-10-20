<template>
    <section class="cooperation__message">
        <div class="container">
            <div class="cooperation__message-container">
                <div class="cooperation__message-left">
                    <CooperationForm />
                </div>
                <div class="cooperation__message-right">
                    <img src="@/assets/images/cooperation/Frame.png" alt="Картинка формы" loading="lazy" decoding="async" class="cooperation__message-img">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const CooperationForm = defineAsyncComponent(() => import('@/features/forms/CooperationForm.vue'));
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/cooperation/cooperation-message.scss';
</style>