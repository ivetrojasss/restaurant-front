import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import SalaView from '../views/sala/SalaView.vue';
import CuinaView from '../views/cuina/CuinaView.vue';
import CartaView from '../views/carta/CartaView.vue';
import TreballadorsView from '../views/treballadors/TreballadorsView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    // Cada una d'aquestes es una de les pàgines de la app
    {
        path: '/sala',
        name: 'sala',
        component: SalaView,
    },
    {
        path: '/cuina',
        name: 'cuina',
        component: CuinaView,
    },
    {
        path: '/carta',
        name: 'carta',
        component: CartaView,
    },
    {
        path: '/treballadors',
        name: 'treballadors',
        component: TreballadorsView,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
