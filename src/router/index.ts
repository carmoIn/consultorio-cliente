import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import DashboardView from 'src/views/DashboardView.vue';
import BaseLayout from '../layouts/BaseLayout.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        component: DashboardView,
    },
    {
        path: '/medicos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: BaseLayout,
        children: [
            {
                path: '',
                component: () =>
                    import(
                        /* webpackChunkName: "medicos" */ '@/views/medicos/MedicosList.vue'
                    ),
            },
            {
                path: 'novo',
                component: () =>
                    import(
                        /* webpackChunkName: "novo" */ '@/views/medicos/MedicosForm.vue'
                    ),
            },
            {
                path: 'editar/:id',
                component: () =>
                    import(
                        /* webpackChunkName: "editar" */ '@/views/medicos/MedicosForm.vue'
                    ),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
