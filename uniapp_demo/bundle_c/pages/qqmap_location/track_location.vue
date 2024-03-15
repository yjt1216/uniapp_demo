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
			
			<view class="button-group-common" @click="handleStartMove">开启行动轨迹</view>
			
		</view>
		
		<!-- <view class="drivingDataContent">
			
			<view class="button-group-common" @click="handleStartMove">开始</view>
			<view class=" button-group-common" @click="handleStopMove">停止</view>
		</view> -->
		
	</view>
	
</template>
<script>
	export default {
		data() {
			return {
				
				/* 终点站 40.002884,116.488778 */
				endMarker:{
					latitude: 40.002884,
					longitude: 116.488778
				},
				
				showpickerStart: false,
				showpickerEnd: false,
				pickerValue: Number(new Date()),
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
				isDtail: false, //是否显示详情
				isQuery: true, //未点击查询时展示框
				isStart: false, //是否播放行车轨迹
				
				
				
				latitude: 39.909, // 默认纬度
				longitude: 116.39742, // 默认经度(北京天安门)
				covers: [{
					id: 110,
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png',
					width: "20",
					height: "20"
				}],
				
			}
		},
		onReady() {
			this.mapContext = uni.createMapContext('myMap', this)
		},
		onLoad(option) {
			this.getTrack() //获取轨迹信息(只做演示，未进行远程请求)
		},
		methods: {
			
			//模拟获取远程数据
			getTrack() {
				this.polyline[0].points = [{
						latitude: 39.997761,
						longitude: 116.478935
					},
					{
						latitude: 39.997825,
						longitude: 116.478939
					},
					{
						latitude: 39.998549,
						longitude: 116.478912
					},
					{
						latitude: 39.998555,
						longitude: 116.478998
					},
					{
						latitude: 39.998566,
						longitude: 116.479282
					},
					{
						latitude: 39.998528,
						longitude: 116.479658
					},
					{
						latitude: 39.998453,
						longitude: 116.480151
					},
					{
						latitude: 39.998302,
						longitude: 116.480784
					},
					{
						latitude: 39.998184,
						longitude: 116.481149
					},
					{
						latitude: 39.997997,
						longitude: 116.481573
					},
					{
						latitude: 39.997846,
						longitude: 116.481863
					},
					{
						latitude: 39.997718,
						longitude: 116.482072
					},
					{
						latitude: 39.997718,
						longitude: 116.482362
					},
					{
						latitude: 39.998935,
						longitude: 116.483633
					},
					{
						latitude: 39.998968,
						longitude: 116.48367
					},
					{
						latitude: 39.999861,
						longitude: 116.484648
					}
				]
				// this.durationTime = Math.ceil(30000 / this.polyline[0].points.length) //默认播放全程使用30秒，计算相连两点动画时长
				this.initMarkers()
			},
			//设置地图
			// initMapData() {
				
			// },
			//设置位置（从起点开始）
			initMarkers() {
				this.markers[0].latitude = this.polyline[0].points[0].latitude
				this.markers[0].longitude = this.polyline[0].points[0].longitude
				
				
				let currentIndex = this.polyline[0].points.length - 1;
				
				let currentlat = this.polyline[0].points[currentIndex].latitude
				let currentlng = this.polyline[0].points[currentIndex].longitude
				
				/* 添加起点 */
				this.markers.push({
					id: 0,
					latitude: this.polyline[0].points[0].latitude,
					longitude: this.polyline[0].points[0].longitude,
					width:24,
					height:32,
					iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png',
					// callout:{
					// 	content: '起点',
					// 	color:"#00ff00",
					// 	fontSize:12,
					// 	borderRadius:4,
					// 	bgColor:"#ffffff",
					// 	padding:2,
					// 	display:"ALWAYS",
					// 	textAlign:"center",
					// }
				})
				/* 添加终点位置 */
				this.markers.push({
					id: 1,
					latitude: this.endMarker.latitude,
					longitude: this.endMarker.longitude,
					width:24,
					height:32,
					iconPath: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png',
					// callout:{
					// 	content: '终点',
					// 	color:"#ff0000",
					// 	fontSize:12,
					// 	borderRadius:4,
					// 	bgColor:"#ffffff",
					// 	padding:2,
					// 	display:"ALWAYS",
					// 	textAlign:"center",
					// }
				})
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
				
			},
			//开始移动
			handleStartMove() {
				this.isStart = true
				this.movePoint()
			},
			//停止移动
			handleStopMove() {
				this.isStart = false
			},
			//移动坐标
			movePoint() {
				/*
				//也可以用这个方法
				this.mapContext.moveAlong({
					duration: 30000,
					markerId: this.markers[0].id,
					path: this.polyline[0].points
				})
				return
				*/
				this.mapContext.translateMarker({
					duration: 800,
					markerId: this.markers[0].id,
					autoRotate: true, // 移动过程中自动旋转marker
					rotate:15,  // marker旋转角度
					moveWithRotate: false, // 小车平移与旋转同时进行
					destination: {
						latitude: this.polyline[0].points[this.nextPointIndex].latitude,
						longitude: this.polyline[0].points[this.nextPointIndex].longitude
					},
					animationEnd: res => {
						//播放结束，继续移动到下一个点，最后一个点时结束移动
						if (this.nextPointIndex < this.polyline[0].points.length - 1) {
							this.nextPointIndex++
							if (this.isStart) {
								this.movePoint()
							}
						} else {
							this.nextPointIndex = 1
							this.isStart = false
						}
					}
				})
			}
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
		height: 242rpx;
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

	.button-group-common {
		position: absolute;
		// bottom: 296rpx;
		width: 500rpx;
		height: 64rpx;
		background-color: #ff8c00;
		display: flex;
		justify-content: center;
		border-radius: 26rpx;
		align-items: center;
		color: #fff;
		font-size: 24rpx;
		box-shadow: $box-shaow-common;
	}

	
	

</style>
