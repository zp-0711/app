<template>
  <ul>
    <li>消息编号:{{ id }}</li>
    <li>消息标题:{{ title }}</li>
    <!-- <h4>{{b}}</h4> -->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title'],
  mounted() {
    //   console.log(this.$router)
  },
};
</script>

<style>
</style>