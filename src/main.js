// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
//默认样式重置
import './assets/styles/reset.css'  
//边框放大缩小都为相同的像素
import './assets/styles/border.css' 
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
//去除click单击事件中默认的300ms
fastClick.attach(document.body) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
