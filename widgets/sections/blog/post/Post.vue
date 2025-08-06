<template>
    <div class="post">
        <div class="post__data">
            <ul class="post__data-list">
                <li class="post__data-li" v-for="item in postData" :key="item">
                    <p class="post__data-text">{{ item.text }}</p>
                    <span class="post__data-icon">
                        <Component :is="item.icon" />
                    </span>
                </li>
            </ul>
        </div>
        <div class="post__content">
            <div class="post__head">
                <NuxtImg  loading="lazy"  class="post__img" format="webp" :src="post.head.image" alt="Картинка поста" />
                <p class="post__text" v-for="text in post.head.text" :key="text">{{ text }}</p>
            </div>
            <div class="post__subhead">
                <h2 class="post__subtitle">{{ post.subhead.title }}</h2>
                <p class="post__text" v-for="text in post.subhead.text" :key="text">{{ text }}</p>
            </div>
            <div class="post__content" v-for="content in post.content" :key="content">
                <h3 class="post__subtitle-content">{{ content.title }}</h3>
                <p class="post__text" v-for="text in content.text.topText" :key="text">{{ text }}</p>
                <ol class="post__list">
                    <li v-for="text in content.list" :key="text">
                        <p class="post__text">{{ text }}</p>
                    </li>
                </ol>
                <p class="post__text" v-for="text in content.text.bottomText" :key="text">{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

    const CalendarIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Calendar.vue'));
    const AuthorIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Author.vue'));
    const ViewsIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Views.vue'));
    const TimeIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Time.vue'));

    const postData = ref([
        {
            text: '01.01.2025',
            icon: CalendarIcon
        },
        {
            text: '5 мин.',
            icon: TimeIcon
        },
        {
            text: '197',
            icon: ViewsIcon
        },
        {
            text: 'Автор А.А.',
            icon: AuthorIcon
        },
    ]);

    const post = ref({
        head: {
            image: '/images/blog/ph.png',
            text: [
                'Композитные материалы всё шире применяются в современном строительстве, открывая новые возможности для усиления и восстановления различных конструкций. Благодаря своим уникальным свойствам — высокой прочности, малому весу и устойчивости к коррозии — композиты становятся эффективной альтернативой традиционным материалам, таким как сталь и бетон.',
                'Использование композитных изделий позволяет не только повысить надёжность и долговечность зданий и сооружений, но и значительно сократить сроки и затраты на ремонтные работы. В этой статье мы рассмотрим основные направления применения композитных материалов для усиления конструкций, их преимущества и примеры успешных решений в строительной отрасли.'
            ]
        },

        subhead: {
            title: 'СЕО текст',
            text: [
                'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
            ],
        },

        content: [
            {
                title: 'СЕО текст',
                text: {
                    topText: [
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                    ],
                    bottomText: [
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                    ]
                },
                list: [
                    'Donec pede justo, ',
                    'fringilla vel, ',
                    'aliquet nec, '
                ]
            },

            {
                title: 'СЕО текст',
                text: {
                    topText: [
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                    ],
                    bottomText: [
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
                    ]
                },
                list: [
                    'Donec pede justo, ',
                    'fringilla vel, ',
                    'aliquet nec, '
                ]
            },
        ]
    })

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/blog/post.scss';
</style>