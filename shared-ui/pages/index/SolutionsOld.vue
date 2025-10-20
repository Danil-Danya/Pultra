<template>
    <section class="solution">
        <div class="container">
            <div class="solution__container">
                <div class="solution__card" v-for="card in solutionList" :key="card" :class="`${card.class} ${card.type}`">
                    <h2 class="solution__title-head" v-if="card.type === 'title'">{{ card.title }}</h2>
                    <div class="solution__card-content" v-if="card.type === 'card'">
                        <h2 class="solution__title-card">{{ card.title }}</h2>
                        <p class="solution__card-text">{{ card.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import animateSolution from '@/plugins/animations/sections/solutions.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';

    useGsapCleanup();
    
    const solutionList = ref([
        { title: 'Наши решения', type: 'title', class: 'title-bottom top' },
        { title: '99,8%', text: 'стабильность качества продукции благодаря автоматизированному контролю на всех этапах', type: 'card', class: 'rotate-bottom top left left-pos' },
        { title: '2x', text: 'ускорение сроков выхода продукции на рынок с использованием наших технологий', type: 'card', class: 'top' },
        { title: 'обеспечивают', type: 'title', class: 'title-top bottom' },
        { title: '30%', text: 'снижение производственных потерь за счёт внедрения точных систем дозирования и контроля', type: 'card', class: 'bottom left left-pos' },
        { title: '50+', text: 'успешно реализованных проектов в промышленном секторе', type: 'card', class: 'rotate-top bottom' },
    ])

    onMounted(() => {
        setTimeout(() => {
            animateSolution();
        }, 100);
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/index/solution.scss';
</style>