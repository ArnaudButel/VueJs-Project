<template>
    <div class="page ui main text container">
        <h1 class="ui header">Accueil</h1>
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
            newList: "",
            productList: {}
        }
    },
    methods: {
        addList() {
            const newID = this.list.length+1
            this.list.push({ id: newID, name: this.newList })
            this.newList = ""
        }
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem('listOfList'))
        this.productList = list.slice(-1)[0] || []
    },
    watch: {
        list: {
            handler () {
                localStorage.setItem('listOfList', JSON.stringify(this.list))
            },
            deep: true
        },
    },
}
</script>