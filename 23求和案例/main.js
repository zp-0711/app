//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
// import vueResource from 'vue-vueResource'
//引入vuex
import vuex from 'vuex'
// 引入store
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false
//  Vue.use(vueResource)
Vue.use(vuex)
//创建vm
const vm = new Vue({
	el:'#App',
	render: h => h(App),
	store,
	beforeCreate(){
		Vue.prototype.$bus= this//安装全局事件总线
	}
})