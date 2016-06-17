import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App'
// 关键点，教 Vue 组件如何处理与 Vuex 相关的选项
Vue.use(Vuex)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store:store,
  components: { App }
})
