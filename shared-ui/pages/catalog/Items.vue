<template>
    <section class="items">
        <div class="container">
            <div class="items__content">
                <div class="items__container" v-for="item in content" :key="item">
                    <div class="items__container-block">
                        <h3 class="items__title">{{ item.title }}</h3>
                        <NuxtLink :to="`${item.link}/`" class="items__container-link" v-if="!isMobile">смотреть все</NuxtLink>
                    </div>
                    <div class="items__container-content">
                        <CardItem 
                            v-for="card in item.cards"
                            :title="card.title"
                            :image="card.image"
                            :link="card.link"
                            :key="card"
                        />
                    </div>
                    <NuxtLink :to="`${item.link}/`" class="items__container-link mobile" v-if="isMobile">смотреть все</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import CardItem from '@/widgets/catalog/card/ItemCard.vue';

    const props = defineProps({
        categories: {
            type: Array,
            required: false,
            default: () => []
        }
    })

    const content = computed(() => {
        return props.categories.slice(0, 3).map((cat, idx) => ({
            title: cat.title.toUpperCase(),
            link: `/produkciya/${cat.slug}`,
            cards: idx === 2 
            ? [] 
            : (cat.children ?? []).map(child => ({
                title: child.title.toUpperCase(),
                link: `/produkciya/${cat.slug}/${child.slug}`,
                image: child.image?.url || '/images/catalog/items/ph.png'
            }))
        }));
    });


    const isMobile = ref(false);

    const checkMobileDevice = () => {
        const width = window.innerWidth;

        if (width < 960) {
            isMobile.value = true;
        }
    }

    onMounted(() => checkMobileDevice());

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/catalog/items.scss';
</style>



