<template>
  <v-app>
    <AppToolbar @setDrawerVisibility="drawer = !drawer" />
    <AppDrawer :isVisible="drawer" @setDrawerVisiblity="drawer = $event" />

    <v-content>
      <div class="app">
        <router-view />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from '~/components/app/AppToolbar';
import AppDrawer from '~/components/app/AppDrawer';

export default {
  name: 'App',

  components: { AppToolbar, AppDrawer },

  data: () => ({
    drawer: null,
  }),
};
</script>
