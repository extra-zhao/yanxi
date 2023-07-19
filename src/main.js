// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './../static/global.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.js';


// 代码高亮插件
import hljs from 'highlight.js';
// 必须导入 否则没样式
import 'highlight.js/styles/atom-one-dark-reasonable.css';
const high = {
  deep: true,
  bind: function (el, binding) {
    const targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value;
      }
      hljs.highlightBlock(target);
    })
  },
  componentUpdated: function (el, binding) {
    const targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value;
        hljs.highlightBlock(target);
      }
    })
  }
}
Vue.directive('highlightjs', high)



// import Vant from 'vant';
// import 'vant/lib/index.css';
// import 'lib-flexible/flexible.js'

import "@/assets/icon/iconfont.css";
import './components';
import store from './vuex/store';


AOS.init();

Vue.use(Vuex)
Vue.use(ElementUI)
// Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

