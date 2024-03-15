<template>
	<view>
		<u-navbar title="定位轨迹" :placeholder="true" :autoBack="true"></u-navbar>
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
	
	let that = null;
	
	import {timeFormat} from '@/sheep/utils/date.js'
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
			that = this;
			
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
				    fail: (err) => {
						console.log(err)
					},
				    complete: () => {}
				})
				
			},
			stopLocationFun(){
				uni.stopLocationUpdate();
				clearInterval(this.uploadTimer);
				this.uploadTimer = null;
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
								  that.lastKnownLocation = { latitude, longitude };
								  // 设置定时器，每10分钟检查一次是否需要上传
								  if (!that.uploadTimer) {
									that.uploadTimer = setInterval(() => {
									  // 在这里实现你的上传逻辑
									  that.uploadLocationFun(that.lastKnownLocation);
									  
									  // 如果不需要继续定期上传，记得清除定时器
									  // clearInterval(this.uploadTimer);
									}, 1 * 60 * 1000); // 每10分钟执行一次
								  }
								}.bind(that));
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
			uploadLocationFun(locationData){
				
				let now = new Date();
				let formattedDateTime = timeFormat(now, 'yyyy年mm月dd日 hh时MM分ss秒');
				
				
				
				// 实现你的上传逻辑，例如通过接口将经纬度数据发送到服务器
				console.log('上传定位信息',locationData,formattedDateTime);
				
			},
			/* 弹框去设置 授权 */
			gotoSettingFun(){
				const _this = this
				const setting = 'scope.userLocationBackground'
				uni.openSetting({
					success (res) {
						console.log('原生设置页回调->', res)
						const { authSetting } = res || {}
						// 已开启位置授权
						if (authSetting.hasOwnProperty(setting) && authSetting[setting]) {
							console.log('已成功开启位置服务->But这里没有返回任何位置信息相关信息')
							
							that.clickOpenLocationUpdate()
							
						}
					},
					fail () {
						uni.hideLoading();
						toast('获取位置信息失败，按“右上菜单 - 关于\n - 右上菜单 - 设置 - 位置信息”授权')
					}
				})
			}
		}
	}
</script>

<style>
</style>