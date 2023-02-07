<template>
    <v-app>
        <v-navigation-drawer class="pt-4" app v-model="drawer">
            <v-list dense>
                <v-list-item :to="{ name: 'sala' }">Sala</v-list-item>
                <v-list-item :to="{ name: 'cuina' }">Cuina</v-list-item>
                <v-list-item :to="{ name: 'carta' }">Carta</v-list-item>
                <v-list-item :to="{ name: 'treballadors' }">
                    Treballadors
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="primary" dark dense>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <div class="d-flex align-center">
                <h2>Restaurant</h2>
            </div>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'App',

    data: () => ({
        //
        drawer: false,
    }),
});
</script>
