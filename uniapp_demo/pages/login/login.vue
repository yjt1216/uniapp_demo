<template>
	<view class="loginWrap ">
		
		<nav-bar title="登录" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<view class="imgWrap">
			<image class="logo" style="width: 100rpx;height: 100rpx;" src="../../static/logo.png" mode=""></image>
		</view>
		<!-- 账号密码登录 -->
		<form v-if="loginWay == '短信验证登录'" class="account-login-form" @submit="formSubmit">
			<view class="uni-form-item uni-column">
				<u-input placeholder="请输入登录账号" v-model="value" type="number" clearable />
			</view>
			<view class="uni-form-item uni-column">
				<u-input v-model="value" type="password"  password-icon="true" />
				<text class="forgetText">忘记密码</text>
			</view>
			<button form-type="submit" class="loginbtn" type="default">登录</button>
		</form>
		
		<!-- 短信验证登录 -->
		<form class="sms-login-form" v-if="loginWay == '账号密码登录'"  @submit="formSubmit">
			<view class="uni-form-item uni-column">
				<u-input placeholder="请输入登录账号" v-model="value" type="number" clearable />
			</view>
			<view class="uni-form-item uni-column">
				<u-input placeholder="请输入验证码" v-model="value" type="number" />
			</view>
			<button form-type="submit" class="loginbtn" type="default">登录</button>
		</form>
		
		
		
		<view class="action center">
			<text @click="changeLoginWay" style="color: #71B6F7;">{{loginWay}}</text>
		</view>
		<!-- 社交账号登录 -->
		<view class="wechatLogin center" >
			<text>————社交账号登录————</text>
			<button class="wechatLoginBtn" open-type="getUserInfo"  @getuserinfo="wechatLogin" >
				<image class="logo-login" :src="'../../static/images/icon_wechat.png'"
				    @error="imageError"></image>
			</button>
		</view>
		
	</view>
</template>
 
<script>
	export default{
		data(){
			return{
				form:{
					name:''
				},
				value: '',
				loginWay: '短信验证登录',
				seconds: 60,
				tips: ''
			}
		},
		methods:{
			//登录提交
			formSubmit(){
				console.log("页面跳转")
			
			},
			//微信登录
			wechatLogin(){		
				let _that = this;
				uni.getSetting({
				 success(res) {
					console.log("授权：",res);
				   if (!res.authSetting['scope.userInfo']) {
						//这里调用授权
						console.log("当前未授权");
				   } else {
						//用户已经授权过了
						console.log("当前已授权");
						//#ifdef MP-WEIXIN
						uni.getProvider({
						  service: 'oauth',
						  success: function (res) {
							   console.log(res.provider)
							if (~res.provider.indexOf('weixin')) {
								uni.login({
									provider: 'weixin',
									success: (res2) => {
										
										uni.getUserInfo({
											provider: 'weixin',
											success: (info) => {//这里请求接口
												console.log("登录返回信息",res2);
												console.log("获取用户信息",info);
												
												_that.$store.commit('login',info.userInfo);
												uni.redirectTo({
												    url: '../index/index'
												});
											},
											fail: () => {
												uni.showToast({title:"微信登录授权失败",icon:"none"});
											}
										})
								
									},
									fail: () => {
										uni.showToast({title:"微信登录授权失败",icon:"none"});
									}
								})
								
							}else{
								uni.showToast({
									title: '请先安装微信或升级版本',
									icon:"none"
								});
							}
						  }
						});
						//#endif
						
						
						
				   }
				 }
			   })
				 
			},
			//点击切换登录方式
			changeLoginWay(){
				if(this.loginWay == '短信验证登录'){
					this.loginWay = '账号密码登录'
					console.log("222")
				}else if(this.loginWay == '账号密码登录'){
					console.log("111111")
					this.loginWay = '短信验证登录'
				}
				
			},
			//
			codeChange(text) {
				// console.log("codeChange",text)
				this.tips = text;
			},
			//点击获取验证码倒计时
			getCode(){
				console.log("aa")
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					
					this.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				console.log("aa1111111")
				this.$u.toast('倒计时开始');
			}
			
		}
	}
</script>
 
<style lang="less">
		
	.loginWrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		.imgWrap {
			margin-top: 50rpx;
			text-align: center;
			
		}
		.sms-login-form {
			margin-top: 50rpx;
			width: 100%;
			padding: 30rpx;
			
			.loginbtn{
				margin: 20rpx; 
				margin-top: 60rpx;
				background: #2CA800;
				color: #fff;
				font-size: 30rpx;
			}
			
			.uni-form-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #DCDCDC;
				padding: 10rpx 30rpx;
				margin: 20rpx;
				u-input{
					flex: 1;
				}
				
			}
		}
		.account-login-form {
			margin-top: 50rpx;
			width: 100%;
			padding: 30rpx;
			
			.uni-form-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #DCDCDC;
				padding: 10rpx 30rpx;
				margin: 20rpx;
				u-input{
					flex: 1;
				}
				.forgetText{
					color: #C8C7CC;
				}
				
			}
			
			.loginbtn{
				margin: 20rpx; 
				margin-top: 60rpx;
				background: #2CA800;
				color: #fff;
				font-size: 30rpx;
			}
		}
		.action {
			font-size: 28rpx;
		}
		.wechatLogin{
			margin-top: 60rpx;
			font-size: 28rpx;
			text{
				color: #CCCCCC;
			}
			.wechatLoginBtn{
				margin-top: 20rpx;
				border: none;
				width: 90rpx;
				height: 90rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				&::after{
					border: none;
				}
			}
			.logo-login{
				width: 90rpx;
				height: 90rpx;
				// margin-top: 30rpx;
			}
		}
	}
</style>