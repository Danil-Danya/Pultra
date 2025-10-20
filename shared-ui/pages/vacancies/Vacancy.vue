<template>
    <section class="vacancy">
        <div class="container">
            <div class="vacancy__content">
                <h1 class="title vacancy__title">{{ content.title }}</h1>
                <img 
                    v-if="content.imageThumbnail" 
                    :src="content.imageThumbnail" 
                    alt="" 
                    class="vacancy__img"
                >

                <div class="vacancy__container">
                    <div 
                        class="vacancy__item" 
                        v-for="(item, index) in vacancyData" 
                        :key="index"
                    >
                        <h2 
                            class="vacancy__title-item" 
                            v-if="item.title"
                        >
                            {{ item.title }}
                        </h2>

                        <p 
                            class="vacancy__text" 
                            v-if="item.text"
                            v-html="item.text"
                        >

                        </p>

                        <img 
                            v-if="item.image" 
                            :src="item.image.src" 
                            :alt="item.image.alt" 
                            class="vacancy__image"
                        >

                        <ul 
                            v-if="item.list && item.list.length" 
                            class="vacancy__list"
                        >
                            <li 
                                class="vacancy__li" 
                                v-for="(li, liIndex) in item.list" 
                                :key="liIndex"
                            >
                                <p 
                                    v-if="li.text" 
                                    class="vacancy__text"
                                    v-html="li.text"
                                >
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="vacancy__button-container">
                    <div class="vacancy__button-post">
                        <Button 
                            type="link" 
                            text="оставить отклик" 
                            color="orange" 
                            :link="content.hhLink"
                            @click.prevent.stop="toggleModal"
                        />
                        <Button 
                            type="link" 
                            text="вакансия на hh.ru" 
                            color="white" 
                            :link="content.hhLink"
                        />
                    </div>

                    <button 
                        class="vacancy__button-shared" 
                        @click="copyLink"
                    >
                        <p class="vacancy__button-shared-text">поделиться</p>
                        <span class="vacancy__button-shared-icon">
                            <SharedIcon />
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <ClientOnly>
            <Transition name="modal" appeear>
                <FormModal v-if="isShowModal"
                    @close-modal="toggleModal"
                    title="Оставить отклик"
                />
            </Transition>
        </ClientOnly>
    </section>
</template>

<script setup>
    import { h, computed, defineAsyncComponent } from 'vue'
    import { toast } from 'vue3-toastify'
    import 'vue3-toastify/dist/index.css'

    import Button from '@/shared-ui/ui/Button.vue'
    import parseHtmlToData from '~/utils/HTMLToJSONParser'

    const FormModal = defineAsyncComponent(() => import('@/features/modals/FormModal.vue'));

    const isShowModal = ref(false);

    const toggleModal = () => {
        isShowModal.value = !isShowModal.value
    }

    const SharedIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Shared.vue'))

    const props = defineProps({
        content: {
            type: Object,
            required: true
        }
    })

    function normalizeListItem(raw) {
        if (!raw) return { title: '', subtitle: '', subtitleMini: '', text: '', list: [], image: null }
        if (typeof raw === 'string') {
            return { title: '', subtitle: '', subtitleMini: '', text: raw, list: [], image: null }
        }
        return {
            title: raw.title || '',
            subtitle: raw.subtitle || '',
            subtitleMini: raw.subtitleMini || '',
            text: raw.text || '',
            list: Array.isArray(raw.list) ? raw.list.map(normalizeListItem) : [],
            image: raw.image || null
        }
    }

    function normalizeBlock(rawBlock) {
        return {
            title: rawBlock.title || '',
            subtitle: rawBlock.subtitle || '',
            subtitleMini: rawBlock.subtitleMini || '',
            text: rawBlock.text || '',
            image: rawBlock.image || null,
            list: Array.isArray(rawBlock.list) ? rawBlock.list.map(normalizeListItem) : []
        }
    }

    function buildSection(title, html) {
        if (!html) return null

        const parsed = parseHtmlToData(html)

        if (parsed.length === 1 && Array.isArray(parsed[0].list) && parsed[0].list.length) {
            return {
                title,
                text: parsed[0].text || '',
                image: parsed[0].image || null,
                list: parsed[0].list.map(normalizeListItem)
            }
        }

        const combinedText = parsed.map(b => [b.title, b.text].filter(Boolean).join(' ')).filter(Boolean).join('\n')
        const flatLists = parsed.flatMap(b => b.list || [])
        return {
            title,
            text: combinedText,
            image: (parsed.length === 1 && parsed[0].image) ? parsed[0].image : null,
            list: flatLists.map(normalizeListItem)
        }
    }

    const vacancyData = computed(() => {
        const c = props.content || {}
        const result = []

        if (c.text) {
            const parsedIntro = parseHtmlToData(c.text)
            parsedIntro.forEach(b => result.push(normalizeBlock(b)))
        }

        const responsibilitiesHtml = c.responsibilities || c.responsibilitiesHtml
        const requirementsHtml = c.requirements || c.requirementsHtml
        const weOfferHtml = c.weOffer || c.weOfferHtml
        const addTextHtml = c.addText || c.addTextHtml

        const duties = buildSection('Обязанности', responsibilitiesHtml)
        if (duties) result.push(duties)

        const reqs = buildSection('Требования', requirementsHtml)
        if (reqs) result.push(reqs)

        const offer = buildSection('Мы предлагаем', weOfferHtml)
        if (offer) result.push(offer)

        if (addTextHtml) {
            const parsedOutro = parseHtmlToData(addTextHtml)
            parsedOutro.forEach(b => result.push(normalizeBlock(b)))
        }

        return result.map(b => ({
            title: b.title || '',
            subtitle: b.subtitle || '',
            subtitleMini: b.subtitleMini || '',
            text: b.text || '',
            image: b.image || null,
            list: Array.isArray(b.list) ? b.list.map(normalizeListItem) : []
        }))
    })

    const copyLink = async () => {
        await navigator.clipboard.writeText(window.location.href)
        toast.success('Ссылка скопирована успешно', {
            autoClose: 1000,
            icon: h('img', {
                src: '/images/contacts/icon.png',
                style: 'width: 20px; height: 20px;'
            })
        })
    }
</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/vacancies/vacansy.scss';
</style>
