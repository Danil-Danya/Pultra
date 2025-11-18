<template>
    <section class="project">
        <div class="container">
            <div class="project__content">
                <h2 class="title project__title">Наш опыт в масштабных проектах</h2>
                <div class="project__card-container">
                    <Card 
                        v-for="card in projects"
                        :key="card"
                        :date="card.date"
                        :title="card.title"
                        :text="card.text"
                        :link="card.link"
                        :image="card.image"
                    />
                    <div class="project__button-container">
                        <Pagination :pagination="projectsStore.projects.pagination" path="/proekty" class="project__paginate" />
                    </div>
                </div>
                <ProjectSlider class="project__slider"/>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Card from '@/widgets/sections/projects/card/Card.vue';
    import ProjectSlider from '@/features/sliders/PartnersSlider.vue';
    import Pagination from '@/features/pagination/Pagination.vue';
    
    //import animateProject from '@/plugins/animations/sections/project.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';
    import { useProjectStore } from '@/entities/projects/store.js';
    import { useRoute } from 'vue-router';
    import { nextTick } from 'vue';

    useGsapCleanup();
    const route = useRoute()

    const projectsStore = useProjectStore();

    const pageNumber = parseInt(route.path.split('-')[1]) || 1;

    const pagination = {
        page: pageNumber,
        per_page: 10,
    }

    await projectsStore.fetchAll(pagination);

    const projects = computed(() => {
        return projectsStore.projects.projectsList.map((project) => ({
            date: project.date,
            title: project.title,
            text: project.previewText,
            link: `/proekty/${project.slug}`,
            image: project.thumbnail
        }));
    })

    const ArrowButton = defineAsyncComponent(() => import('@/shared-ui/icons/project/ArrowLink.vue'));

    onMounted(async () => {
        await nextTick();

        setTimeout(() => {
            //animateProject()
        }, 1000);
    });

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/project.scss';
</style>