<template>
    <div class="about__project">
        <div class="container">
            <div class="about__project-content">
                <div class="about__project-left">
                    <h1 class="title about__project-title">{{ title }}</h1>
                    <p
                        class="about__project-text"
                        v-for="(text, index) in texts"
                        :key="index"
                    >
                        {{ text }}
                    </p>
                </div>
                <div class="about__project-right">
                    <img loading="lazy" 
                        preset="default"
                        format="webp" preload fetchpriority="high" 
                        :src="image?.url ?? '/images/project/index/project.png'"
                        :alt="image?.alt ?? 'project image'"
                        class="about__project-img"
                    >
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        texts: {
            type: Array,
            required: true
        },

        image: {
            type: Object,
            required: true
        }
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/projects/about-project.scss';
</style>