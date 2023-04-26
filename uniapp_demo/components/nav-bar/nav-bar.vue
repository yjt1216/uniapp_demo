<template>
	<view class="nav-bar" :style="'height: calc('+statusBarHeight+'px + '+topHeight+'rpx)'">
		<view class="topZw">
			<view class="comStatus" :style="'height: '+statusBarHeight+'px'"></view>
			<view class="topMain" :style="'height: '+topHeight+'rpx'"></view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="top" :style="{
			'background': !backgroundImageShow?backgroundColor:('url('+backgroundImage+') no-repeat;'),
			backgroundSize: '100% 100%'
		}">
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<view class="top" :style="topStyle">
		<!-- #endif -->
			<!-- 这里是状态栏 占据高度 -->
			<view class="comStatus" :style="'height: '+statusBarHeight+'px'"></view>
			<view class="topMain" :style="'height: '+topHeight+'rpx'">
				<!-- 返回 -->
				<view @click="goBack" class="back" v-if="back">
					<u-icon name="arrow-left" color="#fff"></u-icon>
				</view>
				<slot></slot>
				<!-- 标题文字 -->
				<text class="title" :style="{'color': titleColor}">{{title}}</text>
			</view>
		</view>
		<!-- <view class="yuanhu"></view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0, // 状态按钮高度
				// //默认显示 返回按钮
				// showBack: true,
				// top样式
				topStyle: {}
			}
		},
		props: {
			// 标题内容
			title: String,
			// 标题颜色
			titleColor: {
				type: String,
				default: '#FFFFFF'
			},
			// 返回按钮相关配置
			back: {
				type: Boolean,
				default: true
			},
			// 开启背景图片，未开启，使用背景颜色，开启backgroundImage为必填项
			backgroundImageShow: {
				type: Boolean,
				default: false
			},
			// 背景颜色，支持渐变色，如：linear-gradient(to top right, #CDDC39, #8BC34A, #FFEB3B);
			backgroundColor: {
				type: String,
				default: '#004799'
			},
			// 背景图片地址，使用前需配置backgroundImageShow为true。
			backgroundImage: String,
			// 高度（除状态栏）
			topHeight: {
				type: Number,
				default: 108
			},
		},
		mounted() {
			this.init();
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			init() {
				// #ifdef MP-WEIXIN
				// #endif
				// #ifndef MP-WEIXIN
				if (this.backgroundImageShow) {
					this.topStyle = {
						'background-image': 'url('+this.backgroundImage+')',
						'background-repeat': 'no-repeat',
						backgroundSize: '100% 100%'
					}
				} else {
					this.topStyle = {
						'background': this.backgroundColor
					}
				}
				// #endif
				this.statusBarHeight = this.getSysInfo().statusBarHeight;
				// this.showBack = this.back
				// for (let key in this.back) {
				// 	this.myback[key] = this.back[key];
				// }
			},
			getSysInfo() {
				return uni.getSystemInfoSync();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-bar{
		width: 750upx;
		.topZw{
			width: 750upx;
			.comStatus{
				width: 750upx;
				position: relative;
			}
			.topMain{
				width: 750upx;
			}
		}
		.top{
			width: 750upx;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1000;
			.comStatus{
				width: 750upx;
				position: relative;
			}
			.topMain{
				width: 750upx;
				position: relative;
				/* #ifdef APP-PLUS-NVUE || APP-NVUE */
				display: flex;
				align-items: center;
				/* #endif */
				.back{
					width: 60upx;
					height: 60upx;
					box-sizing: border-box;
					padding: 10upx;
					position: absolute;
					top: 20upx;
					left: 20upx;
					z-index: 2;
					.img{
						width: 45upx;
						height: 45upx;
						display: block;
					}
				}
				.title{
					flex: 1;
					height: 58upx;
					line-height: 58upx;
					text-align: center;
					/* #ifndef APP-PLUS-NVUE || APP-NVUE */
					position: absolute;
					top: 20upx;
					left: 50%;
					transform: translate(-50%, 0%);
					z-index: 1;
					/* #endif */
					color: #FFF;
					font-size: 38upx;
				}
			}
		}
		.yuanhu{
			width: 750upx;
			height: 30upx;
			border-radius: 30upx 30upx 0 0;
			background-color: #FFF;
			opacity: 0.1;
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 1001;
		}
	}
</style>
