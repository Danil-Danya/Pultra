<template>
    <section class="details">
        <div class="container">
            <div class="details__content">
                <h2 class="details__title">реквизиты</h2>
                <div class="details__container">
                    <div class="details__item" v-for="item in details" :key="item">
                        <div class="details__preview">
                            <h3 class="details__title-item">{{ item.title }}</h3>
                            <span class="contacts__icon" @click="copyText(item.text)">
                                <CopyIcon />
                            </span>
                        </div>
                        <p class="details__text">{{ item.text }}</p>
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
    
    const details = ref([
        {
            title: 'Юр адрес',
            text: 'Данные'
        },
        {
            title: 'Наименование организаации',
            text: 'Данные'
        },
        {
            title: 'Генеральный директор',
            text: 'Данные'
        },
        {
            title: 'Почтоый адрес',
            text: 'Данные'
        },
        {
            title: 'Фактический адрес',
            text: 'Данные'
        },
        {
            title: 'ИНН',
            text: 'Данные'
        },
        {
            title: 'ОГРН',
            text: 'Данные'
        },
        {
            title: 'КПП',
            text: 'Данные'
        },
        {
            title: 'ОКПО',
            text: 'Данные'
        },
        {
            title: 'ОКВЭД',
            text: 'Данные'
        },
        {
            title: 'Расчетный счет',
            text: 'Данные'
        },
        {
            title: 'БИК',
            text: 'Данные'
        },
        {
            title: 'Кор счет',
            text: 'Данные'
        },
        {
            title: 'Банк получателя',
            text: 'Данные'
        }
    ]);

    const files = ref([
        {
            text: 'Скачать в формате DOCX',
            link: ''
        },
        {
            text: 'Скачать в формате PDF',
            link: ''
        },
    ])

    const copyText = async (text) => {
        await navigator.clipboard.writeText(text);

        toast.success(`${text} скопированно успешно`, {
            autoClose: 1000,
            icon: h('img', { 
                src: 'images/contacts/icon.', 
                style: 'width: 20px; height: 20px;' 
            })
        });
    }

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/sections/details.scss';
</style>
