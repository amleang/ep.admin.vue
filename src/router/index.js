import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import home from '@/pages/home'
import user from "@/pages/sys/user/index"
import menu from '@/pages/sys/menu'
Vue.use(Router)

export default new Router({
  /*   mode: 'history', */
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/sys/user', component: user
        },
        {
          path: '/sys/menu', component: menu
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
