<template>
    <section class="items">
        <div class="container">
            <div class="items__content">
                <div class="items__container" v-for="item in itemsContent" :key="item">
                    <div class="items__container-block">
                        <h3 class="items__title">{{ item.title }}</h3>
                        <NuxtLink to="/catalog/product-testoviy-profil-123" class="items__container-link" v-if="!isMobile">смотреть все</NuxtLink>
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
                    <NuxtLink to="/catalog/product-testoviy-profil-123" class="items__container-link mobile" v-if="isMobile">смотреть все</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import CardItem from '@/widgets/catalog/card/ItemCard.vue';

    const isMobile = ref(false);

    const itemsContent = ref([
        {
            title: 'КОМПОЗИТНЫЙ ПРОФИЛЬ',
            link: '/catalog/category-kompozitnyy-profil',
            cards: [
                { title: 'КВАДРАТНЫЙ ПРОФИЛЬ', link: '/catalog/category-kvadratnyy-profil', image: '/images/catalog/items/ph.png' },
                { title: 'ПРЯМОУГОЛЬНЫЙ ПРОФИЛЬ', link: '/catalog/category-pryamougolnyy-profil', image: '/images/catalog/items/ph.png' },
                { title: 'КРУГЛЫЙ ПРОФИЛЬ', link: '/catalog/category-kruglyy-profil', image: '/images/catalog/items/ph.png' },
                { title: 'УГЛОВОЙ ПРОФИЛЬ', link: '/catalog/category-uglovoy-profil', image: '/images/catalog/items/ph.png' },
                { title: 'ШВЕЛЛЕР КОМПОЗИТНЫЙ', link: '/catalog/category-shveller-kompozitnyy', image: '/images/catalog/items/ph.png' },
                { title: 'ДВУТАВР КОМПОЗИТНЫЙ', link: '/catalog/category-dvutavr-kompozitnyy', image: '/images/catalog/items/ph.png' },
                { title: 'КОМПОЗИТНЫЙ СТЕРЖЕНЬ', link: '/catalog/category-kompozitnyy-sterzhen', image: '/images/catalog/items/ph.png' }
            ]
        },
        {
            title: 'КОМПОЗИТНЫЕ НАСТИЛЫ',
            link: '/catalog/category-kompozitnye-nastily',
            cards: [
                { title: 'РЕШЕТЧАТЫЙ НАСТИЛ', link: '/catalog/category-reshetchatyy-nastil', image: '/images/catalog/items/ph.png' },
                { title: 'ПРОФИЛИРОВАННЫЙ НАСТИЛ', link: '/catalog/category-profilirovannyy-nastil', image: '/images/catalog/items/ph.png' },
                { title: 'СПЛОШНОЙ НАСТИЛ', link: '/catalog/category-sploshnoy-nastil', image: '/images/catalog/items/ph.png' },
                { title: 'КОМПОЗИТНАЯ РЕШЕТКА', link: '/catalog/category-kompozitnaya-reshetka', image: '/images/catalog/items/ph.png' },
                { title: 'ПРОФЛИСТ КОМПОЗИТНЫЙ', link: '/catalog/category-proflist-kompozitnyy', image: '/images/catalog/items/ph.png' }
            ]
        },
        {
            title: 'КОМПОЗИТНЫЕ ЛИСТЫ',
            link: '/catalog/category-kompozitnye-listy',
            cards: []
        }
    ])

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



