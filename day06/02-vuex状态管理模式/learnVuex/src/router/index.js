import Vue from 'vue'
import Router from 'vue-router'
import HelloVuex from '../components/HelloVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HelloVuex
    }
  ],
  mode: 'history'
})
