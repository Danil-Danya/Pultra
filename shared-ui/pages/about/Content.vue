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
    import Mission from "@/widgets/about/tabs/Mission.vue";
    import Information from "@/widgets/about/tabs/Information.vue";
    import Management from '@/widgets/about/tabs/Management.vue';
    import Production from '@/widgets/about/tabs/Production.vue';
    import Career from '@/widgets/about/tabs/Career.vue'

    const tabList = ref([
        {
            text: 'Цель и миссия компании',
            active: true,
            component: Mission
        },
        {
            text: 'История',
            active: false,
            component: Information
        },
        {
            text: 'Руководство',
            active: false,
            component: Management
        },
        {
            text: 'Производство',
            active: false,
            component: Production,
        },
        {
            text: 'Реквизиты',
            active: false,
            component: Detail
        },
        {
            text: 'Карьера',
            active: false,
            component: Career
        },
    ])

</script>
