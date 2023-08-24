import {
	createPinia, defineStore
} from 'pinia'
import user from 'user.js'

const app = defineStore({
	id: 'app',
	state:() => ({
		info:{
			name:'',//app民称
			logo:'',//app logo
			version:'',//版本号
			user_protocol: {}, // 用户协议
			privacy_protocol: {}, // 隐私协议
			about_us: {}, // 关于我们
		}
	}),
	actions: {
		
	},
	persist: {
	  enabled: true,
	  strategies: [
	    {
	      key: 'app-store',
	    },
	  ],
	},
});
export default app;