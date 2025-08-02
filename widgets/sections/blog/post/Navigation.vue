<template>
    <div class="navigation">
        <h3 class="navigation__title">Навигация</h3>
        <ul class="navigation__list">
            <li class="navigation__li" v-for="link in links" :key="link">
                <a href="#" class="navigation__link">{{ link.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>

    const links = ref([
        {
            link: '',
            text: 'Преимущества композитных материалов в строительстве'
        },
        {
            link: '',
            text: 'Основные виды композитных материалов для усиления конструкций'
        },
        {
            link: '',
            text: 'Области применения композитов для усиления конструкций'
        },
        {
            link: '',
            text: 'Применение в промышленном строительстве'
        },
        {
            link: '',
            text: 'Стеклопластики'
        },
        {
            link: '',
            text: 'Углепластики'
        },
        {
            link: '',
            text: 'Армированные полимеры'
        },
    ])

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/blog/navigation.scss';
</style>