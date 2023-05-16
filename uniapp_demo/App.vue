<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	@import "@/uni_modules/uview-ui/index.scss"
	
	// .space{
	// 	padding: 30rpx;
	// }
	// .custom_style{
	// 	color: #fff;
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: center;
	// 	justify-content: center;
	// 	font-size: 24rpx;
	// 	&_icon{
	// 		background-color: #15357A;
	// 		font-size: 80rpx;
	// 		width: 120rpx;
	// 		height: 120rpx;
	// 		border-radius: 100%;
	// 		display: flex;
	// 		justify-content: center;
	// 		align-items: center;
	// 		margin-top: -40rpx;
	// 	}
	// }
</style>
