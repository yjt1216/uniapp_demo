<template>
    <view>
		
		<nav-bar title="live"   backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
       <live-player
         :src="liveUrl"
         autoplay
         @statechange="statechange"
         @error="error"
         style="width: 300px; height: 225px;"
       />

    </view>
</template>


<script>
	import hicVideoPlayer from "bundle/components/hic-video-player/components/hic-video-player/hic-video-player";
	
    export default {
		components:{
			hicVideoPlayer	
		},
        data() {
			return {
				liveUrl: 'https://live.fanmingming.com/player/?vurl=https://livedoc.cgtn.com/500d/prog_index.m3u8'
			}
        },
        onReady() {

        },
        methods: {
            statechange(e){
                console.log('live-player code:', e.detail.code)
            },
            error(e){
                console.error('live-player error:', e.detail.errMsg)
            }
        }
    }
</script>


<style>
</style>