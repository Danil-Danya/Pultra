<template>
    <div class="scope__slider-con">
        <div class="scope__content">
            <div class="scope__info">
                <h2 class="title scope__title">Сферы применения <span class="orange">композитных материалов</span></h2>
            </div>
            <div class="scope__slider-preview-button">
                <button class="scope__slider-button scope__slider-button-prev">
                    <span class="scope__slider-button-icon">
                        <PrevIcon />
                    </span>
                </button>
                <button class="scope__slider-button scope__slider-button-next">
                    <span class="scope__slider-button-icon">
                        <NextIcon />
                    </span>
                </button>
            </div>
        </div>
        <div class="scope__slider">
            <Swiper 
                :modules="modules"
                :slides-per-view="slidesCount"
                :space-between="10"
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                class="scope__slider-swiper"
                :navigation="{
                    nextEl: '.scope__slider-button-next',
                    prevEl: '.scope__slider-button-prev'
                }"
                :autoplay="{
                    delay: 2000,
                    disableOnInteraction: false
                }"
            >
                <SwiperSlide class="scope__slider-slide" v-for="card in cardList" :key="card">
                    <Card 
                        :image="card.image"
                        :title="card.title"
                        :index="card.index"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>

    const Swiper = defineAsyncComponent(() => import('swiper/vue').then(m => m.Swiper));
    const SwiperSlide = defineAsyncComponent(() => import('swiper/vue').then(m => m.SwiperSlide));

    const PrevIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Prev.vue'));
    const NextIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Next.vue'));

    const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    import Card from '@/widgets/scope/cards/Card.vue';

    const slidesCount = ref(4);

    const cardList = ref([
        {
            index: '01',
            title: 'СТРОИТЕЛЬСТВО',
            image: '/images/scope/ph.png'
        },
        {
            index: '02',
            title: 'ПРОМЫШЛЕННОСТЬ',
            image: '/images/scope/ph-1.png'
        },
        {
            index: '03',
            title: 'ЭНЕРГЕТИКА',
            image: '/images/scope/ph-2.png'
        },
        {
            index: '04',
            title: 'ИНФРАСТРУКТУРА РЖД',
            image: '/images/scope/ph-3.png'
        },
        {
            index: '05',
            title: 'ХИМИЧЕСКАЯ ПРОМЫШЛЕННОСТЬ',
            image: '/images/scope/ph-4.png'
        },
        {
            index: '06',
            title: 'ЖКХ',
            image: '/images/scope/ph-5.png'
        },
        {
            index: '07',
            title: 'МОРСКАЯ СФЕРА',
            image: '/images/scope/ph-6.png'
        },
        {
            index: '08',
            title: 'АГРАРНЫЙ СЕКТОР',
            image: '/images/scope/ph-7.png'
        },
        {
            index: '09',
            title: 'ЭНЕРГОСЕТИ',
            image: '/images/scope/ph-8.png'
        },
        {
            index: '10',
            title: 'ГОРОДСКАЯ СРЕДА',
            image: '/images/scope/ph-9.png'
        },
        {
            index: '11',
            title: 'ОЧИСТНЫЕ СООРУЖЕНИЯ',
            image: '/images/scope/ph-10.png'
        },
        {
            index: '12',
            title: 'ДОРОГИ И МОСТЫ',
            image: '/images/scope/ph (3).png'
        }
    ])


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

    const onSwiper = (swiper) => {
        console.log('Swiper instance:', swiper);
    }

    const onSlideChange = () => {
        console.log('Slide changed');
    }

</script>