<template>
  <div id="student">
    <h2>学生姓名：{{ name }}</h2>

    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit("ho", this.name);
    },
    mounted(){
         console.log('hh',this)
        this.$bus.$on('hh',(daa)=>{
            console.log('我是School组件，收到了数据',daa)
        })
    },
  },
};
</script>

<style>
#student {
  background-color: rgb(0, 255, 179);
}
</style>