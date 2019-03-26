<template>
    <div class="page ui main text container">
        <h1 class="ui header">Mes listes</h1>
        <div class="ui icon input">
            <input v-model=itemSearch type="text" placeholder="Rechercher...">
            <i class="search icon"></i>
        </div>
        
        <div class="ui relaxed divided list listoflists">
            <div class="item" v-for="item in filteredList" :key="item.id">
                <div class="content">
                    <router-link class="" :to="'list/'+item.id" >{{ item.name }}</router-link>
                    <button class="ui red button supplist" @click="delList(item.id)">Supprimer</button>
                </div>
            </div>
        </div>

        <div class="ui right labeled input">
            <input @keyup.enter=addList v-model=newList type="text" placeholder="Nouvelle liste">
            <button @click=addList class="ui primary button">Ajouter</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lists',
    data () {
        return {
            newList: "",
            itemSearch: "",
            listOfList: []
        }
    },
    methods: {
        addList() {
            const newID = this.listOfList.length+1
            this.listOfList.splice(0, 0, { id: newID, name: this.newList })
            this.newList = ""
        },
        delList(id) {
            this.listOfList.forEach((elmt, index) => {
                if(elmt.id === id) {
                    this.listOfList.splice(index, 1)
                    localStorage.removeItem('productList-' + id + '-products')
                    localStorage.removeItem('productList-' + id + '-budget')
                }
            });
        }
    },
    computed: {
        filteredList() {
            return this.listOfList.filter(list => {
                return list.name.toLowerCase().includes(this.itemSearch.toLowerCase())
            })
        }
    },
    mounted() {
        this.listOfList = JSON.parse(localStorage.getItem('listOfList')) || []
    },
    watch: {
        listOfList: {
            handler () {
                localStorage.setItem('listOfList', JSON.stringify(this.listOfList))
            },
            deep: true
        },
    },
}
</script>

<style>
.supplist {
    float:right;
}
.listoflists {
    min-height: 100px;
    max-height: 400px;
    overflow: auto;
}
</style>
