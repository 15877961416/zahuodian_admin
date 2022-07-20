<!--  -->
<template>
  <div class="add">
    <el-form ref="add" :model="add" label-width="100px">
      <el-form-item label="商品图片:" style="margin-bottom: 85px">
        <div style="position: absolute; top: -50px;">


          <el-upload action list-type="picture-card" :auto-upload="false" :data="upload_data" :on-change="change_upload"
            :on-remove="handleRemove" :file-list="file_list" :limit="4" style="float: left;" :show-file-list="true"
            ref="upload">
            <i class="el-icon-plus"></i>
          </el-upload>


        </div>
      </el-form-item>

      <el-form-item label="商品类别:">
        <el-select v-model="add.path" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品标题:">
        <el-input v-model="add.title" maxlength="35" placeholder="请输入标题" style="width: 400px" show-word-limit>
        </el-input>
      </el-form-item>

      <el-form-item label="商品颜色:">
        <div v-for="(it, index_color) in add.color" :key="index_color">
          <el-button style="float: left; margin-right: 15px; border: 1px solid #eeeeee">{{ it.color }}
          </el-button>
        </div>
        <el-button @click="add_color" style="background-color: #eeeeee;">添加</el-button>

      </el-form-item>

      <el-form-item label="商品大小:">
        <div v-for="(it, index_size) in add.size" :key="index_size">
          <el-button style="float: left; margin-right: 15px; border: 1px solid #eeeeee">{{ it.size }}
          </el-button>
        </div>
        <el-button @click="add_size" style="background-color: #eeeeee;">添加</el-button>
      </el-form-item>

      <el-form-item label="商品价格:">
        ￥<el-input type="text" maxlength="8" v-model="add.price" placeholder="请输入价格"
          style="width: 120px;margin-left: 5px;" @change="sure_price">
        </el-input>
      </el-form-item>

      <el-form-item label="商品详细:">
        <div v-for="(it, index_detail) in add.detail" :key="index_detail">
          <el-button style="float: left; margin-right: 15px; border: 1px solid #eeeeee">{{ it.detail+" : "+it.value}}
          </el-button>
        </div>
        <el-button @click="detail_change=true" style="background-color: #eeeeee;">添加</el-button>

      </el-form-item>

      <el-form-item>
        <el-button @click="sure" style="margin-left: 300px; width: 200px;">提交</el-button>
      </el-form-item>


    </el-form>
    <div v-show="detail_change" class="detail_view" ref="show">
      <el-form :model="detail" label-width="100px">
        <el-form-item>
          <h3 style="text-align: center;margin-right: 90px;font-weight: 400;">商品详细</h3>
        </el-form-item>
        <el-form-item label="商品详细:">
          <el-input v-model="detail.detail" style="width:30%; float: left;" maxlength="4" show-word-limit></el-input>
          <span style="float: left;"> : </span>
          <el-input v-model="detail.value" style="width:60%; float: left;" maxlength="8" show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left: 50px;width: 150px;" @click="add_detail">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <img :src="add.img" alt="">
    <img :src="add.img1" alt="">
    <img :src="add.img2" alt="">
    <img :src="add.img3" alt=""> -->


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
        check_size: null,
        check_color: null,
        detail_change: false,
        upload_data: { img: 1 },
        file_list: [],
        img_base64: [],
        detail: {
          detail: '',
          value: '',
        },
        add: {
          id: '',
          path: "",
          title: "",
          color: [],
          size: [],
          price: "",
          onsale: true,
          sales: 0,
          img: '',
          img1: '',
          img2: '',
          img3: '',
          detail: [],
          comment: [],
          detail_img: []
        },
        options: [
          {
            value: "Clothes",
            label: "时尚潮装",
          },
          {
            value: "Shoe",
            label: "时尚潮鞋",
          },
          {
            value: "Life",
            label: "生活必备",
          },
          {
            value: "Learn",
            label: "学习用品",
          },
          {
            value: "Digital",
            label: "数码产品",
          },
          {
            value: "Sports",
            label: "运动健康",
          },
        ]
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      change_size() { },
      delete_size() { },
      change_color() { },
      delete_color() { },

      sure_price() {
        this.add.price = parseFloat(this.add.price).toFixed(2)
      },
      add_size() {
        this.$prompt('', '增加商品大小', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'text',
          // inputPattern: /^[1-4]{4}$/,
          inputPattern: /(^[\u4e00-\u9fa5]{2,3}$)|(^[A-Z]{1,5}$)/,
          inputErrorMessage: '颜色大小必须是2到3个字或者1到5个大写字母',
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then((value) => {
          var flag = true
          this.add.size.forEach(e => {
            if (e.size == value.value) flag = false
          })
          if (flag) {
            this.add.size.push({ size: value.value })
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
      add_color() {
        this.$prompt('', '增加商品大小', {
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
          var flag = true
          this.add.color.forEach(e => {
            if (e.color == value.value) flag = false
          })
          if (flag) {
            this.add.color.push({ color: value.value })
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
      add_detail() {
        if (this.detail.detail && this.detail.value) {
          this.detail_change = false
          this.add.detail.push({
            detail: this.detail.detail,
            value: this.detail.value
          })
          this.detail.detail = '',
            this.detail.value = ''
          // console.log(this.detail);
        } else {
          this.$message({
            message: '请核对信息',
            type: 'warning'
          })
        }
      },


      sure(fileList) {
        if (this.add.path && this.add.title && this.add.price && this.add.size && this.add.color && this.img_base64.length == 4 && this.add.detail) {
          this.$api.get_control_del({}).then((res) => {
            if (this.add.path == "Clothes") this.add.id = ++res.control_del.Clothes
            if (this.add.path == "Shoe") this.add.id = ++res.control_del.Shoe
            if (this.add.path == "Learn") this.add.id = ++res.control_del.Learn
            if (this.add.path == "Life") this.add.id = ++res.control_del.Life
            if (this.add.path == "Digital") this.add.id = ++res.control_del.Digital
            if (this.add.path == "Sports") this.add.id = ++res.control_Sports
            console.log(this.add);
            console.log(res.control_del);
            this.$api.patch_control_del({ control_del: res.control_del })
            this.$api.post_goods(this.add.path, this.add).then(() => {
              this.$message({
                message: "添加成功",
                type: "success"
              })
            })
          })
        } else {
          this.$message({
            message: "请核对您的信息",
            type: "info"
          })
        }

      },

      handleRemove(file, fileList) {
        this.file_list = fileList
      },
      change_upload(file, fileList) {
        this.file_list = fileList
        // console.log(this.file_list);
        if (this.file_list.length == 4) {
          for (let item in this.file_list) {
            setTimeout(() => {
              var that = this
              var reader = new FileReader();
              let file = this.file_list[item].raw;//这里fileList是通过 File API 获取的文件数组（开启multi）
              reader.readAsDataURL(file);
              reader.onload = function () {
                that.img_base64[item] = reader.result
              }
            })
          }
          setTimeout(() => {
            // console.log(this.img_base64);
            this.add.img = this.img_base64[0]
            this.add.img1 = this.img_base64[1]
            this.add.img2 = this.img_base64[2]
            this.add.img3 = this.img_base64[3]
            this.add.detail_img.push({ img: this.img_base64[1] })
            this.add.detail_img.push({ img: this.img_base64[2] })
            this.add.detail_img.push({ img: this.img_base64[3] })

          }, 100)
        }
        // console.log(this.file_list.length);
        // console.log(file, fileList);
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      var num = 0
      document.addEventListener('click', (e) => {
        if (this.$refs.show) {
          let isSelf = this.$refs.show.contains(e.target)
          if (this.detail_change) {
            if (!isSelf && num > 0) {
              this.detail_change = false
              num = 0
            } else num++
          }
        }
      })
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() {
      // document.removeEventListener('click')
    }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>
<style scoped>
  /*@import url(); 引入公共css类*/
  .add {
    /* background-color: pink; */
    margin-left: 150px;
    width: 1050px;
    padding: 35px 40px;
    padding-top: 75px;
    text-align: left;
    /* vertical-align: middle; */
    border: 1px solid #eeeeee;
    position: absolute;
  }

  img {
    width: 150px;
    height: 200px;
    margin-right: 20px;
  }

  .detail_view {
    position: fixed;
    background-color: #eeeeee;
    padding: 10px;
    top: 245px;
    left: 525px;
  }

  /* div>>>.el-upload--picture-card {
    height: 200px;
  }

  .el-upload--picture-card i {
    font-size: 58px;
    float: left;
    margin-left: 45px;
    margin-top: 65px;
  } */
</style>