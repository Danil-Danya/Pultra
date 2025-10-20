<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <About />
    <Content />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Content from '@/shared-ui/pages/about/Content.vue'
    import About from '@/shared-ui/pages/about/About.vue';


    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/about',
            text: 'О компании'
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: 'О компании – PULTRA',
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/o-kompanii/'
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>