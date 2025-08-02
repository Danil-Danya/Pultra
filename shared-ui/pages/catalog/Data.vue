<template>
    <section class="data">
        <div class="container">
            <div class="data__container">
                <Tab :tabList="tabList" />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Tab from '@/features/tabs/Tab.vue';

    import Characteristics from '@/widgets/catalog/tab/Characteristics.vue'

    const tabList = ref([
        {
            text: 'Основные характеристики',
            active: true,
            component: Characteristics
        },
        {
            text: 'Описание',
            active: false,
        },
        {
            text: 'Цветовое исполнение',
            active: false,
        },
        {
            text: 'Преимущества',
            active: false,
        },
        {
            text: 'Доставка',
            active: false,
        },
    ])

</script>
