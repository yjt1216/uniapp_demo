<template>
	<view>
		<u-navbar title="图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		
		<navigator url="/pages_echarts/pages/ring/ring">
			<view class="demo-li"> ring图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/pages_echarts/pages/rose/rose">
			<view class="demo-li"> rose图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/pages_echarts/pages/bars/bars">
			<view class="demo-li"> bar图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/pages_echarts/pages/progress/progress">
			<view class="demo-li"> 进度图表 <text class="demo-tip"> echarts </text></view>
		</navigator>
		
		<navigator url="/pages_echarts/pages/pies/pies">
			<view class="demo-li"> 饼图表 <text class="demo-tip"> echarts </text></view>
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