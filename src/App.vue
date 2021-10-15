//每个vue组件，由三部分构成：template、script、style
<template>
  <div class="top">
    <div>请输入用户名<input type="text" v-model="name" /></div>
    <div>
      <button @click="isShowName()">点击显示用户名</button>
      <p v-if="isShow">你的用户名是：{{ name }}</p>
    </div>
  </div>
</template>

<script>
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
  watch:{},
  //计算属性
  computed:{},
  //过滤器
  filters:{}
};
</script>


<style lang='less'>
.top {
  background-color: pink;
}
</style>