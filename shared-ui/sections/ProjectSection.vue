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
                        <button class="project__button-link" @click="updateProjects">
                            <p class="project__button-text">Показать больше</p>
                            <span class="project__button-icon">
                                <ArrowButton />
                            </span>
                        </button>
                        <NuxtLink to="/proekty/" class="project__button-link">
                            <p class="project__button-text">Все проекты</p>
                            <span class="project__button-icon">
                                <ArrowButton />
                            </span>
                        </NuxtLink>
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
    
    import animateProject from '@/plugins/animations/sections/project.section.js';

    import { useGsapCleanup } from '@/composables/useGsapCleanup';
    import { useProjectStore } from '@/entities/projects/store.js';
    import { nextTick } from 'vue';

    useGsapCleanup();
    const projectsStore = useProjectStore();

    const paginate = {
        per_page: 3,
    }

    await projectsStore.fetchAll(paginate);

    const updateProjects = async () => {
        paginate.per_page += 3;
        await projectsStore.fetchAll(paginate);
    }

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
            animateProject()
        }, 1000);
    });

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/project.scss';
</style>