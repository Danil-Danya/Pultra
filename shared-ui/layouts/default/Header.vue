<template>
    <section class="header__content">
        <div class="container">
            <div class="header__image-container">
                <!-- <img src="/images/header/header-bg.webp" alt="Задний фон" class="header__image-img" ref="image" loading="eager" fetchpriority="high"> -->
                <video 
                    src="@/assets/videos/pultra.mp4" 
                    class="header__image-img"  
                    autoplay muted playsinline 
                    loop preload="auto"
                    ref="image"
                >
                </video>
            </div>
            <div class="header__content-container">
                <div class="header__text-container">
                    <h2 class="header__title">
                        <p>Завод</p>
                        <p>композитных изделий</p>
                    </h2>
                    <p class="header__text">Разработка и производство композитных изделий и конструкций Индивидуальные проекты по вашему ТЗ</p>
                </div>
                <div class="header__button-container">
                    <Button link="/produkciya/" type="link" color="orange" text="Каталог продукции" class="header__button" />
                    <Button link="/izdeliya/" type="link" color="white" text="Каталог изделий и конструкций" class="header__button" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import animateHeader from '@/plugins/animations/sections/header.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';

    useGsapCleanup();

    const Button = defineAsyncComponent(() => import('@/shared-ui/ui/Button.vue'));

    const image = ref(null);
    
    const resizeImageWhenResizeDevice = () => {
        const innerWidth = window.innerWidth;
  
        if (image.value && innerWidth > 992) {
            image.value.style.width = innerWidth + 'px';
        }
    }

    onMounted(() => {
        resizeImageWhenResizeDevice();
        animateHeader();

        window.addEventListener(('resize'), (event) => {
            event.preventDefault();
            resizeImageWhenResizeDevice();
        })
    })
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/layout/header.scss';
</style>