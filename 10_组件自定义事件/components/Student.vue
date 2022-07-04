<template>
  <div id="student">
      <h2>学生姓名：{{name}}</h2>

      <h2>学生年龄：{{age}}</h2>
      <button @click="sendStudentName">点击触发事件</button>
      <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'张三',
            age:18
        }
    },
    methods:{
        sendStudentName(){
            //触发student组件实例身上的atguigu
            this.$emit('atguigu',this.name,this.age,666,666,55,48)
        },
        unbind(){
            this.$off('atguigu')//解绑一个事件
            this.$off(['atguigu','deno'])//解绑所有自定义事件
        }
    }
}
</script>

<style>
#student{
    background-color:rgb(0, 255, 179);
}
</style>