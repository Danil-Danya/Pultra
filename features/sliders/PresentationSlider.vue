<template>
    <div class="presentation__slider">
        <div class="presentation__slider-content">
            <Swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="0"
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                class="presentation__slider-swiper"
                :navigation="{
                    nextEl: '.presentation__slider-button-next',
                    prevEl: '.presentation__slider-button-prev'
                }"
                :autoplay="{
                    delay: 2000,
                    disableOnInteraction: false
                }"
            >
                <SwiperSlide class="presentation__slider-slide" v-for="item in 10" :key="item">
                    <NuxtImg class="presentation__slider-img" src="/images/presentation/ph.png" alt="Слайдер картинка" format="webp" />
                </SwiperSlide>
            </Swiper>
            <div class="presentation__slider-navigation">
                <button class="presentation__slider-button presentation__slider-button-prev">
                    <span class="presentation__slider-button-icon">
                        <PrevIcon />
                    </span>
                </button>
                <button class="presentation__slider-button" v-for="(item, index) in 4" :key="item" ref="slides" @click="toggleActiveSlide(index)">
                    <NuxtImg class="presentation__slider-button-img" src="/images/presentation/ph.png" alt="Слайдер картинка" format="webp" />
                </button>
                <button class="presentation__slider-button" @click="show3DModal">
                    <NuxtImg class="presentation__slider-button-img" src="/images/presentation/ph.png" alt="Слайдер картинка" format="webp" />
                    <span class="presentation__slider-button-icon-absolute">
                        <ThreeDIcon />
                    </span>
                </button>
                <button class="presentation__slider-button" @click="showVideoModal">
                    <NuxtImg class="presentation__slider-button-img" src="/images/presentation/ph.png" alt="Слайдер картинка" format="webp" />
                    <span class="presentation__slider-button-icon-absolute">
                        <VideoIcon />
                    </span>
                </button>
                <button class="presentation__slider-button presentation__slider-button-next">
                    <span class="presentation__slider-button-icon">
                        <NextIcon />
                    </span>
                </button>
            </div>
        </div>
    </div>
    <ClientOnly>
        <TransitionGroup name="modal" appear>
            <VideoPlayerModal v-if="isShowVideoModal" @closeModal="showVideoModal" />
            <Player3DModal v-if="isShow3DModal" @closeModal="show3DModal" />
        </TransitionGroup>
    </ClientOnly>
</template>

<script setup>

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    import Card from '@/widgets/sections/blog/card/Card.vue';

    import VideoPlayerModal from '@/features/modals/Player.vue';
    import Player3DModal from '@/features/modals/3DPlayer.vue';
    
    const PrevIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Prev.vue'));
    const NextIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Next.vue'));
    const ThreeDIcon = defineAsyncComponent(() => import('@/shared-ui/icons/presentation/3D.vue'));
    const VideoIcon = defineAsyncComponent(() => import('@/shared-ui/icons/presentation/Video.vue'));

    const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    const slider = ref(null);
    const slides = ref(null);

    const isShowVideoModal = ref(false);
    const isShow3DModal = ref(false);

    const emit = defineEmits(['closeModal']);

    const showVideoModal = () => {
        isShowVideoModal.value = !isShowVideoModal.value;
    }

    const show3DModal = () => {
        isShow3DModal.value = !isShow3DModal.value;
    }

    const onSwiper = (swiper) => {
        slider.value = swiper;
    }

    const toggleActiveSlide = (activeIndex) => {
        slides.value.forEach((slide, index) => {
            if (activeIndex === index) {
                console.log(activeIndex);
                
                slider.value.slideTo(activeIndex);
            }
        });
    }

    const onSlideChange = () => {
        console.log('Slide changed');
    }

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/slides/presentation-slide.scss';
</style>

