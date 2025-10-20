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
                <SwiperSlide class="presentation__slider-slide" v-for="item in galery" :key="item">
                    <img 
                        loading="lazy" 
                        class="presentation__slider-img" 
                        :src="item.url" 
                        :alt="item.alt" 
                        format="webp" preload fetchpriority="high" 
                        style="cursor: pointer;"
                        @click="toggleImgModal(
                            item?.url,
                            item?.alt
                        )"
                    >
                </SwiperSlide>
            </Swiper>
            <div class="presentation__slider-navigation">
                <button class="presentation__slider-button presentation__slider-button-prev">
                    <span class="presentation__slider-button-icon">
                        <PrevIcon />
                    </span>
                </button>
                <button class="presentation__slider-button" v-for="(item, index) in galery" :key="item" ref="slides" @click="toggleActiveSlide(index)">
                    <img loading="lazy"  class="presentation__slider-button-img" :src="item.preview" alt="Слайдер картинка" format="webp" preload fetchpriority="high">
                </button>
                <button class="presentation__slider-button" @click="show3DModal" v-if="model">
                    <img loading="lazy"  class="presentation__slider-button-img" :src="model.preview" alt="Слайдер картинка" format="webp" preload fetchpriority="high">
                    <span class="presentation__slider-button-icon-absolute">
                        <ThreeDIcon />
                    </span>
                </button>
                <button class="presentation__slider-button" @click="showVideoModal" v-if="video">
                    <img loading="lazy"  class="presentation__slider-button-img" :src="video.preview" alt="Слайдер картинка" format="webp" preload fetchpriority="high">
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
        <TransitionGroup name="modal" appeear>
            <VideoPlayerModal :videoUrl="video.url" v-if="isShowVideoModal" @closeModal="showVideoModal" />
            <Player3DModal :modelUrl="model.url" v-if="isShow3DModal" @closeModal="show3DModal" />
        </TransitionGroup>
    </ClientOnly>
    <ClientOnly>
            <Transition name="modal" appeear>
                <ImgModal v-if="isShowImgModal"
                    @click="toggleImgModal"
                    :src="zoomedImage?.src"
                    :alt="zoomedImage?.alt || 'картинка'"
                />
            </Transition>
    </ClientOnly>
</template>

<script setup>

    const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper));
    const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide));

    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    import VideoPlayerModal from '@/features/modals/Player.vue';
    import Player3DModal from '@/features/modals/3DPlayer.vue';
    import ImgModal from '~/features/modals/ImgModal.vue';
    
    const PrevIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Prev.vue'));
    const NextIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Next.vue'));
    const ThreeDIcon = defineAsyncComponent(() => import('@/shared-ui/icons/presentation/3D.vue'));
    const VideoIcon = defineAsyncComponent(() => import('@/shared-ui/icons/presentation/Video.vue'));
    
    const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    const isShowImgModal = ref(false);
    const zoomedImage = ref({});

    const toggleImgModal = (src, alt) => {
        zoomedImage.value.src = src;
        zoomedImage.value.alt = alt;

        isShowImgModal.value = !isShowImgModal.value;
    }
    
    const props = defineProps({
        galery: {
            type: Array,
            required: true,
        },

        model: {
            type: Object,
            required: false,
        },

        video: {
            type: Object,
            required: false,
        }
    })

    console.log(props.model);
    

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

