<template>
    <v-container fluid>
        <div class="text-h4">Pendents</div>
        <template v-if="comandesPendents.length > 0">
            <v-row>
                <Comanda
                    v-for="(comanda, index) of comandesPendents"
                    :key="index"
                    :comanda="comanda"
                    @enviat="comanda.enviat = true"
                    @eliminar="eliminarComanda(index)"
                ></Comanda>
            </v-row>
        </template>
        <template v-else>
            <v-row>
                <v-col>
                    <div class="text-h5">No hi ha comandes pendents</div>
                </v-col>
            </v-row>
        </template>
        <div class="text-h4 mt-5">Enviats</div>
        <template v-if="comandesEnviades.length > 0">
            <v-row>
                <Comanda
                    v-for="(comanda, index) of comandesEnviades"
                    :key="index"
                    :comanda="comanda"
                    @enviat="comanda.enviat = true"
                    @eliminar="eliminarComanda(index)"
                ></Comanda>
            </v-row>
        </template>
        <template v-else>
            <v-row>
                <v-col>
                    <div class="text-h5">No hi ha comandes enviades</div>
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Comanda from './components/Comanda.vue';

export default Vue.extend({
    name: 'Cuina-view',
    components: { Comanda },

    data: () => ({
        //
        comandes: [
            {
                id: 1,
                plats: [
                    {
                        nom: 'Entrecot',
                        anotacions: 'Molt fet',
                        cuinat: false,
                    },
                    {
                        nom: 'Entrecot',
                        anotacions: 'Poc fet',
                        cuinat: false,
                    },
                    {
                        nom: 'Entrecot',
                        anotacions: 'Al punt',
                        cuinat: false,
                    },
                ],
                enviat: false,
            },
            {
                id: 2,
                plats: [
                    {
                        nom: 'Entrecot',
                        anotacions: 'Molt fet',
                        cuinat: false,
                    },
                ],
                enviat: false,
            },
            {
                id: 3,
                plats: [
                    {
                        nom: 'Amanida de tomaquet amb ceps i formatge de cabra',
                        anotacions: 'Molt fet',
                        cuinat: false,
                    },
                ],
                enviat: false,
            },
        ],
    }),
    methods: {
        eliminarComanda(i: number) {
            this.comandes.splice(i, 1);
        },
        marcarComEnviat(comanda: any) {
            comanda.enviat = true;
        },
    },
    computed: {
        comandesPendents() {
            return this.comandes.filter((comanda) => {
                return !comanda.enviat;
            });
        },
        comandesEnviades() {
            return this.comandes.filter((comanda) => {
                return comanda.enviat;
            });
        },
    },
});
</script>
<style lang="scss">
.supertitol {
    color: red;
    border: 1px solid blue;
}
</style>
