//导入Vue包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue跟组件
import App from './App2.vue'
//导入路由模块
import router from '@/router/index.js'
//在main.js中导入Count,并用Vue.component注册全局组件
import Count from '@/components/Count.vue'
Vue.component('MyCount', Count)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //在vue项目中要想把路由用起来，必须把路由对象，用下面方式进行挂载
  //router实例对象
  router, 
}).$mount('#app')
//.$mount('#app')和el:'#app'一样