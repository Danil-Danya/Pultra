<template>
    <section class="pagination">
        <div class="container">
            <div class="pagination__content">
                <div class="pagination__button-container">
                    <NuxtLink
                        :to="currentPage - 1 === 1 ? '/blog' : `/blog/page-${currentPage - 1}`"
                        class="pagination__button"
                    >
                        <span class="pagination__button-icon">
                            <PrevIcon />
                        </span>
                    </NuxtLink>

                    <NuxtLink
                        v-for="page in totalPages"
                        :key="page"
                        :to="page === 1 ? '/blog' : `/blog/page-${page}`"
                        :class="['pagination__page', { active: page === currentPage }]"
                    >
                        {{ page }}
                    </NuxtLink>

                    <NuxtLink
                        :to="`/blog/page-${currentPage + 1}`"
                        class="pagination__button"
                    >
                        <span class="pagination__button-icon">
                            <NextIcon />
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    const PrevIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Prev.vue'));
    const NextIcon = defineAsyncComponent(() => import('@/shared-ui/icons/blog/Next.vue'));

    const route = useRoute()

    const currentPage = computed(() => {
        const match = route.path.match(/page-(\d+)/)
        return match ? parseInt(match[1]) : 1
    })


    const totalPages = 5;
</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/pagination/pagination.scss';
</style>

