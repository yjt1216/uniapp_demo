<template>
	<view>
		<u-navbar title="柱状图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		<view class="echart-box">
			<ui-echarts ref="echarts1" :option="barOptions" canvas2d="true"></ui-echarts>
			<ui-echarts ref="echarts2" :option="barOptions2" canvas2d="true"></ui-echarts>
			<ui-echarts ref="echarts3" :option="barOptions3" canvas2d="true"></ui-echarts>
			<ui-echarts ref="echarts4" :option="barOptions4" canvas2d="true"></ui-echarts>
		</view>
		
	</view>
</template>

<script>
	import * as opt from '@/sheep/mock/option.js';
	export default{
		data(){
			return {
				barOptions:{},
				barData:[],
				barOptions2:{},
				barOptions3:{},
				barOptions4:{},
				
				colors:[
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#49FDE1' // 0% 处的颜色
						}, {
							offset: 1, color: '#28C5F6' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#74EFFF' // 0% 处的颜色
						}, {
							offset: 1, color: '#5F85FF' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#FF94D6' // 0% 处的颜色
						}, {
							offset: 1, color: '#FF7585' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#FFB269' // 0% 处的颜色
						}, {
							offset: 1, color: '#FF7A69' // 100% 处的颜色
						}],
						global: false // 缺省为 false
					}
				],
				
			}
		},
		onLoad() {
			
		},
		onReady() {
			this.barData =  [12, 94, 62, 60];
			this.barOptions = opt['singleBar']['simple'];
			
			
			
			this.barOptions.series[0].data = [12];
			this.barOptions.series[1].data = [12];
			this.barOptions.series[2].data = [12];
			
			
			
			this.barOptions2 = opt['singleBar2']['simple'];
			this.barOptions2.series[0].data = [60];
			this.barOptions2.series[1].data = [60];
			this.barOptions2.series[2].data = [60];
			
			
			this.barOptions3 = opt['singleBar3']['simple'];
			this.barOptions3.series[0].data = [94];
			this.barOptions3.series[1].data = [94];
			this.barOptions3.series[2].data = [94];
			
			
			this.barOptions4 = opt['singleBar4']['simple'];
			this.barOptions4.series[0].data = [21];
			this.barOptions4.series[1].data = [21];
			this.barOptions4.series[2].data = [21];
			
			
		},
		methods:{
			configColors(){
				var colorList = [
					['#49FDE1', '#28C5F6'],
					['#74EFFF', '#5F85FF'],
					['#FF94D6', '#FF7585'],
					['#FFB269', '#FF7A69'],
				];
				// var index = params.dataIndex;
				// if (params.dataIndex >= colorList.length) {
				// 	index = params.dataIndex - colorList.length;
				// }
				// return new echarts.graphic.LinearGradient(0, 0, 0, 1,
				// 	[{
				// 	  offset: 0,
				// 	  color: colorList[index][0]
				// 	},
				// 	{
				// 	  offset: 1,
				// 	  color: colorList[index][1]
				// 	}
				// ]);
			}
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