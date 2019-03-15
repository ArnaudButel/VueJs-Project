<template>
  <div id="app">
    <NavBar/>
    <MaListe/>
  </div>
</template>

<script>
import MaListe from './components/MaListe.vue'
import NavBar from './NavBar.vue'

export default {
  name: 'app',
  components: {
    MaListe,
    NavBar
  }
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
</style>
