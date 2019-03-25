import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import find from '@/components/find'
import other from '@/components/other'
import me from '@/components/me'
import test from '@/components/test'
Vue.use(Router)


export default new Router({
  routes: [
    //test测试页面
    // {
    //   path: '/',
    //   name: 'test',
    //   component: test
    // },
    //home主页
    {
      path: '/',
      name: "home",
      component: home
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
