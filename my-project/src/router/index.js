import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import List from '@/components/List'
import List2 from '@/components/List2'
import Login from '@/components/fangcang/login'
import appList from '@/components/fangcang/appList'
import outApply from '@/components/fangcang/outApply'
import result from '@/components/fangcang/result'
import typeList from '@/components/fangcang/typeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/List2',
      name: 'List2',
      component: List2
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/applist',
      name: 'appList',
      component: appList
    },
    {
      path: '/outapply',
      name: 'outApply',
      component: outApply
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/typelist',
      name: 'typeList',
      component: typeList
    },
  ]
})
