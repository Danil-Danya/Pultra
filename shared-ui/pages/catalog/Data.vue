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

    import Characteristics from '@/widgets/catalog/tab/Characteristics.vue';
    import Info from '@/widgets/catalog/tab/Info.vue';
    import Colors from '@/widgets/catalog/tab/Colors.vue';
    import Advantages from '@/widgets/catalog/tab/Advantages.vue';
    import Delivery from '@/widgets/catalog/tab/Delivery.vue';

    const tabList = ref([
        {
            text: 'Основные характеристики',
            active: true,
            component: Characteristics
        },
        {
            text: 'Описание',
            active: false,
            component: Info
        },
        {
            text: 'Цветовое исполнение',
            active: false,
            component: Colors
        },
        {
            text: 'Преимущества',
            active: false,
            component: Advantages
        },
        {
            text: 'Доставка',
            component: Delivery,
            active: false,
        },
    ])

</script>
