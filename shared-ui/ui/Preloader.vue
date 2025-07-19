<template>
    <TransitionGroup name="fade">
        <section class="preloader" v-if="show">
            <div class="preloader__container">
                <img src="/images/logos/logo.svg" alt="Логотип" class="preloader__logo">
                <p class="preloader__text">Загрузка контента...</p>
            </div>
        </section>
    </TransitionGroup>
</template>

<script setup>
    const show = ref(true);
    defineExpose({ show });
</script>