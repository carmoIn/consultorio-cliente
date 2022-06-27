<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="item in header" :key="item">
                    <abbr title="Position">{{ item }}</abbr>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item">
                <th>{{ item }}</th>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DataTable',
    props: {
        header: {
            type: Array,
            require: true,
        },
        data: {
            type: Array,
            require: true,
        },
    },
});
</script>

<style scoped></style>
