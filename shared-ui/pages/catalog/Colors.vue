<template>
    <section class="colors">
        <div class="container">
            <div class="colors__content">
                <div class="colors__title-container">
                    <h2 class="title colors__title">Цветовое исполнение под ваши задачи</h2>
                </div>
                <div class="colors__container-content">
                    <div class="colors__left">
                        <p class="colors__text">Мы подготовили для вас специальную коробку с образцами наших композитных изделий. Убедитесь в их надежности, прочности и высоком качестве своими глазами.</p>
                    </div>
                    <div class="colors__right">
                        <button class="colors__button" v-for="item in 14" :key="item">RAL 1018</button>
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/catalog/colors.scss';
</style>