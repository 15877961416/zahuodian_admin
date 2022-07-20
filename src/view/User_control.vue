<!--  -->
<template>
  <div class="Clothes">
    <div class="car">
      <div class="car_title2">用户头像</div>
      <div class="car_title3">
        <span v-if="change_search" style="padding: 5px;cursor: pointer;" @click="back">用户ID</span>
        <span v-else ref="show">
          <el-input type="text" v-model="id_search" style="width: 145px;" prefix-icon="el-icon-search" clearable
            @keydown.enter.native="search">
          </el-input>
          <el-button style="width: 48px;padding: 12px 10px;" @click="search">搜索</el-button>
        </span>
      </div>
      <div class="car_title4">用户昵称</div>
      <div class="car_title5">用户性别</div>
      <div class="car_title6">用户密码</div>
      <div class="car_title7">用户状态</div>
      <div class="car_title8">删除用户</div>

    </div>
    <div class="container">
      <div v-for="(item, index) in goods">
        <div class="cart">

          <div class="cart_item2">
            <span v-if="item.Avatar">
              <img :src="$store.state.App.baseURL + item.Avatar" alt="暂无图片" />
            </span>
            <span v-else>未修改</span>
          </div>

          <div class="cart_item3">
            <span>{{ item.id }}</span>
          </div>

          <div class="cart_item4">
            <span v-if="item.Nickname">{{ item.Nickname }}</span>
            <span v-else>未修改</span>
          </div>

          <div class="cart_item5">
            <span v-if="item.Sex">{{ item.Sex }}</span>
            <span v-else>未修改</span>
          </div>

          <div class="cart_item6">
            <span class="change">******
              <span style="position: absolute;display: none;padding-left: 5px;" @click="edit(item.id)">
                <i class="el-icon-edit"></i>编辑</span></span>
            <!-- <span>{{ item.Password}}</span> -->
          </div>


          <div class="cart_item7">
            <!-- <span v-if="item.OnUse" class="change">正常
              <span style="position: absolute;display: none;padding-left: 5px;font-size: 14px;"><i
                  class="el-icon-edit"></i>禁用</span>
            </span>
            <span v-else class="change">禁用
              <span style="position: absolute;display: none;padding-left: 5px;font-size: 14px;"><i
                  class="el-icon-edit"></i>正常</span></span> -->
            <el-switch v-model="item.OnUse" active-text="正常" inactive-text="禁用" inactive-color="#ff4949"
              @change="choose(item.id,item.OnUse)">
            </el-switch>
          </div>


          <div class="cart_item8">
            <el-button style="border: 0; background-color: #eeeeee" @click="delete_shop(item.id,index)">删除用户
            </el-button>
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
        goods: '',
        color: '',
        checked: false,
        id_search: '',
        change_search: true
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
      delete_shop(id, index) {
        this.$api.deleteUser(id, {})
        this.goods.splice(index, 1)
      },
      choose(id, res) {
        this.$api.patchUser(id, { OnUse: res })
        // console.log(res);
      },
      edit(id) {
        this.$prompt('', '修改密码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'password',
          // inputPattern: /^[1-4]{4}$/,
          inputPattern: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/,
          inputErrorMessage: '密码必须由数字、字母,请输入8-16位',
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then((value) => {
          this.$api.patchPassword(id, {
            Password: window.btoa(value.value),
          })
          this.$message({
            type: 'success',
            message: '修改成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });
        })
      },
      search() {
        if (this.id_search) {
          var reg = RegExp(this.id_search)
          var arr = []
          for (let item in this.goods) {
            if (reg.test(this.goods[item].id)) { arr.push(this.goods[item]) }

          }
          // console.log(1);
          this.goods = arr
          this.change_search = true
          // console.log(this.change_search);
        }
      },
      back() {
        this.change_search = false
        this.$api.getUser({}).then((res) => {
          this.get_goods(res)
        })
        this.id_search = null
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.getUser({}).then((res) => {
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
    width: 1200px;
    margin-left: 150px;
    /* cursor: pointer; */
  }

  .car {
    position: fixed;
    width: 1200px;
    height: 45px;
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

  .car_title1,
  .cart_item1 {
    width: 50px;
    /* float: left; */
  }

  .car_title2,
  .cart_item2 {
    width: 140px;
    /* float: left; */
  }

  .car_title3,
  .cart_item3 {
    width: 200px;
    /* float: left; */
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
    /* float: left; */
  }

  .cart_item6 div {
    height: 100%;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
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

  /* .change {
    padding: 5px;
  } */

  .change:hover span {
    display: inline-block !important;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }
</style>