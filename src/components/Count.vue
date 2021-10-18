<template>
    <div class="Count">
        <p>这是一个全局组件,count:{{count}}</p>
    </div>
</template>

<script>
    export default {
        //自定义一个属性，让组件可复用性增强，props定义的属性是只读的
        props: {
            init: {
                //默认值
                default: 0,
                //规定数据类型
                type: Number,
                //必须初始化
                require: true,
            }
        },

        data() {
            return {
                count: this.init,
            }
        }
    }
</script>

<style scoped>
    .Count {
        color: red;
    }
</style>