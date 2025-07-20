<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Contacts />
    <Details />
    <Question />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import Contacts from '@/shared-ui/pages/contacts/Contacts.vue';
    import Details from '~/shared-ui/sections/Details.vue';


    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/contacts',
            text: 'Контакты'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Котакты – PULTRA',
        description: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
    })

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>