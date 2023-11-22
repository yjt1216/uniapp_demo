<!-- 视频播放 -->
<template>
	<view class="video-player">
		<view style="width: 100vw; height: 400rpx;">
		    <hic-video-player
		        :src="video_url"
		        :poster="poster"
		        title="明智之举"
		        upperRightText="VAE"></hic-video-player>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
			    video_url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
			    poster: 'http://n.sinaimg.cn/sinacn10/640/w720h720/20180624/27c7-heirxye9435927.jpg'
			}
		},
		onLoad() {
			
		},
		methods:{
			
		},
		onUnload() {
			
		}
		
	}
</script>

<style lang="scss">
	
</style>