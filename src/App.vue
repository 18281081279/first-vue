//每个vue组件，由三部分构成：template、script、style
//使用组件的三个步骤：1导入组件，2在script中用components节点注册组件(私有子组件)，3以标签的形式使用组件

<template>
  <div>
    <div class="top">
      <div>请输入用户名<input type="text" v-model="name" /></div>
      <div>
        <button @click="isShowName()">点击显示用户名</button>
        <p v-if="isShow">你的用户名是：{{ name }}</p>
      </div>
    </div>
    <div>
      <Left></Left>
      <Right></Right>
    </div>
    <div>
      <LifeCircle :name="name"></LifeCircle>
    </div>
  </div>
</template>

<script>
  import Left from "@/components/Left.vue";
  import Right from "@/components/Right.vue";
  import LifeCircle from '@/components/LifeCircle.vue';

  export default {
    //vue组件中的data只能定义成函数形式,且数据在return中被定义
    data() {
      return {
        name: "蒋沛汛",
        isShow: false,
      };
    },

    //方法
    methods: {
      isShowName() {
        if (this.isShow) {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      },
    },

    //侦听器
    watch: {},
    //计算属性
    computed: {},
    //过滤器
    filters: {},
    //注册组件
    components: {
      Left,
      Right,
      LifeCircle,
    },
  };
</script>

//scoped可以解决样式冲突问题
<style lang='less' scoped>
  .top {
    background-color: pink;
  }
</style>