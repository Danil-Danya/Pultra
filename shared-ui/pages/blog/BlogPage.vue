<template>
    <section class="blog__page">
        <div class="container">
            <h1 class="title blog__page-title">Применение композитных материалов в строительстве для усиления конструкций</h1>
            <div class="blog__page-content">
                <div class="blog__page-left">
                    <Navigation />
                </div>
                <div class="blog__page-right">
                    <Post />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Navigation from '@/widgets/sections/blog/post/Navigation.vue';
    import Post from '@/widgets/sections/blog/post/Post.vue';
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/blog/blog-page.scss';
</style>
