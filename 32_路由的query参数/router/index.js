// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
//创建并暴露一个路由器
export default new VueRouter({
	routes: [{
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			children: [{
				// 不要加斜杠
				path: 'news',
				component: News,

			},
			{
				path: 'message',
				component: Message,
				children:[{
					path:'detail',
					component:Detail,
				}]

			}]
		}
	]
})