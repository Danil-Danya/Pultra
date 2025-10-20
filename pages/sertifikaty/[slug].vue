<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <Document :file="currentDoc.file" />
    <Question />
</template>

<script setup>

    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';

    import { useRoute } from 'vue-router';
    import { useCertificatesStore } from '@/entities/certificates/store';

    const Document = defineAsyncComponent(() => import('@/shared-ui/pages/docs/Document.vue'));
    const Question = defineAsyncComponent(() => import('@/shared-ui/sections/QuestionSection.vue'));

    const route = useRoute();
    const certificatesStore = useCertificatesStore();

    await certificatesStore.fetchOne(route.params.slug);

    const currentDoc = computed(() => certificatesStore.currentCertificate);

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/sertifikaty',
            text: 'Сертификаты'
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