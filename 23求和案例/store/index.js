//该文件用于创建Vuex中最为核心的Store

// 引入的Vuex
import Vuex from 'vuex'
//准备actions——用于响应组件中的动作
const action ={}

// 准备mutations——用于操作数据（state）
const mutatuins ={}

//准备state——用于存储数据
const state ={}

// 创建并暴露store
export default new Vuex.Store({
    action:action,
    mutatuins:mutatuins,
    state:state
})

