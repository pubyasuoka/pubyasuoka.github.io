import Vue from 'vue'
import main from './components/main.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(main)
}).$mount('#app')
