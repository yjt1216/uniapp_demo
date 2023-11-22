<template>
	<view class="pay-page">
		<nav-bar title="支付UI"></nav-bar>
		
		
		<view class="pay-box">
			<view class="wexin-box">
				<view class="left-warp">
					<image class="pay-icon" src="../../static/wxpay.png"></image>
					<view class="pay-text">微信支付</view>
				</view>
				<image class="check-icon" :src="payWay == 0 ? selectCheckIcon : checkIcon"></image>
			</view>
			<view class="wexin-box">
				<view class="left-warp">
					<image class="pay-icon" src="../../static/alipay.png"></image>
					<view class="pay-text">支付宝</view>
				</view>
				<image class="check-icon" :src="payWay == 1 ? selectCheckIcon : checkIcon" @click="selectPayClick"></image>
			</view>
			
		</view>
		
		<button @click="payClick">确定支付</button>
		
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				checkIcon:'/static/images/login/disagree.png',
				selectCheckIcon:'/static/images/login/agree.png',
				/* 支付方式 支付宝支付1 默认微信支付0 */
				payWay:0, 
			};
		},
		created() {
			
		},
		methods: {
			selectPayClick(){
				if(this.payWay == 0){
					this.payWay = 1;
				}else{
					this.payWay = 0;
				}
			},
			payClick(){
				uni.showToast({
					title:this.payWay==0?'微信支付':'支付宝支付',
					icon:'none'
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.pay-page{
		display: flex;
		flex-direction: column;
	}
	.pay-icon{
		width: 60rpx;
		height: 60rpx;
	}
	.check-icon{
		width: 40rpx;
		height: 40rpx;
		margin-right: 60rpx;
	}
	.pay-box{
		width: 100%;
		margin-top: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.wexin-box {
		width: 90%;
		margin: 20rpx 60rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.left-warp{
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
</style>

