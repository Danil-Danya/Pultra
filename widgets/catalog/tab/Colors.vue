<template>
    <section class="colors colors-tab">
        <div class="colors__content">
            <div class="colors__title-container colors__title-container-tab">
                <h2 class="title colors__title colors__title-tab">Цветовое исполнение под ваши задачи</h2>
            </div>
            <div class="colors__container-content">
                <div class="colors__left">
                    <p class="colors__text">Мы подготовили для вас специальную коробку с образцами наших композитных изделий. Убедитесь в их надежности, прочности и высоком качестве своими глазами.</p>
                </div>
                <div class="colors__right">
                    <button class="colors__button" 
                        v-for="item in colors" 
                        :key="item"
                        :style="{ 
                            background: item.hex, 
                            color: item.color ? item.color : '#FFFFFF'    
                        }"
                    >
                    {{ item.ral }}
                    </button>
                </div> 
            </div>
        </div>
    </section>
</template>

<script setup>

    const colors = ref([
        {
            hex: '#D7D7D7',
            ral: 'RAL 7035'
        },
        {
            hex: '#9DA3A6',
            ral: 'RAL 7040'
        },
        {
            hex: '#008351',
            ral: 'RAL 6024'
        },
        {
            hex: '#2A6EBB',
            ral: 'RAL 5012'
        },
        {
            hex: '#CC0605',
            ral: 'RAL 3020'
        },
        {
            hex: '#D4652F',
            ral: 'RAL 2010'
        },
        {
            hex: '#EFA94A',
            ral: 'RAL 1006'
        },
        {
            hex: '#F6F6F6',
            color: '#424243',
            ral: 'RAL 9016'
        },
        {
            hex: '#DDDED4',
             color: '#424243',
            ral: 'RAL 9002'
        },
        {
            hex: '#A02128',
            ral: 'RAL 3002'
        },
        {
            hex: 'linear-gradient(90deg, #4EC7BB 0%, #FF6400 50%, #B92DD5 100%)',
            ral: 'Любой цвет'
        }
    ])

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/catalog/colors.scss';
</style>