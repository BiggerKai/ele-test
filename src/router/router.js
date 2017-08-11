import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

var router = new Router({
  routes: [{
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-message',
    type: 'nav',
    children: [{
      name: '表格',
      path: '/table',
      component: require('../views/nav1/Table.vue')
    }]
  }, {
    path: '/',
    component: Home,
    name: '导航二',
    iconCls: 'el-icon-message',
    type: 'nav',
    leaf: true,
    children: [{
      name: '表格2-1',
      path: '/table1',
      component: require('../views/nav1/Table.1.vue')
    }]
  }, {
    path: '/login',
    component: require('../views/Login.vue')
  }]
});

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }

  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;