<template>
	<view class="index-page">
		<!-- <u-navbar title="首页" bgColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></u-navbar> -->
		<nav-bar title="首页" :back="false"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<!-- <view class="banner">
			<ad-swipers height="340rpx" :lists="bannerList"></ad-swipers>
		</view> -->
		
		
		<view class="group-title">功能示例</view>
		
		
		<navigator url="/bundle/pages/mescroll_swiper/mescroll_swiper">
			<view class="demo-li">轮播图+商品列表 吸顶悬浮<text class="demo-tip">切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		<navigator url="/bundle/pages/nurse_order/nurse_order">
			<view class="demo-li">护士订单<text class="demo-tip">可整体滑动 切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/service_order/service_order">
			<view class="demo-li">服务订单<text class="demo-tip"> 切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/loading_page/loading_page">
			<view class="demo-li">数据list 刷新加载<text class="demo-tip"> z-pagings</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/action_sheet/action_sheet">
			<view class="demo-li">action sheet<text class="demo-tip"> 选择 </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/sign_page/vertical_sign">
			<view class="demo-li">竖屏签名<text class="demo-tip"> 签名界面</text></view>
		</navigator>
		<navigator url="/bundle/pages/sign_page/landscape_sign">
			<view class="demo-li">横屏签名<text class="demo-tip"> 签名界面</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/upload_img/upload_img">
			<view class="demo-li">上传照片<text class="demo-tip"> 证件照</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/list_input/list_input">
			<view class="demo-li">input<text class="demo-tip"> 循环创建input 底部签名 返回文件路径</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/appraise_form/appraise_form">
			<view class="demo-li">评估表单<text class="demo-tip"> 填空 单选 多选 签名</text></view>
		</navigator>
		
		<navigator url="/bundle/pages/header_footer/header_footer">
			<view class="demo-li">头部底部<text class="demo-tip"> 头部 数据列表list 底部 </text></view>
		</navigator>
		
		<navigator url="/pages/location/location">
			<view class="demo-li">地图定位<text class="demo-tip"> QQ 地图定位功能 </text></view>
		</navigator>
		<navigator url="/bundle/pages/take_photo/take_photo">
			<view class="demo-li">take_photo<text class="demo-tip"> take photo </text></view>
		</navigator>
		<navigator url="/bundle/pages/tag_page/tag-page">
			<view class="demo-li">tag_page<text class="demo-tip"> tag </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/files_upload/files_upload">
			<view class="demo-li">files upload<text class="demo-tip"> files upload </text></view>
		</navigator>
		<navigator url="/bundle/pages/pop_box/pop_box">
			<view class="demo-li"> pop_box<text class="demo-tip"> pop view </text></view>
		</navigator>
		<navigator url="/bundle/pages/card_list/card_list">
			<view class="demo-li"> 卡片list<text class="demo-tip"> 卡片 </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/video_player/video_player">
			<view class="demo-li"> video player<text class="demo-tip"> video_player </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/user-intro/user-intro">
			<view class="demo-li"> user-intro<text class="demo-tip"> user-intro </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/video_live/video_live">
			<view class="demo-li"> video live <text class="demo-tip"> 直播 测试 </text></view>
		</navigator>
		
		<navigator url="/bundle/pages/nurse_auth/nurse_auth">
			<view class="demo-li"> nurse auth <text class="demo-tip"> 资质热症 </text></view>
		</navigator>
		<navigator url="/bundle/pages/form_page/form_page">
			<view class="demo-li"> form_page <text class="demo-tip"> form 校验 </text></view>
		</navigator>
		
		<y-tabbar ref="tabbar" native></y-tabbar>
		
	</view>
</template>

<script>
	
	export default {
		data(){
			return {
				bannerList:[
					{
						image: "https://didi.depin.tech/storage/file/2019/09/29/5d904d42e3222.jpg"
					},
					{
						image: "https://didi.depin.tech/storage/file/2019/09/29/5d90512bccb32.jpg"
					}
				],
				bannerImages:[]
			}
		},
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