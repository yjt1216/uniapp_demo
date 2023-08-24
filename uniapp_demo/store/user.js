import {
	defineStore
} from 'pinia'
import {
	isEmpty,
	clone,
	cloneDeep
} from 'lodash'
import { TOKEN } from '../../config/cachekey'

/* 默认用户信息 */
const defaultUserInfo = {
	avatar: '', // 头像
	nickname: '天凉好个秋', // 昵称
	gender: 0, // 性别
	mobile: '15013569557', // 手机号
	money: '--', // 余额
	commission: '--', // 佣金
	score: '--', // 积分
	verification: {}, // 认证字段
}
const user = defineStore({
	id:'user',
	state: () => ({
		userInfo: clone(defaultUserInfo),	  //用户信息
		isLogin: !!uni.getStorageSync(TOKEN), //登录状态
	}),
	actions: {
		async logOut(force = false) {
			if(!force) {
				//const { error } = await 
			}
			return !this.isLogin;
		},
		// 设置token
		setToken(token = '') {
		  if (token === '') {
		    this.isLogin = false;
		    uni.removeStorageSync('token');
		  } else {
		    this.isLogin = true;
		    uni.setStorageSync('token', token);
		  }
		  return this.isLogin;
		},
		// 重置用户默认数据
		resetUserData() {
		  this.setToken();
		  this.userInfo = clone(defaultUserInfo);
		 
		},
		
	},
	persist: {
		enabled: true,
		strategies:[
			{
				key: 'user-store',
			},
		],
	}
	
});
export default user;