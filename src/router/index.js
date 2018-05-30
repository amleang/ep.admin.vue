import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import admin from '@/components/base/admin'
Vue.use(Router)

export default new Router({
/*   mode: 'history', */
  routes: [
    {
      path: '/',
      name: 'admin',
      component: admin
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
