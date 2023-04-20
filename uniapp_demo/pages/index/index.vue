<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<!-- <view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<!-- <view>{{addStr}}</view> -->
		<!-- <view class="now-city">
		    <view class="city-tip">当前城市:</view>
		    <view class="select-pos">
		        <view class="re-pos" @click="openLocationSetting">重新定位</view>
		    </view>
			
		</view> -->
	</view>
</template>

<script>
	// 引入腾讯地图jssdk文件
	import QQMapWX from "@/static/js/qqmap-wx-jssdk.min.js"
	
	export default {
		data() {
			return {
				title: 'Hello',
				addStr: '当前位置'
			}
		},
		onReady() {
			// this.getCity()
		},
		methods: {
			getCity() {
				var that = this
				// 获取用户是否开启 授权获取当前的地理位置、速度的权限。
				uni.getSetting({
					success(res) {
						console.log(res)
			
						// 如果没有授权
						if (!res.authSetting['scope.userLocation']) {
							// 则拉起授权窗口
							uni.authorize({
								scope: 'scope.userLocation',
								success() {
									let qqmapsdk = new QQMapWX({
										key: 'H42BZ-XO4R3-F2L33-OQOQY-NTHSE-Y7F52'
									});
									//点击允许后--就一直会进入成功授权的回调 就可以使用获取的方法了
									uni.getLocation({
										type: 'wgs84',
										success: function(res) {
											that.x = res.longitude
											that.y = res.latitude
											console.log("if", res)
											console.log('当前位置的经度：' + res.longitude)
											console.log('当前位置的纬度：' + res.latitude)
											// 逆地址解析方法
											qqmapsdk.reverseGeocoder({
												location: {
													latitude: res.latitude,
													longitude: res.longitude
												},
												success(res) {
													var newCity = ''
													console.log(res)
													// 取到用户的定位城市，赋值传递出去
													newCity = res.result
														.address_component.city
													// that.commit('m_location/newCityFun')
													this.addStr = res.result
														.address_component.city
												}
											})
											uni.showToast({
												title: '当前位置的经纬度：' + res.longitude +
													',' + res.latitude,
												icon: 'success',
												mask: true
											})
										},
										fail(error) {
											console.log('失败', error)
											this.addStr = '获取定位失败'
										}
									})
								},
								fail(error) {
									//点击了拒绝授权后--就一直会进入失败回调函数--此时就可以在这里重新拉起授权窗口
									console.log('拒绝授权', error)
			 
									uni.showModal({
										title: '提示',
										content: '若点击不授权，将无法使用位置功能',
										cancelText: '不授权',
										cancelColor: '#999',
										confirmText: '授权',
										confirmColor: '#f94218',
										success(res) {
											console.log(res)
											if (res.confirm) {
												// 选择弹框内授权
												uni.openSetting({
													success(res) {
														console.log(res.authSetting)
													}
												})
											} else if (res.cancel) {
												// 选择弹框内 不授权
												console.log('用户点击不授权')
												this.addStr = '用户点击不授权'
											}
										}
									})
								}
							})
						} else {
							let qqmapsdk = new QQMapWX({
								key: 'H42BZ-XO4R3-F2L33-OQOQY-NTHSE-Y7F52'
							});
							// 有权限则直接获取
							uni.getLocation({
								type: 'wgs84',
								success: function(res) {
									that.x = res.longitude
									that.y = res.latitude
									console.log("else", res)
									console.log('当前位置的经度：' + res.longitude)
									console.log('当前位置的纬度：' + res.latitude)
									// 逆地址解析方法
									qqmapsdk.reverseGeocoder({
										location: {
											latitude: res.latitude,
											longitude: res.longitude
										},
										success(res) {
											var newCity = ''
											console.log('获取信息： ',res)
											// 取到用户的定位城市，赋值传递出去
											newCity = res.result.address_component.city
											// that.commit('m_location/newCityFun')
											this.addStr = res.result.address_component.city
										},
										fail(res) {
											console.log("错误", res)
											this.addStr = '定位失败'
										}
									})
									//打开地图
									// uni.openLocation({
									// 	latitude: that.y,
									// 	longitude: that.x,
									// 	success: function() {}
									// });
									uni.showToast({
										title: '当前位置的经纬度：' + res.longitude + ',' + res.latitude,
										icon: 'success',
										mask: true
									})
								},
								fail(error) {
									uni.showToast({
										title: '请勿频繁调用！',
										icon: 'none',
									})
									console.log('失败', error)
									this.addStr = '定位失败'
								}
							})
						}
					}
				})
			},
			// 获取用户定位授权
			getUserLocation() {
				wx.showModal({
				  title: '提示！',
				  confirmText: '去设置',
				  showCancel: false,
				  content: e,
				  success: function(res) {
				    if (res.confirm) {
				      this.openLocationSetting()
				    }
				  }
				})
				
				// uni.authorize({
				// 	scope:'scope.userLocation',
				// 	success() {
				// 		console.log('用户授权定位')
				// 	},
				// 	fail() {
				// 		console.log('用户拒绝授权')
				// 	}
					
				// })
			},
			  openLocationSetting () {
			    const _this = this
			    const setting = 'scope.userLocation'
			    wx.openSetting({
			      success (res) {
			        console.log('原生设置页回调->', res)
			        const { authSetting } = res || {}
			        // 已开启位置授权
			        if (authSetting.hasOwnProperty(setting) && authSetting[setting]) {
			          console.log('已成功开启位置服务->But这里没有返回任何位置信息相关信息')
			        }
			      },
			      fail () {
			        toast('获取位置信息失败，按“右上菜单 - 关于\n - 右上菜单 - 设置 - 位置信息”授权')
			      }
			    })
			  }
			
			
		}
	}
</script>

<style lang="scss">
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
	
	.now-city{
	    background-color: #FFFFFF;
	}
	.city-tip{
	    margin-top: 50rpx;
	    font-size: 30rpx;
	    margin-left: 20rpx;
	    margin-bottom: 10rpx;
	    color: #707070;
	    font-weight: bold;
	}
	.now-pos-btn{
	    background-color: #FA800A;
	    border-radius: 40rpx;
	    text-align: center;
	    padding-top: 10rpx;
	    padding-left: 20rpx;
	    padding-right: 20rpx;
	    padding-bottom: 10rpx;
	    margin: 10rpx;
	    color: #FFFFFF;
	    font-size: 25rpx;
	}
	.select-pos{
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    margin: 10rpx 20rpx 30rpx 20rpx;
	}
	.re-pos{
	    text-align: center;
	    width: 200rpx;
	    font-size: 30rpx;
	    align-self: center;
	}
	
	
</style>

 
<!-- 
 // 引入腾讯地图jssdk文件
 import QQMapWX from "../static/js/qqmap-wx-jssdk.min.js"
  
 export default {
 	// 为当前模块开启命名空间
 	namespaced: true,
 	state: {
 		// 默认城市
 		city: '北京市',
         //当前位置的经纬度
 		x: 0,
 		y: 0
 	},
 	mutations: {
 		newCityFun(state, newCity) {
 			state.city = newCity
 			console.log(newCity)
 			console.log(state.city)
 		},
 		getCity() {
 			var that = this
 			// 获取用户是否开启 授权获取当前的地理位置、速度的权限。
 			uni.getSetting({
 				success(res) {
 					console.log(res)
  
 					// 如果没有授权
 					if (!res.authSetting['scope.userLocation']) {
 						// 则拉起授权窗口
 						uni.authorize({
 							scope: 'scope.userLocation',
 							success() {
 								let qqmapsdk = new QQMapWX({
 									key: 'JOMBZ-MRF6U-GF2V3-BSKNG-757GO-O7FLR'
 								});
 								//点击允许后--就一直会进入成功授权的回调 就可以使用获取的方法了
 								uni.getLocation({
 									type: 'wgs84',
 									success: function(res) {
 										that.x = res.longitude
 										that.y = res.latitude
 										console.log("if", res)
 										console.log('当前位置的经度：' + res.longitude)
 										console.log('当前位置的纬度：' + res.latitude)
 										// 逆地址解析方法
 										qqmapsdk.reverseGeocoder({
 											location: {
 												latitude: res.latitude,
 												longitude: res.longitude
 											},
 											success(res) {
 												var newCity = ''
 												console.log(res)
 												// 取到用户的定位城市，赋值传递出去
 												newCity = res.result
 													.address_component.city
 												// that.commit('m_location/newCityFun')
 											}
 										})
 										uni.showToast({
 											title: '当前位置的经纬度：' + res.longitude +
 												',' + res.latitude,
 											icon: 'success',
 											mask: true
 										})
 									},
 									fail(error) {
 										console.log('失败', error)
 									}
 								})
 							},
 							fail(error) {
 								//点击了拒绝授权后--就一直会进入失败回调函数--此时就可以在这里重新拉起授权窗口
 								console.log('拒绝授权', error)
  
 								uni.showModal({
 									title: '提示',
 									content: '若点击不授权，将无法使用位置功能',
 									cancelText: '不授权',
 									cancelColor: '#999',
 									confirmText: '授权',
 									confirmColor: '#f94218',
 									success(res) {
 										console.log(res)
 										if (res.confirm) {
 											// 选择弹框内授权
 											uni.openSetting({
 												success(res) {
 													console.log(res.authSetting)
 												}
 											})
 										} else if (res.cancel) {
 											// 选择弹框内 不授权
 											console.log('用户点击不授权')
 										}
 									}
 								})
 							}
 						})
 					} else {
 						let qqmapsdk = new QQMapWX({
 							key: 'JOMBZ-MRF6U-GF2V3-BSKNG-757GO-O7FLR'
 						});
 						// 有权限则直接获取
 						uni.getLocation({
 							type: 'wgs84',
 							success: function(res) {
 								that.x = res.longitude
 								that.y = res.latitude
 								console.log("else", res)
 								console.log('当前位置的经度：' + res.longitude)
 								console.log('当前位置的纬度：' + res.latitude)
 								// 逆地址解析方法
 								qqmapsdk.reverseGeocoder({
 									location: {
 										latitude: res.latitude,
 										longitude: res.longitude
 									},
 									success(res) {
 										var newCity = ''
 										console.log(res)
 										// 取到用户的定位城市，赋值传递出去
 										newCity = res.result.address_component.city
 										// that.commit('m_location/newCityFun')
 									},
 									fail(res) {
 										console.log("错误", res)
 									}
 								})
 								//打开地图
 								uni.openLocation({
 									latitude: that.y,
 									longitude: that.x,
 									success: function() {}
 								});
 								uni.showToast({
 									title: '当前位置的经纬度：' + res.longitude + ',' + res.latitude,
 									icon: 'success',
 									mask: true
 								})
 							},
 							fail(error) {
 								uni.showToast({
 									title: '请勿频繁调用！',
 									icon: 'none',
 								})
 								console.log('失败', error)
 							}
 						})
 					}
 				}
 			})
 		}
 	},
 	actions: {
  
 	}
 }
 
 -->