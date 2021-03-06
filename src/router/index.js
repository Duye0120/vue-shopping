import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import welcome from '../components/welcome.vue'
import users from '../components/users.vue'
import roles from '../components/roles.vue'
import rights from '../components/rights.vue'
import goods from '../components/goods.vue'
import params from '../components/params.vue'
import categories from '../components/categories.vue'
import orders from '../components/orders.vue'
import reports from '../components/reports.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: welcome
        },
        {
          path: '/users',
          component: users
        },
        {
          path: '/roles',
          component: roles
        },
        {
          path: '/rights',
          component: rights
        },
        {
          path: '/goods',
          component: goods
        },
        {
          path: '/params',
          component: params
        },
        {
          path: '/categories',
          component: categories
        },
        {
          path: '/orders',
          component: orders
        },
        {
          path: '/reports',
          component: reports
        }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // 用户直接访问登录页面，直接放行
  if (to.path === '/login') return next()
  // 判断是否登录
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login') // 没有登录，强制跳转到登录页
  next()
})
export default router
