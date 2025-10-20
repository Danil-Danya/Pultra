<template>
    <div class="catalog__card">
        <div class="catalog__card-content">
            <div class="catalog__card-image">
                <NuxtLink :to="`${link}/`" class="catalog__card-img-link">
                    <img loading="lazy" preset="default"  format="webp" preload fetchpriority="high"  :src="image.url" :alt="image.alt" class="catalog__card-image-img" />
                </NuxtLink>
            </div>
            <div class="catalog__card-recommendation" v-if="recommends && recommends.length > 0">
                <ul class="catalog__card-list" v-for="recommend in recommends" :key="recommend">
                    <li class="catalog__card-li" v-for="link in recommend.images" :key="link">
                        <NuxtLink :to="`${link.link}/`" class="catalog__card-links">
                            <img loading="lazy" preset="default" format="webp" preload fetchpriority="high"  :src="link.image" alt="Ссылка" class="catalog__card-links-img" />
                        </NuxtLink>
                    </li>
                    <li class="catalog__card-li" v-if="recommend.lastCount">
                        <NuxtLink :to="`${link}/`" class="catalog__card-links">
                            <p class="catalog__card-links-text">{{ recommend.lastCount }}</p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="catalog__card-text">
                <h4 class="catalog__card-title title">
                    <NuxtLink :to="`${link}/`">{{ title }}</NuxtLink>
                </h4>
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

        image: {
            type: Object,
            required: true
        },

        link: {
            type: String,
            required: true
        },

        recommends: {
            type: Array,
            required: false
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/catalog/card-categories.scss';
</style>