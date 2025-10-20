<template>
    <header class="header">
        <Navbar v-if="!isMobile"/>
        <MobileNavbar v-else />
    </header>
    <main class="main">
        <NuxtPage :key="$route.fullPath" />
        <button class="top-button" @click="scrollTop"><span>^</span></button>
    </main>
    <footer class="footer">
        <Footer />
    </footer>
</template>

<script setup>
    import Navbar from '@/shared-ui/layouts/default/Navbar.vue';
    import Footer from '@/shared-ui/layouts/default/Footer.vue';

    import { useRoute } from 'vue-router';

    const route = useRoute();

    import MobileNavbar from '@/shared-ui/layouts/default/MobileNavbar.vue';

    const isMobile = ref(false);

    const showMobile = () => {
        if (window.innerWidth < 850) {
            isMobile.value = true;
        }
    }

    onMounted(() => {
        showMobile();
    })

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


</script>