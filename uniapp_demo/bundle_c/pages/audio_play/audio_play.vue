<template>
	<view class="container">
		<u-navbar :auto-back="true" :placeholder="true" title="音频播放"></u-navbar>
		
		<view>
			<view class="title-1">列表播放器：</view>
			<view class="list">
				<audio-cc v-on:ended="ended" v-on:currentChange="currentChange" :title="music.title" :src="music.src" 
					:alonePlay="alonePlay" :autoplay="autoplay" :firstCurrent="firstCurrent" :playbackRate="playbackRate">
				</audio-cc>
			</view>
		</view>

		<view>
			<view class="title-1">音频列表：</view>
			<view class="list">
				<button :class="{'item': true, 'active': index===selectedMusicIndex}" v-for="(music, index) in musicList" 
					:key="index" @click="selectedMusicIndex=index">{{ music.title }}
				</button>
			</view>
		</view>

		
	</view>
</template>

<script>
	
	import audioCc from '@/bundle_c/components/audio-cc/audio-cc.vue';
	export default {
		components:{
			audioCc
		},
		data() {
			return {
				selectedMusicIndex: 0,
				musicList: [
				  {
					src: 'http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3',
					title: '测试音频',
				  },
				  {
					src: 'http://music.163.com/song/media/outer/url?id=447925558.mp3',
					title: '你',
				  },
				  {
					src: 'https://www.cambridgeenglish.org/images/153149-movers-sample-listening-test-vol2.mp3',
					title: '晚风',
				  },
				  {
					src:'https://www.cambridgeenglish.org/images/506891-a2-key-for-schools-listening-sample-test.mp3',
					title:'qita'
				  },
				  {
					src: 'https://mpge.5nd.com/2022/2022-6-15/3277704/1.mp3',
					title: '有一个姑娘',
				  },
				],
				firstCurrent: 4.1,
				autoplay: false,
				autoplayNext: false,
				playbackRate: 1.0,
				alonePlay: false
			}
		},
		computed:{
			music(){
				return this.musicList[this.selectedMusicIndex]
			}
		},
		methods: {
			ended(){
				if (this.autoplayNext) {
					this.selectedMusicIndex === (this.musicList.length - 1) ? this.selectedMusicIndex = 0: this.selectedMusicIndex++
				}
			},
			currentChange(current){
				console.info('进度记录', current)
			}
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
