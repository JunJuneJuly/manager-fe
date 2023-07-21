<template>
  <h1>欢迎来到登录界面</h1>
  <el-buttom @click="goHome">会首页</el-buttom>
</template>
<script>
import Welcome from './Welcome.vue'
export default {
  name:'login',
  components:{ Welcome },
  mounted(){
    this.$request.get('/login',{name:'jack'},{mock:true,loading:true}).then((res)=>{
      console.log(res)
    })
  }
}
</script>
<style>
</style>
