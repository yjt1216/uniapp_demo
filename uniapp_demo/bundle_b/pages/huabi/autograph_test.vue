<template>
	<view>
		<Autograph
		:orientation="orientation"
		@finish="finish"
		/>
	</view>
</template>

<script>
// 引入组件
import Autograph from '@/bundle_b/components/autograph/autograph.vue'
export default {
	components: { Autograph },
	data() {
		return {
			// 签字板方向(默认纵向)
			// abeam:横向 | portrait:纵向
			orientation: 'abeam'
		}
	},
	methods: {
		
		/**
		 * 点击完成
		 * @description 返回签名结果
		 * @param {String} e - 在H5平台下为base64编码
		 * @return void
		 */
		finish(e){
			// 您可以去这个网站http://www.jsons.cn/img2base64/
			// 将base64转为图片查看一下
			console.log(e)
			// 你也可以将base64,直接通过<img>标签来显示
			// 大部分情况下,都是将其base64转为Blob对象,发送给后端接口
			// base64 -> Blob 教程: https://wangjiabin.blog.csdn.net/article/details/124392583
			// 主要是看后端需要什么数据格式,然后处理就行了,总之这个base64绝对是完美的处理方案。
		}
	}
}
</script>

<style scoped>

</style>