<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <ServicesAbout />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import ServicesAbout from '@/shared-ui/pages/services/ServicesAbout.vue';

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/proektirovshchikam',
            text: 'Услуги проектировщикам'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'Услуги – PULTRA',
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/proektirovshchikam/'
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>