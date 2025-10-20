<template>
    <Preloader ref="preloaderRef" />
    <NuxtLayout :class="preloaderRef ? 'hidden' : null">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
    import Preloader from '@/shared-ui/ui/Preloader.vue';
    
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { nextTick } from 'vue';

    const preloaderRef = ref(true);

    const router = useRouter();

    router.beforeEach((to, from, next) => {
        if (to.path === from.path && to.hash !== from.hash) {
            return next()
        }

        preloaderRef.value.show = true
        next()
    })

    router.afterEach((to, from) => {
        if (to.path === from.path && to.hash !== from.hash) {
            return
        }

        nextTick(() => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        })

        setTimeout(() => {
            preloaderRef.value.show = false
        }, 500)
    })


    onMounted(() => {
        preloaderRef.value.show = true;

        setTimeout(() => {
            preloaderRef.value.show = false;
        }, 500)
    })

</script>

