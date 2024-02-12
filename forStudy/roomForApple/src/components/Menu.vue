<template>
  <div class="menu">
    <a v-for="a in menu" :key="a">{{ a }}</a>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data(){
    return {
      menu: ['Home', 'Shop', 'About'],
    }
  }
}
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
}

.menu a {
  color: white;
  text-decoration: none;
  padding: 10px;
}
</style>