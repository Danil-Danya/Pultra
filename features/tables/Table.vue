<template>
    <div class="table-wrapper">
        <table class="table">
            <thead class="table__head">
                <tr class="table__row">
                    <th
                        v-for="(heading, index) in tableHeadings"
                        :key="index"
                        class="table__cell table__cell-head"
                    >
                        {{ heading }}
                    </th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr
                    v-for="(row, rowIndex) in tableData"
                    :key="rowIndex"
                    class="table__row"
                >
                    <td
                        v-for="(cell, colIndex) in row.cells"
                        :key="colIndex"
                        class="table__cell"
                    >
                        <NuxtLink
                            v-if="colIndex === 0"
                            :to="`${path}${row.slug}/`"
                            class="table__link"
                        >
                            {{ cell }}
                        </NuxtLink>
                        <p class="table__text" v-else>
                            {{ cell }}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

    import { useRoute } from 'vue-router';
    const route = useRoute();

    const path = route.fullPath;

    const props = defineProps({
        tableHeadings: {
            type: Array,
            required: true,
        },
        
        tableData: {
            type: Array,
            required: true,
        }
    });

</script>



<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tables/table.scss';
</style>