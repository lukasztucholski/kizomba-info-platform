<template>
  <v-app-bar app clipped-right>
    <v-app-bar-nav-icon @click.stop="$emit('setDrawerVisibility')" />
    <v-toolbar-title>Kizomba &amp; Urban Kiz Info Platform</v-toolbar-title>
    <v-spacer />
    <v-switch
      v-model="$vuetify.theme.dark"
      class="mr-3"
      append-icon="fa-moon"
      hide-details
    />
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppToolbar',
};
</script>
