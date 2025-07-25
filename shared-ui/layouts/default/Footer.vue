<template>
    <section class="footer__content">
        <div class="footer__left">
            <div class="footer__logo-container">
                <NuxtLink to="/" class="footer__logo-text">
                    <NuxtImg preset="default"  format="webp" src="/images/logos/logo-footer.svg" alt="Логотип" class="footer__logo-img" />
                </NuxtLink>
            </div>
            <div class="footer__button-container">
                <span class="footer__button-icon" v-for="link in socialLinks" :key="link">
                    <a :href="link.link" class="footer__button-icon-link">
                        <Component :is="link.component" />
                    </a>
                </span>
                <Button class="footer__button-btn" text="Заказать звонок" />
            </div>
            <div class="footer__address-container">
                <p class="footer__address-text">Санкт-Петербург, ул. Цветочная д.16 стр.1, БЦ «Осипофф»</p>
            </div>
            <div class="footer__contacts-container">
                <a :href="link.link" class="footer__contacts-link" v-for="link in contactLinks" :key="link">{{ link.text }}</a>
                <a href="https://kls-digital.ru/" class="footer__links-creator" v-show="isMobile">Разработка сайта KLS Digital</a>
            </div>
        </div>
        <div class="footer__right">
            <div class="footer__links-container">
                <div class="footer__links-item footer__links-site">
                    <h3 class="footer__links-title">Главная</h3>
                    <ul class="footer__links-list">
                        <li class="footer__links-li" v-for="link in siteLinks" :key="link">
                            <NuxtLink :to="link.link" class="footer__links-link">{{ link.text }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="footer__links-item footer__links-product">
                    <h3 class="footer__links-title">продукция</h3>
                    <ul class="footer__links-list">
                        <li class="footer__links-li" v-for="link in productLinks" :key="link">
                            <NuxtLink :to="link.link" class="footer__links-link">{{ link.text }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="footer__links-item footer__links-product-and-design">
                    <h3 class="footer__links-title">Конструкции и изделия</h3>
                    <ul class="footer__links-list">
                        <li class="footer__links-li" v-for="link in designsAndProducts" :key="link">
                            <NuxtLink :to="link.link" class="footer__links-link">{{ link.text }}</NuxtLink>
                        </li>
                    </ul>
                    <a href="https://kls-digital.ru/" class="footer__links-creator" v-show="!isMobile">Разработка сайта KLS Digital</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Button from '@/shared-ui/ui/Button.vue';

    const TelegramIcon = defineAsyncComponent(() => import('@/shared-ui/icons/social/Telegram.vue'));
    const WhatsappIcon = defineAsyncComponent(() => import('@/shared-ui/icons/social/Whatsapp.vue'));

    const isMobile = ref(false);

    const checkInMobile = () => {
        const width = window.innerWidth;

        if (width < 1020) {
            isMobile.value = true;
        }
    }

    onMounted(() => {
        checkInMobile();
    })

    const socialLinks = ref([
        {
            link: 'https://instagram.com',
            component: WhatsappIcon
        },
        {
            link: 'https://t.me',
            component: TelegramIcon
        }
    ]);

    const contactLinks = ref([
        {
            text: '8 800 555-55-55',
            link: 'tel:88005555555'
        },
        {
            text: 'info@pultra.ru',
            link: 'mailto:info@pultra.ru'
        }
    ]);

    const siteLinks = ref([
        {
            text: 'О компании',
            link: '/about'
        },
        {
            text: 'Производство',
            link: '/production'
        },
        {
            text: 'Карьера',
            link: '/career'
        },
        {
            text: 'Сотрудничество',
            link: '/cooperation'
        },
        {
            text: 'Контакты',
            link: '/contacts'
        },
        {
            text: 'Документация',
            link: '/docs'
        },
        {
            text: 'Проектировщикам',
            link: '/designers'
        },
        {
            text: 'Сертификаты',
            link: '/certificates'
        },
        {
            text: 'Услуги',
            link: '/services'
        },
        {
            text: 'Проекты',
            link: '/projects'
        }
    ]);

    const designsAndProducts = ref([
        {
            text: 'Композитный профиль',
            link: '/products/profile'
        },
        {
            text: 'Композитные настилы',
            link: '/products/decks'
        },
        {
            text: 'Листы композитные',
            link: '/products/sheets'
        },
        {
            text: 'Перильные ограждения',
            link: '/products/railings'
        },
        {
            text: 'Площадки обслуживания',
            link: '/products/platforms'
        },
        {
            text: 'Кабеленесущие системы',
            link: '/products/cable-systems'
        },
        {
            text: 'Шумозащитные экраны',
            link: '/products/noise-barriers'
        },
        {
            text: 'Лестничные сходы',
            link: '/products/stairs'
        },
        {
            text: 'Лестницы и лестничные марши',
            link: '/products/staircases'
        },
        {
            text: 'Столбы, опоры, мачты',
            link: '/products/poles'
        },
        {
            text: 'Смотровые ходы',
            link: '/products/inspection-paths'
        },
        {
            text: 'Вентиляция',
            link: '/products/ventilation'
        }
    ]);

    const productLinks = ref([
        {
            text: 'Проектировщикам',
            link: '/designers'
        },
        {
            text: 'Сертификаты',
            link: '/certificates'
        },
        {
            text: 'Документация',
            link: '/docs'
        },
        {
            text: 'Статьи',
            link: '/articles'
        }
    ]);




</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/layout/footer.scss';
</style>
