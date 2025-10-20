<template>
    <div class="navbar__window">
        <nav class="nav">
             <ul class="navbar__list-mobile">
                <li 
                    class="navbar__li" 
                    v-for="(link, index) in navList" 
                    :key="link.text"
                >
                    <div 
                        class="navbar__link" 
                        @click="toggleSubMenu(index, link)"
                        v-if="link.subList"
                    >
                        <p class="navbar__link-text">{{ link.text }}</p>
                        <span v-if="link.icon" class="navbar__link-icon">
                            <Component :is="link.icon" />
                        </span>
                    </div>

                    <Router-link 
                        :to="link.path"
                        class="navbar__link" 
                        @click="toggleSubMenu(index, link)"
                        v-else
                    >
                        <p class="navbar__link-text">{{ link.text }}</p>
                        <span v-if="link.icon" class="navbar__link-icon">
                            <Component :is="link.icon" />
                        </span>
                    </Router-link >

                    <Transition name="dropdown">
                        <ul v-if="link.subList && link.subListShow" class="navbar__sublist">
                            <li 
                                v-for="sub in link.subList" 
                                :key="sub.text" 
                                class="navbar__sublist-li"
                            >
                                <NuxtLink :to="`${sub.link}/`" class="navbar__link">
                                    {{ sub.text }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </Transition>
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

    import { usePagesStore } from '@/entities/pages/store';

    const pagesStore = usePagesStore();
    await pagesStore.fetchMenu('main');

    const navList = ref(pagesStore.menu);

    navList.value[0].icon = Chevron;
    navList.value[1].icon = Chevron;
    navList.value[2].icon = Chevron;

    const navSocials = ref([
        { link: 'https://t.me/vasiliy_kls', icon: Whatsapp },
        { link: 'https://t.me/vasiliy_kls', icon: Telegram },
    ])

    const navContacts = ref([
        { link: 'tel:88005555555', text: '8 800 555-55-55' },
        { link: 'mailto:info@pultra.ru', text: 'info@pultra.ru' }
    ])

    const toggleSubMenu = (index, link) => {
        if (link.subList) {
            navList.value.forEach((item, i) => {
                item.subListShow = i === index ? !item.subListShow : false;
            });
        }
    };

    const closeAll = (e) => {
        if (!e.target.closest('.navbar__li')) {
            navList.value.forEach(item => (item.subListShow = false));
        }
    };

    onMounted(() => document.addEventListener('click', closeAll));
    onBeforeUnmount(() => document.removeEventListener('click', closeAll));

</script>
