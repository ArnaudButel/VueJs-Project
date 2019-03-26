<template>
    <div class="page ui middle aligned center aligned grid">
        <div class="column">
                <h1 class="ui header">Liste de course {{ this.listName }}</h1>
                <div class="ui input focus">
                    <input v-model=itemName placeholder="produit" @keyup.enter="addItemList">
                </div>

                <div v-if="itemName !== ''"  class="ui list autocomplete">
                    <div class="item" v-for="(item, index) in filteredList" :key="index" @click="addItemAutoComp(item)">{{ item }}</div>
                </div>
        
                <div class="ui relaxed list">
                    <div class="header_list item ui grid equal width row ">
                        <div class="elmt_list">OK</div>
                        <div class="elmt_list">Produit</div>
                        <div class="elmt_list">Prix</div>
                        <div class="elmt_list">Supprimer</div>
                    </div>
                    <div class="item ui grid equal width row" v-for="item in list" :key="item.id">
                        <div class="elmt_list"><input type="checkbox" :id="'produit_' + item.id" v-model="item.checked"></div>
                        <div class="elmt_list"><label :for="'produit_' + item.id">{{ item.text }}</label></div>
                        <div class="ui right labeled input elmt_list">
                            <input class="ui mini icon input" type="text" placeholder="Montant" :id="'price_' + item.id" v-model.number="item.price" @change="upgradeAmount()" v-if="item.checked">
                            <label for="amount" class="ui label" v-if="item.checked">€</label>
                        </div>
                        <div class="elmt_list"><button class="ui red button"  @click="delElmt(item.id)">Supprimer</button></div>
                    </div>
                </div>

                <div class="ui left action input right labeled input">
                    <div class="ui teal labeled icon button disabled">
                        <i class="cart icon"></i>
                        Budget
                    </div>
                    <input class="ui mini icon input" id="budget" type="text" placeholder="Budget" v-model="budget">
                    <label for="amount" class="ui label ">€</label>
                </div>
                <p>Total : {{ amount }}</p>
                <p class="ui attached icon error message" v-show="amount > budget">Attention budget dépassé !</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MaListe',
    data () {
        return {
            itemName: "",
            listName: "",
            budget : 0,
            amount:0,
            list: [],
            autoCompList : ["Bananes", "Chocolat", "Pommes", "Poulet", "Soda"]
        }
    },
    methods: {
        autolist () {
            const all = this.autoCompList.concat(this.items)
            const list = all.filter(i => i.name.toLowerCase().includes(this.input.toLowerCase())).map(l => l.name)
            return list.filter((value, i, self) => self.indexOf(value) === i)
        },
        addItemAutoComp(item) {
            this.itemName = item
        },
        addItemList() {
            const newID = this.list.length+1
            this.list.push({id: newID, text: this.itemName, checked: false, price:0})
            this.autoCompList.push(this.itemName)
            this.itemName = ""
        },
        delElmt(id) {
            this.list.forEach((elmt, index) => {
                if(elmt.id === id) {
                    this.list.splice(index, 1)
                }
            });
            this.upgradeAmount()
        },
        upgradeAmount() {
            this.amount = 0
            this.list.forEach((elmt) => {
                if(elmt.checked) {
                    this.amount += elmt.price
                }
            });
        }
    },
    mounted() {
        this.list = JSON.parse(localStorage.getItem('productList-' + this.$route.params.id + '-products')) || []
        this.budget = localStorage.getItem('productList-' + this.$route.params.id + '-budget') || 0
        this.autoCompList = JSON.parse(localStorage.getItem('autoCompList')) || []
    },
    watch: {
        list: {
            handler () {
                localStorage.setItem('productList-' + this.$route.params.id + '-products', JSON.stringify(this.list))
            },
            deep: true
        },
        budget: {
            handler() {
                localStorage.setItem('productList-' + this.$route.params.id + '-budget', this.budget)
            },
            deep: true
        },
        autoCompList: {
            handler() {
                localStorage.setItem('autoCompList', JSON.stringify(this.autoCompList))
            },
            deep: true
        }
    },
    computed: {
        filteredList() {
            return this.autoCompList.filter(list => {
                return list.toLowerCase().includes(this.itemName.toLowerCase())
            })
        }
    },
}
</script>

<style scoped>
ul {
    list-style-type: none
}
.close.icon {
    font-size: 2em;
}
.item.ui.grid.equal.width.row {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.elmt_list {
    width: 200px;
    max-width: 20%;
}
.header_list {
    font-weight: bold;
    background-color: #222;
    color: white;
    padding: 10px 0!important;
    border-radius: 5px;
}
.autocomplete {
    cursor: pointer;
    width: 200px;
    margin: auto;
    border: 1px #eee solid;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.autocomplete div:hover {
    background-color: azure
}
</style>
