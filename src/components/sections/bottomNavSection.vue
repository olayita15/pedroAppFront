<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="value"
      active
      color="primary"
      class="d-flex justify-content-center align-items-center pb-5"
    >
      <router-link to="/"  style="text-decoration: none; color: inherit;"><v-btn>
        <v-icon>mdi-history</v-icon>
        
        Home
      </v-btn></router-link>

      <router-link to="/Offices" style="text-decoration: none; color: inherit;"><v-btn>
        <v-icon>mdi-heart</v-icon>

        Oficinas
      </v-btn></router-link>

      <router-link to="/Employees" style="text-decoration: none; color: inherit;"><v-btn>
        <v-icon>mdi-map-marker</v-icon>

        <span>Trabajadores</span>
      </v-btn></router-link>
    </v-bottom-navigation>
  </v-layout>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
