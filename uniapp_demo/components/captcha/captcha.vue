<template>
	<uni-popup ref="popup" type="center">
		<div style="background-color: azure; width: 640rpx;">
			<div class="popup-content">
				<image style="width: 130px; height: 50px; background-color: #eeeeee;" :src="captchaBase64" />
				<div style="text-align: right;font-size: 12px;">
					<a href="javascript:void(0);" title="点我换一个" @click="queryList()" class="tar cup c43a3c1">看不清？</a>
				</div>
				<div style="margin-top: 10px;">
					<uni-easyinput v-model="formData.captcha" placeholder="请输入图形码" @keyup.enter.native="submit()" autocomplete="off" clear focus />
				</div>
			</div>
			<div class="popup-footer">
				<button type="primary" class="btn-submit" @click="submit" :disabled="formData.captcha?false:true">{{btnTitle || '验证'}}</button>
			</div>
			<div class="popup-close" @click="close">
				<uni-icons type="close" size="25" color="#bbb"></uni-icons>
			</div>
		</div>
		
	</uni-popup>
</template>
<script>
	export default {
		name: "captcha",
		props: {
			title: {
				type: String,
				default: '请输入图片验证码'
			},
			btnTitle: {
				type: String,
				default: '验证'
			},
			type: {
				type: String,
				require: true,
			},
			reqData: {
				type: Object,
				default () {
					return {};
				},
			},
		},
		data() {
			return {
				captchaKey: 'captcha_c1c81c3b91caa7af36d88bafb5b9cc88',
				captchaBase64: 'data:image/png;base64,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',
				formData: {
					captcha: '',
				},
			};
		},
		mounted() {},
		methods: {
			open() {
				this.initCreated();
				this.$refs.popup.open('center');
			},
			close() {
				this.$refs.popup.close();
			},
			submit() {
				var that = this;
				let captcha = this.formData.captcha;
				if (!captcha || captcha.length < 4) {
					uni.showToast({
						title:'请输入图形码',
						icon:'none'
					})
					return 
				}
				// //1.用户登录：
				// if (this.type == 'getLoginSms') {
				// 	let params = this.reqData || {};
				// 	params.imageKey = this.captchaKey;
				// 	params.imageVerifyCode = captcha;
				// 	return;
				// }
				//其它情况：直接返回图形码
				this.onCallback({ captchaKey: this.captchaKey, captcha: this.captcha });
			},
			onCallback(res) {
				this.$emit('success', res);
				this.close();
			},
			queryList(callback) {
				console.info('获取图片验证码');
			},
			//----------------[初始化]-----------------
			initCreated() {
				if (!this.captchaBase64) return this.queryList();
			},
		},
	}
</script>
<style lang="scss" scoped>
	/deep/ .uni-popup__wrapper.center {
		width: 80%;
		margin: auto;
		background: white !important;
		border-radius: 4px;
	}

	.popup-content {
		padding: 20px;
		padding-bottom: 0;
	}

	.popup-footer {
		padding: 20px;
		background: white;
		text-align: center;
	}

	.popup-close {
		position: absolute;
		right: 8px;
		top: 8px;
	}

	.btn-submit[disabled] {
		background: #7facec;
		cursor: no-drop;
	}

	.btn-submit {
		background: #3A75C6;
		color: #fff;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
	}
</style>