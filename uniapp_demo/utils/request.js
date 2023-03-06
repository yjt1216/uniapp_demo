
/**
 @example 
  https://github.com/ponjs/uni-ajax/tree/dev/example
 */

import ajax from '@/uni_modules/u-ajax'

const service = axios.create({
	baseURL: baseURL + '/api/',
	timeout: 10000,
	header: {
		'content-type': 'application/json'
	},

});


// request拦截器
service.interceptors.request.use(
	config => {
		config.data = checkParams(config.data)
		config.params = checkParams(config.params)
		if (config.method == 'GET') {
			config.url += paramsToStr(config.params)
		}
		config.header.token = store.getters.token
	
		return config
	},
	error => {
		// Do something with request error
		console.log(error) // for debug
		Promise.reject(error)
	}
)

// response 拦截器
service.interceptors.response.use(
	async (response) => {
		
			if (response.data) {
				const {
					code,
					show,
					msg
				} = response.data;
				if (code == 0 && show) {
					console.log('拦截 ' + msg)
					// toast({
					// 	title: msg,
					// })
				} else if (code == -1) {
					store.commit('logout')
					toLogin()
				} else if(code == 301) {
					// 返回上一页
					toast({
						title: msg,
					},{
						tab: 3,
						url: 1
					})
				}
			}

			return Promise.resolve(response.data)
		},
		error => {
			uni.showToast({
				title: "系统错误",
				icon: "none"
			})
			console.log(error)
			console.log('err' + error) // for debug
			return Promise.reject(error)
		}
)

export default service
