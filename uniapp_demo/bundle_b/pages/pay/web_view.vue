<template>
	<web-view :src="url"></web-view>
</template>
 
<script>
export default {
	data() {
		return {
		  url: 'http://data.szdepin.com/web/wechat/webAuth?app_id=2&app_name=depin_public_mp&back_url=pages%2Findex%2Findex'
		}
	},
	onLoad(item) {
		// 传入需要跳转的链接 使用web-view标签进行跳转
		this.url = decodeURIComponent(item.testUrl)
	}
}
</script>
<style></style>