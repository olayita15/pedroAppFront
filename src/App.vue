<template>
  <div id="app">
    <HeaderSection />
    <div class="container m-2"><router-view></router-view></div>
    
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
