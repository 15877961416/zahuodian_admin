<!--  -->
<template>
  <div class="">
    <div class="car">
      <div class="car_title4">用户id</div>
      <div class="car_title4">用户昵称</div>
      <div class="car_title5">收货电话</div>
      <div class="car_title6">收货地址</div>
      <div class="car_title7">订单价格</div>
    </div>

    <div class="container">
      <div v-for="(item, index) in order" :key="index">
        <div class="cart">
          <div class="cart_item4">
            <span>{{ item.ID }}</span>
          </div>
          <div class="cart_item4">
            <span>{{ item.Nickname }}</span>
          </div>
          <div class="cart_item5">
            <span>{{ item.Phone_get }}</span>
          </div>
          <div class="cart_item6">
            <span style="width: 100%">{{ item.Address_get }}</span>
          </div>
          <div class="cart_item7">
            <span>￥{{ item.price }}</span>
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
        order: "",
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_order(res) {
        this.order = res;
        // console.log(this.order);
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.get_order({}).then((res) => {
        // console.log(res);
        this.get_order(res.order);
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
    width: 600px;
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

  .car_title4,
  .car_title5,
  .car_title7,
  .car_title8,
  .cart_item4,
  .cart_item5,
  .cart_item7,
  .cart_item8 {
    width: 90px;
    /* overflow: hidden; */
    /* float: left; */
  }

  .car_title6,
  .cart_item6 {
    width: 205px;
  }
</style>