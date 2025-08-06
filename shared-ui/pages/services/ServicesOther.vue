<template>
    <section class="services__other">
        <div class="container">
            <div class="services__other-content">
                <h2 class="services__other-title">другие услуги</h2>
            </div>
            <div class="services__other-container">
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
    @import '@/assets/styles/ui/shared/pages/services/services-other.scss';
</style>