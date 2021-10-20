<template>
  <div class="container">
      <h2>movie</h2>
      <router-link to='/Movie/Movie1'>movie1</router-link>
      <router-link to='/Movie/Movie2'>movie2</router-link>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .container{
        background-color:khaki;
        height: 300px;
    }

    a{
        text-decoration: none;
        padding-right: 10px;
    }
</style>