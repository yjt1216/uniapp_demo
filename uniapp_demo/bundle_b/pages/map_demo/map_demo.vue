<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		
		<view class="text-area" @click="getLocationInfo">
			<text class="title">{{title}}</text>
		</view>
		
		<!-- <view class="text-area" @click="showMap=true">
			<text class="title">{{title}}</text>
		</view> -->
		<!-- <view style="margin-top: 100rpx;">{{prov}}{{city}}{{address}}</view> -->

		<view v-if="showMap">
			<selectLoc :showMap="showMap" @close="closeLoc" @confirm="confirmLoc"></selectLoc>
		</view>
		
		<!-- #ifdef H5 -->
		<iframe id="geoPage" width=0 height=0 frameborder=0  style="display:none;" scrolling="no"
		    src="https://apis.map.qq.com/tools/geolocation?key=UIDBZ-2QUCR-C6CW5-WSLAN-NWUQO-SOFB7&referer=uniapp_demo">
		</iframe>
		
		<!-- #endif -->
		
	</view>
</template>

<script>
	let that = null;
	import selectLoc from '../../components/selectLoc/selectLoc.vue';
	
	import gcoord from 'gcoord';
	
	
	export default {
		components: {
			selectLoc
		},
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
			}
		},
		onLoad() {
			that = this;
			// #ifdef H5
			window.addEventListener('message', function(event) {
			    // 接收位置信息
			    var loc = event.data;
			    console.log('location', loc);
			}, false);
			// #endif
			
			
			// #ifdef H5
			// 在页面中调用getCurrentPosition方法获取当前位置
			navigator.geolocation.getCurrentPosition(function(position) {
				console.log('location position', position);
			  // 获取到位置信息后，可以根据需要进行处理和使用
			  const latitude = position.coords.latitude; // 纬度
			  const longitude = position.coords.longitude; // 经度
			  const altitude = position.coords.altitude; // 海拔高度
			  const accuracy = position.coords.accuracy; // 位置精度
			  const altitudeAccuracy = position.coords.altitudeAccuracy; // 海拔高度精度
			  const heading = position.coords.heading; // 方向
			  const speed = position.coords.speed; // 速度
			}, function(error) {
			  // 如果获取位置信息失败，可以在这里处理错误
			  console.log(error);
			});

			// #endif
			
		},
		methods: {
			
			showErr(err){
				console.error('ceshi ---- err',err)
			},
			confirmLoc(res) {
				this.showMap = false;
				this.lat = res.lat;
				this.lng = res.lng;
				this.prov = res.province;
				this.city = res.city;
				this.area = res.area;
				this.address = res.district;
				console.log('选择的信息', res);
			},
			closeLoc() {
				this.showMap = false;
			},
			getLocationInfo(){
				this.showMap = true;
				// uni.chooseLocation({
				//     success: res => {
				// 		console.log('获取当前地理位置res', res);
				// 		console.log('位置名称：' + res.name);
				// 		console.log('详细地址：' + res.address);
				// 		console.log('纬度：' + res.latitude);
				// 		console.log('经度：' + res.longitude);
						
				// 		/* 百度坐标系BD-09  腾讯坐标系GCJ-02 */
						
				// 		var result = gcoord.transform(
				// 			[res.latitude,res.longitude],
				// 			gcoord.GCJ02, //当前坐标  腾讯高德坐标系
				// 			gcoord.BD09, // 目标坐标  百度坐标系
				// 		);
				// 		console.log('坐标系转换result', result);
				// 		this.getAreaIdByLatLon(res.latitude,res.longitude,this.mapkey);
				//     },
				// });
				
			},
			/* 根据经纬度获取区areaId */
			getAreaIdByLatLon(latitude,longitude,mapkey){
				
				// 调用腾讯地图逆地理编码API
				const url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${mapkey}&output=json`;
				
				/* 
				https://apis.map.qq.com/ws/geocoder/v1/?location=31.26249,120.63212&key=SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI&output=json 
				 
				 */
				
				// 发送请求获取详细地址信息，其中包含areaId
				uni.request({
					url: url,
					method: 'GET',
					success: function(res) {
						let geoData = res.data;
						console.log('经纬度获取地理位置:', geoData);
						if (geoData.status === 0 && geoData.result) {
							const {ad_info,address_component,formatted_addresses} = geoData.result;
							
						  
						  let areaId = ad_info.adcode; // 这里得到的是区县级别的adcode
						  console.log('经纬度获取Area ID:', areaId);
						  
						  let address = formatted_addresses.standard_address;
						  
						  // let street = address.replace(/.+?(省|市|自治区|自治州|县|区)/g,'')
						  // let street = address.replace(/^(.*?[省|市|县|区])\s*/, '');
						  // let street = address.replace(/^(.*?[省|市|县|区][^0-9]*)(?=\d)/, '');
						  
						  let street = address.split('区')[1].trim();
						  that.title = street;
						  
						  
						} else {
						  console.error('获取areaId失败：', geoData);
						}
					},
					fail: function(err) {
						console.error('请求失败：', err);
					}
				});
			},
			
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