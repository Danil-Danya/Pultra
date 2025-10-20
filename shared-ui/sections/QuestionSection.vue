<template>
    <section class="question">
        <div class="container">
            <div class="question__content">
                <div class="question__left">
                    <QuestionForm />
                </div>
                <div class="question__right">
                    <div class="question__info">
                        <img loading="lazy"  preset="default" src="/images/questions/content.png" alt="Элемент" class="question__info-img" format="webp" preload fetchpriority="high">
                        <div class="question__info-content">
                            <h3 class="question__info-title">Иванов А.А.</h3>
                            <p class="question__info-text">Руководитель</p>
                        </div>
                    </div>
                    <div class="question__image">
                        <img loading="lazy"  preset="default"  src="/images/questions/director.png" alt="director" class="question__image-img" format="webp" preload fetchpriority="high">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

    import QuestionForm from '@/features/forms/QuestionForm.vue';
    import animateQuestion from '@/plugins/animations/sections/question.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';
    import { nextTick } from 'vue'

    useGsapCleanup();

    onMounted(async () => {
        await nextTick();
        
        setTimeout(() => {
            animateQuestion()
        }, 1000);
    });

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/question.scss'
</style>
