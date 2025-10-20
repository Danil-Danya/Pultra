<template>
    <div class="production">
        <div class="production__content">
            <h2 class="production__title">производство</h2>
        </div>
        <div class="production__container">
            <div class="production__item" v-for="item in production" :key="item">
                <h3 class="production__container-title">{{ item.title }}</h3>
                <p class="production__container-text" v-html="item.text"></p>
                <ul class="production__container-list">
                    <li class="production__container-li" v-for="text in item.list" :key="text">
                        <p class="production__container-text list" v-html="text.text"></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tab/production.scss';
</style>

<script setup>

    import parseHtmlToServiceData from '@/utils/HTMLToJSONParser.js';
    import { usePagesStore } from '@/entities/pages/store.js';

    const pagesStore = usePagesStore();
    await pagesStore.fetchAboutPage();

    const about = computed(() => pagesStore.about.data);
    const production = computed(() => parseHtmlToServiceData(pagesStore.about.data.production.text));
    
</script>
