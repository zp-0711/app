<template>
  <div>
    <h1 v-text = "msg" ref = "title"></h1>
    <button @click = "showDom" ref = "btn">点我输出DOM元素</button>
      <school ref="sch"/>
      
  </div>
</template>

<script>
//引入school组件
import School from './components/School.vue'
export default {
    name:'App',
    data(){
      return {
        msg:'欢迎学习Vue！'
      }
    },
    methods:{
      showDom(){
        console.log(this.$refs.title)
        console.log(this.$refs.btn)
        console.log(this.$refs.sch)

      }
    },
    components:{School}
}
</script>

<style>

</style>