<template>
    <section class="heading">
        <div class="container">
            <div class="heading__content">
                <div class="heading__left">
                    <NuxtImg class="heading__img" src="/images/heading/ph.png" alt="Картинка" format="webp" />
                    <div class="heading__button-container">
                        <Button 
                            v-for="button in buttons"
                            class="heading__button"
                            :color="button.color"
                            :text="button.text"
                            :link="button.link"
                            :key="button"
                            type="link" 
                        />
                    </div>
                </div>
                <div class="heading__right">
                    <h1 class="heading__title">{{ title }}</h1>
                    <div class="heading__text-container">
                        <p class="heading__text" v-for="text in text" :key="text">{{ text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import Button from '@/shared-ui/ui/Button.vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },

        text: {
            type: Array,
            required: true,
        }
    })

    const buttons = ref([
        {
            type: 'link',
            color: 'orange',
            text: 'Получить консультацию',
            link: '/consultation'
        },
        {
            type: 'link',
            color: 'white',
            text: 'Написать в WhatsApp',
            link: '/consultation'
        }
    ])

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/heading.scss';
</style>