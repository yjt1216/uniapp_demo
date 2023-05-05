<template>
	<view class="index-page">
		<nav-bar title="首页" :back="false"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<view class="group-title">功能示例</view>
		
		<navigator url="/pages/text_auto/text_auto">
			<view class="demo-li">段落展开缩放</view>
		</navigator>
		<navigator url="/bundle/pages/mescroll_swiper/mescroll_swiper">
			<view class="demo-li">轮播图+商品列表 吸顶悬浮<text class="demo-tip">切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		<navigator url="/bundle/pages/nurse_order/nurse_order">
			<view class="demo-li">护士订单<text class="demo-tip">可整体滑动 切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/service_order/service_order">
			<view class="demo-li">服务订单<text class="demo-tip"> 切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/form_page/form_page">
			<view class="demo-li">表单<text class="demo-tip"> 表单界面</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/upload_img/upload_img">
			<view class="demo-li">上传照片<text class="demo-tip"> 证件照</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/list_input/list_input">
			<view class="demo-li">input<text class="demo-tip"> 循环创建input</text></view>
		</navigator>
		
	</view>
</template>

<script>
	
	export default {
		
		onLoad() {
			uni.setNavigationBarTitle({
				title: 'mescroll ('+ uni.getSystemInfoSync().platform + ')'
			})
		}
		
	}
</script>

<style lang="scss">
	.index-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.group-title {
		font-size: 30upx;
		padding: 24upx;
		border-bottom: 1upx solid #eee;
		color: red;
	}
	
	.demo-li {
		font-size: 28upx;
		padding: 24upx;
		border-bottom: 1upx solid #eee;
		color: #18B4FE;
	}
	.demo-li .demo-tip {
		float: right;
		margin-top: 4upx;
		font-size: 24upx;
		color: gray;
	}
	
</style>