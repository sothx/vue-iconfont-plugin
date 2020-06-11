import Vue from 'vue'
import App from './App.vue'
import IconFont from './lib/index.js'
Vue.use(IconFont, {
  prefix:'icon'
})

new Vue({
  el: '#app',
  render: h => h(App)
})