<template>
    <section class="contacts">
        <div class="container">
            <div class="contacts__content">
                <div class="contacts__left">
                    <h1 class="title">Контакты</h1>
                    <div class="contacts__item-container">
                        <div class="contacts__item" v-for="item in contacts" :key="item">
                            <div class="contacts__item-preview">
                                <h2 class="contacts__title">{{ item.title }}</h2>
                                <span class="contacts__icon" @click="copyText(item.text)">
                                    <CopyIcon />
                                </span>
                            </div>
                            <p class="contacts__text" v-if="!item.link">{{ item.text }}</p>
                            <a :href="item.link" class="contacts__link" v-else>{{ item.text }}</a>
                            <a v-if="item.button && Object.keys(item.button).length !== 0" :href="item.button.link" class="contacts__link-button">
                                {{ item.button.text }}
                            </a>
                        </div>
                        <div class="contacts__buttons">
                            <a :href="button.link" 
                                class="contacts__buttons-link" 
                                v-for="button in socials" 
                                :key="button"
                                :class="button.background"
                            >
                            <span class="contacts__button-icon">
                                <Component :is="button.icon" />
                            </span>
                            <p class="contacts__button-text">{{ button.text }}</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="contacts__right">
                    <div class="contacts__map">
                        <iframe class="contacts__map-frame" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c3586bd86f71ed3635e78f9b585d9f713b4e1c82a930be6350a4f2e365c3586&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { toast } from 'vue3-toastify'
    import 'vue3-toastify/dist/index.css';

    const CopyIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Copy.vue'));

    const TelegramIcon = defineAsyncComponent(() => import('@/shared-ui/icons/contacts/Telegram.vue'));
    const WhatsAppIcon = defineAsyncComponent(() => import('@/shared-ui/icons/contacts/WhatsApp.vue'));

    const props = defineProps({
        content: {
            type: Object,
            required: true
        }
    })

    const contacts = ref([
        {
            title: 'Телефон',
            text: props.content.phone,
            link: `tel:${props.content.phone}`,
        },
        {
            title: 'Почта',
            text: props.content.email,
            link: `mailto:${props.content.email}`,
        },
        {
            title: 'Адрес офиса',
            text: '196006 г. Санкт-Петербург, ул. Цветочная д.16 стр.1, БЦ «Осипофф»',
            button: {
                text: 'построить маршрут',
                link: 'https://yandex.uz/maps/org/pultra/177512902634/?ll=30.331948%2C59.888212&z=16'
            }
        },
        {
            title: 'Адрес производства',
            text: props.content.addressProduction,
            button: {
                text: 'построить маршрут',
                link: 'https://yandex.uz/maps/org/pultra/71489535108/?ll=30.050182%2C59.557155&z=16'
            }
        }
    ]);

    const socials = ref([
        {
            text: 'Написать в WhatsApp',
            icon: WhatsAppIcon,
            link: props.content.whatsapp,
            background: 'green'
        },
        {
            text: 'Написать в Telegram',
            icon: TelegramIcon,
            link: props.content.telegram,
            background: 'blue'
        }
    ])

    const copyText = async (text) => {
        await navigator.clipboard.writeText(text);

        toast.success(`${text} скопированно успешно`, {
            autoClose: 1000,
            icon: h('img', { 
                src: '/images/contacts/icon.png', 
                style: 'width: 20px; height: 20px;' 
            })
        });
    }

</script>

<style scss>
    @import '@/assets/styles/ui/shared/pages/contacts/contacts.scss';
</style>


