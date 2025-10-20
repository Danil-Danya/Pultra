<template>
    <div class="table-wrap">
        <table class="table">
            <thead class="table-head">
                <tr class="table-row">
                    <th
                        v-for="(heading, i) in table.headings"
                        :key="'head-' + i"
                        class="cell cell-head"
                        :colspan="heading.colspan"
                        :rowspan="heading.subheadings?.length ? 1 : heading.rowspan"
                    >
                        {{ heading.text }}
                    </th>
                </tr>

                <tr v-if="hasSubheadings" class="table-row">
                    <template v-for="(heading, i) in table.headings" :key="'sub-group-' + i">
                        <th
                            v-for="(sub, j) in heading.subheadings || []"
                            :key="'sub-' + j"
                            class="cell cell-sub"
                        >
                            {{ sub }}
                        </th>
                    </template>
                </tr>
            </thead>

            <tbody class="table-body">
                <tr
                    v-for="(row, r) in table.rows"
                    :key="r"
                    class="table-row"
                >
                    <td
                        v-for="(cell, c) in row"
                        :key="c"
                        class="cell"
                    >
                        <NuxtLink
                            v-if="c === 0 && row.slug"
                            :to="`${path}${row.slug}/`"
                            class="cell-link"
                        >
                            {{ cell }}
                        </NuxtLink>
                        <p v-else class="cell-text">{{ cell }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const path = route.fullPath

const props = defineProps({
    table: {
        type: Object,
        required: true
    }
})

const hasSubheadings = computed(() =>
    props.table.headings.some(h => h.subheadings && h.subheadings.length)
)
</script>


<style lang="scss">
    @import '@/assets/styles/ui/shared/features/tables/table-seo.scss';
</style>