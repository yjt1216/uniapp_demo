<template>
	<view>
		<u-navbar title="进度图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		<view class="echart-box">
			<ui-echarts ref="leftEcharts" :option="leftOptions"></ui-echarts>
			<ui-echarts ref="rightEcharts" :option="rightOptions"></ui-echarts>
		</view>
	</view>
</template>

<script>
	
	import * as opt from '@/pages_echarts/static/js/option.js';
	import uiEcharts from "@/pages_echarts/components/ui-echarts/components/ui-echarts/ui-echarts.vue";
	import  echarts from '@/pages_echarts/components/ui-echarts/static/echarts.min.js';
	export default{
		components:{
			uiEcharts
		},
		data(){
			return {
				leftOptions:{},
				rightOptions:{},
			}
		},
		onLoad() {
			
		},
		onReady() {
			let leftData = [30];
			let rightData = [70];
			
			let leftTitles = [
				{
				    text: '新增注册',
				    x: 'center',
				    top: '50%',
				    textStyle: {
				        color: '#7AC000',
				        fontSize: 10,
				        fontWeight: '300',
				    },
				},
				{
				    text: '30%',
				    x: 'center',
					top:'45%',
				    textStyle: {
				        fontSize: 12,
				        color: '#505D6F',
				        fontFamily: 'DINAlternate-Bold, DINAlternate',
				        foontWeight: '500',
				    },
				},
			];
			let rightTitles = [
				{
				    text: '原有数量',
				    x: 'center',
				    top: '50%',
				    textStyle: {
				        color: '#FF8D42',
				        fontSize: 10,
				        fontWeight: '300',
				    },
				},
				{
				    text: '70%',
				    x: 'center',
					top:'45%',
				    textStyle: {
				        fontSize: 12,
				        color: '#505D6F',
				        fontFamily: 'DINAlternate-Bold, DINAlternate',
				        foontWeight: '500',
				    },
				},
			];
			this.leftOptions = opt['leftProgress']['simple'];
			this.leftOptions.series[0].data = leftData;
			this.leftOptions.title = leftTitles;
			
			this.rightOptions = opt['rightProgress']['simple'];
			this.rightOptions.series[0].data = rightData;
			this.rightOptions.title = rightTitles;
			
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.echart-box{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 30rpx;
	}
</style>