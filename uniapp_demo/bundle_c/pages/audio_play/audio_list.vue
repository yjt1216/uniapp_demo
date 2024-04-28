<template>
	<view class="content">
		<u-navbar :auto-back="true" :placeholder="true" title="音频播放"></u-navbar>
		
		<luch-audio :src="srcGet.record_url" @onError="onAudioError" :initAudio="initCb" @onPlay="audioPlay"
			:name="srcGet.call_at" :author="srcGet.call_duration" :play.sync="audioToPlay">
		</luch-audio>
		
		<view>
			<view class="title-1">音频列表：</view>
			<view class="list">
				<!-- selectedMusicIndex=index -->
				<button :class="{'item': true, 'active': index===srcIndex}" v-for="(music, index) in musicList" 
					:key="index" @click="changeMusicPlay(index)">
					{{ music.call_at }} + {{music.call_duration}}
				</button>
			</view>
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
	import luchAudio from '@/bundle_c/components/luch-audio/luch-audio.vue'
	export default { 
		components:{
			luchAudio
		},
		data() {
			return {
				list:[
					'https://m.sd.10086.cn/management/files/homenew/version670/home/202312131352_fz_sp_1.mp4',
					'https://m.sd.10086.cn/management/files/homenew/version670/home/202312131352_fz_sp_2.mp4'
				],
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
			srcGet() {
				return this.musicList[this.srcIndex];
			}
		},
		onLoad() {
			console.log('播放音乐list',this.musicList);
			if(this.musicList.length > 0){
				this.currentMusic = this.musicList[0];
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
				// context.onEnded(() => {
				// 	this.nextAudio();
				// })
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
