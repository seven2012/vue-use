// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

//全局注册，就是在main.js里注册一个全局的'July'，如下，然后在任可一个模板里面如App.vue里直接引入标签<July />，不需要import
Vue.component('July',{
  template:'<p>I am {{name}}</p>',
  data(){
    return {
      name:'July7'
    }
  }
})

//全局注册的第二种形式
// import My from './components/My'
// Vue.component('My',My)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { 
    App
  }
})
