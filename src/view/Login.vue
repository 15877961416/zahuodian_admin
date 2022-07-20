<!--  -->
<template>
  <div>
    <div class="login">
      <div class="login_view">
        <h3>管理员登录</h3>
        <el-form :model="login_form" class="login_form" :rules="rules" ref="login_form" v-if="check_login">
          <el-form-item prop="user">
            <el-input type="text" v-model="login_form.user" placeholder="账号/手机号" prefix-icon="el-icon-user" clearable
              autocomplete="on">
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="login_form.pass" placeholder="密码" prefix-icon="el-icon-lock" clearable
              show-password>
            </el-input>
          </el-form-item>

          <el-form-item prop="sidentify">
            <el-input style="width: 55%; float: left" v-model="login_form.identifyCode_check"
              @change="identifyCode_check()">
            </el-input>
            <span @click="refreshCode" style="cursor: pointer">
              <s-identify :identifyCode="login_form.identifyCode"></s-identify>
            </span>
          </el-form-item>

          <el-form-item>
            <!-- <router-link to="/"> -->
            <el-button type="info" style="width: 100%; background: #5a5985" @click="submit">登录</el-button>
            <!-- </router-link> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import SIdentify from "@/components/SIdentify";

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Login",
    components: {
      SIdentify,
    },
    data() {
      //这里存放数据
      var validateUser = (rule, value, callback) => {
        var res_user =
          /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        if (value === "") {
          this.user_success = 0;
          callback(new Error("请输入手机号码"));
        } else if (!res_user.test(value)) {
          callback(new Error("请输入正确的手机号码"));
          this.user_success = 0;
        } else {
          this.user_success = 1;
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入验证码"));
          this.code_success = 0;
        } else {
          this.code_success = 1;
          callback();
        }
      };
      return {
        user_success: 0,
        code_success: 0,
        identifyCode_success: 0,
        check_login: 1,
        code: "",
        login_form: {
          user: "",
          pass: "",
          code: null,
          identifyCode_check: "",
          identifyCode: "",
          // 验证码规则
          identifyCodes: "0123456789abcdefghijklmnopqrstuvwxyz",
        },
        rules: {
          pass: [{ validator: validatePass, trigger: "blur" }],
          user: [{ validator: validateUser, trigger: "blur" }],
          code: [{ validator: validateCode, trigger: "blur" }],
        },
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},

    //方法集合
    methods: {
      refreshCode() {
        this.login_form.identifyCode = "";
        this.makeCode(this.login_form.identifyCodes, 4);
      },
      // 生成随机验证码
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.login_form.identifyCode +=
            this.login_form.identifyCodes[
            Math.floor(
              Math.random() * (this.login_form.identifyCodes.length - 0) + 0
            )
            ];
        }
      },
      identifyCode_check() {
        if (this.login_form.identifyCode_check == this.login_form.identifyCode) {
          this.identifyCode_success = 1;
          // console.log(this.identifyCode_success);
        } else {
          this.identifyCode_success = 0;
          // console.log(this.identifyCode_success);
        }
      },

      submit() {
        if (this.identifyCode_success) {
          if (this.user_success == 1 && this.login_form.pass !== "") {
            this.$api.login(this.login_form.user, this.login_form.pass, {});
          } else {
            this.$message({
              message: "请输入核对信息",
            });
          }
        } else {
          this.$message({
            message: "验证码错误",
          });
        }
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.refreshCode();
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
  nav {
    height: 100px;
    width: 100%;
    background-color: #eeeeee;
  }

  .logo {
    height: 100px;
    width: 200px;
    margin-left: 200px;
  }

  .login {
    background: url("../../static/img/Login.jpg") no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    position: fixed;
  }

  .login_view {
    position: absolute;
    width: 320px;
    height: 425px;
    right: 550px;
    top: 150px;
    background-color: #5a5985;
    border: 1px solid #d9d9d9;
    padding: 0 10px;
    opacity: 0.9;
    overflow: hidden;
  }

  .login_view:hover {
    opacity: 1;
  }

  .login_view h3 {
    font-size: 30px;
    line-height: 45px;
    overflow: hidden;
    width: 100%;
    height: 45px;
    color: #d9d9d9;
    font-weight: 300;
    margin: 20px auto;
  }

  .login_form {
    border-top: 1px solid #d9d9d9;
    padding: 25px 15px;
  }

  .login_pho {
    float: right;
    color: #d9d9d9;
    font-size: 15px;
    margin-left: 98px;
    cursor: pointer;
  }

  .login_pass {
    float: right;
    color: #d9d9d9;
    font-size: 15px;
    margin-left: 46px;
    cursor: pointer;
  }

  .rou {
    float: right;
    color: #d9d9d9;
    font-size: 15px;
    margin-left: 46px;
  }

  .login_pho:hover,
  .login_pass:hover,
  .rou:hover {
    color: #4b8deb;
  }
</style>