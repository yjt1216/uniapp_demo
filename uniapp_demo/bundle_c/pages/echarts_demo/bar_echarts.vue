<template>
	<view>
		<u-navbar title="柱状图表" :placeholder="true" :autoBack="true"></u-navbar>
		<ui-echarts ref="echarts" :option="barOptions" canvas2d="true"></ui-echarts>
	</view>
</template>

<script>
	import linearColor from "@/sheep/mock/barColor.json";
	import * as opt from '@/sheep/mock/option.js';
	
	export default{
		data(){
			return {
				barOptions:{},
				barData:[],
			}
		},
		onLoad() {
			
		},
		onReady() {
			this.barData =  [12, 94, 62, 60];
			this.barOptions = opt['statck']['simple'];
			// this.barOptions.color = linearColor;
			// this.barOptions.series[0].data = this.barData;
			// this.barOptions.series[1].data = this.barData;
			// this.barOptions.series[2].data = this.barData;
			// console.log('渐变色',this.barOptions);
			
			
			
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
</style>