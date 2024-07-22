<template>
	<view class="user-page">
		<u-navbar title="图形验证码" :placeholder="true" :autoBack="true"></u-navbar>
		<view class="auth-section">
			<view class="as-tit1">个人系统</view>
			<view class="as-tit2">v1.0.0</view>
			<view class="as-box">
				<view class="asb-item">
					<view class="asbi-tit1">手机号</view>
					<view class="asbi-bottom">
						<input class="asbi-input" type="number" placeholder="请填写手机号码" v-model="mobile" />
					</view>
				</view>
				<view class="asb-item">
					<view class="asbi-tit1">验证码</view>
					<view class="asbi-bottom">
						<input class="asbi-input asbi-input2" type="number" placeholder="请填写你的验证码" v-model="verifyCode" />
						<view class="asbi-btn2" v-if="count < 60">{{ count }}s</view>
						<view class="asbi-btn" v-else @click="verifyCodeClick">获取验证码</view>
					</view>
				</view>
			</view>
		</view>
		<captcha ref="captcha" title="请输入图片验证码" :btn-title="'发送短信验证码'" type="getLoginSms" :req-data="captchaData" @success="captchaSuccess()"></captcha>
	</view>
</template>
<script>
	
	export default {
		data() {
			return {
				mobile: "",
				verifyCode: "",
				count: 60,
				countInterval: null,
				captchaData: {},
			};
		},
		
		onUnload() {
			this.clearIntervalAction();
		},
		methods: {
			captchaSuccess(res) {
				uni.showToast({
					title:'验证码发送成功!',
					icon:'none'
				});
				console.log('发送短信验证码返回：', res);
				this.startCountIntervalAction();
			},
			sendVerifyCodeRequest() {
				this.captchaData = { mobile: this.mobile, countryCode: 86, verifyType: 'login' };
				this.$refs.captcha.open();
			},
			verifyCodeClick() {
				if (!this.mobile || this.mobile.length == 0) {
					uni.showToast({
						title:'请填写手机号码',
						icon:'none'
					});
					return;
				}
				// if (!utils.isCorrectPhoneNumber(this.mobile)) {
				// 	this.$warnToast("请填写正确的手机号码");
				// 	return;
				// }
				if (this.count < 60) {
					console.log("还在倒计时中");
					return;
				}
				this.sendVerifyCodeRequest();
			},
			startCountIntervalAction() {
				var that = this;
				this.countInterval = setInterval(function() {
					if (that.count <= 0) {
						console.log("定时结束");
						that.count = 60;
						that.clearIntervalAction();
						return;
					}
					that.count--;
					console.log("count is : " + that.count);
				}, 1000);
			},
			clearIntervalAction() {
				clearInterval(this.countInterval);
			},
		},
	}
</script>
<style lang="scss" scoped>
	// @import "./login.scss";
	.user-page{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.asb-item{
		width: 90%;
		height: 120rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.as-tit1{
		font-size: 30rpx;
	}
	.as-tit2{
		font-size: 26rpx;
	}
	.as-box{
		margin-top: 200rpx;
		width: 85%;
		height: 600rpx;
	}
	.asbi-tit1{
		font-size: 30rpx;
	}
	.asbi-btn{
		background: #3A75C6;
		color: #fff;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
	}
	.asbi-btn2{
		width: 70rpx;
		height: 40px;
	}
</style>