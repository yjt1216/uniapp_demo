<template>
	<view class="table-demo" >
		<u-navbar title="表格" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		
		<!-- 评价统计 -->
		<view class="service-cate-box">
			<view class="box-title">评价统计</view>
			<view class="evaluate-stat-box">
				<view class="evaluate-box">
					<view style="margin-left: 10rpx;">评分次数</view>
					<view style="align-self: center;">{{evaluate.all_evaluate_times}}</view>
				</view>
				<!-- 设置间隔 -->
				<view class="spacer" style="width: 30rpx;"></view>
				<view class="evaluate-box">
					<view style="margin-left: 10rpx;">评分率</view>
					<view style="align-self: center;">{{evaluate.evaluate_rate}}</view>
					
				</view>
				<view class="spacer" style="width: 30rpx;"></view>
				<view class="evaluate-box">
					<view style="margin-left: 10rpx;">平均值</view>
					<view style="align-self: center;">{{evaluate.average_star}}</view>
					
				</view>
				
			</view>
		</view>
		
		<view class="hospital-table-box">
			<view class="title">默认</view>
			<view class="hospital-nurse-box"></view>
			<view class="h-table">
				<view class="h-tr h-tr-3 h-thead ">
					<view class="h-td">排名</view>
					<view class="h-td">项目</view>
					<view class="h-td">占比</view>
					<view class="h-td">成交单数</view>
					
				</view>
				<view class="h-tr h-tr-3">
					
					<view class="h-td h-td-colspan h-td-rowspan" >
						<view class="h-tr h-tr-2" v-for="(hospital,index) in evaluate.hospital_list" :key="index">
							<view class="h-td" v-if="index < 3">
								<image
								  class="index-img"
								  :src="'/pages_custom/static/table/service_cate' + (index + 1) + '.png'"
								/>
							</view>
							<view class="h-td" v-else>{{ index + 1 }}</view>
							<view class="h-td">{{hospital.name}}</view>
							<view class="h-td">{{hospital.star}}</view>
							<view class="h-td">{{hospital.attitude}}</view>
							
						</view> 
					</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import operateChart from '@/sheep/mock/operate_chart.json';
	
	
	export default {
		
		data(){
			return {
				/* 评价统计 */
				evaluate:{},
				
			}
		},
		onLoad: async function(){
			
			
		},
		onReady:function(){
			
			this.evaluate = JSON.parse(JSON.stringify(operateChart.evaluate));
		},
		beforeDestroy: async function(){
			console.log('页面即将销毁');
		},
		methods:{
			
			
			
		},
	}
</script>

<style lang="scss" scoped>
	@import "table-sort.scss";
	page {
	    width: 100%;
	    height: 100%;
	}
	.index-img {
	  width: 55rpx;
	  height: 48rpx;
	  display: block;
	}
	.table-demo{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.line-space{
		margin: 0 10rpx;
		height: 30rpx;
		width: 3rpx;
		background-color: #333;
	}
	
	
	.list-container{
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		margin: 20rpx;
	}
	.evaluate-stat-box{
		color: #FFFFFF;
		display: flex;
		flex-direction: row; /* 水平布局 */
		align-items: center; /* 垂直居中对齐 */
		justify-content: space-between; /* 子元素之间的间距相等 */
		background: linear-gradient(360deg, #FFFFFF 0%, #FFF0DC 100%);
	}
	.evaluate-box{
		display: flex;
		flex-direction: column;
		width: 310rpx;
		height: 136rpx;
		font-size: 26rpx;
		background: linear-gradient(180deg, #FFD53B 0%, #F76B1C 100%);
		box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(235,102,35,0.2);
		border-radius: 10rpx;
		justify-content: center;
	}
	/* 间隔样式 */
	.evaluate-spacer {
	  flex-grow: 0; /* 不参与flex增长 */
	  flex-shrink: 0; /* 不参与flex收缩 */
	}
	
	.hospital-table-box{
		padding: 10rpx;
	}
	.hospital-nurse-box{
		border-radius: 20rpx;
		height: 60rpx;
		width: 200rpx;
		display: flex;
		flex-direction: row;
	}
</style>