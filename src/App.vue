<template>
  <div id="app">
    <HeaderSection />
    <router-view></router-view>
    <BottomNavSection />
  </div>
</template>

<script>

import HeaderSection from './components/sections/headerSection.vue'
import BottomNavSection from './components/sections/bottomNavSection.vue';
export default {
  name: 'App',
  
  components: {
    HeaderSection,
    BottomNavSection,
  },
};
</script>
