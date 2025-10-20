<template>
    <section class="navbar">
        <div class="container">
            <div class="navbar__content">
                <div class="navbar__left">
                    <div class="logo">
                        <a href="/" class="navbar__logo-link">
                            <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  src="/images/logos/logo.svg" alt="Логотип" class="navbar__logo-img" />
                        </a>
                    </div>
                    <nav class="nav">
                        <ul class="navbar__list">
                            <li class="navbar__li" 
                                v-for="(link, index) in navList" 
                                :key="link.text" 
                                @mouseover="showDropdownByHover(link.type, index, true)" 
                                @mouseleave="showDropdownByHover(link.type, index, false)"
                                @click.prevent.stop="showDropdownByClick(link.type, index)"
                            >
                                <NuxtLink 
                                    :to="link.path !== '\/' ? `${link.path}/` : null"
                                    class="navbar__link" 
                                    :class="link.text === 'Меню' ? 'navbar__link-menu' : null"
                                >
                                    <span v-if="link.icon && link.text === 'Меню'" class="navbar__link-menu">
                                        <Component :is="link.icon" />
                                    </span>
                                    <p class="navbar__link-text">{{ link.text }}</p>
                                    <span v-if="link.icon && link.text !== 'Меню'" class="navbar__link-icon">
                                        <Component :is="link.icon" />
                                    </span>
                                </NuxtLink>
                                <Transition name="dropdown">
                                    <NavbarDropdown 
                                        v-if="link.subListShow"
                                        :list="link.subList" 
                                    />
                                </Transition>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="navbar__right">
                    <div class="navbar__lang">
                        <a href="" class="navbar__lang-link">Ру</a>
                        <span class="navbar__lang-icon"><Divis /></span>
                        <a href="" class="navbar__lang-link navbar__lang-link-off">En</a>
                    </div>
                    <div class="navbar__contacts">
                        <div class="navbar__contacts-social">
                            <span class="navbar__social-icon" v-for="icon in navSocials" :key="icon">
                                <a :href="icon.link" class="navbar__social-link">
                                    <Component :is="icon.icon" />
                                </a>
                            </span>
                        </div>
                        <div class="navbar__contacts-button">
                            <Button color="orange" text="Заказать звонок" class="navbar__button" @click="toggleModal" />
                            <ClientOnly>
                                <Transition name="modal" appeear>
                                    <FormModal v-if="isShowModal"
                                        @close-modal="toggleModal"
                                        title="Заказать звонок"
                                        text="Получите консультацию экспертов нашей компании"
                                    />
                                </Transition>
                            </ClientOnly>
                        </div>
                        <div class="navbar__contacts-info">
                            <ul class="navbar__contacts-list">
                                <li class="navbar__contacts-li" v-for="link in navContacts" :key="link">
                                    <a :href="link.link" class="navbar__contacts-link">{{ link.text }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';
    import { usePagesStore } from '@/entities/pages/store';

    import Button from '@/shared-ui/ui/Button.vue';
    import NavbarDropdown from '@/widgets/layouts/NavbarDropdown.vue';

    const Whatsapp = defineAsyncComponent(() => import('@/shared-ui/icons/social/Whatsapp.vue'));
    const Telegram = defineAsyncComponent(() => import('@/shared-ui/icons/social/Telegram.vue'));
    const Chevron = defineAsyncComponent(() => import('@/shared-ui/icons/navbar/Chevron.vue'));
    const Divis = defineAsyncComponent(() => import('@/shared-ui/icons/navbar/Divis.vue'));
    const Menu = defineAsyncComponent(() => import('@/shared-ui/icons/navbar/Menu.vue'));

    const FormModal = defineAsyncComponent(() => import('@/features/modals/FormModal.vue'));

    const isShowModal = ref(false);

    const toggleModal = () => {
        isShowModal.value = !isShowModal.value
    }

    const pagesStore = usePagesStore();
    await pagesStore.fetchMenu('main');

    const navList = ref(pagesStore.menu);

    navList.value[0].icon = Menu;
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

    const showDropdownByHover = (type, index, isOpen) => {
        if (type === 'catalog') {
            navList.value[0].subListShow = false;
            navList.value[index].subListShow = isOpen;
        }
    }

    const showDropdownByClick = (type, index) => {
        if (type === 'menu') {
            navList.value[index].subListShow = !navList.value[index].subListShow;
        }
    }

    const closeDropDownByClickToBody = () => {
        if (navList.value[0].subListShow) {
            navList.value[0].subListShow = false;
        }
    }

    onMounted(() => {
        document.querySelector('body').addEventListener('click', (event) => {
            // event.preventDefault();
            // event.stopPropagation();

            closeDropDownByClickToBody();
        })
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/layout/navbar.scss';
</style>