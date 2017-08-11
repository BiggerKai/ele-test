<template>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">查询</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
</template>
<script>

export default {
  name: 'QueryBtn',
  props: ['formObj', 'handleSubmit'],
  methods: {
    submitForm() {
      var a = this;
      this.formObj.form.validate((valid) => {
        if (valid) {
          this.handleSubmit();
        } else {
          return false;
        }
      })
    },
    resetForm() {
      this.formObj.form.resetFields();
    }
  }
}
</script>

