<template>
    <v-col cols="4">
        <v-card outlined>
            <v-card-title>Comanda {{ comanda.id }}</v-card-title>
            <v-card-text>
                <div v-for="(plat, index) of comanda.plats" :key="index">
                    <div class="d-flex align-baseline">
                        <div class="text-subtitle-1">
                            {{ plat.nom }}
                        </div>
                        <v-checkbox
                            class="ml-auto"
                            label="Fet"
                            dense
                            hide-details
                            v-model="plat.cuinat"
                        ></v-checkbox>
                    </div>
                    <div class="text-caption">
                        {{ plat.anotacions }}
                    </div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="red" @click="$emit('eliminar')">
                    Eliminar
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn text color="success" @click="$emit('enviat', false)">
                    {{ !comanda.enviat ? 'Enviar a sala' : 'Enviar a cuina' }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Cuina-comanda',

    data: () => ({
        //
    }),
    props: ['comanda'],
});
</script>
