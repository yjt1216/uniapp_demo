import axios from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';

import Cache from '@/config/cache.js';

import store from '@/store/index.js';


import {
	TOKEN
} from '@/config/cachekey.js'

import {
	paramsToStr
} from '@/utils/tools.js'

import {baseURL, dataURL} from '@/config/app.js'


function checkParams(params) {
	if(typeof params != 'object') return params
	for(let key in params){
		const value = params[key];
		// if(value === null || value === undefined || value === ''){
		// 	delete params[key];
		// }
		if(value === null || value === undefined ){
			delete params[key];
		}
	}
	return params;
}

const service = axios.create({
	// baseURL: baseURL ,
	timeout: 10000,
	adapter: mpAdapter,
	header: {
		'content-type': 'application/json'
	},
})

//request拦截器
// 
/* 
	发送验证码sms/send 上传头像file/uploadAvatar 上传签名file/upload 上传多图file/uploadMutiFile
	需要修改 baseURl https://api.depin.tech/api/ 
*/
service.interceptors.request.use(
	config => {
		config.data = checkParams(config.data)
		config.params = checkParams(config.params)
		
		/* 增加蒙板 防止用户在请求时 重复点击 */
		uni.showLoading({
			title:'加载中...',
			mask: true
		});
		
		if(config.method == 'GET') {
			// console.log('请求拦截 url',config.url)
			config.url += paramsToStr(config.params)
		}
		
		config.header.token = store.getters.token
		//console.log('请求拦截config',config)
		return config
	},
	error => {
		console.log(error)
		Promise.reject(error)
	}
)

service.interceptors.response.use(
	async (response) => {
		uni.hideLoading();
		if(response.data){
			const {
				code,
				show,
				msg
			} = response.data;
			if(code == 200 && show) {
				console.log('拦截 ' + msg)
			}else if (code == 10000 || code == 500){
				uni.navigateTo({
					url:'/pages/login/login'
				})
				
			}else{
				console.log('request response ',msg)
			}
		}
		return Promise.resolve(response.data)
	},
	error => {
		uni.showToast({
			title:'返回错误',
			icon:'none'
		})
		console.log('request response error',error)
		return Promise.reject(error)
	}
	
)

export default service




