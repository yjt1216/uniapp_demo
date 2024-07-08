<template>
	<view class="func-list">
		<u-navbar title="功能" :placeholder="true" :autoBack="true"></u-navbar>
		<navigator url="/pages_func/pages/audio_play/audio_play">
			<view class="demo-li">音频播放Luch<text class="demo-tip"> audio play test </text></view>
		</navigator>
		
		<navigator url="/pages_func/pages/audio_play/audio_list">
			<view class="demo-li">音频列表<text class="demo-tip"> audio list </text></view>
		</navigator> 
		
		<navigator url="/pages_func/pages/audio_play/audio_player">
			<view class="demo-li">音频播放<text class="demo-tip"> audio player </text></view>
		</navigator>
		
		<navigator url="/pages_func/pages/native_video/native_video">
			<view class="demo-li">视频播放<text class="demo-tip"> video player </text></view>
		</navigator>
		
		<navigator url="/pages_func/pages/choose_photo/choose_photo">
			<view class="demo-li"> 选择图片after<text class="demo-tip">uni choose 压缩 </text></view>
		</navigator> 
		
		<navigator url="/pages_func/pages/camera_beauty/camera_beauty">
			<view class="demo-li"> 美颜 <text class="demo-tip"> camera_beauty </text></view>
		</navigator>
		
		<navigator url="/pages_func/pages/short_video/short_video">
			<view class="demo-li"> 短视频 <text class="demo-tip"> short_video </text></view>
		</navigator>
		
		<navigator url="/pages_func/pages/input/input">
			<view class="demo-li"> 输入框 <text class="demo-tip"> input </text></view>
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