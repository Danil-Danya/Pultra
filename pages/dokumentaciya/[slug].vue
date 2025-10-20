<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Document :file="currentDoc.file" />
    <Question />
</template>

<script setup>

    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';

    import { useRoute } from 'vue-router';
    import { useDocsStore } from '@/entities/docs/store';

    const Document = defineAsyncComponent(() => import('@/shared-ui/pages/docs/Document.vue'));
    const Question = defineAsyncComponent(() => import('@/shared-ui/sections/QuestionSection.vue'));

    const route = useRoute();
    const docsStore = useDocsStore();

    await docsStore.fetchOne(route.params.slug);

    const currentDoc = computed(() => docsStore.currentDoc);

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/dokumentaciya',
            text: 'Документация'
        },
        {
            link: '/sertificat-licenziya-na-proizvodstvo-trub',
            text: currentDoc.value.title
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead(() => {
        const seo = currentDoc.value.seoBlock || {}

        return {
            title: seo.seoTitle,
            meta: [
                {
                    name: 'description',
                    content: seo.seoDescription
                },
                {
                    name: 'robots',
                    content: `${seo.seoNoindex ? 'noindex' : 'index'}, ${seo.seoNofollow ? 'nofollow' : 'follow'}`
                }
            ],
            link: [
                {
                    rel: 'canonical',
                    href: seo.canonicalUrl
                }
            ]
        }
    })



</script>