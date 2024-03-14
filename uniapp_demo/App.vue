<script>
	import indexApi from 'api/index.js';
	export default {
		globalData:{
			statusBarB:0,
			customBarH:0,
			showPrivacy: false,
		},
		onLaunch: function() {
			console.log('App Launch')
			
			const deviceInfo = uni.getWindowInfo();
			// console.log('App Launch window',deviceInfo);
			
			uni.getSystemInfo({
				success: (info) => {
					let statusBar = info.statusBarHeight
					let customBar = 0
					// #ifdef MP
					customBar = statusBar + (info.platform == 'android' ? 50 : 45);
					// #endif
					// #ifdef MP-WEIXIN
					let menu = wx.getMenuButtonBoundingClientRect()
					customBar = menu.bottom + menu.top - statusBar;
					// #endif
					this.globalData.statusBarH = statusBar
					this.globalData.customBarH = customBar
					
					// console.log('当前statusBar',statusBar);
					// console.log('当前customBar',customBar);
				}
			});
			
			
			
			
			
		},
		onShow: function() {
			console.log('App Show 微信静默授权')
			/* 微信静默授权 */
			// this.getWeiXinJsOpenId();
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			/* H5端时静默授权 获取open id 用于微信支付*/
			getWeiXinJsOpenId(){
				const params = {
					hospital_id: 10000,
					back_url :'pages/index/index'
				}
				indexApi.wechatAuthLogin(params).then(res=>{
					// console.log('H5端时静默授权登录res',res);
					
					console.log('H5端时静默授权登录resData',res.data.url);
					if(res.success == 1){
						// console.log('H5端时静默授权登录res',res.data.url);
						this.skipLink(res.data.url);
					}
				}).catch(err=>{
					console.log('H5端时静默授权登录err',err);
				})
			},
			skipLink(link) {
			   // 你的公众号链接
			   /* 
			   http://data.szdepin.com/pages/index/index
			   ?open_id=oAkxz1ipsHgBGpARRXv-Zz8NzVSw
			   &uid=24285
			   &token=2d71cef079ca26a1f99e0673b0106d43
			   */
			   uni.navigateTo({
				 url: '/pages/webview/webview?link=' + link
			   })
			  
			 
			  
			  
			   
			},
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	
	@import '@/uni_modules/uview-ui/index.scss';
	@import 'styles/base.scss';
	@import 'styles/builder.scss';
	@import 'styles/common.scss';
	@import 'styles/login_exam.scss'
	// @import url('static/font/iconfont.css');
</style>
