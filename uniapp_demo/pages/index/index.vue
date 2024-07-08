<template>
	<view class="index-page">
		
		<nav-bar title="首页" :back="false"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<view class="group-title">功能示例</view>
		
		<navigator url="/pages_ucharts/pages/list/list">
			<view class="demo-li"> 图表示例列表 <text class="demo-tip"> ucharts </text></view>
		</navigator>
		
		
		<navigator url="/pages_echarts/pages/demo/demo">
			<view class="demo-li"> echarts图表 <text class="demo-tip"> echarts </text></view>
		</navigator> 
		
		
		<navigator url="/pages_func/pages/func_list/func_list">
			<view class="demo-li"> 功能列表 <text class="demo-tip"> func list </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/custom_list/custom_list">
			<view class="demo-li"> 自定义 <text class="demo-tip"> custom list </text></view>
		</navigator>
		
		<navigator url="/bundle_c/pages/sticky/sticky">
			<view class="demo-li"> 吸顶 <text class="demo-tip"> sticky </text></view>
		</navigator>
		
		
		
	</view>
</template>

<script>
	import localStore from '../../sheep/config/local_store';
	import gcoord from 'gcoord';
	export default {
		data(){
			return {
				bannerList:[
					{
						image: "https://didi.depin.tech/storage/file/2019/09/29/5d904d42e3222.jpg"
					},
					{
						image: "https://didi.depin.tech/storage/file/2019/09/29/5d90512bccb32.jpg"
					}
				],
				bannerImages:[],
				code:'',
				state:'',
				latitude:null,
				longitude:null,
			}
		},
		mounted(option) {
			// console.log('index on mounted ',option);
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: 'mescroll ('+ uni.getSystemInfoSync().platform + ')'
			})
			// #ifdef H5
			if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(position => {
			        // 成功获取位置
			        console.log(position.coords.latitude, position.coords.longitude);
			    }, error => {
			        // 处理定位失败错误
			        console.error(error);
			    });
			} else {
			    console.error('Geolocation is not supported by this browser.');
			}
			// #endif

			
			// console.log('index on load ',option);
			//    await Cache.set('user_info', { name: 'John Doe', age: 30 }, 60);
			// this.getUserLocation();
			// this.getUserInfo();
			
			/* 
			 
			https://webapi.amap.com/maps?v=1.4.15&key=bb54d32661ce014f5a1bf3d8b5ef4199&plugin=AMap.Geolocation  
			
			//web js
			https://webapi.amap.com/maps?v=2.0&key=bb54d32661ce014f5a1bf3d8b5ef4199
			
			
			https://webapi.amap.com/maps?v=2.0&key=0b1f8852511cd6954ec64ad6caef928a
			  
			  
			https://webapi.amap.com/maps?v=2.0&key=bb54d32661ce014f5a1bf3d8b5ef4199&plugin=AMap.Geolocation  
			
			 */
			
	
		},
		onReady:function(){
			// this.getUserLocation();
		},
		methods:{
			async getUserInfo(){
				const userInfo = await localStore.get('user_info');
				console.log('首页getUserInfo--userInfo',userInfo);
			},
			getUserLocation(){
				let that = this;
				
				
				// gcj02
				// wgs84
				// uni.getLocation({
				// 	type: 'gcj02',
				// 	success: function (res) {
				// 		console.log('首页getLocation',res);
				// 		console.log('经度：', res.longitude);
				// 		console.log('纬度：', res.latitude);
				// 	},
				// 	fail: (error) => {
				// 		console.log('当前位置error' + error);
				// 	},
				// 	complete: (result) => {
				// 		console.log('当前位置complete' , result);
				// 		console.log('result经度：', result.longitude);
				// 		console.log('result纬度：', result.latitude);
				// 		uni.hideLoading();
				// 		that.longitude = result.longitude;
				// 		that.latitude = result.latitude;
						
				// 	}
				// });
				
				that.$location.getlocation().then(res=>{
					console.log('首页getLocation',res);
					// uni.hideLoading();
				}).catch(err=>{
					console.log('首页getLocation-err',err);
					// uni.hideLoading();
				})
				
				
			},
			// async getUserLocation() {
			//     const { success, errMsg, result } = await uni.getLocation({
			//         type: 'gcj02', // 根据需要选择坐标系，默认是gcj02（国测局地理坐标系）
			//         altitude: false, // 是否需要海拔信息，默认为false
			//         accuracy: 'high', // 定位精度，默认为'high'
			//     });
			// 	console.log('首页getLocation',res);
			//     if (success) {
			//         this.latitude = result.latitude;
			//         this.longitude = result.longitude;
			//         console.log('定位成功，经纬度：', this.latitude, this.longitude);
			//     } else {
			//         console.error('定位失败，错误信息：', errMsg);
			//     }
			// },
			shareClick(){
				this.$share.share({
				  title: '分享标题',
				  content: '分享内容',
				  imageUrl: '分享图片链接',
				  url: '分享链接',
				  success: () => {
				    console.log('分享成功')
				  },
				  fail: (err) => {
				    console.log('分享失败', err)
				  }
				})

			}
			
			
		}
		
	}
</script>

<style lang="scss">
	.index-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.group-title{
		margin-top: 30rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
	}
	.demo-li {
		font-size: 28upx;
		padding: 24upx;
		border-bottom: 1upx solid #eee;
		color: #18B4FE;
	}
	.demo-li .demo-tip {
		float: right;
		margin-top: 4upx;
		font-size: 24upx;
		color: gray;
	}
	
</style>