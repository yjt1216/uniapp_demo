<!-- 
	1. 微信官方文档: https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
	2. 如果您和后端已经在调试微信登录功能了，那就别用申请的测试公众号了(测试公众号仅为了前端自己调试功能)
	3. 代码中出现的一些参数,全部去官方文档看,全都有解释
	4. 请充分理解,并按照您的需求更改,每个人的需求不同
	
	————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	
	【提示"redirect_url参数错误"，可利用技术"伪造线上环境"】
	【提示"redirect_url参数错误"，可利用技术"伪造线上环境"】
	【由于前端本地环境192.168.xx并不是公众号后台设置的网页授权回调域名,所以不可能会授权成功(提示redirect_url参数错误),您需要部署到服务器上,再进行测试】
	【如果您觉得每次部署到服务器调试太麻烦,想要在本地(192.168.xx)环境下直接调试功能,请参考如下解决方案】
	【https://wangjiabin.blog.csdn.net/article/details/127787561】
	【文章内是微信开放平台,换成微信公众平台即可,结果是一样的放心】
	【注意！！！请将uni-app默认端口从8080改为80，否则无效，可参考https://wangjiabin.blog.csdn.net/article/details/128081481】
	
	————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	
	【如果您按照上面的文章进行了"伪造线上环境"操作，结果打开网页仅显示 “Invalid Host header” 黑色文字】
	【请按如下文章顺序依次进行操作👇👇👇👇👇】
	【1. 首先将8080默认端口改为80(改了的话直接下一步)，详见：https://wangjiabin.blog.csdn.net/article/details/128081481】
	【2. 然后再配置一下，详见：https://wangjiabin.blog.csdn.net/article/details/128082511】
	【上面两个操作执行后，便可顺利打开项目,可以愉快的进行本地"伪造线上环境"开始调试了】
-->

<template>
	<view>
		<button @click="login()">点击登录</button>
	</view>
</template>

<script>
export default {
	data(){
		return {
			testLink:'http://data.szdepin.com/web/wechat/webAuth?app_id=2&app_name=depin_public_mp&back_url=pages%2Findex%2Findex',
		}	
	},
	onLoad() {
		// 检测是否完成登录
		this.testing()
	},
	
	methods: {
		
		/**
		 * 检测是否完成登录
		 * @description 判断参数是否有code
		 */
		testing() {
			// code
			const code = this.getUrlParam('code')
			// 判断是否存在code参数
			if(code) {
				// 存在的话,拿code去请求后端接口,获取用户信息
				this.getUserInfo(code)
			}else{
				// console.log('不存在code')
			}
		},
		
		/**
		 * 点击登录
		 * @description 配置好参数,开始登录
		 * @return void
		 */
		login() {
			// 建议从后端接口获取appid(非必须,直接从公众号复制过来写死也行)
			const data = {
				// 公众号appID
				appid: 'wx11683108c5129eab',
				// 授权后重定向的回调链接地址(需urlEncode对链接进行处理)
				redirect_uri: encodeURIComponent(window.location.href),
				// 返回类型(默认code)
				response_type: 'code',
				// 应用授权作用域(根据自己需求来)
				scope: 'snsapi_userinfo',
				// 额外参数
				state: ''
			}
			// 进行微信登录
			this.weixin(data)
		},
		
		/**
		 * 微信授权登录
		 * @description 传递参数并发起跳转
		 * @param {Object} data - 所需参数
		 * @return void
		 */
		weixin(data) {
			// 登录之前的其他操作
			// ...
			// 跳转网页开始登录
			let wxurl = 'http://data.szdepin.com/web/wechat/webAuth?app_id=2&app_name=depin_public_mp&back_url=pages%2Findex%2Findex';
			window.location.href = `${wxurl}`
		},
		
		/**
		 * 获取用户信息
		 * @description 传给接口code,拿到用户信息后进行操作
		 * @param {String} code - code
		 * @return void
		 */
		getUserInfo(code) {
			console.log('当前code',code)
			uni.request({
			    url: 'xx',//接口地址。
			    data: { code: code },//code凭证
			    success: (res) => {
					// 用户信息
			        console.log(res.data)
					// 马上写入缓存
					uni.setStorageSync('login', res.data);
					// 登录完，您要不要跳转页面?
					// uni.redirectTo({
					// 	url: 'xxx'
					// })
			    }
			})
		},
		
		/**
		 * 解析URL参数
		 * @description 截取路由参数
		 * @param {String} name - 要解析的路由参数
		 * @return String
		 */
		getUrlParam(name) {
			let reg = new RegExp('(^|&)'+ name + '=([^&]*)(&|$)')
			let r = window.location.search.substr(1).match(reg)
			if(r != null){// ok
				return unescape(r[2])
			}
			// false
			return null
		},
		
	}
}
</script>

<style scoped>

</style>
