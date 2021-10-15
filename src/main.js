//导入Vue包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue跟组件
import App from './App.vue'
//导入test.vue
import test from './test.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
//.$mount('#app')和el:'#app'一样

new Vue({
  render: h => h(test),
}).$mount('#test')
//.$mount('#app')和el:'#app'一样