//h5 要调用的js文件
// #ifdef H5
import amap from '@/sheep/utils/amap-h5.js';
// import amap from '@/sheep/utils/amap-web.js';

// #endif
//微信小程序要调用的js文件
// #ifdef MP  
import amap from '@/sheep/utils/amap-wx.js';
// #endif
//获取位置信息
const getlocation = (opt) => {
	return new Promise((resolve, reject) => {
		//h5开始
		// #ifdef H5
		AMap.plugin('AMap.Geolocation', function() {
			uni.showLoading({
				title: '系统正在定位'
			});
			
			var geolocation = new AMap.Geolocation({
				
				enableHighAccuracy: true, // 是否使用高精度定位，默认:true
				timeout: 60000,          // 超过10秒后停止定位，默认：无穷大
				maximumAge: 0,           // 定位结果缓存0毫秒，默认：0
				convert: true,            // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
				showButton: true,         // 显示定位按钮，默认：true
				buttonPosition: 'RB',     // 定位按钮停靠位置，默认：'LB'，左下角
				buttonOffset: new AMap.Pixel(10, 20),// 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
				zoomToAccuracy: true,      // 定位成功后调整地图视野范围使定位点及精度范围视野内可见，默认：false
				extensions: 'all',       // 默认：'all'
 
			});
			geolocation.getCurrentPosition(function(status, result) {
				if (status == 'complete') {
					//这个地方的result，可能会出现报错：获得地理定位时间。得到ipLocation成功。获取地址失败，请检查您的密钥或网络。
					//可能是密匙申请错了，重新申请密匙，生成maps.js文件。
					console.log(result)
					uni.hideLoading();
					resolve(result)
				} else {
					uni.hideLoading();
					uni.showToast({
						title: '定位失败',
					});
					reject(result)
				}
			});
		});
		// #endif
		//h5结束
		
		//app开始
		// #ifdef APP-PLUS
		uni.showLoading({
			title: '获取信息中'
		});
		uni.getLocation({
			// map组件默认为国测局坐标gcj02，调用 uni.getLocation返回结果传递给组件时，需指定 type 为 gcj02 
			type: 'gcj02',
			geocode: true,
			success: function(data) {
				resolve(data)
				console.log(data)
			},
			fail: function(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading();
			}
		})
		// #endif
		//app结束
		
		///小程序开始
		// #ifdef MP
		var amapPlugin = new amap.AMapWX({
			key: '820cbe5ebd8bb654dcbb83bec5614b7f'  //此处为高德平台申请的微信小程序的key
		});
		uni.showLoading({
			title: '获取信息中'
		});
		amapPlugin.getRegeo({
			success: function(data) {
				resolve(data)
			},
			fail: function(err) {
				reject(err)
			},
			complete: function() {
				uni.hideLoading();
			}
		});
		// #endif
		//小程序结束
	})
};
export default {
	getlocation: getlocation
}