<template>
	<view class="ch-record-audio" :style="{width:width}">
		<!-- 录音组件 -->
		<recordBox v-if="!src" :max="max" @confirm="confirm"></recordBox>
		<!-- 音频播放组件 -->
		<playBox v-else :title="title" :src="src" :duration="time" @reset="reset"></playBox>
	</view>
</template>

<script>
// 录音组件
import recordBox from './components/record-box.vue'
// 音频播放组件
import playBox from './components/play-box.vue'

export default {
	components: { recordBox, playBox },
	props: {
		width: {
			type: String,
			default: '100%'
		},
		// 最大录音时长
		max: {
			type: Number,
			default: 10000
		},
		// 标题
		title: {
			type: String,
			default: '新的音频'
		},
		// 音频文件路径
		url: {
			type: String,
			default: ''
		},
		// 实际录音时长, url不为空时使用
		duration: {
			type: Number,
			default: 0
		},
	},
	data() {
		return {
			src: '',
			time: 0
		}
	},
	watch: {
		url: {
			handler(nVal, oVal) {
				this.src = nVal
			},
			immediate: true
		},
		duration: {
			handler(nVal, oVal) {
				this.time = nVal
			},
			immediate: true
		}
	},
	methods: {
		confirm(e) {
			console.log('==========', e);
			this.src = e.path
			this.time = e.duration
			let data = {
				title: this.title,
				...e
			}
			this.$emit('confirm', data)
		},
		reset() {
			this.src = ''
			this.time = 0
		},
		get() {
			return {
				src: this.src,
				duration: this.time,
				title: this.title,
			}
		}
	},
}
</script>

<style lang="scss">
.ch-record-audio {}
</style>