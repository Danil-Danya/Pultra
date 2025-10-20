<template>
    <section class="details">
        <div class="container">
            <div class="details__content">
                <h2 class="details__title">реквизиты</h2>
                <div class="details__container">
                    <div class="details__item" v-for="item in content" :key="item">
                        <div class="details__preview">
                            <h3 class="details__title-item">{{ item.title }}</h3>
                            <span class="contacts__icon" @click="copyText(item.value)">
                                <CopyIcon />
                            </span>
                        </div>
                        <p class="details__text">{{ item.value }}</p>
                    </div>
                </div>
                <div class="details__button-container">
                    <Button 
                        class="details__button-link"
                        v-for="button in files"
                        :text="button.text" 
                        :link="button.link"
                        :key="button"
                        color="white" 
                        type="link" 
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    import Button from '@/shared-ui/ui/Button.vue';

    const CopyIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Copy.vue'));

    const props = defineProps({
        content: {
            type: Array,
            required: true
        },

        docs: {
            type: Object,
            required: true
        }
    })

    const files = ref([
        {
            text: 'Скачать в формате DOCX',
            link: props.docs.doc
        },
        {
            text: 'Скачать в формате PDF',
            link: props.docs.pdf
        },
    ])

    const copyText = async (text) => {
        await navigator.clipboard.writeText(text);

        toast.success(`${text} скопированно успешно`, {
            autoClose: 1000,
            icon: h('img', { 
                src: 'images/contacts/icon.png', 
                style: 'width: 20px; height: 20px;' 
            })
        });
    }

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/details.scss';
</style>
