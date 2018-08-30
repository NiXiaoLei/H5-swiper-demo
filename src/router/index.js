import Vue from 'vue'
import Router from 'vue-router'

import Index from '../index'
import Main from '../main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'indexLink', component: Index },
    { path: '/main', name: 'mainLink', component: Main }
  ]
})
