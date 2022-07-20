<!--  -->
<template>
  <div class="home">
    <div id="myChart"></div>

    <div @click="drawer_r = true" class="news" v-if="control">
      <h2>客户反馈</h2>
      <div>
        <svg class="icon" viewBox="0 0 1024 1024" width="64" height="64">
          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F79484" p-id="3837"></path>
          <path
            d="M609.28 494.08L577.28 409.6c-28.16-72.96-101.12-117.76-176.64-106.24-12.8-17.92-35.84-25.6-56.32-16.64-21.76 7.68-33.28 30.72-29.44 52.48-57.6 43.52-79.36 122.88-52.48 192l30.72 78.08c-17.92 23.04-21.76 53.76-11.52 80.64v1.28c3.84 10.24 10.24 20.48 17.92 28.16h1.28c6.4 6.4 14.08 8.96 23.04 8.96 2.56 0 5.12-1.28 10.24-2.56l314.88-121.6c2.56-1.28 3.84-1.28 6.4-3.84 8.96-5.12 14.08-14.08 14.08-23.04 0-11.52-1.28-24.32-6.4-34.56v-1.28c-10.24-21.76-29.44-40.96-53.76-47.36z"
            fill="#FFFFFF" opacity=".5" p-id="3838"></path>
          <path
            d="M482.56 729.6c0 32 25.6 57.6 57.6 57.6s57.6-25.6 57.6-57.6h-115.2z m254.72-165.12v-102.4c0-89.6-58.88-165.12-143.36-184.32-6.4-24.32-28.16-40.96-52.48-40.96-25.6 0-47.36 19.2-52.48 43.52-79.36 23.04-134.4 98.56-134.4 181.76v96c-28.16 17.92-44.8 48.64-44.8 81.92v1.28c0 12.8 2.56 25.6 7.68 37.12l1.28 1.28c3.84 8.96 11.52 15.36 20.48 17.92 2.56 1.28 6.4 1.28 11.52 1.28h382.72c2.56 0 5.12 0 7.68-1.28 11.52-1.28 20.48-8.96 24.32-17.92 5.12-11.52 7.68-25.6 7.68-38.4V640c0-29.44-12.8-56.32-35.84-75.52z"
            fill="#FFFFFF" p-id="3839"></path>
        </svg>
        <span class="text_span" style="margin-left: 60px;"
          v-if="control[1].news.length">{{control[1].news.length}}</span>
      </div>
    </div>
    <el-drawer :visible.sync="drawer_r" :with-header="false">
      <news></news>
    </el-drawer>

    <div @click="drawer_l = true" class="order" v-if="control">
      <h2>订单量</h2>
      <div>
        <svg viewBox="0 0 1024 1024" width="64" height="64" class="icon">
          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F7AC79" p-id="3255"></path>
          <path
            d="M565.76 627.2c-5.12 1.28-11.52 1.28-17.92 1.28-12.8-1.28-23.04-6.4-30.72-14.08-12.8-1.28-23.04-6.4-30.72-14.08-11.52-2.56-20.48-7.68-26.88-15.36H448c-25.6-2.56-40.96-21.76-44.8-43.52-19.2-15.36-24.32-44.8-17.92-69.12-8.96-20.48-6.4-46.08 5.12-64-2.56-19.2 2.56-40.96 15.36-53.76l-8.96-20.48-94.72 30.72c-33.28 10.24-53.76 51.2-43.52 90.88l71.68 282.88c10.24 37.12 46.08 60.16 79.36 49.92l209.92-67.84-53.76-93.44z"
            fill="#FFFFFF" opacity=".5" p-id="3256"></path>
          <path
            d="M696.32 232.96H441.6c-39.68 0-74.24 38.4-74.24 85.76v340.48c0 44.8 33.28 83.2 74.24 83.2h253.44c39.68 0 74.24-38.4 74.24-83.2V318.72c1.28-48.64-33.28-85.76-72.96-85.76z m-244.48 153.6h230.4c11.52 0 20.48 7.68 20.48 20.48 0 10.24-8.96 20.48-17.92 20.48H451.84c-8.96 0-17.92-10.24-17.92-20.48 0-12.8 8.96-20.48 17.92-20.48z m168.96 140.8c0 10.24-6.4 17.92-15.36 17.92H450.56c-8.96 0-15.36-7.68-15.36-17.92v-7.68c0-10.24 6.4-17.92 15.36-17.92h154.88c8.96 0 15.36 7.68 15.36 17.92v7.68z m90.88 124.16c-15.36 0-28.16-12.8-28.16-28.16s12.8-28.16 28.16-28.16 28.16 12.8 28.16 28.16c1.28 15.36-11.52 28.16-28.16 28.16z"
            fill="#FFFFFF" p-id="3257"></path>
        </svg>
        <span class="text_span" style="margin-left: 60px;" v-if="control[0].order">{{control[0].order.length}}</span>
      </div>
    </div>
    <el-drawer :visible.sync="drawer_l" :with-header="false" direction="ltr" style="width: 2000px;">
      <order></order>
    </el-drawer>

    <div class="profit">
      <h2>成交金额</h2>
      <div>
        <svg class="icon" viewBox="0 0 1024 1024" width="64" height="64">
          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F79484" p-id="3690"></path>
          <path
            d="M391.68 384s52.48 43.52 120.32 43.52 121.6-43.52 121.6-43.52 58.88-52.48 28.16-75.52-75.52 7.68-75.52 7.68-34.56-37.12-75.52-37.12-72.96 37.12-72.96 37.12-44.8-29.44-75.52-7.68 29.44 75.52 29.44 75.52z"
            fill="#FFFFFF" p-id="3691"></path>
          <path
            d="M771.84 693.76c-5.12-16.64-6.4-33.28-6.4-49.92 1.28-25.6-3.84-66.56-29.44-120.32-37.12-75.52-83.2-93.44-103.68-97.28-5.12-1.28-10.24 0-15.36 2.56-15.36 6.4-55.04 25.6-104.96 25.6s-88.32-17.92-103.68-26.88c-5.12-2.56-10.24-3.84-15.36-2.56-20.48 3.84-67.84 21.76-104.96 99.84-24.32 51.2-29.44 93.44-29.44 119.04 0 16.64-1.28 34.56-6.4 51.2-12.8 35.84-3.84 108.8 259.84 108.8 262.4 0 271.36-72.96 259.84-110.08z"
            fill="#FFFFFF" p-id="3692"></path>
          <path
            d="M337.92 389.12s64 21.76 128-2.56c62.72-24.32 97.28-84.48 97.28-84.48s35.84-70.4 0-80.64c-35.84-10.24-67.84 33.28-67.84 33.28s-46.08-23.04-83.2-7.68-55.04 61.44-55.04 61.44-52.48-11.52-72.96 20.48c-19.2 32 53.76 60.16 53.76 60.16z"
            fill="#FFFFFF" opacity=".5" p-id="3693"></path>
          <path
            d="M577.28 586.24c8.96 0 16.64-7.68 16.64-16.64s-7.68-16.64-16.64-16.64h-34.56l34.56-32c6.4-6.4 6.4-16.64 1.28-23.04-6.4-6.4-16.64-6.4-23.04-1.28L512 537.6l-42.24-39.68c-6.4-6.4-16.64-6.4-23.04 1.28-6.4 6.4-6.4 16.64 1.28 23.04l34.56 32h-35.84c-8.96 0-16.64 7.68-16.64 16.64s7.68 16.64 16.64 16.64h49.92v29.44h-49.92c-8.96 0-16.64 7.68-16.64 16.64 0 8.96 7.68 16.64 16.64 16.64h49.92V691.2c0 8.96 7.68 16.64 16.64 16.64s16.64-7.68 16.64-16.64v-40.96h49.92c8.96 0 16.64-7.68 16.64-16.64 0-8.96-7.68-16.64-16.64-16.64h-49.92v-29.44h47.36z"
            fill="#F79484" p-id="3694"></path>
        </svg>
        <span class="text_span">￥{{price}}</span>
      </div>
    </div>

    <div class="remember">
      <h2>通知</h2>
      <div>
        <svg class="icon" viewBox="0 0 1024 1024" p-id="4053" width="64" height="64" @click="action_control"
          ref="show1">
          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#4EDD92" p-id="4054"></path>
          <path
            d="M706.56 249.6H422.4c-56.32 0-101.12 39.68-101.12 88.32v43.52c3.84-1.28 7.68-1.28 11.52-1.28 38.4-2.56 81.92-3.84 120.32 8.96 62.72-2.56 124.16 1.28 185.6 17.92 93.44 24.32 80.64 112.64 80.64 195.84 49.92-5.12 89.6-42.24 89.6-87.04V337.92c-1.28-48.64-46.08-88.32-102.4-88.32z"
            fill="#FFFFFF" opacity=".5" p-id="4055"></path>
          <path
            d="M632.32 335.36h-307.2c-60.16 0-110.08 49.92-110.08 110.08v218.88c0 60.16 49.92 110.08 110.08 110.08h307.2c60.16 0 110.08-49.92 110.08-110.08V445.44c0-60.16-49.92-110.08-110.08-110.08z m-208.64 101.12h21.76c11.52 0 21.76 10.24 21.76 21.76s-10.24 21.76-21.76 21.76h-21.76c-11.52 0-21.76-10.24-21.76-21.76 0-12.8 10.24-21.76 21.76-21.76z m-98.56 0h21.76c11.52 0 21.76 10.24 21.76 21.76s-10.24 21.76-21.76 21.76h-21.76c-11.52 0-21.76-10.24-21.76-21.76 0-12.8 10.24-21.76 21.76-21.76z m307.2 250.88h-307.2c-11.52 0-21.76-10.24-21.76-21.76s10.24-21.76 21.76-21.76h307.2c11.52 0 21.76 10.24 21.76 21.76s-8.96 21.76-21.76 21.76z m0-110.08h-307.2c-11.52 0-21.76-10.24-21.76-21.76s10.24-21.76 21.76-21.76h307.2c11.52 0 21.76 10.24 21.76 21.76 0 11.52-8.96 21.76-21.76 21.76z"
            fill="#FFFFFF" p-id="4056"></path>
        </svg>
        <div class="text_r" v-if="control[4]">
          <h3>{{control[4].action}}</h3>
          <p class="action">{{control[4].news}}</p>
        </div>
      </div>
    </div>


    <div class="actin_view" v-show="action_change" ref="show">
      <el-form :model="action" label-width="50px">
        <el-form-item>
          <h2 style="margin-right: 40px;">通知</h2>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="action.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="action.message" type="textarea" :rows="3"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100px;" @click="sure">确定</el-button>
          <el-button style="width: 100px; margin-right: 50px;" @click="action_change=false">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import order from '@/components/home/order'
  import news from '@/components/home/news'
  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "",
    components: {
      order,
      news
    },
    data() {
      //这里存放数据
      return {
        drawer_l: false,
        drawer_r: false,
        control: '',
        price: '',
        action_change: false,
        action: {
          title: '',
          message: ''
        }
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      drawLine(show) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({

          title: {
            text: '商品销售情况',
            // subtext: '点击隐藏',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: '销售情况',
              type: 'pie',
              radius: '50%',
              data: show,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]

        });
      },
      get_control(res) {
        this.control = res
        // console.log(this.control[1].order);
        // console.log(this.control.order.length);
        this.price = parseFloat(this.control[3].sales.price).toFixed(2)
        var pie = [
          { value: this.control[3].sales.Clothes, name: '时尚潮装' },
          { value: this.control[3].sales.Shoe, name: '时尚潮鞋' },
          { value: this.control[3].sales.Life, name: '生活必备' },
          { value: this.control[3].sales.Learn, name: '学习用品' },
          { value: this.control[3].sales.Digital, name: '数码产品' },
          { value: this.control[3].sales.Sports, name: '运动健康' },
        ]
        this.drawLine(pie)



        // this.price = sum
      },
      action_control() {
        var grade = sessionStorage.getItem("grade")
        if (grade == 1) {
          this.action_change = true

        }
      },
      sure() {
        if (this.action.title && this.action.message) {
          console.log(this.action.title, this.action.message);
          this.$api.patch_action({
            news: this.action.message,
            action: this.action.title
          })
          this.action_change = false
          this.action.message = ''
          this.action.title = ''
        }

      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      // this.drawLine()
      this.$api.get_control({}).then((res) => {
        this.get_control(res)
      })
      document.addEventListener('click', (e) => {
        if (this.$refs.show && this.$refs.show1) {
          let isSelf = this.$refs.show.contains(e.target)
          let isSelf1 = this.$refs.show1.contains(e.target)
          if (!isSelf && !isSelf1) {
            this.action_change = false
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
  .home {
    position: relative;
    /* background-color: pink; */
    width: 100%;
    height: 675px;
    overflow: hidden;
    /* background-color: #eeeeee; */
  }

  #myChart {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    /* background-color: pink; */
  }

  .order,
  .news,
  .profit,
  .remember {
    position: absolute;
    height: 150px;
    width: 300px;
    /* background-color: #3e4145; */
    border: 2px solid #eeeeee;
    padding: 0 10px;
    /* opacity: .9; */
    /* color: white; */
    overflow: hidden;
  }

  .order {
    left: 100px;
    top: 100px;
  }

  .news {
    right: 100px;
    top: 100px;
  }

  .profit {
    left: 100px;
    top: 400px;
  }

  .remember {
    right: 100px;
    top: 400px;
  }

  .news:hover,
  .profit:hover,
  .order:hover,
  .remember:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);

  }

  h2 {
    font-weight: 400;
    font-size: 18px;
    height: 45px;
    line-height: 45px;
    border-bottom: 2px solid #eeeeee;
  }

  .icon {
    float: left;
    margin-left: 5px;
    margin-top: 15px;
  }

  .text_span {
    font-size: 28px;
    font-weight: 400;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    /* background-color: pink; */
  }

  .text_r {
    float: left;
    height: 100px;
    width: 185px;
    margin-left: 20px;
    /* background-color: pink; */
    overflow: auto;
  }

  .action {
    /* background-color: pink; */
    text-align: left;
    text-indent: 2em;
  }

  h3 {
    font-weight: 800;
  }

  .actin_view {
    position: fixed;
    background-color: #8fab9c;
    width: 400px;
    height: 350px;
    left: 600px;
    top: 150px;
    padding: 20px 20px;
  }
</style>