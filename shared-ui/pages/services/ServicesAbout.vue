<template>
    <section class="services__about">
        <div class="container">
            <div class="services__about-content">
                <h1 class="title services__about-title">услуги Проектировщикам</h1>
            </div>
            <div class="services__about-container">
                <Card v-for="card in servicesData"
                    :key="card"
                    :title="card.title"
                    :image="card.image"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Card from '@/widgets/services/card/Card.vue';

    const servicesData = ref([
        {
            title: 'Помощь в расчёте и проектировании наших решений',
            image: 'images/services/ph.png'
        },
        {
            title: 'Проведение выездных презентаций и обучений',
            image: 'images/services/ph-1.png'
        },
        {
            title: 'Предоставление динамических блоков для Autodesk AutoCAD',
            image: 'images/services/ph-2.png'
        },
        {
            title: 'Предоставление семейств продукции для Autodesk Revit',
            image: 'images/services/ph-3.png'
        },
        {
            title: 'Предоставление альбома типовых решений',
            image: 'images/services/ph-4.png'
        },
        {
            title: 'Просто услуга для заполнения',
            image: 'images/services/ph-1.png'
        },
    ])

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/services/services-about.scss';
</style>
