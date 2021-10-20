<template>
    <div class="container">
        <div class="top">
            <h1>App2根组件</h1>
        </div>
        <br>
        <router-link to='/Home'>Home</router-link>
        <router-link to='/Movie'>Movie</router-link>
        <router-link to='/About/1'>About1</router-link>
        <router-link to='/About/2'>About2</router-link>
        <hr>

        <!--只要项目中安装配置了vue-router，就可以使用router-view-->
        <!--router-view的作用是占位-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    .top {
        background-color: whitesmoke;
    }

    a{
        text-decoration: none;
        padding-right: 10px;
    }
</style>>