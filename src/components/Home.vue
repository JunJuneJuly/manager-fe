<template>
  <div class="basic-layout">
    <div class="nav-aside"></div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user">用户</div>
      </div>
      <div class="wrapper">
        <router-view>

        </router-view>
      </div>
    </div>
  </div>
</template>
<script>  

</script>
<style lang='scss'>
.basic-layout{
  position: relative;
  width: 100%;
  .nav-aside{
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: antiquewhite;
    overflow-y: auto;
    transform: width .5s;
  }
  .content-right{
    margin-left: 200px;
    // width: 100%;
    .nav-top{
      background: #000;
      width: 100%;
      height: 50px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 10px;
      color: #ddd;
    }
    .wrapper{
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
    }
  }
}

</style>