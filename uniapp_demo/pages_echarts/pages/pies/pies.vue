<template>
	<view>
		<u-navbar title="饼状统计图" :autoBack="true" :placeholder="true"></u-navbar>
		<view class="echart-box">
			<ui-echarts ref="pieEcharts" :option="leftOptions" height="300rpx"></ui-echarts>
		</view>
	</view>
</template>

<script>
	import * as opt from '@/pages_echarts/static/js/option.js';
	import uiEcharts from "@/pages_echarts/components/ui-echarts/components/ui-echarts/ui-echarts.vue";
	import  echarts from '@/pages_echarts/components/ui-echarts/static/echarts.min.js';
	export default {
		components:{
			uiEcharts
		},
		data(){
			return {
				leftOptions:{},
				nurseRegister:{
					add_num: 33,
					add_ratio: 63.46,
					all_num: 52,
					common_ratio: 725,
					old_num: 19,
					old_ratio: 36.54,
				},
				linearColor:[
					["rgba(141, 255, 199, 1)","rgba(34, 240, 238, 1)"],
					["rgba(3, 208, 255, 1)","rgba(6, 138, 240, 1)"],
				],
			}
		},
		methods:{
			
		},
		onReady() {
			let leftData = [
				{value: this.nurseRegister.add_num,name:'新增'},
				{value: this.nurseRegister.old_num, name:'原有'}
			];
			
			this.leftOptions = opt['pie']['simple'];
			
			let newDataArray = this.configColor(leftData,this.linearColor);
			
			
			this.leftOptions.series[0].data = newDataArray;
			
		},
		methods:{
			configColor(roseData,colorPairs){
				const newArray = [];
				let colorIndex = 0; // 用于循环选取colors中的颜色对
				
				roseData.forEach((item, index) => {
				    const startColor = colorPairs[colorIndex][0];
				    const endColor = colorPairs[colorIndex][1];
								
				    // 如果到达colors末尾，则重置索引以循环使用颜色
				    if (colorIndex === colorPairs.length - 1) {
				        colorIndex = 0;
				    } else {
				        colorIndex++;
				    }
								
				    newArray.push({
				        value: item.value,
				        name: `rose${index + 1}`,
				        itemStyle: {
				            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				                { offset: 0, color: startColor },
				                { offset: 1, color: endColor }
				            ])
				        }
				    });
				});
								
				return newArray;
			}
		}
	}
</script>

<style>
</style>