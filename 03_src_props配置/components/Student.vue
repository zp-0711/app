<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>年纪：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是尚硅谷的学生",
    };
  },
  props:['name','age','sex'],   //简单声明接收

  // 接受的同时对数据进行类型限制
  // props:{
  //   name:Spring,
  //   age:Number,
  //   sex:Spring
  // }

// 接收
// props:{
//   name:{
//     type:Spring,
//     required:true,
//     default:99
//   }
// }

};
</script>

<style>
.student {
  background-color: pink;
}
</style>