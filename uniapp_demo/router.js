import {
	RouterMount,
	createRouter,
	runtimeQuit
} from './js_sdk/uni-simple-router';
import {
	BACK_URL
} from '@/sheep/config/cachekey.js'
import store from '@/sheep/store'

import Cache from '@/sheep/config/cache.js'
import wechath5 from '@/sheep/utils/wechath5'
import {isWeixinClient} from '@/sheep/utils/tools'

const scrollInfo = {};
let first = null;
const whiteList = ['register', 'login', 'forget_pwd']
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	APP: {
		animation: {}
	},
	h5: {
		scrollBehavior: (to, from, savedPosition) => {
			const XY = scrollInfo[to.name];
			if (XY) return XY;
			return {
				x: 0,
				y: 0
			};
		}
	},
	routerErrorEach: ({
		type,
		msg
	}) => {
		router.$lockStatus = false;
		// #ifdef APP-PLUS
		if (type === 3) {
			runtimeQuit();
		}
		// #endif
	},
	debugger: false,
	routes: [
		...ROUTES,
		{
			path: '*',
			redirect: (to) => {
				return {
					name: '404'
				}
			}
		},
	]
});

console.log(router)

let count = 0;
router.beforeEach((to, from, next) => {
	// #ifdef H5
	// tab页面的滚动缓存
	if (from.meta.keepScroll === true) {
		scrollInfo[from.name] = {
			x: window.scrollX,
			y: window.scrollY
		}
	}
	// #endif


	// console.log(to,from, 'beforeEach---开始跳转')
	let index = whiteList.findIndex((item) => from.path.includes(item))
	if (index == -1  ) {
		Cache.set(BACK_URL, from.fullPath)
	}
	if (to.meta.auth) {
		next('/pages/login/login');
		return
	} else {
		next()
	}

});
router.afterEach( (to, from, next) => {
	// #ifdef H5
	// 添加定时器防止拿到的域名是上一个域名
	setTimeout(async () => {
		if (isWeixinClient()) {
			// jssdk配置
			await wechath5.config()
			// 分享配置
			if (to.path.includes('goods_details')) return
			store.dispatch('wxShare')
		}
	})

	// #endif
});

export {
	router,
	RouterMount
}
