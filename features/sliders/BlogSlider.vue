<template>
    <div class="blog__slider-con">
        <div class="blog__slider-container">
            <div class="blog__slider-preview">
                <div class="blog__slider-preview-text">
                    <h2 class="blog__slider-title title">{{ title }}</h2>
                </div>
                <div class="blog__slider-preview-button">
                    <button class="blog__slider-button blog__slider-button-prev">
                        <span class="blog__slider-button-icon">
                            <PrevIcon />
                        </span>
                    </button>
                    <button class="blog__slider-button blog__slider-button-next">
                        <span class="blog__slider-button-icon">
                            <NextIcon />
                        </span>
                    </button>
                </div>
            </div>
            <div class="blog__slider">
                <Swiper 
                    :modules="modules"
                    :slides-per-view="slidesCount"
                    :space-between="0"
                    :loop="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    class="blog__slider-swiper"
                    :navigation="{
                        nextEl: '.blog__slider-button-next',
                        prevEl: '.blog__slider-button-prev'
                    }"
                    :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false
                    }"
                >
                    <SwiperSlide class="blog__slider-slide" v-for="card in postStore.posts.data" :key="card">
                        <Card 
                            :image="card.imageFull"
                            :date="card.date"
                            :title="card.title"
                            :text="card.shortText"
                            :link="card.slug"
                        />
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

    import { usePostsStore } from '@/entities/posts/store.js';

    import Card from '@/widgets/sections/blog/card/Card.vue';

    const postStore = usePostsStore();
    await postStore.fetchAll();
    
    const PrevIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Prev.vue'));
    const NextIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Next.vue'));

    const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    const slidesCount = ref(4);

    onMounted(() => {
        setTimeout(() => {
            const width = window.innerWidth;

            switch (true) {
                case width < 480:
                    slidesCount.value = 1;
                    break;
                case width < 750:
                    slidesCount.value = 2;
                    break;
                case width < 1545:
                    slidesCount.value = 3;
                    break;
                default:
                    slidesCount.value = 4;
                    break;
            }
        }, 1000);
    })

    const props = defineProps({
        title: {
            type: String,
            default: 'Полезные статьи'
        }
    })

    const onSwiper = (swiper) => {
        console.log('Swiper instance:', swiper);
    }

    const onSlideChange = () => {
        console.log('Slide changed');
    }

</script>
