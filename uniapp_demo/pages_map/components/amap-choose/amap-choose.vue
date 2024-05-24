<template>
	<view class="amap-choose" v-if="showPlace">
		<view class="top-button">
			<text class="cancel" @tap="toCancel">取消</text>
			<text class="conform" :style="{'backgroundColor': color}" @tap="confrom">完成</text>
		</view>
		<view class="map-box">
			<view id="map"></view>
		</view>
		<view class="content">
			<view class="search">
				<view>
					<image src="./search.png"></image>
					<input placeholder="搜索地点"  @input="inputValue" v-model="keyword"/>
				</view>
				<text @tap="cancel">取消</text>
			</view>
			<view class="main">
				<view v-for="(item, index) in list" :key="index" @tap="toChecked(item)">
					<view>
						<view>{{item.name}}</view>
						<text class="detail">{{item.district}}{{item.address ? '-' + item.address : ''}}</text>
					</view>
					<view>
						<text :style="{color}" v-if="item.location === checked.location">√</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			color: {
				type: String,
				default: '#ff6000'
			},
			keyMap: {
				type: String,
				default: ''
			},
			AMapKeyWeb: {
				type: String,
				default: ''
			},
			initLocation: {
				type: String,
				default: ''
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				list: [],
				keyword: '',
				timeId: null,
				checked: {
					locaiton: ''
				},
				showPlace: false
			}
		},
		watch: {
			show(newVal, oldVal) {
				this.showPlace = newVal;
				this.$nextTick(() => {
					this.loop();
				})
			}
		},
		mounted() {
			this.showPlace = this.show;
			
			var script = document.getElementById('mapTest')
			let that = this;
			script ? this.loop() : (function (){
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.setAttribute('id', 'mapTest')
				script.src = `https://webapi.amap.com/maps?v=2.0&key=${that.keyMap}`;
				document.body.appendChild(script);
				that.loop();
			})()
		},
		
		methods:{
			loop() {
				try{
					this.initMapWeb();
				}catch(e){
					setTimeout(()=>this.loop(), 200)
				}
			},
			
			inputValue(e) {
				if(this.timeId) {
					clearTimeout(this.timeId)
				}
				
				this.timeId = setTimeout(() => {
					this.getPlaces(e.detail.value, '')
					this.timeId = null
				},300);
			},
			
			cancel() {
				this.keyword = '';
				this.list = [];
				if(this.maker) {
					this.marker.setMap(null);
				}
			},
			
			toCancel() {
				this.showPlace = false;
				this.cancel();
				this.$emit('changeShow', false)
			},
			
			//完成
			confrom() {
				console.log('完成-传递选择地址checked',this.checked);
				if(this.checked) {
					let address;
					if(this.checked.addressLocal) {
						address = this.checked.addressLocal
					}else {
						address = `${this.checked.district}${this.checked.address ? '-' + this.checked.address : ''}`
					}
					
					let location = this.checked.location.split(',');
					this.$emit('changeShow', false)
					this.$emit('placeChoose', {address, adcode: this.checked.adcode, latitude:location[1], longitude:location[0]})
					this.showPlace = false;
					this.cancel();
					
				}
			},
			
			toChecked(obj) {
				let that = this;
				console.log('选择地址obj',obj);
				// this.checked = obj;
				// that.checked.adcode = obj.addressComponent.adcode;
				// that.checked.city = obj.addressComponent.city;
				// that.checked.district = obj.addressComponent.district;
				that.checked.location = obj.location;
				that.checked.addressLocal = obj.address
				that.checked.adname = obj.adname
				
				if(this.marker) {
					this.marker.setMap(null);
					let tempArr = obj.location.split(',');
					this.addMarker(tempArr[0], tempArr[1])
				}
			},
			
			initMapWeb() {
				let that = this;
				this.map = new AMap.Map("map", {
					center: [ '106.55', '29.57'],
					zoom: 18
				});
				
				this.map.on('click', (e) => {
					if(this.marker) {
						this.marker.setMap(null);
					}
					that.addMarker(e.lnglat.lng, e.lnglat.lat);
					// that.getPlaces('', `${e.lnglat.lng}, ${e.lnglat.lat}`);
					
					
					that.getNearbyPlaces(e.lnglat.lng, e.lnglat.lat);
					
					that.getNowPlace(`${e.lnglat.lng}, ${e.lnglat.lat}`);
				})
				
				if(this.initLocation.length > 3) {
					let tempArr = this.initLocation.split(',');
					that.addMarker(tempArr[0], tempArr[1])
					// that.getPlaces('', `${tempArr[0]}, ${tempArr[1]}`);
					that.getNearbyPlaces(tempArr[0], tempArr[1]);
					that.getNowPlace(`${tempArr[0]}, ${tempArr[1]}`);
					return
				}
				
				AMap.plugin('AMap.Geolocation', function() {
					var geolocation = new AMap.Geolocation({
						// 是否使用高精度定位，默认：true
						enableHighAccuracy: true,
						// 设置定位超时时间，默认：无穷大
						timeout: 10000,
						// 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
						buttonOffset: new AMap.Pixel(10, 20),
						//  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
						zoomToAccuracy: true,     
						//  定位按钮的排放位置,  RB表示右下
						buttonPosition: 'RB'
					})
				  
					geolocation.getCurrentPosition(function(status,result){
						console.log('获取用户当前经纬度result',result);
						
						if(result.info == "SUCCESS" && result.position && result.position){
							
							const { longitude, latitude } = result.position;
							
							// 设置地图中心点为当前定位结果
							map.setCenter([longitude, latitude]);
							
							// 可以同时设置缩放级别
							map.setZoom(18); // 这里以15为例，你可以根据实际需求设置合适的缩放级别
							
							that.addMarker(result.position.lng, result.position.lat)
							// that.getPlaces('', `${result.position.lng}, ${result.position.lat}`)
							// that.getNearbyPlaces(result.position.lng, result.position.lat);
							that.getNowPlace(`${result.position.lng}, ${result.position.lat}`);
						}
					});
				
				})
			},
			
			getNowPlace(location) {
				let that = this;
				uni.request({
					url: `https://restapi.amap.com/v3/geocode/regeo?key=${this.AMapKeyWeb}&location=${location}`,
					method: 'GET',
					success: (res) => {
						let result = res.data;
						console.log('getNowPlace-result',result);
						if(result.status == '1') {
							let tempObj = result.regeocode;
							that.checked.adcode = tempObj.addressComponent.adcode;
							that.checked.city = tempObj.addressComponent.city;
							that.checked.district = tempObj.addressComponent.district;
							that.checked.location = location;
							that.checked.addressLocal = tempObj.formatted_address
							
							console.log('高德地图定位checked',this.checked);
						}
						
					},
					fail: (err) => {
						uni.showToast({
							title: JSON.stringify(err),
							icon: 'none'
						})
					}
				})
			},
			
			addMarker(lng, lat) {
				var icon = new AMap.Icon({
					// 图标的取图地址
					image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
					// 图标所用图片大小
					imageSize: new AMap.Size(32, 42),
				});
					
				this.marker = new AMap.Marker({
					icon,
				    position: [lng, lat],  
				});
				
				this.marker.setMap(this.map);
				this.map.setCenter([lng, lat])
			},
			
			getPlaces(keywords, location) {
				console.log('获取周边keywords',keywords,location);
				uni.request({
					url: `https://restapi.amap.com/v3/assistant/inputtips?key=${this.AMapKeyWeb}&keywords=${keywords}&location=${location}`,
					method: 'GET',
					success: (res) => {
						console.log('获取周边res',res);
						let result = res.data;
						if(result.status === '1')  {
							this.list = result.tips.filter(item => item.location && item.location.length > 0);
							console.log(this.list, result.tips)
						}
					},
					fail: (err) => {
						console.error('获取周边err',err);
						uni.showToast({
							title: JSON.stringify(err),
							icon: 'none'
						})
					}
				})
			},
			/* 
			https://restapi.amap.com/v5/place/around?location=116.473168,39.993015&radius=10000&types=011100&key=<用户的key>
			that.getNearbyPlaces(e.lnglat.lng, e.lnglat.lat);
			*/
		   /* 获取周边信息 */
			getNearbyPlaces(lng,lat) {
				let nearbyUrl = `https://restapi.amap.com/v3/place/around?key=${this.AMapKeyWeb}&location=${lng},${lat}&output=JSON`;
				console.log('获取周边nearbyUrl',nearbyUrl);
				uni.request({
					url: nearbyUrl,
					method: 'GET',
					success: (res) => {
						// console.log('获取周边res',res);
						let result = res.data;
						if(result.status === '1')  {
							this.list = result.pois;
							// console.log(this.list)
						}
					},
					fail: (err) => {
						console.error('获取周边err',err);
						uni.showToast({
							title: JSON.stringify(err),
							icon: 'none'
						})
					}
				})
			},
			
			/* 
			
			https://restapi.amap.com/v5/place/around?location=116.473168,39.993015&radius=10000&types=011100&key=<用户的key>

			 
			 https://apis.map.qq.com/ws/place/v1/search?callback=jsonpCB_1707204659026
				&key=SFABZ-WANWW-FISRY-3IGTF-HV7RE-YSFTI
				&output=jsonp
				&page_size=20
				&page_index=1
				&enableHighAccuracy=true
				&boundary=nearby(31.26278344006259,120.63366478876537,1000)
			 */
		}
	}
</script>

<style lang="scss" scoped>
	.amap-choose {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
		z-index: 99999;
		.top-button {
			top: 0;
			box-sizing: border-box;
			padding: 24rpx;
			position: fixed;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			z-index: 100;
			.cancel {
				// color: white;
			}
			.conform {
				// background-color: #ff6000;
				color: #333;
				padding: 8rpx 14rpx;
				border-radius: 8rpx;
			}
		}
		
		.map-box {
			height: 60%;
			// background-color: pink;
			#map {
				width: 100%;
				height: 100%;
			}
			/deep/ .amap-logo {
				display: none !important;
			}
			/deep/ .amap-copyright {
				display: none !important;
			}
		}
		
		.content {
			position: fixed;
			bottom: 0;
			border-radius: 24rpx 24rpx 0 0;
			height: 42%;
			width: 100%;
			background: white;
			box-sizing: border-box;
			padding: 24rpx;
			.search {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				&>view {
					width: 88%;
					height: 64rpx;
					background: #F4f4f4;
					border-radius: 14rpx;
					box-sizing: border-box;
					padding: 8rpx 24rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					image {
						width: 30rpx;
						height: 25rpx;
					}
					input {
						margin-left: 8rpx;
						flex: 1;
					}
				}
			}
			
			.main  {
				margin-top: 20rpx;
				height: calc(100% - 88rpx);
				// background: pink;
				overflow-y: auto;
				&>view {
					box-sizing: border-box;
					padding: 20rpx;
					width: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					.detail {
						color: #707070;
					}
				}
			}
		}
	}
</style>