<template>
    <div class="characteristics">
        <h2 class="characteristics__title">Основные характеристики</h2>
        <div class="characteristics__content">
            <div class="characteristics__block">
                <h3 class="characteristics__block-title">Заголовок</h3>
                <div class="characteristics__block-item" v-for="item in 4" :key="item">
                    <p class="characteristics__text characteristics__text-param">Параметр может быть в 1 или 2 строчки</p>
                    <p class="characteristics__text characteristics__text-value">Значение параметра</p>
                </div>
            </div>
            <div class="characteristics__block">
                <h3 class="characteristics__block-title">Заголовок</h3>
                <div class="characteristics__block-item" v-for="item in 4" :key="item">
                    <p class="characteristics__text characteristics__text-param">Параметр может быть в 1 или 2 строчки</p>
                    <p class="characteristics__text characteristics__text-value">Значение параметра</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tab/characteristics.scss';
</style>