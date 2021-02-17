<template>
  <div class="login_box">
    <div class="login_form">
      <div class="logo">
        <img
          src="../assets/logo.png"
          alt=""
        />
      </div>
      <!-- 登录表单 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="0px"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="login"
          >登录</el-button>
          <el-button
            type="info"
            @click="resetLoginForm"
          >重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单的数据
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则对象
      rules: {
        username: [
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' },
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在6到18个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    // 登录
    login () {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        // 发请求
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败,密码输入错误')
        this.$message.success('恭喜，登录成功')
        // 1.把token保存起来
        window.sessionStorage.setItem('token', res.data.token)
        // 2.跳转主页
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_box {
  height: 100%;
  background-color: #2b4b6b;
}

.login_form {
  width: 450px;
  height: 300px;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .el-form {
    width: 350px;
    position: absolute;
    bottom: 0;
    padding: 0 50px 20px;
  }

  .el-button {
    width: 100px;
    margin-left: 50px;
  }
}
</style>
