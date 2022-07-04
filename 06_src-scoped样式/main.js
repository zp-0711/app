//引入Vue
import Vue from 'vue'

// import plugins from './plugins';
//引入App
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false;
// Vue.use(plugins)
// 创建vm
new Vue({
    el:'#App',
    render:h=>h(App)
})