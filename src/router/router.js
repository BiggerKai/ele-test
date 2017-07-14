import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: require('../views/Hello.vue')
  }, {
    path: '/Login',
    component: require('../views/Login.vue')
  }]
})