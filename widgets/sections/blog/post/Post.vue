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
                <img loading="lazy" class="post__img" format="webp" preload fetchpriority="high"  :src="currentPost.imageFull" alt="Картинка поста">
            </div>
            <div class="post__content" v-for="content in content" :key="content">
                <h2 class="post__subtitle-content title-h2" :id="content.slug" v-if="content?.title">{{ content.title }}</h2>
                <h3 class="post__subtitle-content title-h3" :id="content.slug" v-if="content?.subtitle">{{ content.subtitle }}</h3>
                <h4 class="post__subtitle-content title-h4" :id="content.slug" v-if="content?.subtitleMini">{{ content.subtitleMini }}</h4>
                <img loading="lazy" class="post__img" format="webp" preload fetchpriority="high" :src="content?.image?.src" :alt="content?.image?.alt" v-if="content?.image?.src">
                <p class="post__text" v-if="content?.text" v-html="content.text"></p>
                <ol v-if="content?.list?.length" class="post__list">
                    <li
                        v-for="(item, liIdx) in content.list"
                        :key="liIdx"
                        class="post__li"
                    >
                        <h2 v-if="item.title" class="post__subtitle title-h2">
                            {{ item.title }}
                        </h2>

                        <h3 v-if="item.subtitle" class="post__subtitle title-h3">
                            {{ item.subtitle }}
                        </h3>

                        <h4 v-if="item.subtitleMini" class="post__subtitle title-h4">
                            {{ item.subtitleMini }}
                        </h4>

                        <p v-if="item.text" class="post__text" v-html="item.text"></p>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>

    const CalendarIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Calendar.vue'));
    const AuthorIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Author.vue'));
    const ViewsIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Views.vue'));
    const TimeIcon = defineAsyncComponent(() => import('@/shared-ui/icons/post/Time.vue'));

    
    const props = defineProps({
        content: {
            type: Object, 
            required: true
        }, 
        currentPost: {
            type: Object,
            required: true
        }
    })
    
    console.log(props.content);
    const postData = ref([
        {
            text: toRaw(props.currentPost.date),
            icon: CalendarIcon
        },
        {
            text: toRaw(props.currentPost.readTime),
            icon: TimeIcon
        },
        {
            text: toRaw(props.currentPost.countView),
            icon: ViewsIcon
        },
        {
            text: toRaw(props.currentPost.author),
            icon: AuthorIcon
        },
    ]);
    

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/blog/post.scss';
</style>