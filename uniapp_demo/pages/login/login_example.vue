<template>
	<view class="container">
		<view class="bg bg-color-base margin-b20"></view>
		
		<view class="tab-box">
			<view class="tab-login" @click="cur = 0">
				<text class="font-40 margin-b20" :class="[cur ? 'color-black-9': 'color-black-3']">快速登录</text>
				<image v-if="!cur" class="line" src="/static/images/login/line.png" mode=""></image>
			</view>
			<view class="tab-register" @click="cur = 1">
				<text class="font-34 margin-b20" :class="[cur ? 'color-black-3': 'color-black-9']">密码登录</text>
				<image v-if="cur" class="line" src="/static/images/login/line.png" mode=""></image>
			</view>
		</view>
		
		<view class="login" v-if="!cur">
			<view class="input">
				<image class="input-icon margin-r20" src="/static/images/login/account.png" mode=""></image>
				<input class="vs-flex-item color-base font-30" type="text" value="" :maxlength="11" placeholder="请输入您的手机号/邮箱" placeholder-class="input-placeholder"/>
			</view>
			<view class="input">
				<image class="input-icon margin-r20" src="/static/images/login/password.png" mode=""></image>
				<input class="vs-flex-item color-base font-30" type="text" password value="" 
					placeholder="请输入您的登录密码" placeholder-class="input-placeholder"/>
			</view>
		</view>
		
		<view class="register margin-b80" v-if="cur">
			<view class="input vs-row vs-align-center margin-b40">
				<image class="input-icon margin-r20" src="/static/images/login/account.png" mode=""></image>
				<input class="vs-flex-item color-base font-30" type="text" :maxlength="11" 
					placeholder="请输入您的手机号/邮箱" placeholder-class="input-placeholder"/>
			</view>
			<view class="input vs-row vs-align-center margin-b40">
				<image class="input-icon margin-r20" src="/static/images/login/password.png" mode=""></image>
				<input class="vs-flex-item color-base font-30" type="text" password value="" 
					placeholder="请输入您的登录密码" placeholder-class="input-placeholder"/>
			</view>
		</view>
		
		<view class="button bg-color-base vs-row vs-align-center">
			<text class="color-white font-34">立即{{ cur ? '注册': '登录' }}</text>
		</view>
		
		<view class="vs-row vs-align-center vs-space-center">
			<text class="color-base font-28">忘记密码？</text>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/* 判断当前登录类型 */
				cur: 0,
				phoneValue:'',
				
			}
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;
	}
	
	.bg {
		position: relative;
		width: 750rpx;
		height: 400rpx;
		margin-bottom: 20rpx;
	}
	
	.tab-box {
		margin-left: 60rpx;
		display: flex;
		flex-direction: row;
		// align-items: center;
		background-color: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		
		.tab-login{
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		.tab-register{
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-left: 40rpx;
		}
		
	}
	
	.line {
		width: 150rpx;
		height: 15rpx;
	}
	
	.login, .register {
		margin-top: 60rpx;
		padding: 0 60rpx;
	}
	
	.input {
		width: 630rpx;
		height: 90rpx;
		padding: 0 30rpx;
		background-color: rgba(80, 100, 235, 0.1);
		border-radius: 50%;
		margin-bottom: 30rpx;
		flex-direction: row;
		align-items: center;
		&-icon {
			width: 30rpx;
			height: 38rpx;
		}
		
		&-placeholder {
			color: #5064eb;
		}
	}
	
	.button {
		width: 630rpx;
		height: 90rpx;
		margin: 60rpx;
		border-radius: 50%;
		text-align: center;
		justify-content: center;
		flex-direction: row;
	}
	
	.separator {
		height: 2rpx;
		margin: 0 30rpx;
		background-color: #f5f5f5;
	}
	
	.other {
		&-items {
			padding: 0 200rpx;
		}
		
		&-icon {
			width: 50rpx;
			height: 50rpx;
		}
	}
	
</style>
