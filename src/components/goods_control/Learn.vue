<!--  -->
<template>
  <div class="Clothes">
    <div class="car">
      <div class="car_title1">
        <el-checkbox :value="checked" @change="get_all_checked"></el-checkbox>
      </div>
      <div class="car_title2">商品图片</div>
      <div class="car_title3">
        <span v-if="change_search" style="padding: 5px;cursor: pointer;" @click="back">商品信息</span>
        <span v-else ref="show">
          <el-input type="text" v-model="title_search" style="width: 145px;" prefix-icon="el-icon-search" clearable
            @keydown.enter.native="search">
          </el-input>
          <el-button style="width: 48px;padding: 12px 10px;" @click="search">搜索</el-button>
        </span>
      </div>
      <div class="car_title4">商品价格</div>
      <div class="car_title5">商品销量</div>
      <div class="car_title7">商品状态</div>
      <div class="car_title8">删除商品</div>
      <el-button class="delete" @click="delete_choose()">删除选中商品</el-button>

    </div>
    <div class="container">
      <el-checkbox-group v-model="check_list">
        <div v-for="(item, index) in goods">
          <div class="cart">

            <div class="cart_item1">
              <el-checkbox :label="index" @change="checkbox_get(item.id)"></el-checkbox>
            </div>

            <div class="cart_item2">
              <router-link :to="'/Main/Goods_control_del/'+item.path+'/'+item.id">
                <img :src="$store.state.App.baseURL + item.img" alt="暂无图片" />
              </router-link>
            </div>

            <div class="cart_item3">
              <router-link :to="'/Main/Goods_control_del/'+item.path+'/'+item.id">
                <p>
                  {{ item.title }}
                </p>
              </router-link>
            </div>

            <div class="cart_item4">
              ¥<span>{{ item.price }}</span>
            </div>

            <div class="cart_item5">
              <span>{{ item.sales}}</span>
            </div>


            <div class="cart_item7">
              <el-switch v-model="item.onsale" active-text="在售" inactive-text="下架" inactive-color="#ff4949"
                @change="change_onsale(item.path,item.id,item.onsale)">
              </el-switch>

            </div>


            <div class="cart_item8">
              <el-button style="border: 0; background-color: #eeeeee" @click="delete_shop(item.id,index)">删除商品
              </el-button>
            </div>
          </div>
        </div>
      </el-checkbox-group>
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
        goods: '',
        color: '',
        check_list: [],
        checked: false,
        change_search: true,
        title_search: ''
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      get_goods(res) {
        // this.goods = JSON.parse(JSON.stringify(res))
        // console.log(this.goods);
        this.goods = res
      },
      get_all_checked() {
        this.checked = !this.checked
        this.check_list.splice(0)
        if (this.checked) {
          for (let i = 0; i < this.goods.length; i++) {
            this.check_list.push(i);
          }
        }
        // console.log(this.check_list);

      },
      checkbox_get(index) {
        // console.log(this.check_list);
        if (this.check_list.length == this.goods.length) {
          this.checked = true
        } else
          this.checked = false
      },
      delete_shop(id, index) {
        this.$api.deleteGoods(this.$route.name, id, {})
        this.goods.splice(index, 1)
        this.check_list = []
      },
      delete_choose() {
        // console.log(this.check_list.length);
        while (this.check_list.length) {
          let once = this.check_list.pop()
          // console.log(this.$route.name, this.goods[once].id);
          this.$api.deleteGoods(this.$route.name, this.goods[once].id, {})
          this.goods.splice(once, 1)
          // console.log(this.check_list[i]);
          // console.log(this.check_list.length);
        }
        // console.log(this.goods);
      },


      search() {
        if (this.title_search) {
          var reg = RegExp(this.title_search)
          var arr = []
          for (let item in this.goods) {
            if (reg.test(this.goods[item].title)) { arr.push(this.goods[item]) }

          }
          // console.log(1);
          this.goods = arr
          this.change_search = true
          // console.log(this.change_search);
        }
      },
      back() {
        this.change_search = false
        this.$api.getGoods(this.$route.name, {}).then((res) => {
          this.get_goods(res)
        })
        this.title_search = null
      },
      change_onsale(path, id, onsale) {
        this.$api.patchGoods_onsale(path, id, { onsale: onsale })
      }

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.getGoods(this.$route.name, {}).then((res) => {
        this.get_goods(res)
      })
      document.addEventListener('click', (e) => {
        if (this.$refs.show) {
          let isSelf = this.$refs.show.contains(e.target)
          if (!isSelf) {
            this.change_search = true
          }
        }
      })
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
  .Clothes {
    position: relative;
    float: left;
    margin-left: 150px;
  }

  .car {
    position: fixed;
    width: 1050px;
    height: 45px;
    background-color: #eeeeee;
    z-index: 999;
  }

  .container {
    width: 1369px;
    margin-top: 45px;
    overflow: hidden;
  }

  .cart {
    width: 100%;
    background-color: #eeeeee;
    height: 120px;
    margin-top: 15px;
    padding: 10px 0;
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
    height: 100px;
    line-height: 100px;
    /* overflow: hidden; */
  }

  .car_title1,
  .cart_item1 {
    width: 50px;
    float: left;
  }

  .car_title2,
  .cart_item2 {
    width: 140px;
    float: left;
  }

  .car_title3,
  .cart_item3 {
    width: 200px;
    float: left;
  }

  .car_title4,
  .car_title5,
  .car_title6,
  .car_title7,
  .car_title8,
  .cart_item4,
  .cart_item5,
  .cart_item6,
  .cart_item7,
  .cart_item8 {
    width: 140px;
    float: left;
  }

  .cart_item6 div {
    height: 100%;
  }

  img {
    height: 100px;
    width: 80px;
  }

  .cart_item3 p {
    width: 100%;
    line-height: 18px;
    font-size: 12px;
    margin-top: 37px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .cart_item8 span:hover {
    cursor: pointer;
    text-decoration: underline;
    font-size: 14px;
  }

  .car_bottom {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 40px;
    margin-top: 15px;
    font-size: 16px;
    background-color: #eeeeee;
    line-height: 40px;
  }

  .shop_num {
    float: left;
    text-align: left;
    display: block;
    margin-left: 75px;
    width: 50px;
  }

  .edit {
    float: right;
    display: none;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .shop_num:hover .edit {
    display: inline-block;
  }

  .el-checkbox>>>.el-checkbox__label {
    display: none;
  }

  .el-checkbox-group {
    font-size: 12px;
  }

  .delete {
    /* position: fixed; */
    /* right: 0; */
    /* z-index: 9999; */
    /* margin-right: 3px; */
    float: left;
    margin-top: 2px;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>