<template>
  <div class="system">
    <el-card>
      <el-button :style="{'margin-bottom': '20px'}" icon="el-icon-plus" type="primary" >添加新用户</el-button>
      <el-table
        :data="usersList"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="username"
          label="用户名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="password"
          label="密码">
        </el-table-column>
        <el-table-column label="操作" align="center" >
          <template >
              <el-button type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      usersList: [
        {
          username: 'admin',
          password: '12345678'
        },
        {
          username: 'xxx',
          password: '12345678'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.system{
  height: 100%;
  .datashow-btns{
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

</style>
