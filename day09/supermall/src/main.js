import Vue from 'vue'
import App from './App'
import router from './router'

// 设置事件总线$bus
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
