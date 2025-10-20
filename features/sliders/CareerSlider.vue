<template>
    <div class="career__slider" v-if="content">
        <Swiper 
            v-if="content.length"
            :modules="modules"
            :slides-per-view="slidesCount"
            :space-between="0"
            
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="career__slider-swiper"
            :navigation="{
                nextEl: '.career__slider-button-next',
                prevEl: '.career__slider-button-prev'
            }"
            :autoplay="{
                delay: 2000,
                disableOnInteraction: false
            }"
        >
            <SwiperSlide class="career__slider-slide" v-for="item in content" :key="item">
                <Card 
                    :conditions="[item.experience, item.workingTime]"
                    :title="item.title"
                    :price="item.price"
                    :image="item.imageThumbnail"
                    :link="item.slug"
                />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>

    const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper));
    const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide));
    
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    import Card from '@/widgets/sections/vacancies/card/Card.vue';

    const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    const slidesCount = ref(3);

    const props = defineProps ({
        content: {
            type: Array,
            required: true
        }
    })

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
                default:
                    slidesCount.value = 3;
                    break;
            }
            
            console.log(width);
            console.log(slidesCount.value);
        }, 1000);
    })

    const onSwiper = (swiper) => {
        console.log('Swiper instance:', swiper);
    }

    const onSlideChange = () => {
        console.log('Slide changed');
    }

</script>
