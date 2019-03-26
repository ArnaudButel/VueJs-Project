<template>
    <div class="page ui main text container">
        <h1 class="ui header">Accueil</h1>
        <p>( Ceci n'est pas un chargement, c'est juste pour remplacer lorem ;) )</p>
        <div class="ui fluid placeholder">
            <div class="paragraph">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="paragraph">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="ui hidden divider"></div>
        <h2 class="ui header">Ma dernière liste</h2>
        <router-link class="list_link" :to="'list/'+productList.id">{{ productList.name }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'lists',
    data () {
        return {
            productList: {}
        }
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem('listOfList'))
        this.productList = list[0] || []
    },
}
</script>