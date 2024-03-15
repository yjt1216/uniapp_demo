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
		
		<view class="drivingDataContent">
			
			<view class="button-group-left button-group-common" @click="handleStartMove">开始</view>
			<view class="button-group-right button-group-common" @click="handleStopMove">停止</view>
		</view>
		
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

	.card-roll-content {
		position: absolute;
		top: 170rpx;
		left: 0;

		.card-roll-common {
			display: flex;
			align-items: center;
			width: 259rpx;
			height: 44rpx;
			box-sizing: border-box;
			padding-left: 20rpx;
			font-size: 20rpx;
			background-color: rgba(0, 0, 0, 0.5);
			border-radius: 0 22rpx 22rpx 0;
			margin-top: 20rpx;
			color: #ffffff;
		}

		.card-roll-4 {
			background-color: rgba(4, 138, 251, 1);
		}
	}

	.lineClass {
		border-top: 1px solid #e9e9e9;
	}

	.button-group-common {
		position: absolute;
		bottom: 296rpx;
		width: 138rpx;
		height: 52rpx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		border-radius: 26rpx;
		align-items: center;
		color: #222222;
		font-size: 24rpx;
		box-shadow: $box-shaow-common;
	}

	.button-group-left {
		left: 0;
	}

	.button-group-right {
		right: 0;
	}

	.icon-img-up-speed {
		width: 20rpx;
		height: 10rpx;
		margin-left: 10rpx;
	}

	.icon-img-query {
		width: 20rpx;
		height: 20rpx;
		margin-left: 10rpx;
	}

	.start-icon-content {
		position: absolute;
		width: 80rpx;
		height: 34rpx;
		top: -17rpx;
		left: 50%;
		margin-left: -31rpx;
		background-color: #fff;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
		.icon-img-start {
			position: absolute;
			width: 100%;
			height: 80rpx;
			position: absolute;
			top: -96rpx;
			left: -2rpx;
		}

		.icon-img-up,
		.icon-img-down {
			width: 64rpx;
			height: 38rpx;
			padding: 8rpx 16rpx;
		}
	}

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

		.carId {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;

			.carId-name {
				font-size: 36rpx;
				font-weight: bold;
			}

			.carId-number {
				font-size: 24rpx;
			}
		}

		.carId-time {
			font-size: 28rpx;
			font-weight: bold;
			padding-top: 20rpx;
		}

		.dateClass {
			display: flex;
			justify-content: space-between;

			.carName {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 142rpx;
				height: 54rpx;
				font-size: 28rpx;
				border-radius: 27rpx;
				background-color: #E5E5E5;
				color: #666666;
			}

			.active {
				color: #ffffff;
				background-color: #048AFB;
			}
		}
	}

	.drivingDataContent {
		position: absolute;
		width: 690rpx;
		// height: 242rpx;
		bottom: 20rpx;
		left: 50%;
		margin-left: -345rpx;
		box-sizing: border-box;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: $borderRadius;
		box-shadow: $box-shaow-common;

		.drivingData-bg {
			box-sizing: border-box;
			border-radius: $borderRadius;
			padding: 30rpx 40rpx 40rpx;
			background-color: $bgF;
			box-shadow: $box-shaow-common;
		}

		.driving-tips {
			height: 160rpx;
			background-color: $bgF;
			border-radius: $borderRadius;
			box-sizing: border-box;
			padding: 20rpx;
			margin-top: 20rpx;
			box-shadow: $box-shaow-common;

			.driving-tips-title {
				display: flex;
				align-items: center;

				.driving-tips-ticon {
					width: 50rpx;
					height: 50rpx;
					.icon-img-down{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}

			.driving-tips-name,
			.driving-tips-count {
				font-size: 30rpx;
				font-weight: bold;
				color: #666666;
				margin-left: 10rpx;
			}

			.driving-tips-content {
				margin-top: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #999999;
			}
		}

		.driving-tips-fast {
			height: 200rpx;

			.fast-left {
				display: flex;
				align-items: center;

				.fast-left-icon {
					width: 50rpx;
					height: 50rpx;
				}

				.fast-left-name {
					font-size: 15px;
					font-weight: bold;
					color: #666666;
					margin-left: 5px;
				}
			}

			.fast-info {
				display: flex;
				justify-content: space-around;
				margin-top: 18rpx;

				.fast-info-1,
				.fast-info-2,
				.fast-info-3 {
					text-align: center;
				}

				.fast-info-1-item,
				.fast-info-2-item,
				.fast-info-3-item {
					font-size: 36rpx;
					font-weight: bold;
					color: #222222;
				}

				.fast-info-1-item-name,
				.fast-info-2-item-name,
				.fast-info-3-item-name {
					font-size: 22rpx;
					font-weight: bold;
					color: #999999;
					margin-top: 18rpx;
				}
			}
		}

		.carId {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;

			.carId-name {
				font-size: 36rpx;
				font-weight: bold;
			}

			.carId-number {
				font-size: 24rpx;
			}
		}

		.carId-info {
			display: flex;
			justify-content: space-between;
			margin-top: 50rpx;

			.carId-info-1,
			.carId-info-2,
			.carId-info-3 {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 22rpx;
				color: #999999;
			}

			.carId-info-1-speed {
				font-size: 36rpx;
				font-weight: bold;
				color: #048AFB;
				padding-bottom: 20rpx;
			}

			.carId-info-2-time {
				font-size: 36rpx;
				font-weight: bold;
				color: #31CF93;
				padding-bottom: 20rpx;
			}

			.carId-info-3-count {
				font-size: 36rpx;
				font-weight: bold;
				color: #E66F57;
				padding-bottom: 20rpx;
			}

		}
	}

	.carId-info-trip {
		.trip-common {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.trip-content {
			margin-top: 20rpx;

			.trip-left {
				display: flex;
				justify-content: center;
				align-items: center;

				.trip-left-icon {
					width: 22rpx;
					height: 22rpx;
					background-color: #31cf93;
					border-radius: 50%;
				}

				.trip-left-icon-end {
					background-color: #e8ae32;
				}

				.trip-left-name {
					color: #666666;
					font-size: 28rpx;
					font-weight: bold;
					margin-left: 16rpx;
				}
			}

			.trip-right {
				color: #999999;
				font-size: 24rpx;
			}
		}

		.trip-adreass {
			color: #666666;
			font-size: 24rpx;
			letter-spacing: 4rpx;
			line-height: 30rpx;
			margin-top: 20rpx;
			word-break: break-all;
			text-overflow: ellipsis;
			word-wrap: break-word;
			white-space: pre-wrap;
		}

		.trip-end {}
	}

	.foot {
		display: flex;
		justify-content: space-between;
		position: absolute;
		width: 690rpx;
		height: 100rpx;
		bottom: 10rpx;
		left: 50%;
		margin-left: -345rpx;

		.foot-com {
			width: 332rpx;
			height: 74rpx;
			display: flex;
			font-size: 30rpx;
			color: #999999;
			justify-content: center;
			align-items: center;
			background-color: #ffffff;
			border-radius: 20rpx;
			box-shadow: $box-shaow-common;
		}

		.foot-query {
			background-color: #048AFB;
			color: #ffffff;
		}

	}
</style>
