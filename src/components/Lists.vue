<template>
    <div class="page ui middle aligned center aligned grid">
        <div class="column">
            <h1 class="ui header">Mes listes</h1>
            <div class="ui input focus">
                <input v-model=itemSearch type="text" placeholder="Recherche">
            </div>
            
            <div class="ui items">
                <div class="item" v-for="item in filteredList" :key="item.id">
                    <div class="middle aligned content">
                        <router-link class="header" :to="'list/'+item.id" >{{ item.name }}</router-link>
                    </div>
                </div>
            </div>


            <div class="ui input focus">
                <input @keyup.enter=addList v-model=newList type="text" placeholder="Nouvelle liste">
                <button @click=addList >Ajouter</button>
            </div>
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
            this.listOfList.push({ id: newID, name: this.newList })
            this.newList = ""
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