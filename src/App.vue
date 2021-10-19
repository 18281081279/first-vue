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
    <!--生命周期-->
    <div>
      <LifeCircle :name="name"></LifeCircle>
    </div>
    <!--动态组件-->
    <div>
      <button @click="showLeft">展示left</button>
      <button @click="showRight">展示Right</button>
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
    <!--插槽-->
    <div>
      <Left>
        <template #slot1>
          <P>这是一个插槽</P>
        </template>
      </Left>
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
        comName: "Left"
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
      showLeft() {
        this.comName = "Left";
      },
      showRight() {
        this.comName = "Right";
      }
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