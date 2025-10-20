<template>
    <section class="breadcrumbs">
        <div class="container">
            <ul class="breadcrumbs__list">
                <li class="breadcrumbs__li" 
                    v-for="(link, index) in breadCrumbsList" 
                    :key="link"
                >
                    <NuxtLink 
                        :to="`${link.link}/`" 
                        class="breadcrumbs__link" 
                        v-if="index !== breadCrumbsList.length - 1"
                    >
                        {{ link.text }}
                    </NuxtLink>
                    <p class="breadcrumbs__link bold" v-else>{{ link.text }}</p>
                    <span class="breadcrumbs__el" v-if="index !== breadCrumbsList.length - 1">></span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>

    const props = defineProps({
        breadCrumbsList: {
            type: Array,
            required: true,
            
            validator: (value) => {
                return Array.isArray(value) && value.every(item =>
                    typeof item === 'object' &&
                    typeof item.text === 'string' &&
                    typeof item.link === 'string'
                )
            }
        }
    });

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss'
</style>
