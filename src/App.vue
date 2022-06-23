<template>
    <section class="main-content columns is-fullheight">
        <nav-menu></nav-menu>

        <div class="container column is-10">
            <div class="section">
                <router-view />
            </div>
        </div>
    </section>
</template>

<script>
import NavMenu from '@/components/NavMenu';
export default {
    components: { NavMenu },
};
</script>

<style lang="scss">
@import '~bulma/bulma.sass';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
