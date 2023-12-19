<template>
	<view class="input-demo">
		<u-navbar title="输入框" :fixed="true" :placeholder="true"></u-navbar>
		<view class="input-box">
			<input class="input-item" focus placeholder="请输入登录账号" type="number" v-model="accountValue"/>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				// 账号密码
				accountValue: '',
				passwordValue: '',
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.input-demo{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.input-box{
		width: 90%;
		height: 120rpx;
		padding: 10rpx 30rpx;
		border-radius: 20rpx;
	}
	.input-item{
		min-height: 96rpx;
		line-height: 96rpx;
		background-color: aquamarine;
		text-indent: 20rpx;
	}
	
</style>