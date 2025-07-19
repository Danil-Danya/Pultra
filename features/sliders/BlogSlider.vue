<template>
    <div class="blog__slider">
        <div class="blog__slider-container">
            <div class="blog__slider-preview">
                <div class="blog__slider-preview-text">
                    <h2 class="blog__title title">Полезные статьи</h2>
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
                    <SwiperSlide class="blog__slider-slide" v-for="_card in 10" :key="_card">
                        <Card 
                            :image="card.image"
                            :date="card.date"
                            :title="card.title"
                            :text="card.text"
                            :link="card.link"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    import Card from '@/widgets/sections/blog/card/Card.vue';
    
    const PrevIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Prev.vue'));
    const NextIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Next.vue'));

    const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    const slidesCount = ref(4);

    onMounted(() => {
        const width = window.innerWidth;

        switch (true) {
            case width < 480:
                slidesCount.value = 1;
                break;
            case width < 750:
                slidesCount.value = 2;
                break;
            case width < 1024:
                slidesCount.value = 3;
                break;
            default:
                slidesCount.value = 4;
                break;
        }
    })

    const card = ref({
        image: 'images/blog/ph.png',
        date: '[01.01.25]',
        title: 'Компания завершила обследование и проектирование кабельных трасс здании ПМУ',
        text: 'Учитывая сильноагрессивную среду в здании, замена кабельных трасс на стеклопластиковые лотки позволит заказчику навсегда вычеркнуть статью расходов, связанную с остановкой цеха и замены лотков. Служба эксплуатации не будет постоянно устранять аварии и станет работать в стандартном режиме. ',
        link: '#'
    })

    const onSwiper = (swiper) => {
        console.log('Swiper instance:', swiper);
    }

    const onSlideChange = () => {
        console.log('Slide changed');
    }

</script>
