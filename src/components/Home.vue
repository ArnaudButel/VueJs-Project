<template>
    <div class="page ui main text container">
        <h1 class="ui header">Accueil</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, sint tempore veritatis laborum debitis explicabo molestiae magnam sit veniam. Accusantium mollitia a obcaecati facilis vel expedita aut suscipit placeat harum?</p>
        <p>Repellendus, vel quaerat numquam dolor totam nulla ex fuga distinctio incidunt ut sequi, eveniet enim, molestiae consectetur voluptatibus in. Eos repudiandae optio eum accusantium quibusdam nemo veniam officia iusto quasi.</p>
        <p>Eos ipsa voluptas et maiores. Pariatur totam tenetur necessitatibus dolores a officiis qui illo accusamus veritatis obcaecati quos unde, enim corrupti inventore repudiandae provident nulla laborum, maxime animi veniam ea.</p>
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