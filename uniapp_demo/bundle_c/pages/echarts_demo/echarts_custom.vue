
<template>
	<view>
		<view id="chart" style="width: 100%;height: 300px;"></view>
	</view>
</template>
<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {

			};
		},
		onReady() {
			this.initChart();
		},
		methods: {
			initChart() {
				let chartDom = document.getElementById("chart");
				let myChart = echarts.init(chartDom);
				const option = this.getChartOption();
				option && myChart.setOption(option);
			},
			getChartOption() {
				const dataList = [{
						name: '周一',
						value: '120'
					},
					{
						name: '周二',
						value: '200'
					},
					{
						name: '周三',
						value: '150'
					},
					{
						name: '周四',
						value: '80'
					},
					{
						name: '周五',
						value: '70'
					},
					{
						name: '周六',
						value: '110'
					},
					{
						name: '周天',
						value: '130'
					}
				]

				const option = {
					xAxis: {
						type: 'category',
						data: dataList.map(item => item.name),
						axisLabel: {
							margin: 20
						}
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							// /数据图
							data: dataList.map(item => item.value),
							type: 'bar',
							barWidth: 20,
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
										offset: 0,
										color: '#3C7AB9'
									},
									{
										offset: 1,
										color: '#3398BC'
									}
								])
							},
							z: 1,
						},
						{
							// /数据图
							data: dataList.map(item => item.value),
							type: 'bar',
							barGap: 0,
							barWidth: 20,
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
										offset: 0,
										color: '#4DACFF'
									},
									{
										offset: 1,
										color: '#44D9FC'
									}
								])
							},
							z: 1,
						},
						{
							// 最上面菱形
							data: dataList.map(item => item.value),
							type: 'pictorialBar',
							symbol: 'diamond',
							symbolSize: ['40', '30'],
							symbolPosition: 'end',
							symbolOffset: ['', '-50%'],
							itemStyle: {
								color: '#44D5FC'
							},
							z: 2
						},
						{
							// 最下面菱形
							data: dataList.map(item => item.value),
							type: 'pictorialBar',
							symbol: 'diamond',
							symbolSize: ['40', '30'],
							symbolPosition: 'start',
							symbolOffset: ['', '50%'],
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
										offset: 0,
										color: '#3C7AB9'
									},
									{
										offset: 0.5,
										color: '#3C7AB9'
									},
									{
										offset: 0.51,
										color: '#4DACFF'
									},
									{
										offset: 1,
										color: '#4DACFF'
									}
								])
							},
							z: 1
						},
					]
				};
				return option;
			}
		}
	}
</script>
