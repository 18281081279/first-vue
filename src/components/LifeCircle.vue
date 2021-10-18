<template>
    <div class="Life">
        {{age}}
        {{name}}
    </div>
</template>

<script>
    export default {
        props: {
            name: {

            }
        },
        data() {
            return {
                age: 20
            }
        },
        methods: {
            showAge() {
                console.log(this.age);
            },
        },

        //组件创建阶段 ,beforeCreated ,created , beforeMount , Mounted
        //beforeCreate,此时props,data,method都不可用
        beforeCreate() {
            //console.log(this.age);
            //console.log(this.name)
            //this.showAge();
        },

        //created,初始化props,data,method,一般在这个时候发送ajax请求,但是这个时候模板结构还没生成，不能操作dom
    
        created() {
            //console.log(this.age);
            //console.log(this.name)
            //this.showAge();
        },

        //beforMount,在即将把 HTML结构渲染到页面之前
        beforeMount() {
            //console.log(this.$el)
        },

        //HTML结构已经创建好，此时可以操作dom
        mounted(){
            console.log(this.$el)
        },

        //beforeUpdate,检测到数据的变化，将要重新渲染dom元素。此时数据是最新的，但是dom元素不变
        beforeUpdate() {
            
        },
        
        //updated,根据最新的数据，重新渲染dom元素
        updated(){

        },
        //beforeDestroy
        beforeDestroy(){

        },
        //destroyed
        destroyed(){

        },
    }
</script>

<style>
    .Life {
        height: 300px;
        width: 300px;
        background-color: pink;
    }
</style>