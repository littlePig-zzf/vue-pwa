// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { AlertPlugin, LoadingPlugin, ToastPlugin, WechatPlugin } from 'vux'
import axios from './request'
import { api } from './request/api.js'
import App from './App'
import router from './router'
import './assets/css/transition.less'
import GlobalComponents from './components/GlobalComponent.js'
require('es6-promise').polyfill()

Vue.use( WechatPlugin )
Vue.use( AlertPlugin )
Vue.use( LoadingPlugin )
Vue.use( ToastPlugin )
Vue.use( GlobalComponents )

// console.log(Vue.wechat)
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
