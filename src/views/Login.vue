<template>
  <el-form ref="loginForm" :rules="rules" :model="loginForm" class="login-form" label-position="right" label-width="0px">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="userName">
      <el-input type="text" v-model="loginForm.userName" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    </el-form-item>
    <el-button style="width:100%;" type="primary" :loading="loading" @click.prevent="handleSubmit">登录</el-button>
  </el-form>
</template>
<script>
import { requestLogin } from '../api/api'

export default {
  data() {
    return {
      loading: false,
      checked: true,
      loginForm: {
        userName: 'admin',
        password: '123123'
      },
      rules: {
        userName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          var form = this.loginForm;
          var param = {
            userName: form.userName,
            password: form.password
          };
          requestLogin(param).then(data => {
            this.loading = false;
            var { msg, code, user } = data;
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              sessionStorage.setItem('user', JSON.stringify(user));
              this.$router.push({ path: '/table' });
            }
          });
        } else {
          return false;
        }
      })
    }
  }
}
</script>
<style lang="scss" scope>
.login-form {
  width: 351px;
  margin: 150px auto;
  padding: 35px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-shadow: 0 0 25px #cac6c6;
  background: #fff;

  .title,
  .btn {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  }
}
</style>