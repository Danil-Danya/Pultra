<template>
    <section class="solution">
        <div class="container">
            <div class="solution__content">
                <div class="solution__card" v-for="card in solutionList" :key="card">
                    <img :src="card.image" alt="icon" class="solution__card-img">
                    <h3 class="solution__card-title">{{ card.title }}</h3>
                    <p class="solution__card-text">{{ card.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import animateSolution from '@/plugins/animations/sections/solutions.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';

    useGsapCleanup();
    

    const solutionList = ref([
        {
            title: 'Прямые цены от производителя',
            text: 'Вы работаете без посредников и переплат — оптимальное соотношение цены и надежности.',
            image: '/images/solution/552ffe8dfff6f02e4dae14b9b7db5d3855325f73.png'
        },
        {
            title: 'Быстрая доставка по всей территории РФ и СНГ',
            text: 'Большой склад готовой продукции. Ваш заказ будет отгружен в день обращения любым удобным способом.',
            image: '/images/solution/6637ef46c5ee6b0752b69d80b51f1f9834153aa4.png'
        },
        {
            title: 'Собственное производство и контроль качества',
            text: 'Современные производственные линии, строгий контроль качества каждого этапа — от сырья до упаковки.',
            image: '/images/solution/8346c11eee5866c1189328ade47f891a12d23d3b.png'
        },
        {
            title: 'Гарантия производителя и поддержка',
            text: 'Предоставляем официальную гарантию производителя и сопровождаем каждого клиента на всех этапах сделки.',
            image: '/images/solution/dd1747e3a64ca800ea54f1faee29c0387cf4437a.png'
        },
        {
            title: 'Изготавливаем по вашему индивидуальному проекту',
            text: 'При производстве точно следуем технической документации. Даже самые нестандартные решения — не проблема.',
            image: '/images/solution/44f0756d9b7e4e5377ecb319459517d999581f10.png'
        },
        {
            title: 'Готовые сертифицированные конструкционные решения',
            text: 'В ассортименте есть готовые типовые сертифицированные решения конструкций и изделий из композитных материалов.',
            image: '/images/solution/b23c4e4491754a6ddc7e9ce8eacbf4f1483d2bfb.png'
        }
    ]);

    onMounted(() => {
        setTimeout(() => {
            animateSolution();
        }, 100);
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/index/solutions.scss';
</style>