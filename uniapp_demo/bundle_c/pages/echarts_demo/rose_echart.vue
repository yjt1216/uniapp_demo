<template>
	<view>
		<u-navbar title="玫瑰图表" :placeholder="true" :autoBack="true"></u-navbar>
		<ui-echarts ref="echarts" :option="roseOptions"></ui-echarts>
	</view>
</template>

<script>
	import linearColor from "@/sheep/mock/colors.json";
	import * as opt from '@/sheep/mock/option.js';
	export default{
		data(){
			return {
				roseOptions:{},
				roseData:[],
			}
		},
		onLoad() {
			console.log('渐变色',linearColor);
		},
		onReady() {
			this.roseData = [
				{ value: 30, name: '要客服务' },
				
				{ value: 28, name: '应急行业' },
				
				{ value: 26, name: '综合服务业' },
				{ value: 24, name: '建筑行业' },
				{ value: 22, name: '交通物流' },
				
				{ value: 18, name: '卫生健康' },
				{ value: 16, name: '制造能源' },
				{ value: 14, name: '教育行业' },
				{ value: 12, name: '农业农村' },
				
				{ value: 10, name: '其他' }
			];
			this.roseOptions = {
				color:linearColor,
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b}: {c} ({d}%)'
				},
				title: {
					text: '2673682',
					left: 'center',
					top: '50%',
					textStyle: {
						textAlign: 'center',
						fill: '#505D6F',
						fontSize: 12,
						fontWeight: 400
					}
				},
				graphic: {
					type: 'text',
					left: 'center',
					top: '45%',
					style: {
						text: '行业总数',
						textAlign: 'center',
						fill: '#505D6F',
						fontSize: 15
					}
				},
				series: [
					{
						type: 'pie',
						// radius: [50, 150],
						radius: [50, 120],
						center: ['50%', '50%'],
						roseType: 'area',
						itemStyle: {
							borderRadius: 8
						},
						label: {
							//alignTo: 'edge',
							formatter: '{name|{b}}\n{time|{c} %}',
							lineHeight: 15,
							rich: {
								time: {
									fontSize: 10,
									color: '#999'
								}
							},
							normal: {
								show: true,
								position: 'inside', //标签的位置
								formatter: "{d}%",
								textStyle: {
									color: '#fff',
								}
							},
							
						},
						data: this.roseData,
					}
				]
			};
		},
		methods:{
			
		}
	}
</script>

<style>
</style>