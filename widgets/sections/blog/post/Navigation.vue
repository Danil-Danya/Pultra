<template>
    <div class="navigation">
        <h3 class="navigation__title">Навигация</h3>
        <ul class="navigation__list">
            <li class="navigation__li" v-for="link in links" :key="link">
                <a
                    href="#"
                    class="navigation__link"
                    @click.prevent="scrollTo(link.slug)"
                >
                    {{ link.title }}
                </a>

            </li>
        </ul>
    </div>
</template>

<script setup>

    import slugGenerator from '@/utils/slugGenerator.js';

    const props = defineProps({
        content: {
            type: Array,
            required: true
        }
    });

    const links = computed(() => {
        return props.content
            .filter(item => item?.title || item?.subtitle || item?.subtitleMini)
            .map(item => {
                const text = item.title || item.subtitle || item.subtitleMini;
                return {
                    title: text,
                    slug: item.slug || slugGenerator(text)
                };
            });
    });


    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            history.replaceState(null, '', `#${id}`)
        }
    }


</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/widgets/blog/navigation.scss';
</style>