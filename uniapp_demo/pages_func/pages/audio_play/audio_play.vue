<template>
	<view class="container">
		<u-navbar :auto-back="true" :placeholder="true" title="音频播放"></u-navbar>
		
		<view>
			<view class="title-1">列表播放器：</view>
			<view class="list">
				<sc-audio-test :src="music.record_url" @onError="onAudioError" :initAudio="initCb" @onPlay="audioPlay"
					:name="music.call_at" :author="music.call_duration" :play.sync="audioToPlay">
				</sc-audio-test>
			</view>
		</view>

		<view>
			<view class="title-1">音频列表：</view>
			<view class="list">
				<button :class="{'item': true, 'active': index===srcIndex}" v-for="(music, index) in musicList" 
					:key="index" @click="srcIndex=index">
					{{ music.call_at }}
				</button>
			</view>
		</view>

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				musicList:[
					{
						call_at: "2024-04-15 13:12:05",
						call_duration: 24,
						record_url: "http://222.92.38.178:8091/storage/import/order/2024/04/15/20240415_131735_661cb86f1770f.mp3",
						release_time: "2024-04-15 13:12:38",
						start_time: "2024-04-15 13:12:14",
					},
					{
						call_at: "2024-04-15 13:11:16",
						call_duration: 9,
						record_url: "http://222.92.38.178:8091/storage/import/order/2024/04/15/20240415_134742_661cbf7eacf7d.mp3",
						release_time: "2024-04-15 13:11:38",
						start_time: "2024-04-15 13:11:29",
					}
				],
				
				srcIndex: 0,
				audioToPlay: false
				
			}
		},
		computed:{
			music(){
				return this.musicList[this.srcIndex];
			}
		},
		methods: {
			initCb(context, data) {
				// 设置属性
				// context.loop = true
				console.log('initCb data', data);
				context.onCanplay(() => {
					console.log('context duration', context.duration);
				});
				context.onEnded(() => {
					console.log('当前视频播放结束');
				})
			},
			audioPlay () {
				console.log('视频开始播放了');
			},
			nextAudio() {
				if (this.srcIndex === this.musicList.length - 1) {
					this.srcIndex = 0;
				} else {
					this.srcIndex++;
				}
			},
			audioHandle () {
				this.audioToPlay = !this.audioToPlay
			},
			onAudioError(e) {
				console.log('播放出错');
				console.log(e);
			},
			changeMusicPlay(index){
				this.srcIndex = index;
			},
		}
	}
</script>

<style lang="scss">
page{
  background: white;
}

.container {
  padding: 40rpx;
  font-size: 28rpx;
  line-height: 24rpx;
}

.title-1{
  padding: 20rpx 0;
  font-size: 28rpx;
  line-height: 24px;
}

.list{
  .item{
    padding: 20rpx 20rpx;
    font-size: 28rpx;
    background: #cecece;
    margin-bottom: 2rpx;
  }

  .active{
    background: green;
    color: white;
  }
}
</style>
