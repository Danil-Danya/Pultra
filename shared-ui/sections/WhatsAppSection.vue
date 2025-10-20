<template>
    <section class="whatsapp">
        <div class="container">
            <div class="whatsapp__container">
                <div class="whatsapp__left">
                    <img loading="lazy"  class="whatsapp__img" src="/images/whatsapp/ph.png" alt="Картинка" format="webp" preload fetchpriority="high">
                    <h2 class="whatsapp__title">Отправим каталог продукции на <span>WhatsApp</span></h2>
                </div>
                <div class="whatsapp__right">
                    <WhatsAppDarkForm />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import WhatsAppDarkForm from "@/features/forms/WhatsAppDarkForm.vue";
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/whatsapp.scss';
</style>
