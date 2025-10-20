<template>
    <section class="blog__page">
        <div class="container">
            <h1 class="title blog__page-title">{{ post.title }}</h1>
            <div class="blog__page-content">
                <div class="blog__page-left">
                    <Navigation :content="content" v-if="content" />
                </div>
                <div class="blog__page-right">
                    <Post :content="content" :currentPost="post" v-if="content"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import Navigation from '@/widgets/sections/blog/post/Navigation.vue';
    import Post from '@/widgets/sections/blog/post/Post.vue';

    import parseHtmlToServiceData from '@/utils/HTMLToJSONParser.js';
    import slugGenerator from '@/utils/slugGenerator.js';

    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })


    const content = computed(() => {
        return parseHtmlToServiceData(props.post.content).map(currentPost => {
            return {
                ...currentPost,
                slug: slugGenerator(currentPost?.title ?? currentPost?.subtitle ?? currentPost?.subtitleMini ?? '')
            }
        })
    });
    

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/blog/blog-page.scss';
</style>
