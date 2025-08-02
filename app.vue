<template>
    <Preloader ref="preloaderRef" />
    <NuxtLayout :class="preloaderRef ? 'hidden' : null">
        <NuxtPage :key="route.fullPath" />
    </NuxtLayout>
</template>

<script setup>
    import Preloader from '@/shared-ui/ui/Preloader.vue';
    
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { nextTick } from 'vue';

    const preloaderRef = ref(true);

    const router = useRouter();

    router.beforeEach((_to, _from, next) => {
        preloaderRef.value.show = true;
        next();
    })

    router.afterEach(() => {
        nextTick(() => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        })

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

