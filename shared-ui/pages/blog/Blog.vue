<template>
    <section class="blog">
        <div class="container">
            <div class="blog__content">
                <h1 class="title blog__title">полезные статьи</h1>
            </div>
            <div class="blog__container">
                <Card 
                    v-for="_card in 12" 
                    :image="card.image"
                    :date="card.date"
                    :title="card.title"
                    :text="card.text"
                    :link="card.link"
                    :key="_card"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Card from '@/widgets/sections/blog/card/Card.vue';

    const { public: { siteBaseURL } } = useRuntimeConfig();

    const card = ref({
        image: siteBaseURL  + 'images/blog/ph.png',
        date: '[01.01.25]',
        title: 'Компания завершила обследование и проектирование кабельных трасс здании ПМУ',
        text: 'Учитывая сильноагрессивную среду в здании, замена кабельных трасс на стеклопластиковые лотки позволит заказчику навсегда вычеркнуть статью расходов, связанную с остановкой цеха и замены лотков. Служба эксплуатации не будет постоянно устранять аварии и станет работать в стандартном режиме. ',
        link: '#'
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/blog/blog.scss';
</style>
