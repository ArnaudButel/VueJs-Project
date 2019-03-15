import Vue from 'vue'
import Router from 'vue-router'
//import MaListe from '@/components/MaListe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MaListe',
      component: () => import('@/components/Home')
      //component: MaListe
    }, 
  ]
})