<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import   {Hunhe} from '../mixin.js'
export default {
  name: "Student",
  data() {
    return {
      msg: "我是尚硅谷的学生",
      name: "张三",
      sex: "男",
    };
  },
  mixins:[Hunhe]
};
</script>

<style>
.student {
  background-color: pink;
}
</style>