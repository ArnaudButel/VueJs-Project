<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
                <h1 class="ui header ">Liste de course</h1>
                <div class="ui input focus">
                    <input v-model.lazy=itemName placeholder="produit">
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

                
                <div class="ui right labeled input">
                    <label for="budget">Budget </label>
                    <input class="ui mini icon input" id="budget" type="text" placeholder="Budget" v-model="budget">
                    <label for="amount" class="ui label">€</label>
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
            budget : 0,
            amount:0,
            list: []
        }
    },
    methods: {
        delElmt(id) {
            this.list.forEach((elmt, index) => {
                if(elmt.id === id) {
                    //Vue.delete(this.list, index);
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
        this.list = JSON.parse(localStorage.getItem('productList')) || []
    },
    watch: {
        list: {
            handler () {
                localStorage.setItem('productList', JSON.stringify(this.list))
            },
            deep: true
        },
    },
    computed: {
        itemName: {
            get() {
                return ''
            },
            set(value) {
                const newID = this.list.length+1
                this.list.push({id: newID, text: value, checked: false, price:0})
            }
        }
    }
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
</style>
