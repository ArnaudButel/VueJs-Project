<template>
  <div id="app">
    <div class="ui three item menu">
      <a href="" class="item">Accueil</a>
      <a href="" class="item">Mes listes</a>
      <a href="" class="active item">Ma liste</a>
    </div>
    <MaListe/>
  </div>
</template>

<script>
import MaListe from './components/MaListe.vue'

export default {
  name: 'app',
  components: {
    MaListe
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
