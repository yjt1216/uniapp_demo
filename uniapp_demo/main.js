import App from './App'
import hxNavbar from "@/components/hx-navbar/hx-navbar.nvue"


// #ifndef VUE3
import Vue from 'vue'
import store from './store/index.js'
import {toast} from './utils/tools.js'
import Cache from './utils/cache.js'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"

Vue.prototype.$toast = toast
Vue.prototype.$Cache = Cache
Vue.config.productionTip = false

Vue.component('mescroll-body', MescrollBody)
Vue.component('hx-navbar',hxNavbar)
App.mpType = 'app'


try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) { }

const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif