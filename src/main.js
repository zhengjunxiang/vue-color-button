import Vue from 'vue'
import App from './App.vue'

import ComColorButton from '../packages/index'
// 注册组件库
Vue.use(ComColorButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
