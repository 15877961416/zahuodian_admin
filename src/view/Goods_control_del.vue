<!--  -->
<template>
  <div>
    <div class="del">
      <div style="float: left;margin: 0 80px 0 0;">
        <div class="box">
          <div class="small">
            <img :src="$store.state.App.baseURL+goods.img" />
            <div class="mask"></div>
            <div class="big">
              <img :src="$store.state.App.baseURL+goods.img" />
            </div>
          </div>
        </div>
        <div class=" box_bot" v-if="goods.detail_img">
          <img :src="$store.state.App.baseURL+goods.detail_img[0].img" @click='change_img' />
          <img :src="$store.state.App.baseURL+goods.detail_img[1].img" @click='change_img1' />
          <img :src="$store.state.App.baseURL+goods.detail_img[2].img" @click='change_img2' />
          <img :src="$store.state.App.baseURL+goods.detail_img[3].img" @click='change_img3' />
        </div>
      </div>

      <div style="float: left;width: 750px">
        <el-form label-position="left" label-width="80px" :model="goods">
          <el-form-item label="商品类别">
            <span v-if="path=='Clothes'">时尚潮装</span>
            <span v-if="path=='Shoe'">时尚潮鞋</span>
            <span v-if="path=='Learn'">学习用具</span>
            <span v-if="path=='Life'">生活必备</span>
            <span v-if="path=='Digital'">数码产品</span>
            <span v-if="path=='Sports'">运动健康</span>

          </el-form-item>

          <el-form-item label="商品ID">
            <span>{{id}}</span>
          </el-form-item>

          <el-form-item label="商品标题">
            <div v-if="check_title">
              <span class="change change_1" style="margin: 0;">
                {{ goods.title }}
                <span class="change change_edit1" style="float: right" @click="check_title=false">
                  <i class="el-icon-edit"></i>
                  编辑
                </span>
              </span>
            </div>
            <div v-else>
              <el-input type="text" maxlength="35" v-model="title" style="width: 400px; float: left"
                @keydown.enter.native="sure_1">
              </el-input>
              <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px" @click="sure_1">
                确定
              </el-button>
              <el-button round style="float: left" @click="check_title=true">取消</el-button>
            </div>
          </el-form-item>

          <el-form-item label="商品颜色" v-if="goods.color">
            <div v-for="(it,index_color) in goods.color">
              <el-button style="float: left;margin-right: 15px; border: 1px solid #eeeeee;"
                @click="change_color(index_color)">{{it.color}}</el-button>
              <div v-if="check_color==index_color">
                <el-button
                  style="float: left;border: 1px solid #eeeeee;background-color: #eeeeee; padding: 10px 6px;margin-top: 3px;"
                  @click="add_color(index_color)">
                  增加
                </el-button>
                <el-button
                  style="float: left;border: 1px solid #eeeeee;background-color: #eeeeee; padding: 10px 6px;margin-right: 10px;margin-top: 3px;"
                  @click="delete_color(index_color)">
                  删除
                </el-button>
              </div>
            </div>
          </el-form-item>

          <el-form-item label="商品大小">
            <div v-for="(it,index_size) in goods.size">
              <el-button style="float: left;margin-right: 15px; border: 1px solid #eeeeee;"
                @click="change_size(index_size)">{{it.size}}</el-button>
              <div v-if="check_size==index_size">
                <el-button
                  style="float: left;border: 1px solid #eeeeee;background-color: #eeeeee; padding: 10px 6px;margin-top: 3px;"
                  @click="add_size(index_size)">
                  增加
                </el-button>
                <el-button
                  style="float: left;border: 1px solid #eeeeee;background-color: #eeeeee; padding: 10px 6px;margin-right: 10px;margin-top: 3px;"
                  @click="delete_size(index_size)">
                  删除
                </el-button>
              </div>
            </div>
          </el-form-item>

          <el-form-item label="商品价格">
            <div v-if="check_price">
              <span class="change change_1" style="margin: 0;">
                ￥{{ goods.price }}
                <span class="change change_edit1" style="float: right" @click="check_price=false">
                  <i class="el-icon-edit"></i>
                  编辑
                </span>
              </span>
            </div>
            <div v-else>
              <el-input type="text" maxlength="8" v-model="price" style="width: 100px; float: left"
                @keydown.enter.native="sure_2">
              </el-input>
              <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px" @click="sure_2">
                确定
              </el-button>
              <el-button round style="float: left" @click="check_price=true">取消</el-button>
            </div>
          </el-form-item>

          <el-form-item label="商品状态">
            <el-switch v-model="goods.onsale" active-text="在售" inactive-text="下架" inactive-color="#ff4949"
              @change="change_onsale">
            </el-switch>
          </el-form-item>
        </el-form>
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
        path: this.$route.params.path,
        id: this.$route.params.id,
        goods: {},
        check_title: true,
        title: '',
        price: '',
        check_color: null,
        check_size: null,
        check_price: true,
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      getGoods(res) {
        this.goods = res
      },
      change_img() {
        if (this.goods.detail_img)
          this.goods.img = this.goods.detail_img[0].img
      },
      change_img1() {
        this.once = false
        this.goods.img = this.goods.detail_img[1].img
      },
      change_img2() {
        this.once = false
        this.goods.img = this.goods.detail_img[2].img
      },
      change_img3() {
        this.once = false
        this.goods.img = this.goods.detail_img[3].img
      },
      sure_1() {
        // console.log(1);
        this.goods.title = this.title
        this.$api.patchGoods_title(this.path, this.id, {
          title: this.title
        })
        this.title = ''
        this.check_title = true
      },
      change_color(index) {
        this.check_color = this.check_color == index ? null : index
      },
      add_color(index) {
        this.$prompt('', '增加颜色', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'text',
          // inputPattern: /^[1-4]{4}$/,
          inputPattern: /(^[\u4e00-\u9fa5]{2,3}$)|(^[a-zA-Z]{2,10}$)/,
          inputErrorMessage: '颜色款式必须是2到3个字或者2到10个字母',
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then((value) => {
          this.goods.color.splice(index, 0, { color: value.value })
          this.$api.patchGoods_color(this.path, this.id, { color: this.goods.color }).then(() => {
            this.$message({
              type: 'success',
              message: '修改成功'
            });
          })
          this.check_color = null
          // this.$api.patchPassword(id, {
          //   Password: window.btoa(value.value),
          // })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消增加'
          });
        })
        // this.check_color = null

      },
      delete_color(index) {
        this.$confirm('将永久删除该颜色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // console.log(index);
          this.goods.color.splice(index, 1)
          this.$api.patchGoods_color(this.path, this.id, { color: this.goods.color }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
          this.check_color = null

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      change_size(index) {
        this.check_size = this.check_size == index ? null : index
      },
      add_size(index) {
        this.$prompt('', '增加颜色', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'text',
          // inputPattern: /^[1-4]{4}$/,
          inputPattern: /(^[\u4e00-\u9fa5]{2,3}$)|(^[A-Z]{1,5}$)/,
          inputErrorMessage: '颜色款式必须是2到3个字或者1到5个大写字母',
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then((value) => {
          var flag = true
          this.goods.size.forEach(e => {
            if (e.size == value.value) flag = false
          })
          if (flag) {
            this.goods.size.splice(index, 0, { size: value.value })
            this.$api.patchGoods_color(this.path, this.id, { size: this.goods.size }).then(() => {
              this.$message({
                type: 'success',
                message: '修改成功'
              });
            })
          } else {
            this.$message({
              type: 'warn',
              message: '已存在'
            });
          }
          this.check_size = null

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消增加'
          });
        })
      },
      delete_size(index) {
        this.$confirm('将永久删除该颜色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // console.log(index);
          this.goods.size.splice(index, 1)
          this.$api.patchGoods_size(this.path, this.id, { size: this.goods.size }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
          this.check_size = null

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      sure_2() {
        this.goods.price = parseFloat(this.price).toFixed(2)
        // console.log(this.goods.price);
        this.$api.patch_price(this.path, this.id, {
          price: parseFloat(this.price).toFixed(2)
        })
        this.price = ''
        this.check_price = true
      },
      change_onsale() {
        this.$api.patch_onsale(this.path, this.id, {
          onsale: this.goods.onsale
        })
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$api.getGoods_del(this.path, this.id, {}).then((res) => {
        this.getGoods(res)
      })
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() {
      if (this.once)
        if (this.img !== this.$store.state.Data_det.img) {
          this.img = this.$store.state.Data_det.img
          // once = false
        }
    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>
<style scoped>
  /*@import url(); 引入公共css类*/
  .del {
    width: 1200px;
    margin: 20px auto;
    margin-top: 100px;
    border: 1px solid #eeeeee;
    padding: 40px 40px;
    padding-right: 0;
    text-align: left;
    overflow: hidden;
  }

  .box {
    height: 375px;
    width: 300px;
    /* overflow: hidden; */
  }

  .small {
    position: relative;
    width: 300px;
    height: 380px;
    border: 1px solid #eeeeee;
  }

  .box_bot {
    width: 300px;
    height: 95px;
  }

  .small img {
    width: 100%;
    height: 100%;
  }

  .box_bot img {
    display: block;
    float: left;
    height: 100%;
    width: 75px;
    cursor: pointer;
    border: 1px solid #eeeeee;
  }

  .mask {
    width: 150px;
    height: 190px;
    background: #000;
    filter: alpha(opacity=25);
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
    z-index: 2500;
    display: none;
  }

  .big {
    width: 300px;
    height: 375px;
    top: -375px;
    right: -340px;
    position: relative;
    z-index: 200;
    border: 1px solid #eeeeee;
    display: none;
    overflow: hidden;
  }

  .big img {
    width: 200%;
    height: 200%;
  }

  .small:hover .mask {
    display: block;
  }

  .small:hover .big {
    display: block;
  }


  .change {
    float: left;
    font-size: 15px;
    padding: 0 5px;
    margin-left: 10px;
    font-weight: 500;
    color: #111;
  }

  .change_edit1 {
    display: none;
  }

  .change_1:hover .change_edit1 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }
</style>