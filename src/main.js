import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/app.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
