<template>
	<view class="func-list">
		<u-navbar title="自定义" :placeholder="true" :autoBack="true"></u-navbar>
		<navigator url="/pages_custom/pages/appraise_form/appraise_form">
			<view class="demo-li">评估表单<text class="demo-tip"> 填空 单选 多选 签名</text></view>
		</navigator> 
		
		<navigator url="/pages_custom/pages/filter_date/filter_date">
			<view class="demo-li"> 筛选日期 <text class="demo-tip"> filter </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/header_footer/header_footer">
			<view class="demo-li">头部底部<text class="demo-tip"> 头部 数据列表list 底部 </text></view>
		</navigator>
		 
		 
		 <navigator url="/pages_custom/pages/verification/verification">
		 	<view class="demo-li">图形验证码<text class="demo-tip"> verification </text></view>
		 </navigator>
		 
		<!-- <navigator url="/pages_custom/pages/online_consult/online_consult">
			<view class="demo-li"> 切换咨询时段 <text class="demo-tip"> 七天一组 </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/choose_photo/choose_photo">
			<view class="demo-li"> 选择图片after<text class="demo-tip">uni choose 压缩 </text></view>
		</navigator> 
		
		<navigator url="/pages_custom/pages/pop_box/pop_box">
			<view class="demo-li"> pop_box<text class="demo-tip"> 弹窗 </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/keyboard_pop/keyboard_pop">
			<view class="demo-li"> 键盘弹框顶起底部空间<text class="demo-tip"> keyboard </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/list_h/list_h">
			<view class="demo-li"> list h<text class="demo-tip"> 水平滚动 </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/list_h/list_water">
			<view class="demo-li"> list water<text class="demo-tip"> 瀑布流 </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/list_h/list_left">
			<view class="demo-li"> list left<text class="demo-tip"> 左侧tabs </text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/list_input/list_input">
			<view class="demo-li">input<text class="demo-tip"> 循环创建input 底部签名 返回文件路径</text></view>
		</navigator> -->
		
		<navigator url="/pages_custom/pages/loading_page/loading_page">
			<view class="demo-li">数据list 刷新加载<text class="demo-tip"> z-pagings</text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/mescroll_swiper/mescroll_swiper">
			<view class="demo-li">轮播图+商品列表 吸顶悬浮<text class="demo-tip">切换tab刷新列表,监听滚动实现</text></view>
		</navigator>
		
		<navigator url="/pages_custom/pages/qr_code/qr_code">
			<view class="demo-li"> 二维码生成 <text class="demo-tip"> QR code </text></view>
		</navigator> 
		
		<navigator url="/pages_custom/pages/pop_box/pop_code">
			<view class="demo-li"> 二维码弹框 <text class="demo-tip"> QR code </text></view>
		</navigator>
		
		
		<navigator url="/pages_custom/pages/table_sort/table_sort">
			<view class="demo-li"> 表格 <text class="demo-tip"> table </text></view>
		</navigator>
		
		
	</view>
</template>

<script>
</script>

<style lang="scss">
	
	.index-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
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