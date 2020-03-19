<template>
  <v-app>
    <v-container>
      <v-row justify="end">
        <v-switch
          v-model="$vuetify.theme.dark"
          class="mr-3"
          append-icon="fa-moon"
        />
      </v-row>
    </v-container>

    <v-content>
      <div class="app">
        <router-view />
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
