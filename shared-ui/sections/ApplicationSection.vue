<template>
    <section class="application">
        <div class="container">
            <div class="application__content">
                <ApplicationSlider :title="title" />
            </div>
        </div>
    </section>
</template>


<script setup>

    import ApplicationSlider from '@/features/sliders/ApplicationSlider.vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/application.scss';
</style>
