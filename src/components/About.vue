<template>
    <div class="container">
        <h2>about</h2>
        <h3>{{id}}</h3>
    </div>
</template>

<script>
    export default {
        props: {
            id: {}
        }
    }
</script>

<style lang="less" scoped>
    .container {
        background-color: antiquewhite;
        height: 300px;
    }
</style>