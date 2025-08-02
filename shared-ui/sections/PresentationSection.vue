<template>
    <section class="presentation">
        <div class="container">
            <div class="presentation__content">
                <div class="presentation__left">
                    <h1 class="title presentation__title">
                        {{ title }}
                        <span>PULTRA</span>
                    </h1>
                    <div class="presentation__text-container">
                        <p class="presentation__text" v-for="text in text" :key="text">{{ text }}</p>
                    </div>
                    <div class="presentation__button-container">
                        <Button text="заказать расчет" color="orange" class="presentation__button" />
                        <Button text="Написать в WhatsApp" color="white" class="presentation__button" />
                    </div>
                </div>
                <div class="presentation__right">
                    <PresentationSlider />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import PresentationSlider from "@/features/sliders/PresentationSlider.vue";
    import Button from '@/shared-ui/ui/Button.vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        text: {
            type: Array,
            required: true
        },
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/presentation.scss';
</style>
