<template>
	<uni-popup ref="popup" type="center" :is-mask-click="false">
		<view class="popup-box">
			<view class="weui-half-screen-dialog__hd">
				{{title}}
			</view>
			<view class="weui-half-screen-dialog__bd">
				<text class="weui-half-screen-dialog__tips">{{desc1}}</text>
				<text class="weui-half-screen-dialog__tips color-8BC21F" @click="openPrivacyContract">
					{{urlTitle}}
				</text>
				<text class="weui-half-screen-dialog__tips">{{desc2}}</text>
			</view>
			<view class="weui-half-screen-dialog__ft">
				<button class="weui-btn" @click="handleDisagree">拒绝</button>
				<button id="agree-btn" type="default" open-type="agreePrivacyAuthorization" class="weui-btn agree"
					@agreeprivacyauthorization="handleAgreePrivacyAuthorization">同意</button>
			</view>
		</view>
	</uni-popup>
</template>
 
<script>
	export default {
		data() {
			return {
				title: "用户隐私保护提示",
				desc1: "感谢您使用本产品，您使用本产品前应当仔细阅读并同意",
				urlTitle: uni.getStorageSync('privacyContractName'),
				desc2: "当您点击同意并开始使用产品服务时，即表示你已理解并同意该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法更好的体验产品。",
			};
		},
		methods: {
			openPrivacyContract() {
				uni.openPrivacyContract({});
			},
			handleAgreePrivacyAuthorization() {
				getApp().globalData.showPrivacy = false;
				this.$emit('confirm');
				this.$refs.popup.close();
			},
			handleDisagree() {
				this.$refs.popup.close();
			}
		}
	}
</script>
 
<style lang="scss" scoped>
	.popup-box {
		width: 80vw;
		// height: 40vh;
		overflow: hidden;
		background: #ffffff;
		padding: 30rpx;
		border-radius: 24rpx;
 
		.weui-half-screen-dialog__hd {
			font-size: 48rpx;
			font-family: Source Han Sans CN-Bold, Source Han Sans CN;
			font-weight: bold;
			color: #000000;
			line-height: 56rpx;
		}
 
		.weui-half-screen-dialog__bd {
			margin-top: 48rpx;
			text-indent: 2em;
			.weui-half-screen-dialog__tips {
				font-size: 28rpx;
				font-family: Source Han Sans CN-Normal, Source Han Sans CN;
				font-weight: 400;
				color: #000000;
				line-height: 33rpx;
			}
		}
 
		.weui-half-screen-dialog__ft {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			margin-top: 48rpx;
			.weui-btn {
				padding: 0 60rpx;
				margin: 0;
				background: none;
				font-size: 32rpx;
				font-family: Source Han Sans CN-Normal, Source Han Sans CN;
				font-weight: 400;
				color: #000000;
				line-height: 80rpx;
				// border: 2rpx solid #8BC21F;
			}
 
			.agree {
				color: #ffffff;
				background: linear-gradient(90deg, #8BC21F 0%, #7AB30A 100%);
			}
		}
 
		.color-8BC21F {
			color: #8BC21F !important;
		}
	}
</style>