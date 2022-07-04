<template>
  <div>
    <student name="李四" sex ="女" :age="18"/>
    
  </div>
</template>

<script>
//引入school组件
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "欢迎学习Vue！",
    };
  },
  methods: {},
  components: { Student },
};
</script>

<style>
</style>