import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/views/Dashboard'
import Wire from '@/views/Wire'
import WireDetail from '@/views/WireDetail'
import WireUpload from '@/views/WireUpload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/wire',
      name: 'wire',
      component: Wire
    },
    {
      path: '/wire-detail',
      name: 'wireDetail',
      props: true,
      component: WireDetail
    },
    {
      path: '/upload',
      name: 'upload',
      component: WireUpload
    },
  ]
})
