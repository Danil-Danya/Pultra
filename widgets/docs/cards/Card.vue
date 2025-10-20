<template>
    <div class="docs__card">
        <div class="docs__card-container">
            <div class="docs__card-top">
                <NuxtLink :to="`/${routeName}/${slug}/`">
                    <img :src="image" alt="Картинка" class="docs__card-img" loading="lazy">
                </NuxtLink>
            </div>
            <div class="docs__card-bottom">
                <NuxtLink :to="`/${routeName}/${slug}/`">
                    <h2 class="docs__card-title">{{ title }}</h2>
                </NuxtLink>
            </div>
            <div class="docs__card-buttons">
                <NuxtLink :to="`/${routeName}/${slug}/`" class="docs__card-button">
                    <span class="docs__card-button-icon">
                        <ZoomIcon />
                    </span>
                    <p class="docs__card-button-text">просмотр</p>
                </NuxtLink>
                <a :href="file.downloadLink" class="docs__card-button" @click="downloadFile(file)">
                    <span class="docs__card-button-icon">
                        <FileIcon />
                    </span>
                    <p class="docs__card-button-text">Скачать</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { useRoute } from 'vue-router';
    import { useFileDownloader } from '@/composables/useFileDownloader';

    const props = defineProps({
        image: String,
        title: String,
        slug: String,
        file: String
    })

    const route = useRoute();

    const { downloadFile, isDownloading, progress } = useFileDownloader();

    const routeName = route.name.split('-')[0];

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/docs/docs-card.scss';
</style>