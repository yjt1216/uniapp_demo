<template>
	<view>
		<map style="width: 100%; height: 100vh;" scale='13' :latitude="latitude" :longitude="longitude" :polyline="polyline" :markers="markers" :v-if="showmap">
		 </map>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				latitude:'',
				longitude:'',
				polyline: [], // 线
				// points:[],
				// 120.737732,31.2666
				points:[
					{
						latitude: 31.2666,
						longitude: 120.737732, 
						speed: 6.4352341234 //speed m/s
					},
					{
						latitude: 31.2630,
						longitude: 120.737632, 
						speed: 6.4352341234 //speed m/s
					},
					{
						latitude: 31.2620,
						longitude: 120.737532, 
						speed: 6.4352341234 //speed m/s
					}
				],
				showmap:false,
				markers:[], // 标记点
				timer:null,
			};
		},
		mounted() {
			// if(this.timer){
			// 	clearInterval(this.timer)
			// }else{
			// 	console.log(this.taskstatus)
			// 	if(this.taskstatus==3){
			// 		this.timer = setInterval(() => {
			// 			console.log('正在运输。。。。。')
			// 		      // this.lookTrajectory(); // 获取传到后端经纬度
			// 		}, 5000);
			// 	}
			// }
		},
		beforeDestroy() {
			// clearInterval(this.timer)
		},
		onLoad(event) {
			uni.showLoading({
				title: '地图加载中',
				// mask: true
			})
			this.points = JSON.parse(event.points) // 通过navigateTo传过来的数据
			this.latitude=this.points[0].latitude
			this.longitude=this.points[0].longitude
			const length= this.points.length-1
			
			const taskline={
				points: this.points,
				color: "#5A97FF",
				width: 10, // width必须填 不然会报错
				arrowLine:true // 是否有箭头
			}
			const markers0={
				latitude:this.points[0].latitude,
				longitude:this.points[0].longitude,
				id:0,
				iconPath:'/bundle_c/static/start.png',
				width:40,
				height:50
			}
			const markers1={
				latitude:this.points[length].latitude,
				longitude:this.points[length].longitude,
				id:1,
				iconPath:'/bundle_c/static/end.png',
				width:40,
				height:50
			}
			this.markers.push(markers0)
			this.markers.push(markers1)
			console.log(this.markers)
			this.polyline[0]=taskline
			this.showmap=true;
			setTimeout(() => {
			    uni.hideLoading()
			}, 1000)
		},
		onHide() {
			uni.stopLocationUpdate();
			
		},
		methods:{
			//   初次位置授权
			getAuthorize() {
				return new Promise((resolve, reject) => {
					uni.authorize({
						scope: 'scope.userLocationBackground',
						success: () => {
							resolve() // 允许授权
						},
						fail: () => {
							reject() // 拒绝授权
						},
					})
				})
			},
			// 用户首次拒绝授权后(考虑是误点击)，弹框提示是否手动打开位置授权
			openConfirm() {
				return new Promise((resolve, reject) => {
					uni.showModal({
						title: '请求授权当前位置',
						content: '我们需要获取地理位置信息',
						success: res => {
							if (res.confirm) {
								uni.openSetting().then(res => {
									console.log('想看看:', res)
									if (res[1].authSetting['scope.userLocationBackground'] ===
										true) {
										resolve() // 打开地图权限设置
									} else {
										reject()
									}
								})
							} else if (res.cancel) {
								reject()
							}
						},
					})
				})
			},
			openLocationFun(){
				this.getAuthorize()
					.then(() => {
				        //   同意后获取
						this.getLocation(id)
					})
					.catch(() => {
					    //   不同意给出弹框，再次确认
						this.openConfirm()
							.then(() => {
								this.getLocation(id)
							})
					})
			},
			// 获取当前位置
			getLocation(id) {
				const _this = this;
				uni.startLocationUpdateBackground({
					type: 'gcj02',
					success: (res) => {
						uni.onLocationChange((data) => {
							//获取当前时间
							var currentTime = new Date().getTime();
							//获取上次执行的时间
							var oldTime = uni.getStorageSync('oldTime');
							//判断当前间隔时间超过5s
							if (currentTime - oldTime > 5000) {
								console.log(data, '123456')
								//缓存当前执行的时间
								uni.setStorageSync('oldTime', currentTime);
								_this.coordinates.latitude = data.latitude // 当前位置纬度
								_this.coordinates.longitude = data.longitude // 当前位置经度
								// addTrajectory(_this.coordinates) // 把经纬度传给后端
							}
						});
					},
					fail: error => {
						console.log(error)
						uni.showToast({
							title: '无法获取位置信息！无法使用位置功能',
							icon: 'none',
						})
					}
				});
			},
			
			
		}
	}
</script>
 