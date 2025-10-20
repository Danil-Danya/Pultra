<template>
    <BreadCrumbs :breadCrumbsList="breadCrumbsList" />
    <BlogPage :post="postStore.currentPost" />
    <More />
</template>

<script setup>
    import BreadCrumbs from '@/shared-ui/sections/BreadCrumbs.vue';
    import BlogPage from '@/shared-ui/pages/blog/BlogPage.vue';
    import More from '@/shared-ui/pages/blog/More.vue';

    import { usePostsStore } from '@/entities/posts/store.js';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const postStore = usePostsStore();
    await postStore.fetchOne(route.params.Slug);
    

    watch(() => route.params.Slug,
        async (newSlug, oldSlug) => {
            if (newSlug && newSlug !== oldSlug) {
                await postStore.fetchOne(newSlug)
            }
        }
    )

    const breadCrumbsList = ref([
        {
            link: '/',
            text: 'Главная',
        },
        {
            link: '/blog',
            text: 'Блог'
        },
        {
            link: `/blog/${route.params.Slug}`,
            text: postStore.currentPost.title
        }
    ])

    definePageMeta({ layout: 'site-layout' });

    useHead({
        title: postStore.currentPost.seoBlock.seoTitle || postStore.currentPost.title,
        meta: [
            {
                name: 'description',
                content: postStore.currentPost.seoBlock.seoDescription
            },
            {
                name: 'robots',
                content: `${postStore.currentPost.seoBlock.seoNoindex ? 'noindex' : 'index'},${postStore.currentPost.seoBlock.seoNofollow ? 'nofollow' : 'follow'}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: postStore.currentPost.seoBlock.canonicalUrl
            }
        ]
    })


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss';
</style>