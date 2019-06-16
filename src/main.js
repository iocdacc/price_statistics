import Vue from 'vue'
import router from './router'
import App from './App.vue'
import iView from 'iview';
import './less/default.less'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
