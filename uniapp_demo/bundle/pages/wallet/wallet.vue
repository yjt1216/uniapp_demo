<template>
  <view class="context">
		<nav-bar title="钱包"></nav-bar>
		<view class="top-view" :style="[headBackground]">
			<!-- 登录状态 头部信息 -->
			<view  class="login-info">
				<view class="total-bonus" >{{'¥'+totalBonus}}</view>
			</view>
		</view>
		<su-sticky>
			  <view class="filter-box">
					<picker @change="bindPickerChange" :value="index" :range="monthList">
						<view class="date-btn">{{monthList[index]}}
							<text class="month-text">月</text>
							<image class="select-img" name="icon-arrow-down" mode="aspectFill" src="../../static/black_down_arrow.png"></image>
						</view>
					</picker>
					<view class="total-box">
						<view>总收入：1100</view>
						<view>总支出：100</view>
					</view>
			  </view>
		</su-sticky>
		
		
		
		<shopro-empty v-if="walletList.length === 0" tipText='暂无数据' :image="'/static/images/order_none.png'"></shopro-empty>
		<u-action-sheet :show="showSheet" :actions="range" title="月份" @select="selectMonth"></u-action-sheet>
		
	</view>
</template>

<script>
	import suSticky from '@/bundle/components/su-sticky/su-sticky.vue'
	import shoproEmpty from '@/bundle/components/shopro-empty/shopro-empty.vue'
	export default{
		components:{
			suSticky,
			shoproEmpty  
		},
		data(){
			return {
				totalBonus: 100,
				showSheet: false,
				monthList:[
					"1" ,
					"2" ,
					"3" ,
					"4" ,
					"5" ,
					"6" ,
					"7" ,
					"8" ,
					"9" ,
					"10" ,
					"11" ,
					"12" ,
				],
				index: 0,
				month:0,
				walletList:[],
				//loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
				loadStatus: 'loadmore', 
				currentPage: 1,
				lastPage: 1,
				selDateText: '默认',
			}
		},
		onLoad() {
			
		},
		methods:{
			bindPickerChange(e) {
			    console.log('picker发送选择改变，携带值为', e.detail.value)
			    this.index = e.detail.value
			},
		},
		computed:{
			  /* 头部背景色 */
			  headBackground() {
				return {
					'background-image':`linear-gradient(to right, #39C9BC,#6DE8CC)`
				}
			  }
		}
	}
 

</script>

<style lang="scss" scoped>
  .top-view {
  	
  	height: 120rpx;
  	width: 100%;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	
  	.login-info{
  		align-items: center;
  		
  		.total-bonus {
  			color: white;
  			text-align: center;
  			font-size: 45rpx;
  			font-weight: bold;
  		}
  		
  	}
  	
  }
	// 筛选
	.filter-box {
		height: 120rpx;
		padding: 0 30rpx;
		background-color: #f6f6f6;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
		.date-btn {
			background-color: #fff;
			line-height: 54rpx;
			border-radius: 27rpx;
			padding: 0 20rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: black;
			
			.month-text {
				margin-left: 8rpx;
				font-size: 28rpx;
			}
		}
	  
		.total-box {
			font-size: 28rpx;
			font-weight: 500;
			color: #999999;
		}
	}
	.select-img {
	  width: 18rpx;
	  height: 12rpx;
	  margin-left: 10rpx;
	}
  
</style>
