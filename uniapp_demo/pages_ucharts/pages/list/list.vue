<template>
	<view>
		<u-navbar title="图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		<navigator url="/pages_ucharts/pages/demo/demo">
			<view class="demo-li"> 图表 <text class="demo-tip"> ucharts </text></view>
		</navigator>
		
		<navigator url="/pages_ucharts/pages/operate/operate_demo">
			<view class="demo-li"> 经营统计 <text class="demo-tip"> table + charts </text></view>
		</navigator>
		
		<navigator url="/pages_ucharts/pages/bars/bars">
			<view class="demo-li"> bar图表 <text class="demo-tip"> ucharts </text></view>
		</navigator>
		
		<navigator url="/pages_ucharts/pages/ring/chart_ring">
			<view class="demo-li"> 圆环图表 <text class="demo-tip"> ucharts </text></view>
		</navigator>
		
		<navigator url="/pages_ucharts/pages/pie/chart_pie">
			<view class="demo-li"> 饼状图表 <text class="demo-tip"> ucharts </text></view>
		</navigator>
		
		<navigator url="/pages_ucharts/pages/rose/chart_rose">
			<view class="demo-li"> 玫瑰图表 <text class="demo-tip"> ucharts 组件 </text></view>
		</navigator>
		
		<navigator url="/pages_ucharts/pages/rose/rose_native">
			<view class="demo-li"> 玫瑰图表 <text class="demo-tip"> ucharts 原生 </text></view>
		</navigator>
		
		
		<navigator url="/pages_ucharts/pages/map/chart_map">
			<view class="demo-li"> 地图图表1 <text class="demo-tip"> ucharts </text></view>
		</navigator>
		<navigator url="/pages_ucharts/pages/map/china_map">
			<view class="demo-li"> 地图图表2 <text class="demo-tip"> ucharts </text></view>
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