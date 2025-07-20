<template>
    <section class="breadcrumbs">
        <div class="container">
            <ul class="breadcrumbs__list">
                <li class="breadcrumbs__li" 
                    v-for="(link, index) in breadCrumbsList" 
                    :key="link"
                >
                    <NuxtLink 
                        :to="link.link" 
                        class="breadcrumbs__link" 
                        :class="index === (breadCrumbsList.length - 1) ? 'bold' : null" 
                    >
                        {{ link.text }}
                    </NuxtLink>
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

<style lang="scss" scoped>
    @import '@/assets/styles/ui/shared/sections/breadcrumbs.scss'
</style>
