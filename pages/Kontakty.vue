<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Contacts :content="contacts.contacts" />
    <Details 
        :content="contacts.paydata"
        :docs="docs"
    />
    <Question />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import Question from '@/shared-ui/sections/QuestionSection.vue';
    import Contacts from '@/shared-ui/pages/contacts/Contacts.vue';
    import Details from '~/shared-ui/sections/Details.vue';

    import { usePagesStore } from '@/entities/pages/store.js';

    const pagesStore = usePagesStore();
    await pagesStore.fetchContacts();

    const contacts = computed(() => pagesStore.contacts);
    const docs = computed(() => {
        return {
            doc: pagesStore.contacts.paydataDoc,
            pdf: pagesStore.contacts.paydataPdf
        }
    })

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
        title: 'Контакты – PULTRA',
        meta: [
            {
                name: 'description',
                content: 'PULTRA – современный завод по производству высококачественных композитных материалов и изделий. Мы предлагаем инновационные решения для промышленности, строительства и транспорта, сочетая передовые технологии и экологичность.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://pultra.kls-digital.ru/kontakty/'
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>