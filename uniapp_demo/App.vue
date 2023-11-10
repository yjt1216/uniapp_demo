<script>
	export default {
		globalData:{
			statusBarB:0,
			customBarH:0,
		},
		onLaunch: function() {
			console.log('App Launch')
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
					
					console.log('当前statusBar',statusBar);
					console.log('当前customBar',customBar);
				}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	
	@import 'uni_modules/uview-ui/index.scss';
	@import 'styles/base.scss';
	@import 'styles/builder.scss';
	@import 'styles/common.scss';
	@import 'styles/login_exam.scss'
	// @import url('static/font/iconfont.css');
</style>
