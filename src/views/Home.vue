<template>
  <el-container class="home">
    <el-header>
      <div>
        <img src="../assets/logo.png" alt />
        <span>固井数据治理系统</span>
      </div>
      <el-button type="info" plain @click="logout">退出</el-button>
    </el-header>
    <el-container class="home-contanier">
      <el-aside class="home-sider" width='200px'>
        <el-menu
          background-color="#c3d6e6"
          default-active="workhome">
          <el-menu-item index="workhome" @click="handleroute('/workhome')">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span>工作台</span>
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>固井数据</span>
            </template>
            <el-menu-item index="cementingdatashow" @click="handleroute('/cementingdatashow')">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span>数据展示</span>
              </template>
            </el-menu-item>
            <el-menu-item index="cementingdatamange" @click="handleroute('/cementingdatamange')">
              <template slot="title">
                <i class="el-icon-s-opportunity"></i>
                <span>数据管理</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item  index="statistics" @click="handleroute('/statistics')">
            <i class="el-icon-s-data"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-menu-item index="system" @click="handleroute('/system')">
            <i class="el-icon-s-tools"></i>
            <span slot="title">系统管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    handleroute (pathname) {
      this.$router.push(pathname)
    }
  }
}
</script>

<style lang='scss' scoped>
.home{
  height: 100%;
}
.el-header {
  background-color: #3f6686;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #355ee4;
  .el-menu{
    height: 100%;
    border-right: none;
  }
}
.el-main {
  background-color: #e4eaec;
}
.home-container {
  height: 100%;
}
.iconfont{
  margin-right: 10px;
}
</style>
