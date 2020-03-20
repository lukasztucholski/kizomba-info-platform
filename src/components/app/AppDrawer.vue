<template>
  <div>
    <v-navigation-drawer v-model="citiesDrawer" height="auto" fixed temporary>
      <v-btn
        v-for="(city, index) in cities"
        :key="city"
        block
        depressed
        class="py-3"
        @click="
          activeCity = index === 0 ? null : city;
          citiesDrawer = false;
        "
      >
        {{ city }}
      </v-btn>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawer" app dark width="300">
      <v-row justify="center">
        <div class="templogo">LOGO</div>
      </v-row>

      <v-row justify="center">
        <v-btn
          depressed
          small
          color="accent"
          @click="citiesDrawer = !citiesDrawer"
        >
          {{ activeCity || 'Wybierz miasto' }}
        </v-btn>
      </v-row>

      <v-list dense>
        <template v-for="(item, i) in items">
          <v-divider v-if="item.divider" :key="i" dark class="my-4" />

          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
          >
            <template #prependIcon>
              <v-icon>
                {{ item.iconPrepend }}
              </v-icon>
            </template>

            <template #appendIcon>
              <v-icon>
                {{ item.model ? item.icon : item.iconAlt }}
              </v-icon>
            </template>

            <template #activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              class="text-end"
            >
              <v-list-item-content @click="$router.push({ path: child.href })">
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="child.icon">
                <v-icon>
                  {{ child.icon }}
                </v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :key="item.text"
            link
            @click="$router.push({ path: item.href })"
          >
            <v-list-item-action>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { navItems as items, cities } from '~/config/app-navigation';

export default {
  name: 'AppDrawer',

  props: ['isVisible'],

  data() {
    return {
      citiesDrawer: false,
      activeCity: null,
      items,
      cities,
    };
  },

  computed: {
    drawer: {
      get() {
        return this.isVisible;
      },
      set(newValue) {
        return this.$emit('setDrawerVisiblity', newValue);
      },
    },
  },
};
</script>
