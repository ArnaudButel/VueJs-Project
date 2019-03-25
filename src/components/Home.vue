<template>
    <div class="page">
        <h1 class="ui header">Accueil</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium! Fuga soluta vitae facere nesciunt ea, corporis saepe voluptate enim et iure architecto perferendis inventore libero distinctio sed, quasi veniam?</p>
        <h2>Ma dernière liste</h2>
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