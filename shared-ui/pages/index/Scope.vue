<template>
    <section class="scope">
        <div class="container">
            <div class="scope__container">
                <ScopeSlider />
            </div>
        </div>
    </section>
</template>

<script setup>
    const ScopeSlider = defineAsyncComponent(() => import('@/features/sliders/ScopeSlider.vue'));
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/index/scope.scss';
</style>