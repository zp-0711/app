<template>
  <div>
    <student />
    <school/>
    
  </div>
</template>

<script>
//引入school组件
import Student from "./components/Student.vue";
import School from "./components/School.vue"
export default {
  name: "App",
  data() {
    return {
      msg: "欢迎学习Vue！",
    };
  },
  methods: {},
  components: { Student,School },
};
</script>

<style>
</style>