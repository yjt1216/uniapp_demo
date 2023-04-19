<!-- 服务协议 / 隐私协议 -->
<template>
	<view>
		<view class="main">
			<web-view :webview-styles="webviewStyles" src="https://didi.depin.tech/view-article/f7230993648edb553b03cc8192c63392"></web-view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				content: "https://didi.depin.tech/view-article/f7230993648edb553b03cc8192c63392",
				webviewStyles:{
					progress:{
						color:'#FF3333'
					}
				}
			};
		},

		onLoad() {
			
			this.getData(0)
		},
		methods: {
			async getData(type) {
				let res = {}
				switch (type) {
					case 0: 
						uni.setNavigationBarTitle({
							title: '服务协议'
						});
						res = 'https://didi.depin.tech/view-article/f7230993648edb553b03cc8192c63392';
						break;
					case 1:
						uni.setNavigationBarTitle({
							title: '隐私政策'
						});
						res = 'https://didi.depin.tech/view-article/d49af337fa58376cd3bfb6ab6f9d396b';
						break;
					
				}
				if(res.code == 1) {
					 this.content = res;
				}
			}

		}
	};
</script>
<style lang="scss">

	.main {
		padding: 10rpx;
	}
</style>
