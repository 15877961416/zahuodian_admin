import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/Main'
import Profile from '@/view/Profile'
import Goods_control from '@/view/Goods_control'
import User_control from '@/view/User_control'
import control from '@/view/control'
import Home from '@/view/Home'
import Login from '@/view/Login'

import Clothes from '@/components/goods_control/Clothes'
import Shoe from '@/components/goods_control/Shoe'
import Life from '@/components/goods_control/Life'
import Learn from '@/components/goods_control/Learn'
import Digital from '@/components/goods_control/Digital'
import Sports from '@/components/goods_control/Sports'
import Add from '@/components/goods_control/Add'

import Goods_control_del from '@/view/Goods_control_del'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
  //   {
  //     path: '/',
  //     redirect:'/Main/'
  //   },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/Main/',
          name: 'Home',
          component: Home
        },
        {
        path: '/Main/Profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/Main/Goods_control',
        name: 'Goods_control',
        component: Goods_control,
        children: [
          {
            path: '/Main/Goods_control/',
            name: 'Clothes',
            component: Clothes
          },
          {
            path: '/Main/Goods_control/Shoe',
            name: 'Shoe',
            component: Shoe
          },
          {
            path: '/Main/Goods_control/Life',
            name: 'Life',
            component: Life
          },
          {
            path: '/Main/Goods_control/Learn',
            name: 'Learn',
            component: Learn
          },
          {
            path: '/Main/Goods_control/Digital',
            name: 'Digital',
            component: Digital
          },
          {
            path: '/Main/Goods_control/Sports',
            name: 'Sports',
            component: Sports
          },
          {
            path: '/Main/Goods_control/Add',
            name: 'Add',
            component: Add
          },
        ]
      },
      {
        path: '/Main/User_control',
        name: 'User_control',
        component: User_control
      },
      {
        path: '/Main/control',
        name: 'control',
        component: control
      },
        {
          path: '/Main/Goods_control_del/:path/:id',
          name: 'Goods_control_del',
          component: Goods_control_del
        }
      ]
    },
    
    
    
  ]
})
