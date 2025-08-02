<template>
    <section class="vacancy">
        <div class="container">
            <div class="vacancy__content">
                <h1 class="title vacancy__title">Вакансия: Менеджер отдела продаж</h1>
                <div class="vacancy__container">
                    <div class="vacancy__item" v-for="item in vacancyData" :key="item">
                        <h2 class="vacancy__title-item" v-if="item.title">{{ item.title }}</h2>
                        <p class="vacancy__text" v-if="item.text">{{ item.text }}</p>
                        <ul class="vacancy__list">
                            <li class="vacancy__li" v-for="text in item.list" :key="text">
                                <p class="vacancy__text">{{ text }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="vacancy__button-container">
                    <div class="vacancy__button-post">
                        <Button type="link" text="оставить отклик" color="orange" />
                        <Button type="link" text="вакансия на hh.ru" color="white" />
                    </div>
                    <button class="vacancy__button-shared" @click="copyLink">
                        <p class="vacancy__button-shared-text">поделиться</p>
                        <span class="vacancy__button-shared-icon">
                            <SharedIcon />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    import Button from '@/shared-ui/ui/Button.vue';

    const SharedIcon = defineAsyncComponent(() => import('@/shared-ui/icons/default/Shared.vue'));

    const vacancyData = [
        {
            text: 'В компанию «Пултра» требуется менеджер отдела продаж. Мы ищем активного и целеустремлённого специалиста, готового развиваться вместе с нами и достигать высоких результатов.',
            list: [
                'от 1-го года',
                '5-ти дневная рабочая неделя',
                'Заработная плата: от 50 000 руб/мес'
            ]
        },
        {
            title: 'Обязанности',
            list: [
                'Поиск и привлечение новых клиентов, развитие долгосрочных партнёрских отношений',
                'Ведение переговоров, подготовка коммерческих предложений и заключение договоров',
                'Сопровождение сделок на всех этапах, контроль выполнения условий поставки',
                'Анализ рынка и потребностей клиентов, участие в разработке стратегий продаж',
                'Ведение отчётности и работа с CRM-системой'
            ]
        },
        {
            title: 'Требования',
            list: [
                'Опыт работы в сфере продаж (желательно в B2B или промышленном секторе)',
                'Отличные коммуникативные навыки, умение вести переговоры',
                'Активная жизненная позиция, нацеленность на результат',
                'Уверенное владение ПК, знание офисных программ',
                'Готовность к обучению и профессиональному росту'
            ]
        },
        {
            title: 'Мы предлагаем',
            list: [
                'Официальное трудоустройство и стабильную заработную плату',
                'Систему премирования по результатам работы',
                'Возможности для карьерного и профессионального развития',
                'Уверенное владение ПК, знание офисных программ',
                'Дружный коллектив и комфортные условия труда'
            ]
        },
    ]

    const copyLink = async () => {
        await navigator.clipboard.writeText(window.location.href);

        toast.success(`$Ссылка скопированна успешно`, {
            autoClose: 1000,
            icon: h('img', { 
                src: '/images/contacts/icon.png', 
                style: 'width: 20px; height: 20px;' 
            })
        });
    }

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/vacancies/vacansy.scss';
</style>
