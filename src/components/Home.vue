<template>
  <el-container class="home_box">
    <!-- 页面头部 -->
    <el-header>
      <div>
        <img
          src="../assets/demo.jpg"
          alt=""
        >
        <span>xx公司电商后台管理</span>
      </div>
      <el-button
        type="info"
        plain
        @click="logout"
      >系统退出</el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航1</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">导航3</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">导航4</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      // 销毁本地的token
      window.sessionStorage.clear()
      this.$router.push('login')
    }
  }
}
</script>

<style lang="less" scoped>
.home_box {
  height: 100%;
}
.el-header {
  background-color: #409eff;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  color: #fff;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin: 5px 15px;
      border-radius: 50%;
      background-color: white;
    }
    span {
      font-size: 25px;
      line-height: 60px;
      margin-left: 40px;
    }
  }
}
.el-aside {
  background-color: #909399;
}
.el-main {
  background-color: #f2f6fc;
}
</style>
