<template>
    <section class="heading">
        <div class="container">
            <div class="heading__content">
                <div class="heading__left">
                    <img loading="lazy"  class="heading__img" :src="image?.url" :alt="image?.alt" format="webp" preload fetchpriority="high">
                    <div class="heading__button-container">
                        <Button 
                            v-for="button in buttons"
                            @click="toggleModal"
                            class="heading__button"
                            :color="button.color"
                            :text="button.text"
                            :key="button"
                        />
                    </div>
                </div>
                <div class="heading__right">
                    <h1 class="heading__title">{{ title }}</h1>
                    <div class="heading__text-container">
                        <p class="heading__text" v-for="text in text" :key="text" v-html="text"></p>
                    </div>
                </div>
            </div>
        </div>
        <ClientOnly>
            <Transition name="modal" appeear>
                <FormModal v-if="isShowModal"
                    @close-modal="toggleModal"
                    title="Получить консультацию"
                />
            </Transition>
        </ClientOnly>
    </section>
</template>

<script setup>

    import Button from '@/shared-ui/ui/Button.vue';

    const FormModal = defineAsyncComponent(() => import('@/features/modals/FormModal.vue'));

    const isShowModal = ref(false);

    const toggleModal = () => {
        isShowModal.value = !isShowModal.value
    }

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        text: {
            type: Array,
            required: true,
        },

        image: {
            type: Object,
            required: true
        }
    })

    const buttons = ref([
        {
            type: 'link',
            color: 'orange',
            text: 'Получить консультацию',
            link: '/consultation'
        },
        {
            type: 'link',
            color: 'white',
            text: 'Написать в WhatsApp',
            link: '/consultation'
        }
    ])

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/heading.scss';
</style>