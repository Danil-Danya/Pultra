<template>
    <Preloader ref="preloaderRef" />
    <NuxtLayout :class="preloaderRef ? 'hidden' : null">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
    import Preloader from '@/shared-ui/ui/Preloader.vue';

    const preloaderRef = ref(true);

    const router = useRouter();

    router.beforeEach((_to, _from, next) => {
        preloaderRef.value.show = true;
        next();
    })

    router.afterEach(() => {
        setTimeout(() => {
            preloaderRef.value.show = false;
        }, 500)
    })

    onMounted(() => {
        preloaderRef.value.show = true;

        setTimeout(() => {
            preloaderRef.value.show = false;
        }, 500)
    })
</script>

