<template>
    <div class="tab">
        <div class="tab__content">
            <div class="tab__switcher">
                <TabSwitcher :tabList="tabList" />
            </div>
            <TransitionGroup name="tab" mode="out-in">
                <div class="tab__block" v-for="block in tabList" :key="block" v-show="block.active">
                    <Component 
                        :content="content" 
                        :is="block.component" 
                    />
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
    import TabSwitcher from '@/shared-ui/ui/TabSwitcher.vue';

    const props = defineProps({
        tabList: {
            type: Array,
            required: true,
            validator: (value) => {
                if (!Array.isArray(value)) 
                    return false;

                const valid = value.every(tab =>
                    typeof tab === 'object' &&
                    typeof tab.text === 'string' &&
                    typeof tab.active === 'boolean'
                )

                const activeCount = value.filter(tab => tab.active).length;
                return valid && activeCount === 1;
            }
        },
        content: {
            type: [Object, Array],
            required: true
        }
    })

</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tab/tab.scss';
</style>

