<template>
    <div >
        <div class="ui three item menu">
            <router-link to="/" class="item">Accueil </router-link>
            <router-link to="/lists" class="item">Mes listes</router-link>
            <router-link to="/about" class="item">A propos</router-link>
        </div>
    </div>
</template>


<script>
export default {
  name: 'NavBar'
}
</script>

