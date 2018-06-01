import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import home from '@/pages/home'
import menu from '@/pages/sys/menu'
Vue.use(Router)

export default new Router({
  /*   mode: 'history', */
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: "/sys",
      component: menu,
      children: [
        {
          path: 'menu', component: menu
        }
      ]
    }
  ]
})
