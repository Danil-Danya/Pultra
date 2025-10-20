<template>
    <section class="presentation">
        <div class="container">
            <div class="presentation__content">
                <div class="presentation__left">
                    <component 
                        :is="isProjectPage ? 'h2' : 'h1'" 
                        class="title presentation__title"
                    >
                        {{ title }}
                        <span>PULTRA</span>
                    </component>
                    <div class="presentation__text-container">
                        <p class="presentation__text" v-for="text in text" :key="text" v-html="text"></p>
                    </div>
                    <div class="presentation__button-container">
                        <Button text="заказать расчет" color="orange" class="presentation__button" @click="toggleModal" />
                        <Button text="Написать в WhatsApp" color="white" class="presentation__button" />
                    </div>
                </div>
                <div class="presentation__right">
                    <PresentationSlider :galery="galery" :model="model" :video="video" />
                </div>
            </div>
        </div>
        <ClientOnly>
            <Transition name="modal" appeear>
                <FormModal v-if="isShowModal"
                    @close-modal="toggleModal"
                    title="Заказать расчет"
                />
            </Transition>
        </ClientOnly>
    </section>
</template>

<script setup>

    import PresentationSlider from "@/features/sliders/PresentationSlider.vue";
    import Button from '@/shared-ui/ui/Button.vue';

    import { useRoute } from 'vue-router';

    const FormModal = defineAsyncComponent(() => import('@/features/modals/FormModal.vue'));

    const isShowModal = ref(false);

    const toggleModal = () => {
        isShowModal.value = !isShowModal.value
    }

    const route = useRoute();
    const isProjectPage = computed(() => route.path.includes('/proekty/'));

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        text: {
            type: Array,
            required: true
        },

        galery: {
            type: Array,
            required: false,
        },

        model: {
            type: Object,
            required: false,
        },

        video: {
            type: Object,
            required: false,
        }
    })

    console.log(props.text);
    

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/presentation.scss';
</style>
