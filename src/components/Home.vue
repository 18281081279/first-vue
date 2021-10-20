<template>
  <div class="container">
      <div>
      <h2>home</h2>
      </div>
      <br>
      <router-link to='/Main'>toMain</router-link>
      <br>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .container{
        background-color:pink;
        height: 300px;
    }
</style>>
