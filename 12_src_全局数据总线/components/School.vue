<template>
  <div class="school">
  <h2>学校名称:{{name}}</h2>

  <h2>学校地址：{{address}}</h2>
  <button @click="sendSchoolName">把数据给Student组件</button>
  
  </div>

</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return{
            name:'尚硅谷',
            address:'a北京'
        }
    },
    methods:{
        sendSchoolName(){
            this.$bus.$emit('hh',this.address)
        }
    },
    mounted(){
       console.log('School',this)
        this.$bus.$on('ho',(daa)=>{
            console.log('我是School组件，收到了数据',daa)
        })
    },
    


}
</script>

<style>
.school{
    background-color:pink;
}
</style>