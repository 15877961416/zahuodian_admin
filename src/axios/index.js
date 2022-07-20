import { Get, Post, Put, Patch, Delete } from "@/axios/request";
import { Message } from "element-ui";
import router from "../router"
import store from '../store' 

export default {
  login: (id,pass,params) => {
    return Get('/admin/'+id, params).
      then((res) => {
        if (window.atob(res.Password) === pass) {
          if (res.OnUse) {
            Message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
            sessionStorage.setItem("token_admin", id);
            sessionStorage.setItem("grade",res.Grade)
            store.commit("SET_Admin", res)
  
            setTimeout(() => {
              router.push('/Main')
            // store.state.App.token=id
            // sessionStorage.setItem("token", "id");
              
            },500)
          } else {
            Message({
              message: '对不起，您的账号已禁用',
              type: 'info'
            });
          }
        } else {
          Message({
            message: '对不起，密码错误',
            type: 'warning'
          });
        }
      }).catch((err) => {
        Message({
          message: '对不起，账号不存在',
        });
    });
  },
  getAdmin: (id,params) => {
    return Get('/profile/' + id, params)
      .then((res) => {
        store.commit("SET_Admin", res)
      })
    // })
  },
  patchNickname:(id, params)=>{
    return Patch('/admin/' + id, params)
  },
  patchNickname:(id, params)=>{
    return Patch('/admin/' + id, params)
  },
  patchPhone_get:(id, params)=>{
    return Patch('/admin/' + id, params)
  },
  patchAddress:(id, params)=>{
    return Patch('/admin/' + id, params)
  },
  patchBirth:(id, params)=>{
    return Patch('/admin/' + id, params)
  },
  patchPassword:(id, params)=>{
    return Patch('/admin/' + id, params)
  },


  getGoods: (path, params) => {
    return Get('/'+path,params)
  },
  deleteGoods:( path,id,params) => {
    return Delete('/'+path+'/'+id, params)
  },
  patchGoods_onsale: (path,id, params) => {
    return Patch('/'+path+'/'+id, params)
  },



  
  getUser: (params) => {
    return Get('/Profile',params)
  },
  deleteUser:(id,params) => {
    return Delete('/Profile/'+id, params)
  },
  patchUser: (id, params) => {
    return Patch('/Profile/'+id, params)
  },
  patchPassword:(id, params) => {
    return Patch('/Profile/'+id, params)
  },
  getAdmin_all: (params) => {
    return Get('/Admin',params)
  },
  deleteAdmin:(id,params) => {
    return Delete('/Admin/'+id, params)
  },
  patchAdmin: (id, params) => {
    return Patch('/Admin/'+id, params)
  },
  patchPassword_admin:(id, params) => {
    return Patch('/Admin/'+id, params)
  },
  patchGrade:(id, params) => {
    return Patch('/Admin/'+id, params)
  },
  postAdmin:(params) => {
    return Post('/Admin/', params)
  },


  getGoods_del: (path,id, params) => {
    return Get('/'+path+'/'+id,params)
  },
  patchGoods_title: (path,id, params) => {
    return Patch('/'+path+'/'+id, params)
  },
  patchGoods_color: (path,id, params) => {
    return Patch('/'+path+'/'+id, params)
  },
  patchGoods_size: (path,id, params) => {
    return Patch('/'+path+'/'+id, params)
  },
  patch_price: (path,id, params) => {
    return Patch('/'+path+'/'+id, params)
  },
  patch_onsale: (path,id, params) => {
    return Patch('/'+path+'/'+id, params)
  },

  get_control: (params) => {
    return Get('/control',params)
  },
  get_order: (params) => {
    return Get('/control/Order',params)
  },
  get_news: (params) => {
    return Get('/control/news',params)
  },
  patch_action: (params) => {
    return Patch('/control/action',params)
  },
  get_control_del: (params) => {
    return Get('/control/control_del',params)
  },
  patch_control_del: (params) => {
    return Patch('/control/control_del',params)
  },

  post_goods:(path, params)=>{
    return Post('/'+path,params)
  }
}
