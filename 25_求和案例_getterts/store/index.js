//该文件用于创建Vuex中最为核心的Store
//引入vuex
import Vue from 'vue'
// 引入的Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions = {
    jiaAdd(context,value) {
        // console.log('action中的jian被调用了',context,value)
        if(this.state.sum%2){
            context.commit('JIAADD',value)
        }
    },
    waitjia(context,value) {
        // console.log('action中的jian被调用了',context,value)
        setTimeout(() => {
            context.commit('WAITJIA',value)
        }, 500);
       
    }
}

// 准备mutations——用于操作数据（state）
const mutations = {
    JIA(state,value){
        // console.log('mutations中的JIA被调用',a,b)
        state.sum+=value;
        // console.log(state.sum)
    },
    JIAN(state,value){
        // console.log('mutations中的JIAN被调用',a,b)
        state.sum-=value;
        // console.log(state.sum)
    },
    JIAADD(state,value){
        // console.log('mutations中的JIAN被调用',a,b)
        state.sum+=value;
        // console.log(state.sum)
    },
    WAITJIA(state,value){
        // console.log('mutations中的JIAN被调用',a,b)
        state.sum+=value;
        // console.log(state.sum)
    }
}

//准备state——用于存储数据
const state = {
    sum: 0,
}

// 准备一个getters——用于将state中的数据进行加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
     actions,
    mutations,
     state,
     getters
})