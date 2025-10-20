<template>
    <section class="quality">
        <div class="quality__content">
            <div class="quality__info">
                <div class="container">
                    <div class="quality__info-inner">
                        <div class="quality__info-left">
                            <h2 class="title quality__title">Ощутите качество нашей продукции</h2>
                        </div>
                        <div class="quality__info-right">
                            <div class="quality__info-content-container">
                                <h3 class="title quality__title-mini">Получите бесплатный набор образцов нашей продукции</h3>
                                <p class="quality__text">Мы подготовили для вас специальную коробку с образцами наших композитных изделий. Убедитесь в их надежности, прочности и высоком качестве своими глазами.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quality__presentation">
                <div class="container">
                    <div class="quality__presentation-inner">
                        <div class="quality__presentation-left">
                            <img loading="lazy"  preset="default"  format="webp" preload fetchpriority="high"  src="/images/quality/quality.png" alt="Картинка" class="quality__presentation-img">
                        </div>
                        <div class="quality__presentation-right">
                            <QualityForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import QualityForm from '@/features/forms/QualityForm.vue';
    import qualityAnimation from '@/plugins/animations/sections/quality.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';
    import { nextTick } from 'vue';

    useGsapCleanup();

    onMounted(async () => {
        await nextTick();
        
        setTimeout(() => {
            qualityAnimation()
        }, 1000);
    });

</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/quality.scss';
</style>