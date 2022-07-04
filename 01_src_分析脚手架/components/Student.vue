<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>年龄{{ age  }}</h2>
    <button @click="showX">点击输出X</button>
  </div>
</template>

<script>
const student = {
  name: "Student",
  data() {
    return {
      studentName: "张三",
      age: 15,
    };
  },
  methods: {
    showX() {
      alert(this.studentName);
    },
  },
};
export default student;
</script>

<style>
.demo {
  background-color: pink;
}
</style>