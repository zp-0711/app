//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入element-UI组件库
// import ElementUI from 'element-ui';
// 引入Element-ui全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import {Button,Row,DatePicker} from 'element-ui'

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用element-ui
// Vue.use(ElementUI);
Vue.use('Button.name',Button);
Vue.use('el-row',Row);
Vue.use('el-date-picker',DatePicker);
//创建vm
new Vue({
	el:'#App',
	render: h => h(App),
})
