<template>
	<view class="content">
		<MyTextarea ref="content" pl="请输入您想要回复的内容" :len='100' ></MyTextarea>
	</view>
</template>

<script>
	import MyTextarea from "@/components/my-textarea.vue"
	export default {
		components: {
			MyTextarea
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
