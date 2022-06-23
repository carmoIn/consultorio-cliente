<template>
    <card-component title="Home">
        <template v-slot:body>
            <h1>Conteúdo</h1>
        </template>
    </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from '@/components/CardComponent.vue';

export default defineComponent({
    name: 'HomeView',
    components: { CardComponent },
});
</script>
