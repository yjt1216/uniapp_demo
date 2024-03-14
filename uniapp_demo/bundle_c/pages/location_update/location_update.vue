<template>
	<view>
		<u-navbar title="定位轨迹"></u-navbar>
		<view style="margin-top: 180rpx;">top</view>
		
		
		
		<button type="primary" @click="getPrivacyFun">打开定位</button>
		
		
		<button id="agree-btn1" open-type="agreePrivacyAuthorization" 
			bindagreeprivacyauthorization="handleAgreePrivacyAuthorization">
				同意隐私协议并授权手机号
		</button>
		<button type="primary" @click="stopLocationFun">关闭定位</button>
		<privacy-popup ref="privacyPopup" @confirm="confirmPrivacy"></privacy-popup>
		
	</view>
</template>

<script>
	import PrivacyPopup from '@/bundle_c/components/privacy-popup/privacy-popup.vue'
	// import trajectoryMap from '@/bundle_c/components/trajectory-map/trajectory-map.vue'
	export default{
		components:{
			PrivacyPopup,
			
		},
		data(){
			return {
				showPrivacy:false,
				lastKnownLocation:{},
				uploadTimer:null,
				points:[
					{
						latitude: 22,
						longitude: 98, 
						speed: 6.4352341234 //speed m/s
					},
					{
						latitude: 22,
						longitude: 98, 
						speed: 6.4352341234 //speed m/s
					},
					{
						latitude: 22,
						longitude: 98, 
						speed: 6.4352341234 //speed m/s
					}
				]
			}
		},
		onLoad() {
			wx.getPrivacySetting({
			    success: res => {
			        console.log(res) // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
			        if (res.needAuthorization) {
			          // 需要弹出隐私协议
			          this.$refs.privacyPopup.$refs.popup.open();
			        } else {
						// 用户已经同意过隐私协议，所以不需要再弹出隐私协议，也能调用已声明过的隐私接口
						this.clickOpenLocationUpdate()
			        }
			      },
			    fail: () => {},
			    complete: () => {}
			})
		},
		methods:{
			handleAgreePrivacyAuthorization() {
			    // 用户同意隐私协议事件回调
			    // 用户点击了同意，之后所有已声明过的隐私接口和组件都可以调用了
			    // wx.getUserProfile()
			    // wx.chooseMedia()
			    // wx.getClipboardData()
			    // wx.startRecord()
			},
			/* 微信隐私新规 */
			confirmPrivacy(){
				this.showPrivacy = false;
				getApp().globalData.showPrivacy = true;
				this.clickOpenLocationUpdate()
			},
			getPrivacyFun(){
				if(getApp().globalData.showPrivacy){
					this.$refs.privacyPopup.$refs.popup.open();
				}else{
					this.clickOpenLocationUpdate()
				}
			},
			stopLocationFun(){
				
			},
			clickOpenLocationUpdate(){
				
				uni.authorize({
					scope:'scope.userLocationBackground',
					success(res1) {
						console.log('用户授权定位res1',res1)
						
						wx.startLocationUpdateBackground({
							success: function (res2) {
								console.log('成功开启后台定位res2',res2)
								// 监听位置变化事件
								wx.onLocationChange(function (res) {
								  let {latitude, longitude} = res;
								  // 记录最新的经纬度信息
								  this.lastKnownLocation = { latitude, longitude };
								  // 设置定时器，每10分钟检查一次是否需要上传
								  if (!this.uploadTimer) {
									this.uploadTimer = setInterval(() => {
									  // 在这里实现你的上传逻辑
									  this.uploadLocation(this.lastKnownLocation);
									  
									  // 如果不需要继续定期上传，记得清除定时器
									  // clearInterval(this.uploadTimer);
									}, 3 * 60 * 1000); // 每10分钟执行一次
								  }
								}.bind(this));
							},
							fail: function (err) {
								console.error('开启后台定位失败', err)
							}
						});
						
					},
					fail(err) {
						console.error('获取定位权限失败',err);
						uni.hideLoading();
						if(this.showPrivacy){
							this.$refs.privacyPopup.$refs.popup.open();
							return;
						}
						uni.showModal({
							title: '提示！',
							confirmText: '去设置',
							showCancel: true,
							content: '您已拒绝授权小程序获取定位信息，如需重新授权 可在设置中重新授权',
							success: function(res) {
								if (res.confirm) {
									
									that.gotoSettingFun();
								}
						  }
						})
					}
				})
				
				
			},
			uploadLocation(locationData){
				// 实现你的上传逻辑，例如通过接口将经纬度数据发送到服务器
				console.log('上床定位信息',locationData);
				// uni.request({
				//     url: 'your-server-url',
				//     method: 'POST',
				//     data: locationData,
				//     success: function(res) {
				//       console.log('位置信息上传成功：', res.data);
				//     },
				//     fail: function(err) {
				//       console.error('位置信息上传失败：', err);
				//     }
				// });
			},
		}
	}
</script>

<style>
</style>