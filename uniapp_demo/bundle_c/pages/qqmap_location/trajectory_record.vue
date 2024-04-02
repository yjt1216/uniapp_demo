<template>
	<view class="map_wrap">
		<u-navbar title="行程轨迹" :autoBack="true" :placeholder="true"></u-navbar>
		<map 
			id="myMap" 
			style="height: 100vh; width:100%;"
			:markers="markers" 
			:polyline="polyline"
			:polygons="polygons"
			:show-location="true"
			:latitude="polyline[0].points[0].latitude"
			:longitude="polyline[0].points[0].longitude">
		</map>
		
		<view class="drivingContent">
			
			<view v-if="!isStart" class="button-group-start" @click="handleStartMove">开启行动轨迹</view>
			<view v-else class="button-group-stop" @click="handleStopMove">停止记录行动轨迹</view>
		</view>
		
		<privacy-popup ref="privacyPopup" @confirm="confirmPrivacy"></privacy-popup>
		
		
	</view>
	
</template>
<script>
	
	let that = null;
	import {trajectoryList,trajectoryStartStop,uploadTrajectory} from '@/api/home.js';
	import PrivacyPopup from '@/components/privacy-popup/privacy-popup.vue'
	
	
	export default {
		data() {
			return {
				mapContext: null, //地图对象
				nextPointIndex: 1, //下一个坐标点的索引
				durationTime: 1000, //相邻两点动画持续时长默认1秒
				//路线信息
				polyline: [{
					width: 8,
					points: [],
					arrowLine: true,
					color: '#3591FC',
				}],
				polygons:[],
				//标记点(即移动标记物)
				markers: [{
					id: 1,
					width: 40,
					height: 40,
					latitude: 0,
					longitude: 0,
					iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png',
					anchor: {
						x: 0.5,
						y: 1
					}
				}],
				//是否播放行车轨迹
				isStart: false, 
				
				latitude: 39.909, // 默认纬度
				longitude: 116.39742, // 默认经度(北京天安门)
				/* 起点 */
				startMarker:{
					latitude: 39.909,
					longitude: 116.39742
				},
				/* 终点站 40.002884,116.488778 */
				endMarker:{
					latitude: 40.002884,
					longitude: 116.488778
				},
				stepId:null,
				/* 隐私协议 默认不需要false */
				showPrivacy:false,
				uploadTimer:null,
				/* 默认用户第一次开启 */
				trajectoryStatus:0,
			}
		},
		onReady() {
			this.mapContext = uni.createMapContext('myMap', this)
		},
		onLoad(option) {
			that = this;
			const eventChannel = this.getOpenerEventChannel();
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', function(data) {
			    console.log('ONload 行程轨迹',data.data);
				if(data.data.trajectory_status){
					that.trajectoryStatus = data.data.trajectory_status;
				}
				that.stepId = data.data.step_id;
				that.getTrackPoints(data.data.step_id); //获取轨迹信息(只做演示，未进行远程请求)
			});
			
			uni.getLocation({
				type: 'gcj02',
				success: ({ latitude, longitude }) => {
					that.startMarker.latitude = latitude;
					that.startMarker.longitude = longitude;
					that.polyline[0].points = [
						{
							latitude: latitude,
							longitude: longitude
						},
					];
					that.markers[0].latitude = latitude;
					that.markers[0].longitude = longitude;
					
				}
			});
			
			
			
		},
		methods: {
			/* 开启行程轨迹 */
			handleStartMove() {
				this.isStart = true;
				this.getPrivacyFun();
			},
			/* 关闭行程轨迹 */
			handleStopMove() {
				this.isStart = false;
				this.startTrajectoryFun(1);
			},
			getPrivacyFun(){
				wx.getPrivacySetting({
				    success: res => {
						this.showPrivacy = res.needAuthorization;
				        console.log(res) // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
				        if (res.needAuthorization) {
				          // 需要弹出隐私协议
				          this.$refs.privacyPopup.$refs.popup.open();
				        } else {
							// 用户已经同意过隐私协议，所以不需要再弹出隐私协议，也能调用已声明过的隐私接口
							that.startTrajectoryFun(0);
				        }
				      },
				    fail: (err) => {
						console.log('隐私协议',err)
					},
				    complete: () => {}
				})
				
			},
			startTrajectoryFun(status){
				const params = {token:this.token,step_id:this.stepId};
				
				if(res.success === 1){
					if(status === 0){
						uni.showToast({
							title:'开启成功',
							icon:'none'
						});
						this.clickOpenLocationUpdate();
					}else{
						uni.showToast({
							title:'关闭成功',
							icon:'none'
						})
						this.stopLocationFun();
					}
					
				}
				
			},
			
			
			//获取远程数据
			getTrackPoints(step_id) {
				
				const param = {
					token:this.token,
					step_id:step_id,
				}
				let mockLatLng = [
					{
						latitude: 31.2666,
						longitude: 120.737732
					},
					{
						latitude: 31.267052,
						longitude: 120.74142
					},
					{
						latitude: 31.266823,
						longitude: 120.745336
					},
					{
						latitude: 31.269629,
						longitude: 120.748544
					},
				];
				that.initMarkers(mockLatLng);
				
				// var count = 0;
				// let mockLatLng = [
				// 	{
				// 		latitude: 31.2666,
				// 		longitude: 120.737732
				// 	},
				// 	{
				// 		latitude: 31.267052,
				// 		longitude: 120.74142
				// 	},
				// 	{
				// 		latitude: 31.266823,
				// 		longitude: 120.745336
				// 	},
				// 	{
				// 		latitude: 31.269629,
				// 		longitude: 120.748544
				// 	},
				// ];
				
				// uni.getLocation({
				// 	type: 'gcj02',
				// 	success: ({ latitude, longitude }) => {
						
				// 		console.log('开启监听位置变化事件res3',latitude, longitude)
				// 		// 记录最新的经纬度信息
				// 		that.lastKnownLocation = { latitude, longitude };
				// 		// 设置定时器，每10分钟检查一次是否需要上传
				// 		if (!that.uploadTimer) {
				// 			that.uploadTimer = setInterval(() => {
				// 				// 在这里实现你的上传逻辑
				// 				if(latitude === that.endMarker.latitude && longitude === that.endMarker.longitude ){
				// 					that.startTrajectoryFun(1);
									
				// 				}else {
				// 					that.uploadLocationFun(that.lastKnownLocation);
				// 				}
				// 			  // 如果不需要继续定期上传，记得清除定时器
				// 			  // clearInterval(this.uploadTimer);
				// 			}, 3 * 60 * 1000); // 每10分钟执行一次
							
				// 		}
						
				// 	}
				// });
				
			},
			
			
			/* 微信隐私新规 */
			confirmPrivacy(){
				this.showPrivacy = false;
				getApp().globalData.showPrivacy = true;
				this.handleStartMove()
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
						var count = 0;
						
						// 小程序进入后台时 更新地址
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
									  that.lastKnownLocation = mockLatLng[count];
									  if(count < mockLatLng.length){
										  that.uploadLocationFun(that.lastKnownLocation,count);
										  count = count + 1;
									  }else {
										  that.startTrajectoryFun(1);
									  }
									  // 如果不需要继续定期上传，记得清除定时器
									  // clearInterval(this.uploadTimer);
									}, 3 * 60 * 1000); // 每10分钟执行一次
									
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
			/* 上传当前经纬度 */
			uploadLocationFun(locationData,count){
				console.log('上传当前经纬度',locationData,count);
				
				// let now = new Date();
				// let formattedDateTime = timeFormat(now, 'yyyy年mm月dd日 hh时MM分ss秒');
				// 实现你的上传逻辑，例如通过接口将经纬度数据发送到服务器
				// console.log('上传定位信息',locationData,formattedDateTime);
				
				
				const param = {
					token: this.token,
					lat: locationData.latitude,
					lng:locationData.longitude,
					step_id: this.stepId,
				};
				uploadTrajectory(param).then(res=>{
					if(res.success === 1){
						console.log('上传定位信息',locationData);
					}
				}).catch(err=>{
					console.log('上传定位信息err',err);
				});
				
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
			},
			//设置位置（从起点开始）
			initMarkers(trajectory_list) {
				if(trajectory_list.length > 0){
					
					// this.markers[0].latitude = this.polyline[0].points[0].latitude
					// this.markers[0].longitude = this.polyline[0].points[0].longitude
					
					/* 添加起点 */
					this.markers.push({
						id: 0,
						latitude: that.markers[0].latitude,
						longitude: that.markers[0].longitude,
						width:24,
						height:32,
						iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png',
						
					})
					
					let currentIndex = this.polyline[0].points.length - 1;
					
					let currentlat = this.polyline[0].points[currentIndex].latitude
					let currentlng = this.polyline[0].points[currentIndex].longitude
					
					/* 目前所在位置 */
					if(this.endMarker.latitude !== currentlat && this.endMarker.longitude !== currentlng){
						this.markers.push({
							id: 2,
							latitude: currentlat,
							longitude: currentlng,
							width:24,
							height:32,
							// iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png',
							callout:{
								content: '当前',
								color:"#ff0000",
								fontSize:12,
								borderRadius:4,
								bgColor:"#ffffff",
								padding:2,
								display:"ALWAYS",
								textAlign:"center",
							}
						})
					}
					
				}else{
					
				}
				
				
				/* 添加终点位置 */
				this.markers.push({
					id: 1,
					latitude: this.endMarker.latitude,
					longitude: this.endMarker.longitude,
					width:24,
					height:32,
					iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png',
				})
				
				
			},
			
			
		}
	}
</script>
<style scoped lang="scss">
	$box-shaow-common: 0px 0px 6px 4px #d8d8d8;
	$bgF: #ffffff;
	$borderRadius: 30rpx;
	.map_wrap {
		background-color: #ccc;
		height: calc(100vh - 44px);
		/* #ifdef MP-WEIXIN */
		height: 100vh;
		/* #endif */
	}
	
	// 重置原生组件样式,关闭溢出隐藏
	// view {
	// 	overflow: unset;
	// }
	
	.drivingContent {
		position: absolute;
		width: 690rpx;
		height: 200rpx;
		bottom: 154rpx;
		left: 50%;
		margin-left: -345rpx;
		border-radius: 30rpx;
		background-color: #ffffff;
		box-sizing: border-box;
		padding: 20rpx;
		box-shadow: $box-shaow-common;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}
	
	.lineClass {
		border-top: 1px solid #e9e9e9;
	}
	
	.button-group-start {
		position: absolute;
		// bottom: 296rpx;
		width: 500rpx;
		height: 90rpx;
		background-color: #ff8c00;
		display: flex;
		justify-content: center;
		border-radius: 26rpx;
		align-items: center;
		color: #fff;
		font-size: 24rpx;
		box-shadow: $box-shaow-common;
	}
	
	.button-group-stop {
		position: absolute;
		// bottom: 296rpx;
		width: 500rpx;
		height: 90rpx;
		background-color: #FFBC00;
		display: flex;
		justify-content: center;
		border-radius: 26rpx;
		align-items: center;
		color: orangered;
		font-size: 24rpx;
		box-shadow: $box-shaow-common;
	}
	
	
</style>
