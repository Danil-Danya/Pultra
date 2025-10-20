<template>
    <section class="parameters">
        <div class="container">
            <div class="parameters__content">
                <Table
                    :tableHeadings="tableHeadings"
                    :tableData="tableData"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import Table from '@/features/tables/Table.vue';

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
});

const tableHeadings = computed(() => {
    const set = new Set(['НАИМЕНОВАНИЕ']); 

    props.products.forEach(product => {
        product.characteristics.forEach(c => {
            set.add(c.title.toUpperCase());
        });
    });

    return Array.from(set);
});

const tableData = computed(() => {
    return props.products.map(product => {
        const characteristics = Object.fromEntries(
            product.characteristics.map(c => [c.title.toUpperCase(), c.value])
        );

        const weightPerMeter = parseFloat(
            (characteristics['ВЕС ОДНОГО ПОГОННОГО МЕТРА, КГ'] || '0').replace(',', '.')
        );

        const length = parseFloat(
            (characteristics['ДЛИНА, ММ'] || '0').replace(/\s/g, '')
        );

        const cells = tableHeadings.value.map(head => {
            if (head === 'НАИМЕНОВАНИЕ') {
                return product.title;
            }
            
            if (head === 'ВЕС') {
                const totalWeight = (weightPerMeter * (length / 1000))
                    .toFixed(2)
                    .replace('.', ',');
                return totalWeight;
            }
            return characteristics[head] || '-';
        });

        return {
            slug: product.slug,
            cells
        };
    });
});

console.log(tableData.value);
console.log(tableHeadings.value);


</script>

<style lang="scss">
    @import '@/assets/styles/ui/shared/pages/catalog/parameters.scss';
</style>

