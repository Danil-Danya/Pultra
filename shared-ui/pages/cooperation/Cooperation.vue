<template>
    <section class="cooperation">
        <div class="container">
            <div class="cooperation__content">
                <h1 class="title cooperation__title">{{ title }}</h1>
                <img :src="image.medium" alt="Картинка" class="cooperation__img">
                <div class="cooperation__container">
                    <div class="cooperation__item" v-for="item in content" :key="item.id || item.title">
                        <h2 class="cooperation__title-item title-h2" v-if="item.title">{{ item.title }}</h2>
                        <h3 class="cooperation__title-item subtitle title-h3" v-if="item.subtitle">{{ item.subtitle }}</h3>
                        <h4 class="cooperation__title-item mini title-h4" v-if="item.titleMini">{{ item.titleMini }}</h4>
                        <img :src="item.image?.src" :alt="item.image?.alt" class="cooperation__item-img">
                        <p class="cooperation__text" v-if="item.text" v-html="item.text"></p>
                        <ul v-if="item.list?.length" class="cooperation__list">
                            <li class="cooperation__li" v-for="(text, idx) in item.list" :key="idx">
                                <p class="cooperation__text" v-html="text.text"></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="cooperation__button-container">
                    <button class="cooperation__button-shared" @click="copyLink">
                        <p class="cooperation__button-shared-text">поделиться</p>
                        <span class="cooperation__button-shared-icon">
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

    const SharedIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Shared.vue'));

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: Array,
            required: true
        },
        image: {
            type: Object,
            required: false
        }
    });
    
    console.log(props.content);
    

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success(`Ссылка скопирована успешно`, {
                autoClose: 1000,
                icon: h('img', { 
                    src: '/images/contacts/icon.png', 
                    style: 'width: 20px; height: 20px;' 
                })
            });
        } catch (e) {
            toast.error('Ошибка при копировании');
        }
    };
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/cooperation/cooperation.scss';
</style>
