import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'echarts'
import VCharts from 'vue-echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/css/global.css'

Vue.config.productionTip = false
Vue.component('VCharts', VCharts)

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
