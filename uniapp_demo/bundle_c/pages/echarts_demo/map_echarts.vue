<template>
	<view class="box">
		<view @click="echarts.onClick" :prop="option" :change:prop="echarts.updateEcharts" id="echartsmap" class="echarts"></view>
	</view>
</template>



<script>
	export default {
		 data() {
			return {
				bjData: [],
				option: {
					grid: {
						show: false,
						left: '5%',
						right: '10%',
						bottom: '10%',
						top: '15%',
						containLabel: true,
					},

					//地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
					//要显示散点图，必须填写这个配置
					geo: {
						show: true,
						roam: false, //是否允许鼠标滚动放大，缩小
						map: 'china',
						label: {
							//图形上的文本标签，可用于说明图形的一些数据信息
							show: false, //是否显示文本
							color: '#CCC', //文本颜色
						},
						itemStyle: {
							//地图区域的多边形 图形样式。 默认样试。
							areaColor: '#2B2D3E', //地图区域的颜色。
							borderColor: '#4F87F8', //边框线
							emphasis: {
								areaColor: '#fff',
							},
						},
						emphasis: {
							//高亮状态下的多边形和标签样式。
							label: {
								//文本
								color: '#ADA',
							},
							itemStyle: {
								//区域
								areaColor: '#F60',
							},
						},
					},
					tooltip: {
						show: true,
						formatter: `{b0}: {c0}`
					},

					//是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
					visualMap: {
						type: 'piecewise',
						pieces: [{
								gt: 201,
								label: '> 201',
								color: '#DE5D5F',
							},
							{
								gte: 101,
								lte: 200,
								label: '101 - 200',
								color: '#DE7152',
							},
							{
								gte: 10,
								lte: 100,
								label: '10 - 100',
								color: '#E8B63C',
							},
							{
								gte: 1,
								lt: 10,
								label: '1 - 9',
								color: '#50A3BA',
							},
						],

						min: 0, //最小值
						max: 1000, //最大值
						calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
						splitNumber: 4,
						itemSymbol: 'circle',
						piecewise: {
							show: true,
						},

						inRange: {
							color: ['#50A3BA', '#E8B63C', '#DE5D5F'], //颜色
						},
						show: true,
						textStyle: {
							color: '#fff',
							fontSize: 8,
						},
						itemWidth: 8,
						inverse: false,
						precision: 0,
						itemHeight: 8,
						align: 'left',
						textGap: 5,
						showLabel: true,
						itemSymbol: 'circle',
						itemGap: 10,
					},
					legend: {
						orient: 'vertical',
						top: 'bottom',
						left: 'right',
						data: ['pm2.5'],
						textStyle: {
							color: '#fff',
						},
					},
					series: [{
						type: 'effectScatter', //样试
						coordinateSystem: 'geo', //该系列使用的坐标系
					 	data: [{
						 	name: "青岛市",
						 	value: [120.37, 36.0944, 110]
						 }],
						itemStyle: {
							//样试。
							normal: {
								//默认样试
								color: '#d6f628',
							},
						},
						zoom: 0.1,
						aspectScale: 0.1,
						roam: false,
						// roam: false,
						label: {
							show: true,
							fontSize: 10,
							normal: {
								show: false,
							},
							emphasis: {
								show: true,
							},
						},
						//标记的大小,可以设置数组或者函数返回值的形式
						symbolSize: function(val) {
							// return val[2] *10;
							return 8
						},
						rippleEffect: {
							//涟漪特效相关配置。
							brushType: 'stroke', //波纹的绘制方式
						},
						hoverAnimation: true, //鼠标移入放大圆
					}, ],
				}
			}
		},
	 methods: {}
	}
</script>
<script module="echarts" lang="renderjs">

	const jsonData = require('../../common/china.json');
	var myChart
	export default {
		mounted() {
			if (typeof window.echarts === 'function') {
				this.mYChartmap()
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				script.src = 'static/echarts.js'
				script.onload = this.mYChartmap.bind(this)
				document.head.appendChild(script)

			}
		},
		methods: {
			mYChartmap() {
				myChart = echarts.init(document.getElementById('echartsmap'))
				echarts.registerMap('china', jsonData)
				var option = {
					grid: {
						show: false,
						left: '5%',
						right: '10%',
						bottom: '10%',
						top: '15%',
						containLabel: true,
					},

					//地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
					//要显示散点图，必须填写这个配置
					geo: {
						show: true,
						roam: false, //是否允许鼠标滚动放大，缩小
						map: 'china',
						label: {
							//图形上的文本标签，可用于说明图形的一些数据信息
							show: false, //是否显示文本
							color: '#CCC', //文本颜色
						},
						itemStyle: {
							//地图区域的多边形 图形样式。 默认样试。
							areaColor: '#2B2D3E', //地图区域的颜色。
							borderColor: '#4F87F8', //边框线
							emphasis: {
								areaColor: '#fff',
							},
						},
						emphasis: {
							//高亮状态下的多边形和标签样式。
							label: {
								//文本
								color: '#ADA',
							},
							itemStyle: {
								//区域
								areaColor: '#F60',
							},
						},
					},
					//是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
					visualMap: {
						type: 'piecewise',
						pieces: [{
								gt: 201,
								label: '> 201',
								color: '#DE5D5F',
							},
							{
								gte: 101,
								lte: 200,
								label: '101 - 200',
								color: '#DE7152',
							},
							{
								gte: 10,
								lte: 100,
								label: '10 - 100',
								color: '#E8B63C',
							},
							{
								gte: 1,
								lt: 10,
								label: '1 - 9',
								color: '#50A3BA',
							},
						],

						min: 0, //最小值
						max: 1000, //最大值
						calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
						splitNumber: 4,
						itemSymbol: 'circle',
						piecewise: {
							show: true,
						},

						inRange: {
							color: ['#50A3BA', '#E8B63C', '#DE5D5F'], //颜色
						},

						show: true,

						textStyle: {
							color: '#fff',
							fontSize: 8,
						},
						itemWidth: 8,
						inverse: false,
						precision: 0,
						itemHeight: 8,
						align: 'left',
						textGap: 5,
						showLabel: true,
						itemSymbol: 'circle',
						itemGap: 10,
					},
					legend: {
						orient: 'vertical',
						top: 'bottom',
						left: 'right',
						data: ['pm2.5'],
						textStyle: {
							color: '#fff',
						},
					},
					series: [{
						type: 'effectScatter', //样试
						coordinateSystem: 'geo', //该系列使用的坐标系
						data: [],
					 	itemStyle: {
							//样试。
							normal: {
								//默认样试
								color: '#d6f628',
							},
						},
						// roam: false,
						label: {
							show: true,
							fontSize: 10,
							normal: {
								show: false,
							},
							emphasis: {
								show: true,
							},
						},
						//标记的大小,可以设置数组或者函数返回值的形式
						symbolSize: function(val) {
							// return val[2] *10;
							return 8
						},
						rippleEffect: {
							//涟漪特效相关配置。
							brushType: 'stroke', //波纹的绘制方式
						},
						hoverAnimation: true, //鼠标移入放大圆
					}, ],
				}
				myChart.setOption(option)
				myChart.on('click', function(data) {
					// console.log(data)
				})
			},
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				echarts.registerMap('china', jsonData)
				myChart.setOption(newValue)
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					test: 'test'
				})
			}
		}
	}
</script>

<style scoped>
	#echartsmap {
		width: 682rpx;
		height: 600rpx;
	}
</style>

