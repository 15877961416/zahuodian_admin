<!--  -->
<template>
  <div>
    <div style="width: 1200px; margin:0 auto;padding-top: 25px;" v-if="$store.state.Admin">
      <div class="avatar">
        <span>
          <img :src="$store.state.App.baseURL + 'img/avatar/man.jpg'" v-if="$store.state.Admin.Sex == '男'"
            :title="$store.state.Admin.Nickname" />
          <img :src="$store.state.App.baseURL + 'img/avatar/woman.jpg'" v-else :title="$store.state.Admin.Nickname" />
        </span>
        <h2 v-if="$store.state.Admin.Nickname">{{ $store.state.Admin.Nickname }}</h2>
        <h2 v-else>{{ "zhd_" + $store.state.Admin.id }}</h2>
        <el-button style="float: right; margin-top: 25px; margin-right: 25px" @click="log_out">退出登录</el-button>
      </div>

      <el-form class="account" label-position="left" label-width="70px">
        <el-form-item label="用户昵称">
          <div v-if="check_name">
            <span class="change change_1" v-if="$store.state.Admin.Nickname">
              {{ $store.state.Admin.Nickname }}
              <span class="change change_edit1" style="float: right" @click="edit_1">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
            <span class="change change_1" v-else>
              {{ "zhd_" + $store.state.Admin.id }}
              <span class="change change_edit1" style="float: right" @click="edit_1">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
          </div>
          <div v-else>
            <el-input type="text" maxlength="6" v-model="nickname" style="width: 125px; float: left"
              :placeholder="$store.state.Admin.Nickname" @keydown.enter.native="sure_1">
            </el-input>
            <el-button type="danger" round style="float: left; margin-left: 100px; margin-right: 20px" @click="sure_1">
              确定
            </el-button>
            <el-button round style="float: left" @click="cancel_1">取消</el-button>
          </div>
        </el-form-item>

        <el-form-item label="用户 I D">
          <span class="change">{{ $store.state.Admin.id }}</span>
        </el-form-item>

        <el-form-item label="性 别">
          <div v-if="check_sex">
            <span class="change change_2" v-if="$store.state.Admin.Sex">
              {{ $store.state.Admin.Sex }}
              <span class="change change_edit2" style="float: right" @click="edit_2">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
            <span class="change change_2" v-else>
              {{ "女" }}
              <span class="change change_edit2" style="float: right" @click="edit_2">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
          </div>
          <div v-else>
            <span style="float: left; margin-left: 15px">
              <el-radio v-model="sex" label="男">男</el-radio>
              <el-radio v-model="sex" label="女">女</el-radio>
            </span>
            <el-button type="danger" round style="float: left; margin-left: 100px; margin-right: 20px" @click="sure_2">
              确定
            </el-button>
            <el-button round style="float: left" @click="cancel_2">取消</el-button>
          </div>
          <!-- <el-input type="text" :placeholder="Profile.Sex" v-model="sex" style="width: 100px;float: left;"></el-input> -->
        </el-form-item>

        <el-form-item label="联系电话">
          <div v-if="check_phone">
            <span class="change change_3" v-if="$store.state.Admin
            .Phone_get">
              {{$store.state.Admin.Phone_get }}
              <span class="change change_edit3" style="float: right" @click="edit_3">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
            <span class="change change_3 unfill" v-else>
              {{ "未填写" }}
              <span class="change change_edit3" style="float: right" @click="edit_3">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
          </div>
          <div v-else style="float: left">
            <el-input style="float: left; width: 300px" clearable v-model="phone_get" @keydown.enter.native="sure_3">
            </el-input>
            <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px" @click="sure_3">确定
            </el-button>
            <el-button round style="float: left" @click="cancel_3">取消</el-button>
          </div>
        </el-form-item>

        <el-form-item label="联系地址">
          <div v-if="check_address">
            <span class="change change_4" v-if="$store.state.Admin.Address_get">
              {{ $store.state.Admin.Address_get }}
              <span class="change change_edit4" style="float: right" @click="edit_4">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
            <span class="change change_4 unfill" v-else>
              {{ "未选择" }}
              <span class="change change_edit4" style="float: right" @click="edit_4">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
          </div>
          <div v-else style="float: left">
            <el-cascader :options="options" v-model="selectedOptions" @change="get_address_get"
              style="width: 300px; float: left">
            </el-cascader>
            <el-input placeholder="详细地址" style="float: left; width: 300px" clearable v-model="address_get_r"
              @keydown.enter.native="sure_4">
            </el-input>
            <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px" @click="sure_4">确定
            </el-button>
            <el-button round style="float: left" @click="cancel_4">取消</el-button>
          </div>
        </el-form-item>

        <el-form-item label="出生日期">
          <div v-if="check_birth">
            <span class="change change_5" v-if="$store.state.Admin.Birth">
              {{ $store.state.Admin.Birth }}
              <span class="change change_edit5" style="float: right" @click="edit_5">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
            <span class="change change_5 unfill" v-else>
              {{ "未选择" }}
              <span class="change change_edit5" style="float: right" @click="edit_5">
                <i class="el-icon-edit"></i>
                编辑
              </span>
            </span>
          </div>
          <div v-else style="float: left">
            <el-date-picker v-model="birth" type="date" placeholder="选择日期" style="float: left" format="yyyy-MM-dd"
              value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-button type="danger" round style="float: left; margin-left: 50px; margin-right: 20px" @click="sure_5">确定
            </el-button>
            <el-button round style="float: left" @click="cancel_5">取消</el-button>
          </div>
          <!-- <el-input type="text" :placeholder="Profile.Birth"></el-input> -->
        </el-form-item>

        <el-form-item label="密 码">
          <div>
            <span class="change change_6">
              {{'******'}}
              <span class="change change_edit6" style="float:right;" @click="edit_6">
                <i class="el-icon-edit"></i>
                修改密码
              </span>
            </span>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import { mapMutations, mapState } from "vuex";
  import { regionData, CodeToText } from "element-china-area-data";

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Account_set",
    components: {},
    data() {
      //这里存放数据
      return {
        nickname: "",
        sex: "",
        address: "",
        phone_get: "",
        address_get_r: "",
        options: regionData,
        selectedOptions: [],
        birth: "",
        check_name: 1,
        check_sex: 1,
        check_introduce: 1,
        check_address: 1,
        check_birth: 1,
        check_phone: 1,
        check_address: 1,
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      edit_1() {
        this.check_name = 0;
      },
      sure_1() {
        this.check_name = 1;
        this.$store.commit("SET_Nickname", this.nickname);
        this.$api.patchNickname(sessionStorage.getItem('token_admin'), {
          Nickname: this.nickname,
        });
      },
      cancel_1() {
        this.check_name = 1;
      },
      edit_2() {
        this.check_sex = 0;
      },
      sure_2() {
        this.check_sex = 1;
        this.$store.commit("SET_Sex", this.sex);
        this.$api.patchNickname(sessionStorage.getItem('token_admin'), {
          Sex: this.sex,
        });
      },
      cancel_2() {
        this.check_sex = 1;
      },
      edit_3() {
        this.check_phone = 0;
      },
      sure_3() {
        var res_pho = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (res_pho.test(this.phone_get)) {
          this.$store.commit('SET_Phone_get', this.phone_get)
          this.$api.patchPhone_get(sessionStorage.getItem('token_admin'), {
            Phone_get: this.phone_get,
          })
          this.check_phone = 1
          console.log(this.phone_get);
        } else {
          this.$alert('请输入正确的电话号码', '警告', {
            confirmButtonText: '确定'
          });
        }
      },
      cancel_3() {
        this.check_phone = 1;
      },


      get_address_get() {
        this.address =
          CodeToText[this.selectedOptions[0]] +
          " / " +
          CodeToText[this.selectedOptions[1]] +
          " / " +
          CodeToText[this.selectedOptions[2]];
      },
      edit_4() {
        this.check_address = 0;
      },
      sure_4() {
        this.check_address = 1;
        this.$store.commit("SET_Address", this.address + ' / ' + this.address_get_r);
        this.$api.patchAddress(sessionStorage.getItem('token_admin'), {
          Address_get: this.address + ' / ' + this.address_get_r,
        });
      },
      cancel_4() {
        this.check_address = 1;
      },


      edit_5() {
        this.check_birth = 0;
      },
      sure_5() {
        this.check_birth = 1;
        this.$store.commit("SET_Birth", this.birth);
        this.$api.patchBirth(sessionStorage.getItem('token_admin'), {
          Birth: this.birth,
        });
      },
      cancel_5() {
        this.check_birth = 1;
      },


      edit_6() {
        var newcode = ''
        for (let i = 0; i < 4; i++) {
          var num = Math.floor(Math.random() * 9);
          newcode += num
        }
        console.log(newcode);

        // this.$axios({
        //   method: 'get',
        //   headers: {  //单个请求设置请求头
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     // "Access-Control-Allow-Origin": "*"
        //     // "Connection": "Keep - Alive"
        //   },
        //   url: '/message',
        //   params: {
        //     method: 'Submit',
        //     account: "C97985838",
        //     password: '10e6cce46abbe8cdc3c20b0f48f36c2f',
        //     mobile: sessionStorage.getItem('token_admin'),
        //     content: "您的验证码是：" + newcode + "。请不要把验证码泄露给其他人。"
        //   }
        // });

        this.$prompt('', '验证码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /^[1-4]{4}$/,
          center: 'true',
          showclose: 'true',
          roundButton: true,
        }).then(({ value }) => {
          if (value == newcode) {
            this.$message({
              type: 'success',
              message: '验证成功'
            });
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
              // this.$store.commit('SET_Password', value.value)
              this.$api.patchPassword(sessionStorage.getItem('token_admin'), {
                Password: window.btoa(value.value),

              })
              this.$message({
                type: 'success',
                message: '修改成功'
              });
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
              this.$message({
                message: '请重新登录'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '取消修改'
              });
            });
          } else {
            this.$message({
              type: 'success',
              message: '验证码错误'
            });
          }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },

      log_out() {
        sessionStorage.clear();
        // this.$store.dispatch('resetVuex')
        this.$router.push("/Login");
        window.location.reload();
        // this.$router.go(0)
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
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
  .avatar {
    padding-left: 15px;
    border: 2px solid #eeeeee;
    text-align: left;
    overflow: hidden;
    padding: 10px 0 10px 15px;
  }

  .avatar span {
    display: inline-block;
    text-align: center;
    height: 100px;
    width: 100px;
    vertical-align: middle;
    border-radius: 50px;
    overflow: hidden;
  }

  .avatar span img {
    width: 100%;
    height: 100%;
  }

  .avatar h2 {
    display: inline-block;
    margin-left: 15px;
    line-height: 20px;
    font-size: 15px;
    color: #111;
  }

  .account>>>.el-input__inner {
    font-size: 15px;
    /* border: 0; */
  }

  /* .account>>>.el-input__inner::placeholder {
    color: #111;
  } */

  .account {
    padding-left: 15px;
    border: 2px solid #eeeeee;
    margin-top: 15px;
    padding: 30px 0 10px 15px;
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

  .change_edit2 {
    display: none;
  }

  .change_2:hover .change_edit2 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit3 {
    display: none;
  }

  .change_3:hover .change_edit3 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit4 {
    display: none;
  }

  .change_4:hover .change_edit4 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit5 {
    display: none;
  }

  .change_5:hover .change_edit5 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .change_edit6 {
    display: none;
  }

  .change_6:hover .change_edit6 {
    display: block;
    cursor: pointer;
    color: rgb(107, 128, 241);
  }

  .unfill {
    color: #746f6f;
  }
</style>