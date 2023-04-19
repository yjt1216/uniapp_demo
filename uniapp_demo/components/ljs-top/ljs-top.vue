<template>
	<view class="ljs-top" :style="'height: calc('+statusBarHeight+'px + '+topHeight+'rpx)'">
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
				<view @click="goBack" class="back" v-if="myback.show">
					<!-- <view class="img">{{myback.imgUrl}}</view> -->
					<image class="img" :src="myback.imgUrl"></image>
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
	import index from './index.js'
	export default index
</script>

<style lang="scss" scoped>
	@import "./index.scss";
</style>
