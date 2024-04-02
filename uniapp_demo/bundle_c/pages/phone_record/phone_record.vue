<!-- 
	1. 组件props参数，在文章底部，可参考进行配置
	2. 获取最终音频的方式有2种，一种是监听@confirm事件,还有一种是直接refs调用get函数获取(下方都有示例)
	3. 组件默认100%宽度，可外层套view设置宽度
	4. 录音组件和播放音频组件是分开的，意味着您可以不要播放组件,只要录音组件
-->

<template>
	<view>
		<u-navbar :autoBack="true" title="电话录音" :placeholder="true"></u-navbar>
		<!-- 录音/播放组件(示例一) -->
		<view class="content">
			<view class="title">基础示例</view>
			<Record
			ref="record"
			:max="10000"
			title="新录音"
			@confirm="emitFile"
			/>
			<button @tap="getFile('record')">手动获取音频</button>
		</view>
		<!-- END -->
		
		<!-- 录音/播放组件(示例二)-->
		<view class="content">
			<view class="title">限制时长(3秒后自动结束)</view>
			<Record
			ref="record2"
			:max="3000"
			title="录音仅3秒"
			@confirm="emitFile"
			/>
			<button @tap="getFile('record2')">手动获取音频</button>
		</view>
		<!-- END -->
	</view>
</template>

<script>
	
// 引入组件(注意路径！)
import Record from '@/bundle_c/components/record/main.vue'

export default {
	components: { Record },
	data() {
		return {}
	},
	
	methods: {
		
		/**
		 * 获取录音结果(必须录音完成后,才能获取到!)
		 * @description refs方式,拿到音频文件临时地址
		 * @param {String} type - ref标识
		 * @return void 
		 */
		getFile(type) {
			// src: 录制好的音频临时路径(可用于上传服务器)
			// duration: 音频时长(秒)
			// title: 音频名称
			
			// 调用组件get方法获取
			let data = this.$refs[type].get()//动态refs
			uni.showModal({
				title: 'Refs 方式',
				content: JSON.stringify(data)
			})
		},
		
		/**
		 * 监听"录音完成"或"结束录音"
		 * @description 获取结果,拿到音频文件临时地址
		 * @param {Object} data - 结果
		 * @return void
		 */
		emitFile(data) {
			// path: 录制好的音频临时路径(可用于上传服务器)
			// duration: 音频时长(秒)
			// title: 音频名称
			
			// console.log(data)
			uni.showModal({
				title: '@confirm 方式',
				content: JSON.stringify(data)
			})
		},
		
	}
}
</script>

<style scoped>
/* 根节点 */
.content {
	/* 组件默认100%宽度,可在此规定宽度 */
	width: 90%;
	margin: 0 auto;
	margin-top: 30rpx;
}
/* END */

.title {
	font-weight: bold;
	font-size: 40rpx;
	margin-bottom: 30rpx;
}
</style>