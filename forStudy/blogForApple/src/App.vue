<script>

import NaviBar from "@/components/NaviBar.vue";
// Data
import PostData from "@/assets/data/PostData";

export default {
  name: 'App',
  data() {
    return {
      PostData,
      clickedData: 0,
    };
  },
  components: {NaviBar},
}
</script>

<template>
  <NaviBar/>

<div class="mt-4">
  <router-view
      :PostData="PostData"
      @clicked="clickedData=$event"
      :clickedData="clickedData"
  />
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
