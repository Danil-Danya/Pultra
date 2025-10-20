<template>
    <section class="blog blog-sect">
        <div class="container">
            <div class="blog__content">
                <h1 class="title blog__title">полезные статьи</h1>
            </div>
            <div class="blog__container">
                <Card 
                    v-for="card in cards" 
                    :image="card.imageFull"
                    :date="card.date"
                    :title="card.title"
                    :text="card.shortText"
                    :link="card.slug"
                    :key="card"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

    import Card from '@/widgets/sections/blog/card/Card.vue';

    const props = defineProps({
        cards: {
            type: Array,
            required: false,
            default: () => []
        }   
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/blog/blog.scss';
</style>
