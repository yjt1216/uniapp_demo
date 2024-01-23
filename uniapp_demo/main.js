import Vue from 'vue'
import App from './App'
import store from '@/sheep/store'
import {toast} from '@/sheep/utils/tools';
import Cache from '@/sheep/config/cache.js';
import uView from "@/uni_modules/uview-ui";
import minxinsApp from '@/mixins/app';
// import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import {router,RouterMount} from './router.js'
import routerLink from './js_sdk/uni-simple-router/link.vue';



// Vue.component('mescroll-body', MescrollBody)
Vue.prototype.$toast = toast
Vue.prototype.$Cache = Cache
Vue.config.productionTip = false
Vue.component('RouterLink', routerLink)
Vue.use(router);
Vue.mixin(minxinsApp);
Vue.use(uView);
App.mpType = 'app'
/* 公共图片压缩方法 */
Vue.prototype.$compressImage = async function (maxWidth = 1024, quality = 0.8) {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths[0];

        uni.getImageInfo({
          src: tempFilePaths,
          success: (imageInfoRes) => {
            const width = imageInfoRes.width;
            const height = imageInfoRes.height;

            uni.canvasToTempFilePath({
              canvasId: 'myCanvas',
              x: 0,
              y: 0,
              width: Math.min(width, maxWidth),
              height: height * (Math.min(width, maxWidth) / width),
              destWidth: Math.min(width, maxWidth),
              destHeight: height * (Math.min(width, maxWidth) / width),
              fileType: 'jpg',
              quality,
              success: (canvasRes) => {
                resolve(canvasRes.tempFilePath);
              },
              fail(err) {
                reject(err);
              }
            });
          },
          fail(err) {
            reject(err);
          }
        });
      },
      fail(err) {
        reject(err);
      }
    });
  });
};

const app = new Vue({
    ...App,
	store
})
// //v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// // #ifdef H5
// 	RouterMount(app,router,'#app');
// // #endif

// // #ifndef H5
// 	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// // #endif
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
