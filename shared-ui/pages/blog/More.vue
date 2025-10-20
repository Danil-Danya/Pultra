<template>
    <section class="more">
        <div class="container">
            <div class="more__content">
                <BlogSlider />
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
