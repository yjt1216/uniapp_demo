<template>
	<view class="container">
		<u-navbar title="进度条" :placeholder="true" :autoBack="true"></u-navbar>
		
		
		<view class="city-box" v-for="(item,index) in cityList.slice(0,4)" :key="index">
			
			<view v-if="index===0" class="city-item">
				<text class="city-name">{{item.city_name}}</text>
				<view class="progress-bar1"></view>
				<view style="color: #0091FF;">{{item.num}}/{{item.ratio}}%</view>
			</view>
			<view v-if="index===1" class="city-item">
				<text class="city-name">{{item.city_name}}</text>
				<view class="progress-bar2"></view>
				<view style="color: #EE722F;">{{item.num}}/{{item.ratio}}%</view>
			</view>
			<view v-if="index===2" class="city-item">
				<text class="city-name">{{item.city_name}}</text>
				<view class="progress-bar3"></view>
				<view style="color: #E0665A;">{{item.num}}/{{item.ratio}}%</view>
			</view>
			<view v-if="index===3" class="city-item">
				<text class="city-name">{{item.city_name}}</text>
				<view class="progress-bar4"></view>
				<view style="color: #18A598;">{{item.num}}/{{item.ratio}}%</view>
			</view>
			
		</view>
		
		<!-- <view class="item" v-for="(item,index) in cityList.slice(0,4)" :key="index">
		      {{ item.city_name }}
		</view> -->
		
		
	</view>
</template>
<script>
	export default{
		data(){
			return {
				cityList:[
					{
						city_id: 3205,
						city_name: "苏州市",
						num: 176,
						ratio: 76.17
					},
					{
						city_id: 3201,
						city_name: "南京市",
						num: 7,
						ratio: 13.83
					},
					{
						city_id: 3201,
						city_name: "上海市",
						num: 176,
						ratio: 6.17
					},
					{
						city_id: 3201,
						city_name: "无锡市",
						num: 7,
						ratio: 3.83
					},
					{
						city_id: 3207,
						city_name: "常州市",
						num: 0,
						ratio: 0
					}
				],
				colorList:["#0091FF","#EE722F","#E0665A","#18A598"],
			}
			
		},
		onLoad() {
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	
	.container {
	  display: flex;
	  justify-content: flex-start; /* 水平方向的对齐方式，这里设置为左对齐 */
	  align-items: center; /* 垂直方向的对齐方式，这里设置为居中对齐 */
	  flex-wrap: nowrap; /* 如果需要换行显示，可以启用这个属性 */
	}
	
	.item {
	  margin-right: 10rpx; /* 每个item之间的右边距 */
	  /* 其他样式，如宽度、高度、背景色等 */
	}
	
	/* 移除最后一个item的右边距 */
	.item:last-child {
	  margin-right: 0;
	}
	
	
	.city-box{
		margin-top: 200rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap; /* 如果需要换行显示，可以启用这个属性 */
		justify-content: flex-start; /* 水平方向的对齐方式，这里设置为左对齐 */
		text-align: center;
	}
	.city-item{
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
	}
	.progress-bar1{
		width: 194rpx;
		height: 30rpx;
		background: linear-gradient( 180deg, #84D1FF 0%, #1A8AFC 100%);
		border-radius: 15rpx;
		border: 6rpx solid #FFFFFF;
		margin-right: -15rpx;
		z-index: 999;
	}
	.progress-bar2{
		width: 194rpx;
		height: 30rpx;
		background: linear-gradient( 180deg, #FFE886 0%, #F59801 100%);
		border-radius: 15rpx;
		border: 6rpx solid #FFFFFF;
		margin-right: -15rpx;
		z-index: 998;
	}
	.progress-bar3{
		width: 161rpx;
		height: 30rpx;
		background: linear-gradient( 180deg, #FFB7AD 0%, #FC6151 100%);
		border-radius: 15rpx;
		border: 6rpx solid #FFFFFF;
		margin-right: -15rpx;
		z-index: 997;
	}
	.progress-bar4{
		width: 165rpx;
		height: 30rpx;
		background: linear-gradient( 180deg, #8BE9E3 0%, #1ABBAB 100%);
		border-radius: 15rpx;
		border: 6rpx solid #FFFFFF;
		z-index: 996;
	}
	
</style>