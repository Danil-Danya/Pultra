<template>
    <div class="application__slider-con">
        <div class="application__slider-container">
            <div class="application__slider-preview">
                <div class="application__slider-preview-text">
                    <h2 class="application__title title">{{ title }}</h2>
                </div>
                <div class="application__slider-preview-button">
                    <button class="application__slider-button application__slider-button-prev">
                        <span class="application__slider-button-icon">
                            <PrevIcon />
                        </span>
                    </button>
                    <button class="application__slider-button application__slider-button-next">
                        <span class="application__slider-button-icon">
                            <NextIcon />
                        </span>
                    </button>
                </div>
            </div>
            <div class="application__slider">
                <Swiper 
                    :modules="modules"
                    :slides-per-view="slidesCount"
                    :space-between="0"
                    :loop="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    class="application__slider-swiper"
                    :navigation="{
                        nextEl: '.application__slider-button-next',
                        prevEl: '.application__slider-button-prev'
                    }"
                    :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false
                    }"
                >
                    <SwiperSlide class="application__slider-slide" v-for="_card in 10" :key="_card">
                        <ApplicationCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>


<script setup>

    const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper));
    const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide));

    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    import ApplicationCard from '@/widgets/catalog/card/ApplicationCard.vue';

    const PrevIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Prev.vue'));
    const NextIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Next.vue'));

    const slidesCount = ref(4);

    const modules = [Navigation, Autoplay];

    const onSwiper = (swiper) => {
        console.log('Swiper instance:', swiper);
    }

    const onSlideChange = () => {
        console.log('Slide changed');
    }

     onMounted(() => {
        const width = window.innerWidth;

        switch (true) {
            case width < 480:
                slidesCount.value = 1;
                break;
            case width < 750:
                slidesCount.value = 2;
                break;
            case width < 1445:
                slidesCount.value = 3;
                break;
            default:
                slidesCount.value = 4;
                break;
        }
    })

    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })

</script>
