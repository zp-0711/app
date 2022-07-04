<template>
  <div>
    <h1>当前的和为:{{sum}}</h1>
    <h3>当前求和放大的10倍为:{{bigSum}}</h3>
    <h3>当前求和放大的10倍为:{{school}}</h3>
    <h3>当前求和放大的10倍为:{{subject}}</h3>
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
import {mapState,mapGetters} from 'vuex'
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
  computed:{
    // 借助mapstate生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'})
    // 借助mapState生成计算属性，从state总读取数据。（数据写法）
     ...mapState(['sum','school','subject']),

    //  ...mapGetters({bigSum:'bigSum'})
    ...mapGetters(['bigSum'])
  }
};
</script>

<style>
</style>