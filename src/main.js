// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//水波纹
import VueTouchRipple from 'vue-touch-ripple'
// import styles
// import 'vue-touch-ripple/dist/vue-touch-ripple.css'
// Vue.use(VueTouchRipple, {
//   // default global options
//   color: '#000',
//   opacity: 0.1,
//   speed: 1,
//   transition: 'ease'
// })
//饿了么组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//自定义基础模板
import admin from '@/components/base/admin';
Vue.component('base-admin', admin)
//自定义table组件
import baseTable from '@/components/table/baseTable'
Vue.component('base-table', baseTable)
//自定义操作组件
import baseOpear from '@/components/tool/baseOpear'
Vue.component('base-opear', baseOpear)
import baseSearch from '@/components/tool/baseSearch'
//自定义查询组件
Vue.component('base-search', baseSearch)

import util from '@/components/lib/util'
Vue.use(util)
import http from '@/components/api/http'
Vue.prototype.http = http;
import $http from '@/components/api/$http'
Vue.prototype.$http = $http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
