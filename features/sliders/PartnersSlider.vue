<template>
    <div class="project__swiper-container">
        <Swiper
            :modules="modules"
            :slides-per-view="slidesCount"
            :space-between="10"
            :loop="true"
            :speed="2000"
            :autoplay="{
                delay: 0,
                disableOnInteraction: false
            }"
            :allow-touch-move="false"
            :pagination="{ el: '.project__swiper-pagination', clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="project__swiper swiper-fix"
        >
            <SwiperSlide
                v-for="(image, index) in partnersLogoList"
                :key="index"
                class="project__swiper-slide swiper-slide"
            >
                <img loading="lazy"  preset="default" format="webp" preload fetchpriority="high"  :src="image" alt="Компания партнёр" class="project__swiper-image" >
            </SwiperSlide>

            <div class="project__swiper-pagination swiper-pagination"></div>
        </Swiper>
    </div>
</template>

<script setup>
    const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper));
    const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide));
    
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    const slidesCount = ref(4);

    onMounted(() => {
        if (window.innerWidth < 750) {
            slidesCount.value = 2;
        }
    })

    const onSwiper = (swiper) => {
        console.log('Swiper instance:', swiper);
    }

    const onSlideChange = () => {
        console.log('Slide changed');
    }

    const partnersLogoList = ref([
        '/images/partners/logo.png',
        '/images/partners/logo-1.png',
        '/images/partners/logo-2.png',
        '/images/partners/logo-3.png',
        '/images/partners/logo-4.png',
        '/images/partners/logo-5.png',
    ])
</script>


