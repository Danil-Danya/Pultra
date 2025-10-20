<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Cooperation :title="cooperation.title" :content="cooperation.sections" :image="cooperation.image" />
    <CooperationMessage />
</template>

<script setup>

    import Cooperation from '@/shared-ui/pages/cooperation/Cooperation.vue';
    import CooperationMessage from '@/shared-ui/pages/cooperation/CooperationMessage.vue';
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';

    import { usePagesStore } from '@/entities/pages/store';
    import parseHtmlToData from '~/utils/HTMLToJSONParser';

    const pageStore = usePagesStore();
    await pageStore.fetchCooperation();

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/sotrudnechestvo',
            text: 'Сотрудничество'
        }
    ])
    
    definePageMeta({ layout: 'site-layout' });

    const cooperation = {
        title: pageStore.cooperation.title,
        sections: parseHtmlToData(pageStore.cooperation.content),
        image: pageStore.cooperation.featuredImage
    };

    console.log(cooperation.sections);
    

    useHead({
        title: 'Сотрудничество - PULTRA',
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/sotrudnichestvo/'
            }
        ]
    })

</script>