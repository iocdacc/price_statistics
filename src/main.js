import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './plugins'
import './less/default.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
