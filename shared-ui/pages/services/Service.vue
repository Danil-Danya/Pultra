<template>
    <section class="service">
        <div class="container">
            <div class="service__content">
                <h1 class="title service__title">Предоставление динамических блоков для Autodesk AutoCAD</h1>
                <div class="service__container">
                    <div class="service__item" v-for="item in serviceData" :key="item">
                        <h2 class="service__title-item" v-if="item.title">{{ item.title }}</h2>
                        <p class="service__text" v-if="item.text">{{ item.text }}</p>
                        <ul class="service__list">
                            <li class="service__li" v-for="text in item.list" :key="text">
                                <p class="service__text">{{ text }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="service__button-container">
                    <div class="service__button-post">
                        <Button type="link" text="Заказать услугу" color="orange" />
                    </div>
                    <button class="service__button-shared" @click="copyLink">
                        <p class="service__button-shared-text">поделиться</p>
                        <span class="service__button-shared-icon">
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

    const serviceData = [
        {
            text: 'Компания «PULTRA» предоставляет услугу создания и интеграции динамических блоков для Autodesk AutoCAD, оптимизированных под задачи проектирования в промышленной и строительной сферах. Наши решения ускоряют работу чертёжников и инженеров, упрощают документацию и снижают количество ошибок при проектировании.',
            list: [
                'Индивидуальная разработка под техническое задание заказчика',
                'Оптимизация процессов черчения и спецификаций',
                'Совместимость с AutoCAD 2020+ и отраслевыми плагинами'
            ]
        },
        {
            title: 'Что входит в услугу',
            list: [
                'Анализ проектной документации и потребностей клиента',
                'Разработка набора динамических блоков с параметрами и действиями',
                'Настройка видовых представлений, слоёв и атрибутов',
                'Тестирование блоков на совместимость с вашей CAD-средой',
                'Обучение сотрудников по использованию блоков (при необходимости)'
            ]
        },
        {
            title: 'Преимущества',
            list: [
                'Сокращение времени проектирования до 30%',
                'Единые стандарты оформления чертежей',
                'Уменьшение количества ошибок за счёт автоматизации',
                'Гибкость в настройке под разные объекты и спецификации',
                'Поддержка и сопровождение после внедрения'
            ]
        },
        {
            title: 'Почему PULTRA',
            list: [
                'Собственное производство и экспертиза в композитных материалах',
                'Опыт работы с проектными бюро и производственными компаниями',
                'Команда инженеров, разбирающихся как в CAD, так и в производстве',
                'Гарантия на все разработанные блоки и документацию',
                'Оперативная связь и персональный менеджер на проект'
            ]
        }
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
    @import '@/assets/styles/ui/shared/pages/services/service.scss';
</style>