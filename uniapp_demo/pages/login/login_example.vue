<template>
	<view class="container">
		<view class="bg bg-color-base margin-b20"></view>
		
		<view class="tab-box">
			<view class="tab-login" @click="cur = 0">
				<text class="font-40 margin-b20" :class="[cur ? 'color-black-9 font-34': 'color-black-3 font-40']">快速登录</text>
				<image v-if="!cur" class="line" src="/static/images/login/line.png" mode=""></image>
			</view>
			<view class="tab-register" @click="cur = 1">
				<text class="font-34 margin-b20" :class="[cur ? 'color-black-3 font-40': 'color-black-9 font-34']">密码登录</text>
				<image v-if="cur" class="line" src="/static/images/login/line.png" mode=""></image>
			</view>
		</view>
		<!-- 验证码登陆 -->
		<view class="phone-login" v-if="!cur">
			<view class="input-box">
				<image class="input-icon" src="/static/images/login/account.png" mode=""></image>
				<input class="input-item" type="text" v-model="accountValue"  placeholder="请输入您的手机号/邮箱" />
			</view>
			<view class="input-box">
				<image class="input-icon" src="/static/images/login/password.png" mode=""></image>
				<!-- <input class="input-item" type="number" password value="" placeholder="请输入验证码" v-model="codeValue" /> -->
				<input class="input-item" type="number" password value="" placeholder="请输入验证码" v-model="codeValue"> 
					<template slot="suffix">
						<label class="regFrom_tom_yzlabel" :style="{ color : QzyzmStare?'#cccccc':'#EB6623'}" 
						@click="QzyzmFun">{{QzyzmStare?Qztime:Qztext}}</label>
					</template>
				</input>
			</view>
		</view>
		<!-- 账号登陆 -->
		<view class="code-login" v-if="cur">
			<view class="input-box">
				<image class="input-icon" src="/static/images/login/account.png" mode=""></image>
				<input class="input-item" type="text" :maxlength="11" placeholder="请输入您的手机号/邮箱" v-model="accountValue" />
			</view>
			<view class="input-box">
				<image class="input-icon" src="/static/images/login/password.png" mode=""></image>
				<input class="input-item" type="text" password value="" placeholder="请输入登陆密码" v-model="passwordValue" />
			</view>
		</view>
		
		<view class="button-box" @click="loginFun">
			<text class="font-34">立即{{ cur ? '注册': '登录' }}</text>
		</view>
		
		<view class="vs-row vs-align-center vs-space-center">
			<text class="color-base font-28">忘记密码？</text>
		</view>
		
		
	</view>
</template>

<script>
	import localStore from '@/sheep/config/local_store';
	export default {
		data() {
			return {
				/* 判断当前登录类型 账号登陆1/验证码登陆0 */
				cur: 0,
				accountValue:'',
				codeValue:'',
				passwordValue:'',
				/* 验证码倒计时 */
				Qztime:'',
				/* 倒计时是否开始 默认未开始false*/
				QzyzmStare:false,
				Qztext:'获取验证码',
			}
		},
		methods:{
			QzyzmFun(){
				console.log('获取验证码');
			},
			async loginFun(){
				await localStore.set('user_info', { name: 'John Doe', age: 30 });
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
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
	
	.phone-login, .code-login {
		margin-top: 60rpx;
		padding: 0 60rpx;
	}
	.regFrom_tom_yzlabel{
		width: 150rpx; 
		text-align: right; 
		font-size: 28rpx;
	}
	.input-box {
		width: 630rpx;
		height: 120rpx;
		padding: 0 30rpx;
		background-color: rgba(80, 100, 235, 0.1);
		border-radius: 20rpx;
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.input-icon{
		margin-right: 20rpx;
		width: 30rpx;
		height: 38rpx;
	}
	.input-item{
		flex: 1;
		min-height: 96rpx;
		line-height: 96rpx;
		// background-color: aquamarine;
		text-indent: 20rpx;
	}
	
	.button-box {
		width: 630rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin: 60rpx;
		border-radius: 30rpx;
		text-align: center;
		justify-content: center;
		flex-direction: row;
	}
	
	
	
	
	
</style>
