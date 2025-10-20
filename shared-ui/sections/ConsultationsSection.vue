<template>
    <section class="consultation">
        <div class="container">
            <div class="consultation__content">
                <div class="consultation__left">
                    <div class="consultation__info">
                        <h2 class="consultation__title">У вас проект?</h2>
                        <p class="consultation__text">Рассчитаем требуемые материалы согласно проектной документации</p>
                        <Button text="обсудить проект" @click="toggleModal" />
                        <ClientOnly>
                            <Transition name="modal" appeear>
                                <FormModal v-if="isShowModal"
                                    @close-modal="toggleModal"
                                    title="Обсудить проект"
                                />
                            </Transition>
                        </ClientOnly>
                    </div>
                </div>
                <div class="consultation__right">
                    <div class="consultation__card-container">
                        <Card 
                            v-for="card in consultationCardList"
                            :key="card"
                            :title="card.title"
                            :text="card.text"
                            :image="card.image"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Button from '@/shared-ui/ui/Button.vue';
    import Card from '@/widgets/sections/consultations/card/Card.vue';

    const FormModal = defineAsyncComponent(() => import('@/features/modals/FormModal.vue'));

    const isShowModal = ref(false);

    const toggleModal = () => {
        isShowModal.value = !isShowModal.value
    }

    const consultationCardList = ref([{
        title: 'Разработка проекта',
        text: 'Разработаем проектную документации для вашего объекта “Под ключ”',
        image: '/images/consultations/icon-1.png'
    }, {
        title: 'Консультация',
        text: 'Поможем с выбором. Рассчитаем необходимый состав продукции и его количества, способы доставки и хранения.',
        image: '/images/consultations/icon-2.png'
    }, {
        title: 'Сопровождение согласования',
        text: 'Поможем получить и согласовать необходимые документы в надзорных органах, и гос. экспертизы',
        image: '/images/consultations/icon-3.png'
    }])

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/consultation.scss';
</style>