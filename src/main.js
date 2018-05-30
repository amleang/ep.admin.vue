// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//水波纹
import VueTouchRipple from 'vue-touch-ripple'
// import styles
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
Vue.use(VueTouchRipple, {
  // default global options
  color: '#000',
  opacity: 0.1,
  speed: 1,
  transition: 'ease'
})
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
