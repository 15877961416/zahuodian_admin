<!--  -->
<template>
  <div class="">
    <div class="car">
      <div class="car_title3">用户id</div>
      <div class="car_title4">用户建议</div>
    </div>

    <div class="container">
      <div v-for="(item, index) in news" :key="index">
        <div class="cart">
          <div class="cart_item3">
            <span>{{ item.id }}</span>
          </div>
          <div class="cart_item4">
            <span>{{ item.message }}</span>
          </div>
        </div>
      </div>
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
        news: "",
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_news(res) {
        this.news = res;
        // console.log(this.news);
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.get_news({}).then((res) => {
        // console.log(res);
        this.get_news(res.news);
      });
    },
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
  .car {
    position: fixed;
    width: 460px;
    height: 45px;
    top: 0;
    background-color: #eeeeee;
    z-index: 999;
  }

  .container {
    /* width: 1369px; */
    margin-top: 45px;
    overflow: hidden;
  }

  .cart {
    /* width: 100%; */
    background-color: #eeeeee;
    height: 60px;
    margin-top: 15px;
    padding: 5px 0;
    text-align: center;
    vertical-align: middle;
  }

  .car>div {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
  }

  .cart>div {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
  }

  .car_title3,
  .cart_item3 {
    width: 90px;
    /* overflow: hidden; */
    /* float: left; */
  }

  .car_title4,
  .cart_item4 {
    width: 350px;
    border-left: 1px solid #fff;
    /* overflow: hidden; */
    /* float: left; */
  }
</style>