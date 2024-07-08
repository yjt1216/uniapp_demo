<template>
	<view class="camera-beauty">
		<button class="button" @tap="goRouter('image')">图片、照片美颜</button>
		<button class="button" @tap="goRouter('camera')">拍摄录像美颜</button>
		<button class="button" @tap="goRouter('pusher-custom')">直播推流美颜特效</button>
		<button class="button" @tap="goRouter('pusher-native')">直播推流虚拟背景</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods: {
			goRouter(id) {
				uni.navigateTo({
					url: `/pages_func/pages/camera_beauty/${id}`,
				});
			},
		},
	}
</script>

<style>
</style>