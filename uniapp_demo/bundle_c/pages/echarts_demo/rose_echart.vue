<template>
	<view>
		<u-navbar title="玫瑰图表" :placeholder="true" :autoBack="true"></u-navbar>
		<ui-echarts ref="echarts" :option="roseOptions"></ui-echarts>
	</view>
</template>

<script>
	
	import * as opt from '@/sheep/mock/option.js';
	import  echarts from '@/uni_modules/ui-echarts/static/echarts.min.js';
	export default{
		data(){
			return {
				roseOptions:{},
				roseData:[],
				linearColor:[
					["#4B65F8","#75CEFF"],
					["#B5FEED","#1ABED5"],
					["#F76B1C","#FFE483"],
					["#F65B4B","#FFDDC8"],
					["#FBF4D9","#D5A34C"],
					["#C8E1FD","#505D6F"],
					["#F76B1C","#FFE483"],
					["#F65B4B","#FFDDC8"],
					["#FBF4D9","#D5A34C"],
					["#C8E1FD","#505D6F"]
				],
			}
		},
		onLoad() {
			
		},
		onReady() {
			this.roseData = [
				{ value: 66, name: '要客服务' },
				
				{ value: 54, name: '应急行业' },
				
				{ value: 18, name: '综合服务业' },
				{ value: 20, name: '建筑行业' },
				{ value: 22, name: '交通物流' },
				
				{ value: 20, name: '卫生健康' },
				{ value: 16, name: '制造能源' },
				{ value: 14, name: '教育行业' },
				{ value: 12, name: '农业农村' },
				
				{ value: 10, name: '其他' }
			];
			
			this.roseOptions = opt['rose2']['simple'];
			
			// this.roseOptions.series.data = this.roseData;
			
			
			let newData = this.configColor(this.roseData,this.linearColor);
			
			// 打印新数组（这里仅示例说明，实际运行需要在支持echarts的环境中执行）
			console.log('新生成渐变色数据list',newData);
			
			this.roseOptions.series[0].data = newData;
			
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