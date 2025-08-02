<template>
    <div class="tab__switcher">
        <ul class="tab__switcher-list">
            <li v-for="(button, index) in tabList" :key="button" :class="button.active ? 'active' : null" @click="switchTab(index)">
                <p class="tab__switcher-button">{{ button.text }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>

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
        }
    })

    const switchTab = (index) => {
        props.tabList.forEach(element => {
            element.active = false
        });

        props.tabList[index].active = true;
    }


</script>
