<template>
    <section class="service">
        <div class="container">
            <div class="service__content">
                <h1 class="title service__title">{{ title }}</h1>
                <div class="service__container">
                    <div class="service__item" v-for="content in content" :key="content">
                        <h2 class="service__subtitle-content title-h2" :id="content.slug" v-if="content?.title">{{ content.title }}</h2>
                        <h3 class="service__subtitle-content title-h3" :id="content.slug" v-if="content?.subtitle">{{ content.subtitle }}</h3>
                        <h4 class="service__subtitle-content title-h4" :id="content.slug" v-if="content?.subtitleMini">{{ content.subtitleMini }}</h4>
                        <img loading="lazy" class="service__img" format="webp" preload fetchpriority="high" :src="content?.image?.src" :alt="content?.image?.alt" v-if="content?.image?.src">
                        <p class="service__text" v-if="content?.text" v-html="content.text"></p>
                        <ol v-if="content?.list?.length" class="service__list">
                            <li
                                v-for="(item, liIdx) in content.list"
                                :key="liIdx"
                                class="service__li"
                            >
                                <h2 v-if="item.title" class="service__subtitle title-h2">
                                    {{ item.title }}
                                </h2>

                                <h3 v-if="item.subtitle" class="service__subtitle title-h3">
                                    {{ item.subtitle }}
                                </h3>

                                <h4 v-if="item.subtitleMini" class="service__subtitle title-h4">
                                    {{ item.subtitleMini }}
                                </h4>

                                <p v-if="item.text" class="service__text" v-html="item.text"></p>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="service__button-container">
                    <div class="service__button-service">
                        <Button type="link" text="Заказать услугу" color="orange" @click="toggleModal" />
                        <ClientOnly>
                            <Transition name="modal" appeear>
                                <FormModal v-if="isShowModal"
                                    @close-modal="toggleModal"
                                    title="Заказать услугу"
                                    type="extended"
                                />
                            </Transition>
                        </ClientOnly>
                    </div>
                    <button class="service__button-shared" @click="copyLink">
                        <p class="service__button-shared-text">поделиться</p>
                        <span class="service__button-shared-icon">
                            <SharedIcon />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    import Button from '@/shared-ui/ui/Button.vue';

    const SharedIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Shared.vue'));

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

        content: {
            type: Array,
            required: true
        }
    })

    const copyLink = async () => {
        await navigator.clipboard.writeText(window.location.href);

        toast.success(`Ссылка скопированна успешно`, {
            autoClose: 1000,
            icon: h('img', { 
                src: '/images/contacts/icon.png', 
                style: 'width: 20px; height: 20px;' 
            })
        });
    }


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/services/service.scss';
</style>