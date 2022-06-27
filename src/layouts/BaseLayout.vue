<template>
    <section class="main-content columns is-fullheight">
        <aside
            class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
        >
            <nav-menu></nav-menu>
        </aside>

        <div class="container column is-10">
            <div class="section">
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import NavMenu from '@/components/NavMenu';

export default defineComponent({
    name: 'BaseLayout',
    components: { NavMenu },
});
</script>

<style scoped></style>
