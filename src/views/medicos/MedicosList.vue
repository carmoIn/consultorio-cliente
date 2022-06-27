<template>
    <card-component title="Home">
        <template v-slot:body>
            <data-table :header="header" />
        </template>
    </card-component>
</template>

<script>
import { defineComponent, ref } from 'vue';
import DataTable from '@/components/DataTable';
import CardComponent from '@/components/CardComponent';

export default defineComponent({
    name: 'MedicosList',
    components: { CardComponent, DataTable },
    setup() {
        const header = ref(['Id', 'Nome']);

        return {
            header,
        };
    },
});
</script>

<style scoped></style>
