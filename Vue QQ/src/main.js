import Vue from 'vue'
import App from './App'
import router from './router'
// 模块化分离  有利于main.js 精简 减少流程 只给模块入口
import mint from '@/library/mint'
import axiosJs from 'axios'
import Vuex from 'vuex'
// ajax请求过期时间，最长5秒，如果超时不候
axiosJs.defaults.timeout = 5000

Vue.config.productionTip = false
// 将axios 放入到vue原型链中，所有的组件都可使用
Vue.prototype.axios = axiosJs
Vue.use(Vuex)
// api有很多，将它单独封装一个模块
import APIJS from './assets/js/api.js'
Vue.prototype.api=APIJS

import UtilJS from './assets/js/util.js'
Vue.prototype.util = UtilJS
const store = new Vuex.Store({
    state: {
      musiclist: [],
      showFooter: true,
      avatarShow: true,
      avatar1Show: false,
      rotImgShow: true,
      rotImg1Show: false,
      isPlay: false,
      lyrics: "",
      src: "https://m801.music.126.net/20190816214441/8489defbc0161a6a4549add309a2cdd5/jdyyaac/0408/0253/0159/3b476227df59d9f9c9d763e474729d8f.m4a",
      name: "Devilman No Uta",
      singerName:"女王蜂",
      picUrl: "https://p2.music.126.net/RfEL_aOz9l8JsKn45wuSew==/109951163102122525.jpg"
    }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  mint,
  store,
  template: '<App/>'
})
