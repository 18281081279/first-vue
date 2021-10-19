<template>
    <div class="left">
        <p>left</p>
        <MyCount :init='10'></MyCount>
        <button @click="add">count +1</button>
        <p>{{count}}</p>
        <hr>
        <slot name="slot1"></slot>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                count:0
            }
        },
        methods: {
            add(){
                this.count++;
            }
        },
        deactivated(){
            console.log("组件被缓存了");
        },
        activated() {
            console.log("组件被激活了")
        },
    }
</script>

<style lang="less" scoped>
    .left {
        background-color: antiquewhite;
        width: 50%;
        height: 200px;
        color: skyblue
    }

    //使用deep修改子组件的样式，当使用第三方库的时候，也需要用deep
    /deep/ p {
        color: skyblue;
    }
</style>