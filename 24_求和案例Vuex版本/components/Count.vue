<template>
  <div>
    <h1>当前的和为:{{this.$store.state.sum}}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementAdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
name: "Count";
export default {
  data() {
    return {
      n: 1, //用户选择的数字
     
    };
  },
  methods: {
    increment() {
     this.$store.commit('JIA',this.n)
    },
    decrement() {
      this.$store.commit('JIAN',this.n)
    },
    incrementAdd() {
       this.$store.dispatch('jiaAdd',this.n)
    },
    incrementWait() {
      this.$store.dispatch('waitjia',this.n)
    },
  },
};
</script>

<style>
</style>