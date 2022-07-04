<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>

    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把数据给Student组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "a北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.$bus.$emit("hh", this.address);
    },
  },
  mounted() {
    // console.log('School',this)
    // this.$bus.$on('ho',(daa)=>{
    //     console.log('我是School组件，收到了数据',daa)
    // })
    const pubId = pubsub.subscribe("hello", function (msgName, data) {
      console.log("有人发布了消息", msgName, data);
    });
  },

  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
.school {
  background-color: pink;
}
</style>