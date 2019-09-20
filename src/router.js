import Vue from 'vue'
import Router from 'vue-router'
import Wire from '@/views/Wire'
import Dashboard from '@/views/Dashboard'

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
  ]
})
