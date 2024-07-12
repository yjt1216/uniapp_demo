<template>
	<view>
		<web-view :style="{ height: pageHeight + 'px' }" :src="url" class="web">
			<cover-view class="footer-box">
				<cover-view class="share-txt" @click="readingClick">
					已阅
				</cover-view>
			</cover-view>
		</web-view>
		
		
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>

<script>
	export default {

		data() {
			return {
				pageHeight: '',
				url: '',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
			}
		},
		onLoad(options) {
			this.url = 'http://222.92.38.178:8091/view-article/fb0ece5c17a8bb2f193b0a66dc770cd4';
		},
		mounted() {
			let getWindowInfo = uni.getWindowInfo()
			this.pageHeight = getWindowInfo.screenHeight
			console.log(this.pageHeight); //屏幕高度
		},
		methods: {
			readingClick() {
				
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.ce {
		position: absolute;
		z-index: 99999;
		top: 80rpx;
		right: 150rpx;
		background-color: cadetblue;
	}

	.web {
		width: 750rpx;
		// height: calc(pageHeight);
	}
	.footer-box {
		z-index: 999999;
		position: fixed;
		color: black;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		bottom:30rpx;
		width:60%;
		height: 72rpx;
		display: flex;
		left: 20%;
		justify-content: center;
	}
	.share-txt{
		margin-right: 40rpx;
		background-color: #39C9BC;
		color: white;
	}
</style>

