<template>
    <div class="right">
        <p>right</p>
        <!--如果用:init:'2',则2为数值，init:2，2为字符串!-->
        <MyCount :init='2'></MyCount>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
    .right {
        background-color: cyan;
        width: 50%;
        height: 100px;
    }
</style>