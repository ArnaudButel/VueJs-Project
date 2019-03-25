<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  },
  mounted() {
    localStorage.setItem('productList', JSON.stringify({}))
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page {
    margin-top: 30px!important;
}
</style>
