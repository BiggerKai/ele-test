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
    path: '/',
    component: Home,
    name: '导航三',
    iconCls: 'el-icon-message',
    type: 'nav',
    leaf: true,
    children: [{
      name: '表格3-1',
      path: '/table2',
      component: require('../views/nav1/Table2.vue')
    }]
  }, {
    path: '/',
    component: Home,
    name: '导航四',
    iconCls: 'el-icon-message',
    type: 'nav',
    leaf: true,
    children: [{
      name: '表格4-1',
      path: '/table3',
      component: require('../views/nav1/Table3.vue')
    }]
  }, {
    path: '/',
    component: Home,
    name: '导航五',
    iconCls: 'el-icon-message',
    type: 'nav',
    leaf: true,
    children: [{
      name: '表格5-1',
      path: '/table4',
      component: require('../views/nav1/Table4.vue')
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