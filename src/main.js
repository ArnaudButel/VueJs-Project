import Vue from 'vue'
import App from './App.vue'
import 'semantic-ui-css/semantic.min.css'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueRouter)