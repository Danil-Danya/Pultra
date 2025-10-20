<template>
    <section class="pagination" v-if="totalPages > 1">
        <div class="container">
            <div class="pagination__content">
                <div class="pagination__button-container">
                    <NuxtLink
                        v-if="hasPrev"
                        :to="currentPage - 1 === 1 ? path : `${path}/page-${currentPage - 1}/`"
                        class="pagination__button"
                    >
                        <span class="pagination__button-icon">
                            <PrevIcon />
                        </span>
                    </NuxtLink>
                    <NuxtLink
                        v-for="page in totalPages"
                        :key="page"
                        :to="page === 1 ? path : `${path}/page-${page}/`"
                        :class="['pagination__page', { active: page === currentPage }]"
                    >
                        {{ page }}
                    </NuxtLink>
                    <NuxtLink
                        v-if="hasNext"
                        :to="`${path}/page-${currentPage + 1}/`"
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

    const PrevIcon = defineAsyncComponent(() =>
        import('@/shared-ui/icons/blog/Prev.vue')
    );
    const NextIcon = defineAsyncComponent(() =>
        import('@/shared-ui/icons/blog/Next.vue')
    );

    const props = defineProps({
        pagination: {
            type: Object,
            required: true
        },
        
        path: {
            type: String,
            default: '/blog'
        }
    });

    const currentPage = computed(() => props.pagination.currentPage);
    const totalPages = computed(() => props.pagination.totalPages);
    const hasNext = computed(() => props.pagination.hasNext);
    const hasPrev = computed(() => props.pagination.hasPrev);

    const config = useRuntimeConfig()
    const baseUrl = config.public.siteBaseURL


    useHead(() => {
        const links = [];

        if (hasPrev.value) {
            const prevUrl =
                currentPage.value - 1 === 1
                    ? `${baseUrl}${props.path}`
                    : `${baseUrl}${props.path}/page-${currentPage.value - 1}`;
            links.push({ rel: 'prev', href: prevUrl });
        }

        if (hasNext.value) {
            const nextUrl = `${baseUrl}${props.path}/page-${currentPage.value + 1}`;
            links.push({ rel: 'next', href: nextUrl });
        }

        return { link: links };
    });

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/pagination/pagination.scss';
</style>


