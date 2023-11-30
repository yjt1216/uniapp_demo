<template>
	
	
	<view>
		<uni-section title="学校" type="line">
			<uni-card title="选点">
				<button @tap="chooseLocation">请在地图中选择学校的位置</button>
				<view v-if="isChooseTarget" class="info">
				  <view>{{ schoolInfo.address }}</view>
				  <view>{{ `（${schoolInfo.latitude}，${schoolInfo.longitude}）` }}</view>
				</view>
			</uni-card>
		</uni-section>
		<uni-section title="学生" type="line">
			<uni-card title="当前位置实时信息">
				<view class="block">
					<view class="title">详细地址：</view>
					<view class="value">
						<text v-if="!loading">{{ studentInfo.address || '-' }}</text>
						<view v-else class="loading">
						  <uni-icons type="spinner-cycle" size="20"/>
						</view>
					</view>
				</view>
			</uni-card>
		</uni-section>
	</view>
	
</template>

<script>
	import { getLocationAuth } from '@/sheep/utils/tools.js';
	// import qqMap from '@/common/qqmap-wx-jssdk.min.js'
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');

	export default {
	  data() {
		return {
			loading: false,
			isAuth: -1, // -1: 未授权  0: 拒绝授权  1:已授权
			studentInfo: {
				latitude: '',
				longitude: '',
				address: ''
			},
			schoolInfo: {
				latitude: '',
				longitude: '',
				address: ''
			},
			mapInstance: null,
		}
	  },
	  computed: { 
			isChooseTarget() {
				return this.schoolInfo.latitude && this.schoolInfo.longitude
			},
	  },
	  async onLoad() {
		this.mapInstance = new QQMapWX({
		  key: 'H42BZ-XO4R3-F2L33-OQOQY-NTHSE-Y7F52',
		});
		
		this.getLocationInfo()
	  },
		methods: {
			chooseLocation(){
				uni.chooseLocation({
					success: (res) => {
						console.log('选择定位位置res',res)
						const {
							address,
							latitude,
							longitude,
							name
						} = res
						this.schoolInfo.latitude = latitude
						this.schoolInfo.longitude = longitude
						this.schoolInfo.address = address + name
					},
					fail: (error) => {
						console.log('选择定位位置失败error',error)
					}
				})
			},
	   
			getLocationInfo() {
				this.loading = true;
				uni.getLocation({
					type: 'gcj02',
					success: ({ latitude, longitude }) => {
					  this.studentInfo.latitude = latitude;
					  this.studentInfo.longitude = longitude;
					  // 经纬度转成具体地址
					  this.mapInstance.reverseGeocoder({
						location: { latitude, longitude },
						success: res => {
						  console.log(res)
						  this.studentInfo.address = res.result.address;
						  this.loading = false;
						}
					  });
					}
				});
			},
			
			
			// 重新授权
			async reGrantAuth() {
				const authRes = await getLocationAuth()
				if(authRes){
					uni.showToast({
						title:'已授权',
						duration:500,
						icon:'none'
					})
				}else{
					wx.openSetting({
						success:(res)=>{
							if(res.authSetting['scope.userLocation']){
								this.getLocationInfo()
								this.isAuth = 1
							}
						}
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	.info{
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	  margin-top: 20rpx;
	}
	.block{
	  margin-bottom: 20rpx;
	}
	.title{
	  color: #000;
	  font-weight: bold;
	}
	.value{
	  width: 100%;
	  min-height: 40rpx;
	}
	.text{
	  font-size: 24rpx;
	  color: #287DE1;
	}
	.loading {
	  width: 40rpx;
	  height: 40rpx;
	  transform: rotate(360deg);
	  animation: rotation 3s linear infinite;
	}
	@keyframes rotation{
	  0%{
		transform: rotate(0deg);
	  }
	  100%{
		transform: rotate(360deg);
	  }
	}
</style>
