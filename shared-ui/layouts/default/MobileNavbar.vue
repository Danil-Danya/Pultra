<template>
    <section class="navbar">
        <div class="navbar__mobile">
            <div class="container">
                <div class="navbar__mobile-content">
                    <div class="navbar__left">
                        <div class="navbar__menu-icon" @click="openNav">
                            <TransitionGroup name="fade">
                                <Menu v-show="!isOpenNav"/>
                                <Cross v-show="isOpenNav" />
                            </TransitionGroup>
                        </div>
                        <div class="logo">
                            <a href="/" class="navbar__logo-link">
                                <img loading="lazy"  src="@/assets/images/logos/logo.svg" alt="Логотип" class="navbar__logo-img">
                            </a>
                        </div>
                    </div>
                    <div class="navbar__right">
                        <div class="navbar__contacts">
                            <div class="navbar__contacts-button">
                                <Button color="orange" class="navbar__button">
                                    <template #icon>
                                        <span class="navbar__button-icon">
                                            <Phone />
                                        </span>
                                    </template>
                                </Button>
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
            <Transition name="mobile__nav">
                <NavbarNavMobile v-show="isOpenNav" />
            </Transition>
        </div>
    </section>
</template>

<script setup>
    import Button from '@/shared-ui/ui/Button.vue';
    import NavbarNavMobile from '@/widgets/layouts/NavbarNavMobile.vue';

    const Menu = defineAsyncComponent(() => import('@/shared-ui/icons/navbar/Menu.vue'));
    const Cross = defineAsyncComponent(() => import('@/shared-ui/icons/navbar/Cross.vue'));
    const Phone = defineAsyncComponent(() => import('@/shared-ui/icons/navbar/Phone.vue'));

    const navContacts = ref([
        { link: 'tel:88005555555', text: '8 800 555-55-55' },
        { link: 'mailto:info@pultra.ru', text: 'info@pultra.ru' }
    ])

    const isOpenNav = ref(false);

    const openNav = () => {
        const body = document.querySelector('body');

        isOpenNav.value = !isOpenNav.value;
        isOpenNav.value ? body.style.overflow = 'hidden' : body.style.overflow = 'visible';
    }
</script>
