import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Basket from './pages/basket'


Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'basket',
        path: '/basket',
        component: Basket
      }
    ]
  })
}
