<template>
	<view>
		<u-navbar title="图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		<navigator url="/bundle_c/pages/echarts_demo/ring_echarts">
			<view class="demo-li"> ring图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/bundle_c/pages/echarts_demo/rose_echart">
			<view class="demo-li"> rose图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/bundle_c/pages/echarts_demo/bar_echarts">
			<view class="demo-li"> bar图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/bundle_c/pages/echarts_demo/bar_test">
			<view class="demo-li"> bar图表 测试<text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/bundle_c/pages/echarts_demo/progress_echarts">
			<view class="demo-li"> 进度图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/bundle_c/pages/echarts_demo/map_echarts">
			<view class="demo-li"> 地图 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/bundle_c/pages/echarts_demo/mamp_echart">
			<view class="demo-li"> 地图 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
	</view>
</template>

<script>
	
	export default{
		data(){
			return {
				
			}
		},
		onLoad() {
			
		},
		onReady() {
			
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.index-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.group-title {
		font-size: 30upx;
		padding: 24upx;
		border-bottom: 1upx solid #eee;
		color: red;
	}
	
	.demo-li {
		font-size: 28upx;
		padding: 24upx;
		border-bottom: 1upx solid #eee;
		color: #18B4FE;
	}
	.demo-li .demo-tip {
		float: right;
		margin-top: 4upx;
		font-size: 24upx;
		color: gray;
	}
</style>