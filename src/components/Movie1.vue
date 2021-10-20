<template>
  <div class="container">
      <h3 class="container">movie1</h3>
      <button @click="toMovie2">跳转到movie2</button>
  </div>
</template>

<script>
export default {
    methods:{
        toMovie2(){
            this.$router.push('/Movie/Movie2')
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        background-color: lawngreen;
    }
</style>