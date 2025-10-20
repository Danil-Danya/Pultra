<template>
    <section class="information-tab">
        <div class="information__content">
            <div class="information__container information__container-tab">
                <div class="information__container-content">
                    <div class="information__block-container">
                        <div 
                            v-for="(content, index) in blocks" 
                            :key="index" 
                            class="information__block"
                        >
                            <h2 v-if="content?.title" class="information__title big">{{ content.title }}</h2>
                            <h3 v-if="content?.subtitle" class="information__title">{{ content.subtitle }}</h3>
                            <h4 v-if="content?.subtitleMini" class="information__title mini">{{ content.subtitleMini }}</h4>

                            <img
                                v-if="content?.image?.src"
                                class="information__image"
                                :src="content.image.src"
                                :alt="content.image.alt"
                                loading="lazy"
                                format="webp"
                                fetchpriority="high"
                            />

                            <p v-if="content?.text" class="information__text" v-html="content.text"></p>

                            <ol v-if="content?.list?.length" class="information__list">
                                <li
                                    v-for="(item, liIdx) in content.list"
                                    :key="liIdx"
                                    class="information__li"
                                >
                                    <p class="information__text" v-html="item.text"></p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { useCatalogStore } from '@/entities/catalog/store';
    import parseHtmlToData from '@/utils/HTMLToJSONParser';

    const catalogStore = useCatalogStore();
    const blocks = await parseHtmlToData(catalogStore.productCard.description.text);

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/information.scss';
</style>
