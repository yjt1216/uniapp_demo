<!-- 导航栏渐变色 -->
<template>
	<view :style="{'padding-top':h+'px'}">
		<view class="status_bar" :style="{height:h+'px','background-image':'linear-gradient(to right, #39C9BC,#6DE8CC)'}">
			<text class="status_bar_title">消息</text>
		</view>
		<!-- <view style="width: 100%;height: 2000rpx;">
			往下滑动
		</view> -->
		<view @tap="goTextAuto">goTextAuto</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h: uni.getSystemInfoSync().statusBarHeight + 45,
				opacity: 0
			}
		},
		// onPageScroll: function(Object) {
		// 	this.opacity = Object.scrollTop / this.h
		// }
		methods:{
			goTextAuto(){
				uni.navigateTo({
					url:'/pages/text_auto/text_auto'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.status_bar {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 999;
		.status_bar_title {
			margin-bottom: 30rpx;
		}
	}
</style>

