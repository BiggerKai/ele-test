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
    <div class="main">
      <nav>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleselect" unique-opened router>
          <template v-for="(item, index) in $router.options.routes" v-if="item.type == 'nav'">
            <el-submenu :index="item.path">
              <template slot="title">
                <i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </nav>
      <aside>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  height: 100%;
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
    height: 100%;
    nav {
      width: 230px;

      .el-menu {
        height: 100%;
      }
    }
  }
}
</style>

