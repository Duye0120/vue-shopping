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
          unique-opened
        >
          <el-submenu
            :index="item.id+''"
            v-for="item in menulist"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item
              :index="subItem.id+''"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <i class="el-icon-menu"></i>
              <span>{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menulist: [], // 菜单数据
      iconsObj: {
        125: 'el-icon-s-custom',
        103: 'el-icon-s-operation',
        101: 'el-icon-goods',
        102: 'el-icon-s-order',
        145: 'el-icon-s-data'
      }
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      // 销毁本地的token
      window.sessionStorage.clear()
      this.$router.push('login')
    },
    // 获取菜单列表
    async getMenuList () {
      // get menus
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error('获取菜单列表失败')
      this.menulist = res.data
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
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #f2f6fc;
}
</style>
