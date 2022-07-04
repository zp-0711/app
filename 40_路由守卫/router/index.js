// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
//创建并暴露一个路由器
const router = new VueRouter({
	routes: [{
			//给路由命名
			name: 'guanyu',
			path: '/about',
			component: About,
			meta: {
				title: '关于'
			}

		},
		{
			name: 'zhuye',
			path: '/home',
			component: Home,
			meta: {
				title: '主页'
			},
			children: [{
					// 不要加斜杠
					name: 'xinwen',
					path: 'news',
					component: News,
					meta: {
						title: '新闻',
						isAuth: true
					},


				},
				{
					name: 'xiaoxi',
					path: 'message',
					component: Message,
					meta: {
						title: '消息',
						isAuth: true
					},

					children: [{
						//给路由命名
						name: 'xiangqing',
						path: 'detail', //使用占位符声明接收的params参数
						component: Detail,
						meta: {
							title: '详情'
						},
						props($route) {
							return {
								id: $route.query.id,
								title: $route.query.title
							}
						}
					}]

				}
			]
		}
	]
})
//全局前置路由守卫，初始化的时候被调用，每一次路由切换之前都会调用beforeEach里函数
router.beforeEach((to, from, next) => {
		// console.log('@')
		
		if (to.meta.isAuth) { //判断是否需要权限
			if (localStorage.getItem('school') === 'HDu') {
				next()
			} else {
				alert('学校名不对，无权限查看')
			}
		} else {
			next()
		}
	},
	router.afterEach((to, from) => {
		document.title= to.meta.title||'您好!';
		console.log('后置路由守卫', to, from)
	})
)
export default router