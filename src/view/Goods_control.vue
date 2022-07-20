<!--  -->
<template>
  <div>
    <div class="goods_control">
      <nav :class="{ list_nav: true }">
        <ul>
          <li @click="check_nav">
            <router-link to="/Main/Goods_control/" :class="{ active: route_name =='Clothes' }">时尚潮装</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Main/Goods_control/Shoe" :class="{ active: route_name == 'Shoe' }">时尚潮鞋</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Main/Goods_control/Life" :class="{ active: route_name == 'Life' }">生活必备
            </router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Main/Goods_control/Learn" :class="{ active: route_name == 'Learn' }">学习用品
            </router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Main/Goods_control/Digital" :class="{ active: route_name == 'Digital' }">数码产品
            </router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Main/Goods_control/Sports" :class="{ active: route_name == 'Sports' }">运动健康</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Main/Goods_control/Add" :class="{ active: route_name == 'Add' }">商品添加</router-link>
          </li>
        </ul>
      </nav>
      <router-view>
      </router-view>
    </div>

  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "",
    components: {},
    data() {
      //这里存放数据
      return {
        route_name: this.$route.name,
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      check_nav() {
        this.route_name = this.$route.name;
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>
<style scoped>
  /*@import url(); 引入公共css类*/
  .goods_control {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .list_nav {
    position: fixed;
    /* top: 0; */
    width: 150px;
    height: 676px;
    /* overflow: hidden; */
    background: #545c64;
    /* float: left; */
  }

  .list_nav ul {
    width: 150px;
    /* padding: 5px 0; */
    /* border-top: 1px solid #545c64; */
  }

  .list_nav a {
    display: block;
    /* float: left; */
    padding: 0 auto;
    overflow: hidden;
    font-size: 14px;
    height: 45px;
    width: 150px;
    line-height: 45px;
    background-color: #545c64;
    color: #fff;
    border-left: 1px solid #545c64;
  }

  .list_nav a:hover {
    background-color: #eeeeee;
    /* border-bottom: 1px solid #ff0036; */
    color: #ff0036;
  }

  .active {
    background-color: #fff !important;
    /* border-bottom: 1px solid #ff0036; */
    color: #ff0036 !important;
  }
</style>