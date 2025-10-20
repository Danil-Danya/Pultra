<template>
    <section class="docs">
        <div class="container">
            <div class="docs__container">
                <h1 class="docs__title title">{{ title }}</h1>
            </div>
            <div class="docs__content">
                <DocsCard v-for="item in docsList"
                    :image="item.image"
                    :title="item.title"
                    :slug="item.slug"
                    :file="item.file"
                    :key="item"
                />
            </div>
        </div>
    </section>
</template>

<script setup>

    import DocsCard from '@/widgets/docs/cards/Card.vue';

    const props = defineProps({
        docsList: Array,
        title: {
            type: String,
            default: 'Документация'
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/docs/docs.scss';
</style>