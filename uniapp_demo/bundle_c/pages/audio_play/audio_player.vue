<template>
	<view class="content">
		<u-navbar :auto-back="true" :placeholder="true" title="音频播放"></u-navbar>
		<audio-play :list="list"></audio-play>
		<view class="introduce"> 
			<view class="title">音频播放组件功能和入参介绍 :</view>
			<view>1. 实现切换上下首、自动播放、倍数播放、快进快退、进度条播放等</view>
			<view>2. list      【Array】   音频数据/不传无法播放		</view>
			<view>3. Seconds   【number】  快进快退秒数 - 默认15秒		</view>
			<view>4. autoNext  【Boolean】 自动播放下一首 - 默认不开启				</view>
			<view>5. autoplays 【Boolean】 进入页面是否自动播放 - 默认不开启		</view>
			<view>6. slideYes  【Boolean】 拖动进度条时开启播放 - 默认不开启		</view>
			<view>7. switAud   【Boolean】 切换上下音频开启播放 - 默认开启	</view>
			<view>8. BsNav     【Array】   倍数数据		</view>
			<view>本音频组件扩展性强，样式功能随意调整，兼容H5，微信小程序，App，建议下载示例项目，避免因图片缺失引起报错，谢谢支持~</view>
		</view>
	</view>
</template>

<script>
	/*
	list      --   音频数据: 数组格式/不传无法播放
	Seconds   --   快进快退秒数: 默认15秒
	autoNext  --   是否自动播放下一首
	autoplays --   进入页面是否自动播放 - 默认false
	slideYes  --   滑动进度条时是否开启播放 - 默认false
	switAud   --   切换上下音频是否开启播放 - 默认true
	BsNav     --   倍数数据传入/数组形式
	 
	图片功能样式，如想改动请在组件内部修改，页面中已注释 -- 逻辑根据自己需求改
	目前只测试 微信小程序和H5和APP -- 其他平台未知
	[Author:chenxin  交流vx:cxalq8-24]  
	*/
	import audioPlay from '@/bundle_c/components/audio-play/audio-play.vue'
	export default { 
		components:{
			audioPlay
		},
		data() {
			return {
				list:[
					'https://m.sd.10086.cn/management/files/homenew/version670/home/202312131352_fz_sp_1.mp4',
					'https://m.sd.10086.cn/management/files/homenew/version670/home/202312131352_fz_sp_2.mp4'
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
 .introduce{

	 padding:10rpx 25rpx;
	 .title{
		 font-size:34rpx;
	 }
	 view{
		 padding:8rpx 0rpx;
	 }
 }
</style>
