<template>
    <div class="left">
        <p>left</p>
        <MyCount :init='10'></MyCount>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
    .left {
        background-color: antiquewhite;
        width: 50%;
        height: 100px;
        color: skyblue
    }

    //使用deep修改子组件的样式，当使用第三方库的时候，也需要用deep
    /deep/ p {
        color: skyblue;
    }
</style>