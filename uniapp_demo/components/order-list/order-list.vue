<!-- 全部订单 all -->

<template>
	<view style="margin-top: 44rpx;">
		<view v-for="(item, index) in orderList" :key="index">
			<view class="order-item">
				<view class="order-item-title">
					<view class="order-no">订单编号：{{ item.trade_no }}</view>
					<view class="">{{ item.status_text }}</view>
				</view>
				<view class="dash-line"></view>
				<view class="order-item-content">
					<view class="img">
						<image class="img" :src="item.logo" mode="scaleToFill"></image>
					</view>
					<view class="item-content">
						<view class="content-title">
							<view class="title">{{ item.item_name }}</view>
							<view class="price">¥{{ item.price }}元</view>
						</view>
						<view class="spec_content" v-if="item.stype === 5 && item.spec_title !== ''">
							<view class="subtitle">{{ item.spec_title }}:</view>
							<view class="subtitle">{{ item.spec_name }}</view>
						</view>
						<view v-else class="content">{{ item.intro }}</view>
						<view class="num">x{{ item.item_num}}</view>
					</view>
				</view>
				<view class="dash-line"></view>
				<view v-if="orderType !== 'refund'" class="order-detail">共计{{item.item_num}}件商品,合计：{{item.price}}元</view>
				
				<view class="dash-line"></view>
				
				<view class="order-item-btn">
					<image class="qr-img" src="/static/icon/code.png" 
						@click="handleItemClick(index)">
					</image>
				</view>
			</view>
			
		</view>
		
		
		
	</view>
	
</template>

<script>
	let that = null;
	
	
	export default{
		
		props:{
			/* 订单数据 */
			orderList:{
				type: Array,
				default(){
					return []
				}
			},
			/* 当前订单类型 */
			orderType:{
				type: String,
				default(){
					return 'all'
				}
			}
		},
		data(){
			return{
				token: '',
				page: 1,
				selectItem:{
					service_sign_code:"qrcode",
				}
			}
		},
		mounted() {
			that = this;
		},
		onLoad: function() {},
		methods:{
			handleItemClick(index) {
			    this.$emit('itemClick', index); // 发出事件并传递index
			}
			
			
		}
		
	}
</script>

<style >
	
	.dash-line{
		border-style: dashed;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		border-width: 1.5rpx;
		border-color: #f2f2f2;
	}
	.img{
		width: 150rpx;height: 150rpx;border-radius: 10rpx;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin: 20rpx;
		padding: 20rpx;
		
	}
	.order-item-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: 500;
	}
	.order-no{
		color: #000000;
	}
	.order-item-content{
		display: flex;
		flex-direction: row;
	}
	.item-content{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20rpx;
		width: 100%;
		
	}
	.title{
		color: #000000;
		font-weight: bold;
		font-size: 28rpx;
	}
	.price{
		color: #FA800A;
		font-weight: bold;
	}
	.subtitle{
		color: #333333;
		/* font-weight: bold; */
		font-size: 26rpx;
	}
	.content{
		color: #999999;
		font-weight: bold;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 400rpx;
		overflow: hidden;
		font-size: 28rpx;
	}
	.num{
		display: flex;
		width: 100%;
		justify-content: flex-end;
	}
	.order-detail{
		display: flex;
		width: 100%;
		justify-content: flex-end;
		font-size: 28rpx;
	}
	.content-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 26rpx;
		font-weight: 500;
	}
	.order-item-btn{
		display: flex;
		justify-content: flex-end;
		
	}
	.btn{
		border: 1rpx solid #999999;
		border-radius: 20rpx;
		color: #FA800A;
		height: 50rpx;
		font-size: 20rpx;
		background-color: #FFFFFF;
		margin-left: 20rpx;
		margin-right: 0rpx;
	}
	.spec_content{
		display: flex;
		flex-direction: row;
	}
	.qr-img{
		width: 30rpx;height: 30rpx;;
	}
	
	.qrcode-box {
	  /* #ifndef APP-NVUE */
	  display: flex;
	  flex-direction: column;
	  /* #endif */
	  align-items: center;
	  margin-bottom: 30px;
	  padding: 0 30px;
	  width: 600rpx;
	  height: 680rpx;
	}
	
	.qrcode {
	  padding: 16px;
	  background-color: #ffffff;
	  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	  border-radius: 2px;
	  overflow: hidden;
	}
	
	.msg {
	  margin-top: 15px;
	  font-size: 14px;
	  color: #9a9b9c;
	}
	
	.loading {
	  font-size: 14px;
	  color: #00aaff;
	}
	
	.error {
	  font-size: 12px;
	  color: #ff0000;
	}
	
	.save {
	  /* #ifndef APP-NVUE */
	  display: flex;
	  flex-direction: column;
	  /* #endif */
	  align-items: center;
	  width: 700rpx;
	  padding: 30px 0;
	  background-color: #ffffff;
	}
	
	.save-msg {
	  font-size: 14px;
	  color: #9a9b9c;
	}
	
	.save-image {
	  width: 500rpx;
	  height: 500rpx;
	  margin-top: 20px;
	}
	
	.qr-btns {
	  margin-top: 10px;
	  /* #ifndef APP-NVUE */
	  display: flex;
	  /* #endif */
	  flex-direction: row;
	}
	
	.qr-btn {
	  margin: 0 5px;
	}
	
	
</style>
