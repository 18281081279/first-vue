//导入Vue包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue跟组件
import App from './App.vue'
//在main.js中导入Count,并用Vue.component注册全局组件
import Count from '@/components/Count.vue'
Vue.component('MyCount', Count)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
//.$mount('#app')和el:'#app'一样