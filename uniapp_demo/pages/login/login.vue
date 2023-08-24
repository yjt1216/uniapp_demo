<template>
	<view class="loginWrap ">
		
		<nav-bar title="登录" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<!-- <view class="imgWrap">
			<image class="logo" style="width: 100rpx;height: 100rpx;" src="../../static/logo.png" mode=""></image>
		</view> -->
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
				
				<label class="regFrom_tom_yzlabel" :style="{ color : QzyzmStare?'#cccccc':'#2ebbfe'}" @click="QzyzmFun">{{Qztime}}{{Qztext}}</label>
			</view>
			<button form-type="submit" class="loginbtn" type="default">登录</button>
		</form>
		
		
		
		<view class="action center">
			<text @click="changeLoginWay" style="color: #71B6F7;">{{loginWay}}</text>
		</view>
		<!-- 社交账号登录 -->
		<view class="wechatLogin center" >
			<text>————社交账号登录————</text>
			<button class="wechatLoginBtn" open-type="getUserInfo"  @getuserinfo="wechatLoginFun" >
				<image class="logo-login" :src="'../../static/images/icon_wechat.png'"
				    @error="imageError"></image>
			</button>
		</view>
		
		<!-- 服务政策 -->
		<view >
			<u-checkbox-group>
				<label class="check-xieyi">
					<u-checkbox shape="circle" v-model="isAgreement" icon-size="18rpx"></u-checkbox>
					<view class="check_text">请勾选并阅读<text>《注册协议》</text>及<text>《隐私协议》</text></view>
				</label>
			</u-checkbox-group>
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
				tips: '',
				/* 验证码倒计时 */
				Qztime:'',
				/* 倒计时是否开始 */
				QzyzmStare:false,
				Qztext:'获取验证码'
			}
		},
		methods:{
			//登录提交
			formSubmit(){
				console.log("页面跳转")
			
			},
			/* 获取验证码 */
			QzyzmFun(){
				console.log("获取验证码")
				var num = 60;
				if(this.QzyzmStare == false){
					this.rquestSendCodeFun()
					console.log("获取验证码 if",this.Qztime)
					this.Qztime ='60';
					this.Qztext = 's后获取';
					this.QzyzmStare = true;
					var interval = setInterval(() =>{
							--this.Qztime
						},1000)
					setTimeout(()=>{
						clearInterval(interval)
						this.Qztext = '获取验证码'
						this.Qztime = ''
						this.QzyzmStare = false
						
					},60000)				
				}else{
					console.log("获取验证码 期间 else",this.Qztime)
					uni.showToast({
						title:'正在获取验证码...',
						icon:'none'
					})
				}
			},
			/* 请求发送验证码 server */
			rquestSendCodeFun(){
				console.log("请求发送验证码")
			},
			
			
			/* 微信登录 */
			wechatLoginFun(){		
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
				// .get-code{
				// 	color: #C8C7CC;
				// }
				
				.regFrom_tom_yzlabel{
					width: 60%; 
					text-align: right; 
					font-size: 28rpx;
				}
			}
			
			.loginbtn{
				margin: 20rpx; 
				margin-top: 60rpx;
				background: #39C9BC;
				color: #fff;
				font-size: 30rpx;
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
				background: #39C9BC;
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
		
		.check-xieyi {
			margin-top: 60rpx;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			
			.check_text {
				font-size: 28rpx;
			}
			.check_text text{
				color: #39C9BC;
			}
		}
	}
</style>