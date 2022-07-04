<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showX">点击输出学校名称</button>
  </div>
</template>

<script>
const school = {
  name: "School",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    showX() {
      alert(this.schoolName);
    },
  },
};
export default school;
</script>

<style>
.demo {
  background-color: orange;
}
</style>