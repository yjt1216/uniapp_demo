<!-- 商品列表组件 <order-list :list="xx"></order-list> -->
<template>
	<view class="order-list">
		<view class="order-detail"  :id="'good'+good.id" v-for="(order,index) in list" :key="index">
			<view class="detail-top">
				<view class="order-title">{{order.item_name}}</view>
				<view class="order-type">{{order.type}}</view>
			</view>
			
			<u-divider :hairline="true"  line-color="#166"></u-divider>
			
			<view class="order-name">
				<view class="order-name-text">姓名: {{order.person_name}}</view>
				<image class="sex-image" 
					:src="order.person_sex == 1 ? '/static/images/home_man.png':'/static/images/home_women.png'" mode="widthFix" ></image>
				<view class="order-mobile"> {{order.person_mobile}}</view>
			</view>
			<view class="order-text">照料人:{{order.caregiver_name}} </view>
			<view class="order-text">服务时间: {{order.plan_at}}</view>
			<view class="order-text">服务地址: {{order.area_name + order.address}}</view>
			<view class="order-text">医废登记: {{order.garbage_record ? order.garbage_record : '暂无'}}</view>
			<view class="order-care">
				<view class="order-text">评价患者: </view>
				<u-rate :count="5" v-model="order.care_level" activeColor="#f0ad4e" inactiveColor="#666666"></u-rate>
			</view>
			
			
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style lang="scss">
	.order-list{
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.order-detail{
			width: 90%;
			margin-top: 20rpx;
			// margin-left:  3%;
			// margin-right: 3%;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 20upx;
			border: 1upx solid #eee;
			border-radius: 10rpx;
			
			.detail-top {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				
				.order-title {
					font-weight: 400;
					color: black;
					font-size: 36rpx;
				}
				.order-type {
					color: #39C9BC;
					font-size: 30rpx;
				}
				
			}
			.order-text {
				width: 100%;
				font-size: 26rpx;
			}
			
			
			// 评价
			.order-care {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
			.order-name{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				
				.order-name-text {
					font-size: 26rpx;
				}
				.sex-image {
					margin-left: 10rpx;
					margin-right: 10rpx;
					width: 20rpx;
					height: 20rpx;
				}
				
				.order-mobile{
					font-size: 26rpx;
					color: #39C9BC;
				}
			}
			
		}
	}
</style>
