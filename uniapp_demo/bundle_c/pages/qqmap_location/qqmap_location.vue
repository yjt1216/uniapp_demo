<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		
		<view class="text-area" @click="getLocationInfo">
			<text class="title">{{title}}</text>
		</view>
		
		
	</view>
</template>

<script>
	let that = null;
	//引用腾讯地图API
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');
	var qqmapsdk;
	import gcoord from 'gcoord';
	
	export default {
		
		data() {
			return {
				title: '点击选择位置',
				showMap: false,
				lat: '',
				lng: '',
				prov: '',
				city: '',
				area: '',
				address: '',
				//这里是腾讯地图的key
				mapkey: 'SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI', 
				location:null,
			}
		},
		onLoad() {
			that = this;
			this.startQQLocation();
		},
		onReady() {
			// uni.showLoading({
			// 	title:'定位中...',
			// 	mask:true,
			// })
			// 	console.log('首页getLocation');
			// 	uni.getLocation({
			// 		type: 'wgs84',
			// 		success: function (res) {
			// 			console.log('首页getLocation',res);
			// 		},
			// 		fail: (error) => {
			// 			console.log('当前位置error' + error);
			// 		},
			// 		complete: (result) => {
			// 			console.log('当前位置complete' + result);
			// 			uni.hideLoading();
			// 			that.longitude = result.longitude;
			// 			that.latitude = result.latitude;
			// 		}
			// 	});

		},
		methods: {
			startQQLocation(){
				qqmapsdk = new QQMapWX({
				    //此key需要用户自己申请
				    key: 'SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI'
				});
				// var geolocation = new qqmapsdk.maps.Geolocation("DZYBZ-73WWI-FG6GZ-5JRFR-PNVIE-4OFUL", "尹江涛World");
				// geolocation.getLocation(sucCallback, errCallback);
				
				// geocoder
				// reverseGeocoder
				qqmapsdk.reverseGeocoder({
				  success: function (res) {
				    console.log('获取当前地理位置-res',res.result);
					
				  },
				  fail: function (err) {
				    console.log('获取当前地理位置-err', err);
				  },
				  complete: function (res) {
				    uni.hideLoading();
					// let result = res.result;
					// that.location = result.ad_info.location;
					// console.log('complete-res',result.ad_info.location);
					// console.log('获取当前地理位置-location', that.location);
				  }
				});
			},
			getLocationInfo(){
				//'120.737635,31.266634'
				console.log('当前地理位置-location', that.location);
				uni.chooseLocation({
					// latitude:31.266634,
					// longitude:120.737635,
				    success: res => {
						console.log('获取当前地理位置res', res);
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						
						console.log('坐标系转换result', result);
						this.getAreaIdByLatLon(res.latitude,res.longitude,this.mapkey);
				    },
				});
				
			},
			/* 根据经纬度获取区areaId */
			
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>