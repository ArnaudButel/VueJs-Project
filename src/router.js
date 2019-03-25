import Vue from 'vue'
import Router from 'vue-router'
//import MaListe from '@/components/MaListe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home')
      //component: MaListe
    }, 
    {
      path: '/lists',
      name: 'Mes Listes',
      component: () => import('@/components/Lists')
    }, 
    {
      path: '/list/:id',
      name: 'Ma liste',
      component: () => import('@/components/MaListe')
    }, 
    {
      path: '/about',
      name: 'A propos',
      component: () => import('@/components/About')
    }, 
  ]
})