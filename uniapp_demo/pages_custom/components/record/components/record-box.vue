<template>
	<view class="record-box">
		<view class="time-wrap">
			<text class="dot" :class="status!==1?'':'dot-fade'"></text>
			<text>
			 {{ status == 0 ? '准备录音' : '正在录音' }}（{{minute}}:{{second}}）
			</text>
		</view>
		<view class="bottom-box">
			<!-- 左按钮(重置录音) -->
			<view class="btn-wrap" v-if="status!==0" @tap="resetRecord">
				<view class="reset-img" data-text="重置"></view>
			</view>
			<!-- 中按钮(开始录制/结束录制) -->
			<view class="switch-wrap">
				<button :class="status===0?'':'start-wrap'" @tap="switchChange"></button>
			</view>
			<!-- 右按钮(暂停/继续) -->
			<view class="btn-wrap" v-if="status!==0">
				<view class="pause-img" v-if="status===1" data-text="暂停" @tap="pauseRecord"></view>
				<view class="continue-img" v-if="status===2" data-text="继续" @tap="resumeRecord"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 最长时间
		max: {
			type: Number,
			default: 10000
		},
		// 音频标题
		title: {
			type: String,
			default: '新的音频'
		},
	},
	data() {
		return {
			recorderManager: null,
			timer: null, // 定时器
			status: 0, // 录音进度 开始0 暂停1 继续2 
			timing: 0,
			minute: '00', //  分钟
			second: '00', // 秒钟
			isReset: false,
		}
	},
	watch: {
		timing: {
			handler(nVal, oVal) {
				let tSecond = Math.floor(this.timing) % 60
				let tMinute = Math.floor(this.timing / 60) % 60
				// 计算出时分秒
				this.minute = `${tMinute < 10 ? '0':''}${tMinute}`
				this.second = `${tSecond < 10 ? '0':''}${tSecond}`
			},
			immediate: true
		},
	},
	beforeDestroy() {
		this.clearTimer()
	},
	methods: {
		listening() {
			const self = this

			self.recorderManager.onStop(res => {
				// console.log('结束录音', res)
				if (!self.isReset) {
					self.$emit('confirm', {
						path: res.tempFilePath,
						duration: this.timing
					})
				}
				
				self.status = 0
				self.timing = 0
				self.minute = '00'
				self.second = '00'
				self.recorderManager = null
				self.clearTimer()
			})
		},
		// 开始录音和结束录音
		async switchChange() {
			if (this.status === 0) {
				let res = await this.audioAuthorize()
				// console.log('============================', res);
				if (res) {
					this.startRecord()
				}
			} else {
				this.stopRecord()
			}
		},
		// 开始录音
		startRecord() {
			if (!this.recorderManager) {
				this.recorderManager = uni.getRecorderManager()
				this.listening()
			}
			this.recorderManager.start({
				duration: this.max,
				format: 'mp3'
			});

			this.status = 1
			this.isReset = false
			this.setTimer()
		},
		// 结束录音
		stopRecord() {
			this.recorderManager.stop();
		},
		// 暂停录音
		pauseRecord() {
			this.recorderManager.pause()

			this.status = 2
			clearInterval(this.timer)
		},
		// 继续录音
		resumeRecord() {
			this.recorderManager.resume()

			this.status = 1
			this.setTimer();
		},
		// 重置录音
		resetRecord() {
			this.isReset = true
			this.stopRecord()
		},
		setTimer() {
			this.timer = setInterval(() => {
				this.timing++
			}, 1000)
		},
		clearTimer() {
			clearInterval(this.timer)
			this.timer = null;
		},
		async audioAuthorize() {
			const self = this
			let res = await this.getSetting()
			let auth = res.authSetting['scope.record']
			// 拒绝授权
			if (auth === false) {
				uni.showModal({
					title: '提示',
					content: '您已拒绝麦克风授权，是否手动开启权限？',
					confirmText: '立即开启',
					async success(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							await self.openSetting()
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.navigateBack()
						}
					}
				})
				return false
			}
			// 或者未进行过授权
			if (!auth) {
				let res = await this.getAuthorize('scope.record')
				return res.errMsg === 'authorize:ok'
			}
			return true
		},
		// 获取授权设置
		getSetting() {
			return new Promise((resolve, reject) => {
				uni.getSetting({
					success(res) {
						console.log(`获取用户授权结果成功`, res);
						resolve(res)
					}
				})
			})
		},
		// 调起客户端小程序设置界面
		openSetting() {
			return new Promise((resolve, reject) => {
				uni.openSetting({
					success(res) {
						console.log(`调起客户端小程序设置界面成功`, res);
						resolve(res)
					},
					fail(e) {
						console.log(`调起客户端小程序设置界面失败`, e);
						resolve(e)
					}
				})
			})
		},
		// 获取授权
		getAuthorize(scope) {
			return new Promise((resolve, reject) => {
				uni.authorize({
					scope: scope,
					success(res) {
						console.log(`获取${scope}权限成功`, res);
						resolve(res)
					},
					fail(e) {
						console.log(`获取${scope}权限失败`, e);
						resolve(e)
					}
				})
			})
		}
	},
}
</script>

<style lang="scss">
.record-box {
	width: 100%;
	padding: 30rpx;
	background-color: #fafafa;
	border: 1px solid #eee;
	border-radius: 20rpx;
	box-sizing: border-box;

	.time-wrap {
		padding-left: 20rpx;
		font-size: 35rpx;
		color: #252326;
		display: flex;
		justify-content: center;
		align-items: center;
		.dot {
			width: 30rpx;
			height: 30rpx;
			border-radius: 50%;
			background-color: #a1a1a1;
			margin: 0 15rpx;
		}

		.dot-fade {
			animation: fade 1s infinite;
		}

		@keyframes fade {
			0% { opacity: 1; }
			50% { opacity: 0; }
			100% { opacity: 1; }
		}
	}

	.bottom-box {
		margin-top: 30rpx;

		display: flex;
		justify-content: space-around;
		align-items: center;

		.btn-wrap {

			.reset-img,
			.continue-img,
			.pause-img {
				position: relative;
				width: 42rpx;
				height: 42rpx;
				padding-bottom: 45rpx;
				background-size: 100%;
				background-repeat: no-repeat;

				&::after {
					content: attr(data-text);
					position: absolute;
					bottom: 0;
					width: 100%;
					font-size: 22rpx;
					color: #333333;
					white-space: nowrap;
				}
			}

			.reset-img {
				background-image: url(../static/reset.png);
			}

			.continue-img {
				background-image: url(../static/play.png);
			}

			.pause-img {
				background-image: url(../static/pause.png);
			}
		}

		.switch-wrap {
			position: relative;
			width: 100rpx;
			height: 100rpx;
			padding: 0;
			background-color: #fff;
			box-sizing: border-box;
			border-radius: 50%;
			box-shadow: 0 0 10rpx 2rpx rgba(0, 0, 0, 0.1);
			overflow: hidden;
			margin-top: 15rpx;

			button {
				width: 100%;
				height: 100%;

				&::after {
					position: absolute;
					top: 50%;
					left: 50%;
					width: 40rpx;
					height: 40rpx;
					background-color: #f30000;
					border-radius: 50%;
					transform: translate(-50%, -50%);
				}
			}

			.start-wrap {
				&::after {
					border-radius: 8rpx;
				}
			}
		}
	}
}
</style>
