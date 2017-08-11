<template>
  <div class="container">
    <header>
      <el-row>
        <transition name="fade">
          <el-col class="logo " :class="collapsed ? 'logo-collapsed' : ''" :span="10">
            <span v-text="collapsed ? '' : sysName"></span>
          </el-col>
        </transition>
        <el-col :span="10">
          <div class="tools" @click="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col>
        <el-col class="user-info" :span="4">
          <el-dropdown>
            <span class="el-dropdown-link user-info-content">
              <span v-text="userName"></span>
              <img :src="avatar" alt="图片" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </header>
    <el-col :span="24" class="main">
      <nav>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" v-show="!collapsed" @open="handleOpen" @close="handleClose" @select="handleselect" unique-opened router>
          <template v-for="(item, index) in $router.options.routes" v-if="item.type == 'nav'">
            <el-submenu :index="item.path" v-if="!item.leaf">
              <template slot="title">
                <i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.children[0].path" v-if="item.leaf">
              <i :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
        <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
          <li v-for="(item, index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
            <template v-if="!item.leaf">
              <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                <i :class="item.iconCls"></i>
              </div>
              <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
              </ul>
            </template>
            <template v-else>
              <li class="el-submenu">
                <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)">
                  <i :class="item.iconCls"></i>
                </div>
              </li>
            </template>
          </li>
        </ul>
      </nav>
      <aside>
        <div class="breadcrumb-container">
          <strong class="title">{{$route.name}}</strong>
          <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </aside>
    </el-col>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      routerInfo: {},
      show: true,
      sysName: 'ADMIN',
      userName: '',
      avatar: '',
      collapsed: false
    }
  },
  methods: {
    collapse() {
      this.collapsed = !this.collapsed;
    },
    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
    },
    loginOut() {
      this.$confirm('确定退出？', '提示', {})
        .then(() => {
          sessionStorage.removeItem('user');
          this.$router.push({ path: '/login' });
        })
        .catch((e) => {

        });
    },
    handleselect: function (a, b) {
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    var user = sessionStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.userName = user.name;
      this.avatar = user.avatar;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~scss_vars';
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  header {
    height: 60px;
    line-height: 60px;
    color: #fff;
    background-color: $color-primary;

    .logo {
      height: 60px;
      width: 230px;
      font-size: 22px;
      padding: 0 20px;
      border-right: 1px solid rgba(238, 241, 146, 0.3);
    }
    .logo-collapsed {
      width: 60px;
    }
    .tools {
      padding: 0 23px;
      width: 14px;
      cursor: pointer;
    }
    .user-info {
      text-align: right;
      float: right;
      padding-right: 35px;
      .user-info-content {
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 10px;
          float: right;
        }
      }
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    nav {
      .el-menu {
        height: 100%;
        width: 230px;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0px;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }

    aside {
      padding: 20px;
      overflow-y: scroll;
      flex: 1;
      .breadcrumb-container {
        height: 16px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }

        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
}
</style>

