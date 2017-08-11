<template>
  <section>
    <el-col :span="24" style="margin: 10px 0">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="查询" name="1">
          <el-form :model="queryForm" ref="queryForm" :inline="true">
            <el-form-item prop="name">
              <el-input v-model="queryForm.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item prop="classess">
              <el-select v-model="queryForm.classess" placeholder="班级" multiple filterable>
                <el-option v-for="item in classess" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <QueryBtn :formObj="formObj" :handleSubmit="getUsers"></QueryBtn>
          </el-form>
        </el-collapse-item>
      </el-collapse>
  
      <el-table :data="users" highlight-current-row v-loading="loading">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="60"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
        <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable></el-table-column>
        <el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
        <el-table-column prop="birth" label="生日" width="120" sortable></el-table-column>
        <el-table-column prop="addr" label="地址" min-width="180" sortable></el-table-column>
        <el-table-column label="操作" width="150">
          <template scope="scope">
            <el-button size="small">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24" class="toolbar">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="pagination.sizes" :page-size="pagination.size" layout="total, sizes, prev, pager, next, jumper" :total="pagination.total" style="float:right">
      </el-pagination>
    </el-col>
  </section>
</template>

<script>

import QueryBtn from '../../components/queryBtn.vue'

import { getUserList } from '../../api/api'

export default {
  components: {
    QueryBtn
  },
  data() {
    return {
      formObj: {
        form: ''
      },
      loading: false,
      activeNames: ['1'],
      classess: [{
        value: '1',
        label: '班级1'
      }, {
        value: '2',
        label: '班级2'
      }],
      queryForm: {
        name: '',
        classess: ''
      },
      pagination: {
        total: 0,
        size: 20,
        page: 1,
        sizes: [20, 50, 100, 200]
      },
      users: []
    };
  },
  mounted() {
    this.$data.formObj.form = this.$refs.queryForm;
    this.getUsers();
  },
  methods: {
    formatSex(row, column, cellValue) {
      return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
    },
    getUsers() {
      let params = {
        name: this.queryForm.name,
        size: this.pagination.size,
        page: this.pagination.page
      };
      this.loading = true;
      getUserList(params).then((res) => {
        this.users = res.users;
        this.pagination.total = res.total;
        this.loading = false;
      })
    },
    handleSizeChange(val) {
      this.pagination.size = val;
      this.getUsers();
    },
    handleCurrentChange(val) {
      this.pagination.page = val;
      this.getUsers();
    }
  }
}
</script>
