<template>
    <section class="content">
        <div class="container">
            <div class="content__container">
                <Tab :tabList="tabList" />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Tab from '@/features/tabs/Tab.vue';

    import Detail from '@/widgets/about/tabs/Detail.vue';
    //import Mission from "@/widgets/about/tabs/Mission.vue";
    import Information from "@/widgets/about/tabs/Information.vue";

    const tabList = ref([
        {
            text: 'Цель и миссия компании',
            active: false,
            //component: Mission
        },
        {
            text: 'История',
            active: false,
            component: Information
        },
        {
            text: 'Руководство',
            active: false
        },
        {
            text: 'Производство',
            active: false
        },
        {
            text: 'Реквизиты',
            active: true,
            component: Detail
        },
        {
            text: 'Карьера',
            active: false
        },
    ])

</script>
