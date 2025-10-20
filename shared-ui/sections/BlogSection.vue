<template>
    <section class="blog">
        <div class="container">
            <div class="blog__content">
                <BlogSlider />
                <div class="blog__button-container">
                    <NuxtLink to="/blog/" class="blog__button-link">все статьи</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import BlogSlider from '@/features/sliders/BlogSlider.vue';
</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/blog.scss';
</style>