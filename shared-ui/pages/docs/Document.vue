<template>
    <section class="document">
        <div class="container">
            <div class="document__container">
                <div class="document__info">
                    <h1 class="title document__title">Сертификат №0219620 Профиль пултрузионный</h1>
                </div>
                <div class="document__buttons">
                    <a :href="file.link" class="document__button">
                        <span class="document__button-icon">
                            <ZoomIcon />
                        </span>
                        <p class="document__button-text">просмотр</p>
                    </a>
                    <a :href="file.downloadLink" class="docs__card-button" @click="downloadFile(file)">
                        <span class="docs__card-button-icon">
                            <FileIcon />
                        </span>
                        <p class="docs__card-button-text">
                            Скачать
                        </p>
                    </a>
                </div>
            </div>
            <div class="document__content">
                <DocsPlayer :file="file.link" />
            </div>
        </div>
    </section>
</template>

<script setup>

    import { useFileDownloader } from '@/composables/useFileDownloader';
    
    const ZoomIcon = defineAsyncComponent(() => import('@/shared-ui/icons/docs/Zoom.vue'));
    const FileIcon = defineAsyncComponent(() => import('@/shared-ui/icons/docs/File.vue'));

    const DocsPlayer = defineAsyncComponent(() => import('@/features/players/PDFPlayer.vue'));

    const { downloadFile, isDownloading, progress } = useFileDownloader();

    const props = defineProps({
        file: Object
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/docs/document.scss';
</style>