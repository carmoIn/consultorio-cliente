<template>
    <div class="menu" v-for="menu in menuList" :key="menu.name">
        <p class="menu-label">{{ menu.name }}</p>
        <ul class="menu-list" v-for="child in menu.children" :key="child.name">
            <li>
                <a>{{ child.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: 'NavMenu',
    setup() {
        const menuList = reactive([
            {
                name: 'Pessoas',
                children: [
                    {
                        name: 'Medicos',
                        url: '',
                    },
                    {
                        name: 'Pacientes',
                        url: '',
                    },
                    {
                        name: 'Secretaria',
                        url: '',
                    },
                ],
            },
        ]);

        return {
            menuList,
        };
    },
});
</script>

<style scoped></style>
