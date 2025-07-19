<template>
    <div class="navbar__window">
        <nav class="nav">
            <ul class="navbar__list-mobile">
                <li class="navbar__li" 
                    v-for="(link, index) in navList" 
                    :key="link.text" 
                >
                    <NuxtLink  
                        :to="link.path" 
                        class="navbar__link" 
                    >
                        <p class="navbar__link-text">{{ link.text }}</p>
                        <span v-if="link.icon" class="navbar__link-icon">
                            <Component :is="link.icon" />
                        </span>
                    </NuxtLink>
                </li>
            </ul>
            <div class="navbar__window-lang">
                <a href="" class="navbar__lang-link">Ру</a>
                <span class="navbar__lang-icon"><Divis /></span>
                <a href="" class="navbar__lang-link navbar__lang-link-off">En</a>
            </div>
            <div class="navbar__window-address">
                <p class="navbar__window-text">Санкт-Петербург, ул. Цветочная д.16 стр.1, БЦ «Осипофф»</p>
            </div>
            <div class="navbar__window-contacts">
                <ul class="navbar__contacts-list">
                    <li class="navbar__contacts-li" v-for="link in navContacts" :key="link">
                        <a :href="link.link" class="navbar__contacts-link">{{ link.text }}</a>
                    </li>
                </ul>
            </div>
            <div class="navbar__window-socials">
                <span class="navbar__social-icon" v-for="icon in navSocials" :key="icon">
                    <a :href="icon.link" class="navbar__social-link">
                        <Component :is="icon.icon" />
                    </a>
                </span>
            </div>
        </nav>
    </div>
</template>

<script setup>

    const Chevron = defineAsyncComponent(() => import('@/shared-ui/icons/navbar/Chevron.vue'));
    const Whatsapp = defineAsyncComponent(() => import('@/shared-ui/icons/social/Whatsapp.vue'));
    const Telegram = defineAsyncComponent(() => import('@/shared-ui/icons/social/Telegram.vue'));

    const navList = ref([
        {
            text: 'Меню',
            type: 'menu',
            icon: Chevron,
            subListShow: false,
            subList: [
                { text: 'О компании', link: '/about' },
                { text: 'Карьера', link: '/career' },
                { text: 'Документация', link: '/docs' },
                { text: 'Сертификаты', link: '/certificates' },
                { text: 'Сотрудничество', link: '/cooperation' },
                { text: 'Статьи', link: '/blog' }
            ]
        },
        {
            text: 'Продукция',
            icon: Chevron,
            type: 'catalog',
            subListShow: false,
            subList: [
                { text: 'Композитный профиль', link: '/products/profile' },
                { text: 'Композитные настилы', link: '/products/decks' },
                { text: 'Листы композитные', link: '/products/sheets' }
            ]
        },
        {
            text: 'Конструкции и изделия',
            icon: Chevron,
            type: 'catalog',
            subListShow: false,
            subList: [
                { text: 'Перильные ограждения', link: '/designs/railings' },
                { text: 'Площадки обслуживания', link: '/designs/platforms' },
                { text: 'Кабеленесущие системы', link: '/designs/cable-systems' },
                { text: 'Шумозащитные экраны', link: '/designs/noise-barriers' },
                { text: 'Лестничные сходы', link: '/designs/stairs' },
                { text: 'Лестницы и марши', link: '/designs/ladder-flights' },
                { text: 'Столбы, опоры, мачты', link: '/designs/poles' },
                { text: 'Смотровые ходы', link: '/designs/service-ways' },
                { text: 'Вентиляция', link: '/designs/ventilation' }
            ]
        },
        { text: 'Проектировщикам', path: '/designers' },
        { text: 'Проекты', path: '/projects' },
        { text: 'Контакты', path: '/contacts' }
    ])

    const navSocials = ref([
        { link: 'https://t.me/vasiliy_kls', icon: Whatsapp },
        { link: 'https://t.me/vasiliy_kls', icon: Telegram },
    ])

    const navContacts = ref([
        { link: 'tel:88005555555', text: '8 800 555-55-55' },
        { link: 'mailto:info@pultra.ru', text: 'info@pultra.ru' }
    ])

</script>
