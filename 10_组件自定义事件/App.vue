<template>
  <div>
    <h1 class="title">你好啊！</h1>
	<!-- //通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
    <school :getSchoolName="getSchoolName"/>
	<!-- //通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据 -->
    <student v-on:atguigu="getStudentName"/>
  </div>
</template>

<script>

import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
  methods:{
	  getSchoolName(e){
		  console.log('App收到了学校名：',e)
	  },
	getStudentName(name,age){
		console.log('App收到了学生名',name,age)
	}
  }
};
</script>

<style>
.title {
  color: red;
}
</style>