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
                            <h2 v-if="content?.title" class="information__title title-h2">{{ content.title }}</h2>
                            <h3 v-if="content?.subtitle" class="information__title title-h3">{{ content.subtitle }}</h3>
                            <h4 v-if="content?.subtitleMini" class="information__title title-h4">{{ content.subtitleMini }}</h4>

                            <img
                                v-if="content?.image"
                                class="information__image"
                                :src="content.image?.src"
                                :alt="content.image?.alt"
                                loading="lazy"
                                format="webp"
                                fetchpriority="high"
                                style="cursor: pointer;"
                                @click="toggleModal(
                                    content.image?.src, 
                                    content.image?.alt
                                )"
                            />

                            <p v-if="content?.text" class="information__text" v-html="content.text"></p>

                            <Table 
                                v-if="content?.table"
                                :table="content.table"
                            />

                            <ol v-if="content?.list?.length" class="information__list">
                                <li
                                    v-for="(item, liIdx) in content.list"
                                    :key="liIdx"
                                    class="information__li"
                                >
                                    <h2 v-if="item.title" class="information__subtitle title-h2">
                                        {{ item.title }}
                                    </h2>

                                    <h3 v-if="item.subtitle" class="information__subtitle title-h3">
                                        {{ item.subtitle }}
                                    </h3>

                                    <h4 v-if="item.subtitleMini" class="information__subtitle title-h4">
                                        {{ item.subtitleMini }}
                                    </h4>

                                    <p v-if="item.text" class="information__text" v-html="item.text"></p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ClientOnly>
            <Transition name="modal" appeear>
                <ImgModal v-if="isShowModal"
                    @click="toggleModal"
                    :src="zoomedImage?.src"
                    :alt="zoomedImage?.alt || 'картинка'"
                />
            </Transition>
        </ClientOnly>
    </section>
</template>

<script setup>

import ImgModal from '~/features/modals/ImgModal.vue';
import Table from '../ui/Table.vue';
const isShowModal = ref(false);

const zoomedImage = ref({});

const toggleModal = (src, alt) => {
    zoomedImage.value.src = src;
    zoomedImage.value.alt = alt;

    isShowModal.value = !isShowModal.value
}

const props = defineProps({
    blocks: {
        type: Array,
        required: true
    }
})

console.log(props.blocks);


</script>

<style lang="scss">
@import '@/assets/styles/ui/shared/sections/information.scss';
</style>
