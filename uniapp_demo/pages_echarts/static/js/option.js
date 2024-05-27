import  echarts from '@/pages_echarts/components/ui-echarts/static/echarts.min.js';

// 在这个例子中，{b} 会被替换成数据项的 name，{c} 会被替换成数据项的 value，{d} 会被替换成数据项的占比

// 南丁格尔图表
export const rose = {
	simple: {
		// tooltip: {
		// 	trigger: 'item',
		// 	// formatter: '{a} <br/>{b}: {c} ({d}%)'
		// 	formatter: '{d}%'
		// },
		title: {
			text: '2673682',
			left: 'center',
			top: '50%',
			textStyle: {
				textAlign: 'center',
				fill: '#333',
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
				fill: '#333',
				fontSize: 15
			}
		},
		series: [
			{
				type: 'pie',
				radius: [50, 150],
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
				data: [                        
					{ value: 45, name: '要客服务' },
					
					{ value: 32, name: '应急行业' },
					
					{ value: 22, name: '综合服务业' },
					{ value: 18, name: '建筑行业' },
					{ value: 25, name: '交通物流' },
					
					{ value: 32, name: '卫生健康' },
					{ value: 30, name: '制造能源' },
					{ value: 28, name: '教育行业' },
					{ value: 26, name: '农业农村' },
					
					{ value: 19, name: '其他' }
				]
			}
		]
	}
};

// 柱状统计图表 立体 + 渐变色
export const statck = {
	simple:{
		grid: {
		    left: '5%',
		    right: '5%',
		    top: '5%',
		    bottom: '5%',
		    containLabel: true,
			height:155
		},
		// tooltip: {
		//     trigger: 'item',
		//     formatter: function (parms) {
		//         return parms.marker + " " + parms.name + "：" + parms.value + "万元";
		//     }
		// },
		xAxis: {
		    type: 'category', // category(坐标轴类型)
		    axisTick: { // 坐标轴刻度相关配置
		        show: false // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
				show:false,
		        lineStyle: { // 坐标轴轴线样式
		            color: 'rgba(255,255,255,0.15)' // 坐标轴轴线颜色
		        }
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
				show:false,
		        color: '#ffffff',
		        fontSize: 14,
		        margin: 20
		    }
		},
		yAxis: {
		    type: 'value', // value(数值轴,适用于连续数据)
		    axisTick: { // 坐标轴刻度相关配置
		        show: false  // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        show: false // 是否显示坐标轴轴线
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
				show:false,
		        color: '#ffffff',
		        fontSize: 14
		    },
		    splitLine: { // 坐标轴在 grid 区域中的分隔线
		        lineStyle: { // 分割线配置
		            color: 'rgba(255,255,255,0.15)' // 分割线颜色
		        }
		    }
		},
		series: [
		    // 底部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar", // pictorialBar(象形柱图)
		        label: { // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
		            show: false, //是否显示标签
		            position: ['17', '-30'], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
		            color: '#01E4FF',
		            fontSize: 14
		        },
		        symbolSize: [20, 20], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
		        symbolOffset: [0, 10], // 图形相对于原本位置的偏移
		        z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
		        itemStyle: { // 图形样式
		            normal: {
		    			color: function (params) {
							console.log('bottom打印渐变色配置',params);
		    				var colorList = [
		    					['#49FDE1', '#28C5F6'],
		    					['#74EFFF', '#5F85FF'],
		    					['#FF94D6', '#FF7585'],
		    					['#FFB269', '#FF7A69'],
		    				];
		    				var index = params.dataIndex;
		    				if (params.dataIndex >= colorList.length) {
		    					index = params.dataIndex - colorList.length;
		    				}
		    				return new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    					[{
		    					  offset: 0,
		    					  color: colorList[index][0]
		    					},
		    					{
		    					  offset: 1,
		    					  color: colorList[index][1]
		    					}
		    				]);
		    			}
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 中间的长方形柱状图(柱状图):bar
		    {
		        type: 'bar', // 柱状图
		        barWidth: 20, // 柱条的宽度,不设时自适应
		        barGap: '0%', // 柱子与柱子之间的距离
		        itemStyle: { // 图形样式
		            normal: {
		    			color: function (params) {
		    				var colorList = [
		    					['#49FDE1', '#28C5F6'],
		    					['#74EFFF', '#5F85FF'],
		    					['#FF94D6', '#FF7585'],
		    					['#FFB269', '#FF7A69'],
		    				];
		    				var index = params.dataIndex;
							console.log('center打印渐变色配置',params);
		    				if (params.dataIndex >= colorList.length) {
		    					index = params.dataIndex - colorList.length;
		    				}
		    				return new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    					[{
		    					  offset: 0,
		    					  color: colorList[index][0]
		    					},
		    					{
		    					  offset: 1,
		    					  color: colorList[index][1]
		    					}
		    				]);
		    			}
				
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 顶部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar",
		        symbolSize: [20, 20],
		        symbolOffset: [0, -10],
		        z: 12,
		        symbolPosition: "end",
		        itemStyle: {
		            normal: {
		    			color: function (params) {
		    				var colorList = [
		    					['#49FDE1', '#28C5F6'],
		    					['#74EFFF', '#5F85FF'],
		    					['#FF94D6', '#FF7585'],
		    					['#FFB269', '#FF7A69'],
		    				];
		    				var index = params.dataIndex;
							console.log('top打印渐变色配置',params);
		    				if (params.dataIndex >= colorList.length) {
		    					index = params.dataIndex - colorList.length;
		    				}
		    				return new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    					[{
		    					  offset: 0,
		    					  color: colorList[index][0]
		    					},
		    					{
		    					  offset: 1,
		    					  color: colorList[index][1]
		    					}
		    				]);
		    			}
				
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    }
		]
	}
	
};

export const statck2 = {
	simple: {
		grid: {
		    left: '5%',
		    right: '5%',
		    top: '5%',
		    bottom: '5%',
		    containLabel: true,
			  height:155
		},
		xAxis: {
		    type: 'category', // category(坐标轴类型)
		    axisTick: { // 坐标轴刻度相关配置
		        show: false // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
				show:false,
		        lineStyle: { // 坐标轴轴线样式
		            color: 'rgba(255,255,255,0.15)' // 坐标轴轴线颜色
		        }
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
				show:false,
		        color: '#ffffff',
		        fontSize: 14,
		        margin: 20
		    }
		},
		yAxis: {
		    type: 'value', // value(数值轴,适用于连续数据)
		    max: 230,
		    axisTick: { // 坐标轴刻度相关配置
		        show: false  // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        show: false // 是否显示坐标轴轴线
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
				show:false,
		        color: '#ffffff',
		        fontSize: 14
		    },
		    splitLine: { // 坐标轴在 grid 区域中的分隔线
		        lineStyle: { // 分割线配置
		            color: 'rgba(255,255,255,0.15)' // 分割线颜色
		        }
		    }
		},
		series: [
		   
		    // 底部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar", // pictorialBar(象形柱图)
		        label: { // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
		            show: false, //是否显示标签
		            position: ['17', '-30'], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
		            color: '#01E4FF',
		            fontSize: 14
		        },
		        symbolSize: [20, 20], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
		        symbolOffset: [0, 10], // 图形相对于原本位置的偏移
		        z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
		        itemStyle: { // 图形样式
		            normal: {
		    			color: function (params) {
							console.log('bottom打印渐变色配置',params);
		    				var colorList = [
		    					['#49FDE1', '#28C5F6'],
		    					['#74EFFF', '#5F85FF'],
		    					['#FF94D6', '#FF7585'],
		    					['#FFB269', '#FF7A69'],
		    				];
		    				var index = params.dataIndex;
		    				if (params.dataIndex >= colorList.length) {
		    					index = params.dataIndex - colorList.length;
		    				}
		    				return new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    					[{
		    					  offset: 0,
		    					  color: colorList[index][0]
		    					},
		    					{
		    					  offset: 1,
		    					  color: colorList[index][1]
		    					}
		    				]);
		    			}
				
		    		},
		        },
		        data: [12, 93, 62, 63]
		    },
		    // 中间的长方形柱状图(柱状图):bar
		    {
		        type: 'bar', // 柱状图
		        barWidth: 20, // 柱条的宽度,不设时自适应
		        barGap: '0%', // 柱子与柱子之间的距离
		        backgroundColor:"#FFFFFF",
		        itemStyle: { // 图形样式
		            normal: {
		    			color: function (params) {
		    				var colorList = [
		    					['#49FDE1', '#28C5F6'],
		    					['#74EFFF', '#5F85FF'],
		    					['#FF94D6', '#FF7585'],
		    					['#FFB269', '#FF7A69'],
		    				];
		    				var index = params.dataIndex;
		    				if (params.dataIndex >= colorList.length) {
		    					index = params.dataIndex - colorList.length;
		    				}
		    				return new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    					[{
		    					  offset: 0,
		    					  color: colorList[index][0]
		    					},
		    					{
		    					  offset: 1,
		    					  color: colorList[index][1]
		    					}
		    				]);
		    			}
				
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 顶部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar",
		        symbolSize: [20, 20],
		        symbolOffset: [0, -10],
		        z: 12,
		        symbolPosition: "end",
		        itemStyle: {
		            normal: {
		    			color: function (params) {
		    				var colorList = [
		    					['#49FDE1', '#28C5F6'],
		    					['#74EFFF', '#5F85FF'],
		    					['#FF94D6', '#FF7585'],
		    					['#FFB269', '#FF7A69'],
		    				];
		    				var index = params.dataIndex;
							console.log('top打印渐变色配置',params);
		    				if (params.dataIndex >= colorList.length) {
		    					index = params.dataIndex - colorList.length;
		    				}
		    				return new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    					[{
		    					  offset: 0,
		    					  color: colorList[index][0]
		    					},
		    					{
		    					  offset: 1,
		    					  color: colorList[index][1]
		    					}
		    				]);
		    			}
				
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    
		     {
		        type: "pictorialBar",
		        symbolSize: [20, 20],
		        symbolOffset: [0, -10],
		        z: 12,
		        symbolPosition: "end",
		        itemStyle: {
		            normal: {
		    			color: function (params) {
		    				return new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    					[{
		    					  offset: 0,
		    					  color: "#EEF2FA"
		    					},
		    					{
		    					  offset: 1,
		    					  color: "#AFC5FF"
		    					}
		    				]);
		    			}
				
		    		},
		        },
		        data: [230, 230, 230, 230]
		    },
		   
		]
	}
};

// 南丁格尔rose 
export const rose2 = {
	simple: {
		title: {
			text: '2673682',
			left: '33%',
			top: '30%',
			textStyle: {
				textAlign: 'center',
				fill: '#505D6F',
				fontSize: 12,
				fontWeight: 400
			},
			subtext: '销售额',
			subtextStyle: {
				textAlign: 'center',
				color: '#505D6F',
				fontSize: 10,
				fontWeight: '400'
			}
		},
		// graphic: {
		// 	type: 'text',
		// 	left: 'center',
		// 	top: '45%',
		// 	style: {
		// 		text: '销售额',
		// 		textAlign: 'center',
		// 		fill: '#505D6F',
		// 		fontSize: 15
		// 	}
		// },
		tooltip: {
			trigger: 'item',
			formatter: '{b}%'
		},
		series: [
			{
				name: 'Radius Mode',
				type: 'pie',
				radius: [45, 95],
				center: ['45%', '35%'],
				roseType: 'radius',
				itemStyle: {
					borderRadius: 5,
					normal:{
						color: function (params) {
							console.log('bottom打印渐变色配置',params);
							var colorList = [
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
							];
							var index = params.dataIndex;
							if (params.dataIndex >= colorList.length) {
								index = params.dataIndex - colorList.length;
							}
							return new echarts.graphic.LinearGradient(0, 0, 0, 1,
								[
									{
										offset: 0,
										color: colorList[index][0]
									},
									{
										  offset: 1,
										  color: colorList[index][1]
									}
								]);
						}
					}
				},
				label: {
					show: true,
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
						formatter: "{b}%",
						textStyle: {
							color: '#fff',
							fontSize: 8,
						},
					},
				},
				emphasis: {
					label: {
						show: true
					}
				},
				data: [
					{ value: 40, name: 'rose 1' },
					{ value: 33, name: 'rose 2' },
					{ value: 28, name: 'rose 3' },
					{ value: 22, name: 'rose 4' },
					{ value: 20, name: 'rose 5' },
					{ value: 15, name: 'rose 6' },
					{ value: 12, name: 'rose 7' },
					{ value: 10, name: 'rose 8' }
				]
			}
		]
	}
};



// 圆环图 + 中心圆圈
export const circle = {
	simple: {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
  
		title: {
			text: '265849',
			top: '45%',
			textAlign: 'center',
			left: '29%',
			textStyle: {
				color: '#fff',
				fontSize: 15,
				fontWeight: '400'
			},
			subtext: '销售额',
			subtextStyle: {
				color: '#fff',
				fontSize: 14,
				fontWeight: '400'
			}
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				center: ['30%', '50%'],
				// radius: ['60%', '70%'],
				radius: ['45%', '60%'],
				labelLine: {
					length: 30
				},
				label: {
					normal: {
						show: true,
						position: 'inside', //标签的位置
						formatter: "{d}%",
							
						textStyle: {
							color: '#fff'
						}
					},
					emphasis: {
						show: true,
						textStyle: {
							fontWeight: 'bold'
						}
					}
				},
				data: [
					{ value: 1048, name: 'Baidu' },
					{ value: 335, name: 'Direct' },
					{ value: 310, name: 'Email' },
					{ value: 251, name: 'Google' },
					{ value: 234, name: 'Union Ads' },
					{ value: 147, name: 'Bing' },
					{ value: 135, name: 'Video Ads' },
					{ value: 102, name: 'Others' }
				]
			},
			{
				// title背景层
				name: '背景圆环',
				z: 5,
				backgroundColor: '#fff',
				type: 'pie',
				// left:'30%',
				cursor: 'default',
				center: ['30%', '50%'],
				radius: '35%',
				hoverAnimation: false,
				legendHoverLink: false,
				silent: true, //不响应和触发鼠标事件
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [
					{
						value: 0,
						itemStyle: {
							normal: {
								color: '#717171'
							}
						}
					}
				]
			}
		]
	}
};



// 圆环进度 + 渐变色 + 中间文字
export const progress = {
	simple: {
		title: {
			text: '265849',
			top: '45%',
			left: '50%',
			textAlign: 'center',
			itemGap: 10,
			textStyle: {
				color: 'rgba(80, 93, 111, 1)',
				fontSize: 12,
				fontWeight: '400'
			},
			subtext: '销售额',
			subtextStyle: {
				color: 'rgba(122, 192, 0, 1)',
				fontSize: 10,
				fontWeight: '400'
			}
		},
		polar: {
			radius: ['65%', '75%'],
			center: ['50%', '50%'],
		},
		angleAxis: {
			max: 100,
			show: false,
		},
		radiusAxis: {
			type: 'category',
			show: true,
			axisLabel: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
		},
		series: [
			{
				name: '',
				type: 'bar',
				roundCap: true,
				barWidth: 30,
				showBackground: true,
				backgroundStyle: {
					// #E3F1FF
					color: '#FFFFFF',
				},
				data: [60],
				coordinateSystem: 'polar',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
							{
								offset: 0,
								color: '#73FF80',
							},
							{
								offset: 1,
								color: '#6DD400',
							},
						]),
					},
				},
			},
			{
				name: '',
				type: 'pie',
				startAngle: 80,
				radius: ['80%'],
				hoverAnimation: false,
				center: ['50%', '50%'],
				itemStyle: {
					color: 'rgba(66, 66, 66, .1)',
					borderWidth: 1,
					borderColor: '#E1FFC5',
				},
				data: [100],
			},
			{
				name: '',
				type: 'pie',
				startAngle: 80,
				radius: ['60%'],
				hoverAnimation: false,
				center: ['50%', '50%'],
				itemStyle: {
					color: '#ffffff',
					borderWidth: 1,
					borderColor: '#E1FFC5',
					
				},
				data: [100],
			},
		],
	}

};

// 进度环
export const progress2 = {
	simple: {
		title: {
			text: '265849',
			top: '45%',
			left: '50%',
			textAlign: 'center',
			itemGap: 10,
			textStyle: {
				color: 'rgba(80, 93, 111, 1)',
				fontSize: 12,
				fontWeight: '400'
			},
			subtext: '销售额',
			subtextStyle: {
				color: 'rgba(255, 141, 66, 1)',
				fontSize: 10,
				fontWeight: '400'
			}
		},
		// title: [
		// 	{
		// 		text: '原有数量',
		// 		x: 'center',
		// 		top: '55%',
		// 		textStyle: {
		// 			color: '#FF8D42',
		// 			fontSize: 10,
		// 			fontWeight: '200',
		// 		},
		// 	},
		// 	{
		// 		text: '300/75%',
		// 		x: 'center',
		// 		y: 'center',
		// 		textStyle: {
		// 			fontSize: 12,
		// 			color: '#505D6F',
		// 			foontWeight: '600',
		// 		},
		// 	},
		// ],
		// backgroundColor: '#111',
		polar: {
			radius: ['65%', '75%'],
			center: ['50%', '50%'],
		},
		angleAxis: {
			max: 100,
			show: false,
		},
		radiusAxis: {
			type: 'category',
			show: true,
			axisLabel: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
		},
		series: [
			{
				name: '',
				type: 'bar',
				roundCap: true,
				barWidth: 30,
				showBackground: true,
				backgroundStyle: {
					color: '#FFFFFF',
				},
				data: [60],
				coordinateSystem: 'polar',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
							{
								offset: 0,
								color: '#FAD961',
							},
							{
								offset: 1,
								color: '#F76B1C',
							},
						]),
					},
				},
			},
			{
				name: '',
				type: 'pie',
				startAngle: 80,
				radius: ['80%'],
				hoverAnimation: false,
				center: ['50%', '50%'],
				itemStyle: {
					color: 'rgba(66, 66, 66, .1)',
					borderWidth: 1,
					borderColor: 'rgba(255, 114, 0, 0.30)',
				},
				data: [100],
			},
			{
				name: '',
				type: 'pie',
				startAngle: 80,
				radius: ['60%'],
				hoverAnimation: false,
				center: ['50%', '50%'],
				itemStyle: {
					color: '#ffffff',
					borderWidth: 1,
					borderColor: 'rgba(255, 114, 0, 0.30)',
					
				},
				data: [100],
			},
		],
	}

};



// 柱状统计图表 立体 + 渐变色
export const singleBar = {
	simple:{
		grid: {
		    left: '5%',
		    right: '5%',
		    top: '5%',
		    bottom: '5%',
		    containLabel: true
		},
		tooltip: {
		    trigger: 'item',
		    formatter: function (parms) {
		        return parms.marker + " " + parms.name + "：" + parms.value + "万元";
		    }
		},
		xAxis: {
		    type: 'category', // category(坐标轴类型)
		    axisTick: { // 坐标轴刻度相关配置
		        show: false // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        lineStyle: { // 坐标轴轴线样式
		            color: 'rgba(255,255,255,0.15)' // 坐标轴轴线颜色
		        }
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
				show:false,
		        color: '#ffffff',
		        fontSize: 14,
		        margin: 20
		    }
		},
		yAxis: {
		    type: 'value', // value(数值轴,适用于连续数据)
			max: 187,
		    axisTick: { // 坐标轴刻度相关配置
		        show: false  // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        show: false // 是否显示坐标轴轴线
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
		        color: '#ffffff',
		        fontSize: 14,
				show:false,
		    },
		    splitLine: { // 坐标轴在 grid 区域中的分隔线
		        lineStyle: { // 分割线配置
		            color: 'rgba(255,255,255,0.15)' // 分割线颜色
		        }
		    }
		},
		series: [
		    // 底部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar", // pictorialBar(象形柱图)
		        label: { // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
		            show: false, //是否显示标签
		            position: ['17', '-30'], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
		            color: '#01E4FF',
		            fontSize: 14
		        },
		        symbolSize: [40, 20], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
		        symbolOffset: [0, 10], // 图形相对于原本位置的偏移
		        z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
		        itemStyle: { // 图形样式
		            normal: {
						
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#49FDE1',
							},
							{
								offset: 1,
								color: '#28C5F6',
							},
						]),
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 中间的长方形柱状图(柱状图):bar
		    {
		        type: 'bar', // 柱状图
		        barWidth: 40, // 柱条的宽度,不设时自适应
		        barGap: '0%', // 柱子与柱子之间的距离
		        itemStyle: { // 图形样式
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    				[
								{
		    					  offset: 0,
		    					  color: '#49FDE1',
		    					},
		    					{
		    					  offset: 1,
		    					  color: '#28C5F6'
		    					}
		    				])
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 顶部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar",
		        symbolSize: [40, 20],
		        symbolOffset: [0, -10],
		        z: 12,
		        symbolPosition: "end",
		        itemStyle: {
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		    				{
		    					offset: 0,
		    					color: '#49FDE1',
		    				},
		    				{
		    					offset: 1,
		    					color: '#28C5F6',
		    				},
		    			]),
		    		},
		        },
		        data: [12, 94, 62, 60]
		    }
		]
	}
};

// 柱状统计图表 立体 + 渐变色
export const singleBar2 = {
	simple:{
		grid: {
		    left: '5%',
		    right: '5%',
		    top: '5%',
		    bottom: '5%',
		    containLabel: true
		},
		tooltip: {
		    trigger: 'item',
		    formatter: function (parms) {
		        return parms.marker + " " + parms.name + "：" + parms.value + "万元";
		    }
		},
		xAxis: {
		    type: 'category', // category(坐标轴类型)
		    axisTick: { // 坐标轴刻度相关配置
		        show: false // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        lineStyle: { // 坐标轴轴线样式
		            color: 'rgba(255,255,255,0.15)' // 坐标轴轴线颜色
		        }
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
		        color: '#ffffff',
		        fontSize: 14,
		        margin: 20,
				show:false,
		    }
		},
		yAxis: {
		    type: 'value', // value(数值轴,适用于连续数据)
			max: 187,
		    axisTick: { // 坐标轴刻度相关配置
		        show: false  // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        show: false // 是否显示坐标轴轴线
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
		        color: '#ffffff',
		        fontSize: 14,
				show:false,
		    },
		    splitLine: { // 坐标轴在 grid 区域中的分隔线
		        lineStyle: { // 分割线配置
		            color: 'rgba(255,255,255,0.15)' // 分割线颜色
		        }
		    }
		},
		series: [
		    // 底部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar", // pictorialBar(象形柱图)
		        label: { // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
		            show: false, //是否显示标签
		            position: ['17', '-30'], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
		            color: '#01E4FF',
		            fontSize: 14
		        },
		        symbolSize: [40, 20], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
		        symbolOffset: [0, 10], // 图形相对于原本位置的偏移
		        z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
		        itemStyle: { // 图形样式
		            normal: {
						
					
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#74EFFF',
							},
							{
								offset: 1,
								color: '#5F85FF',
							},
						]),
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 中间的长方形柱状图(柱状图):bar
		    {
		        type: 'bar', // 柱状图
		        barWidth: 40, // 柱条的宽度,不设时自适应
		        barGap: '0%', // 柱子与柱子之间的距离
		        itemStyle: { // 图形样式
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    				[
								{
									offset: 0,
									color: '#74EFFF',
								},
								{
									offset: 1,
									color: '#5F85FF',
								},
		    				])
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 顶部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar",
		        symbolSize: [40, 20],
		        symbolOffset: [0, -10],
		        z: 12,
		        symbolPosition: "end",
		        itemStyle: {
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		    				{
		    					offset: 0,
		    					color: '#74EFFF',
		    				},
		    				{
		    					offset: 1,
		    					color: '#5F85FF',
		    				},
		    			]),
		    		},
		        },
		        data: [12, 94, 62, 60]
		    }
		]
	}
};

// 柱状统计图表 立体 + 渐变色
export const singleBar3 = {
	simple:{
		grid: {
		    left: '5%',
		    right: '5%',
		    top: '5%',
		    bottom: '5%',
		    containLabel: true
		},
		tooltip: {
		    trigger: 'item',
		    formatter: function (parms) {
		        return parms.marker + " " + parms.name + "：" + parms.value + "万元";
		    }
		},
		xAxis: {
		    type: 'category', // category(坐标轴类型)
		    axisTick: { // 坐标轴刻度相关配置
		        show: false // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        lineStyle: { // 坐标轴轴线样式
		            color: 'rgba(255,255,255,0.15)' // 坐标轴轴线颜色
		        }
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
		        color: '#ffffff',
		        fontSize: 14,
		        margin: 20,
				show:false,
		    }
		},
		yAxis: {
		    type: 'value', // value(数值轴,适用于连续数据)
			max: 187,
		    axisTick: { // 坐标轴刻度相关配置
		        show: false  // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        show: false // 是否显示坐标轴轴线
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
		        color: '#ffffff',
		        fontSize: 14,
				show:false,
		    },
		    splitLine: { // 坐标轴在 grid 区域中的分隔线
		        lineStyle: { // 分割线配置
		            color: 'rgba(255,255,255,0.15)' // 分割线颜色
		        }
		    }
		},
		series: [
		    // 底部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar", // pictorialBar(象形柱图)
		        label: { // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
		            show: false, //是否显示标签
		            position: ['17', '-30'], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
		            color: '#01E4FF',
		            fontSize: 14
		        },
		        symbolSize: [40, 20], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
		        symbolOffset: [0, 10], // 图形相对于原本位置的偏移
		        z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
		        itemStyle: { // 图形样式
		            normal: {	
						
						
						
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#FF94D6',
							},
							{
								offset: 1,
								color: '#FF7585',
							},
						]),
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 中间的长方形柱状图(柱状图):bar
		    {
		        type: 'bar', // 柱状图
		        barWidth: 40, // 柱条的宽度,不设时自适应
		        barGap: '0%', // 柱子与柱子之间的距离
		        itemStyle: { // 图形样式
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    				[
								{
									offset: 0,
									color: '#FF94D6',
								},
								{
									offset: 1,
									color: '#FF7585',
								},
		    				])
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 顶部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar",
		        symbolSize: [40, 20],
		        symbolOffset: [0, -10],
		        z: 12,
		        symbolPosition: "end",
		        itemStyle: {
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		    				{
		    					offset: 0,
		    					color: '#FF94D6',
		    				},
		    				{
		    					offset: 1,
		    					color: '#FF7585',
		    				},
		    			]),
		    		},
		        },
		        data: [12, 94, 62, 60]
		    }
		]
	}
	
};

// 柱状统计图表 立体 + 渐变色
export const singleBar4 = {
	simple:{
		grid: {
		    left: '5%',
		    right: '5%',
		    top: '5%',
		    bottom: '5%',
		    containLabel: true
		},
		tooltip: {
		    trigger: 'item',
		    formatter: function (parms) {
		        return parms.marker + " " + parms.name + "：" + parms.value + "万元";
		    }
		},
		xAxis: {
		    type: 'category', // category(坐标轴类型)
		    axisTick: { // 坐标轴刻度相关配置
		        show: false // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        lineStyle: { // 坐标轴轴线样式
		            color: 'rgba(255,255,255,0.15)' // 坐标轴轴线颜色
		        }
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
		        color: '#ffffff',
		        fontSize: 14,
		        margin: 20,
				show:false,
		    }
		},
		yAxis: {
		    type: 'value', // value(数值轴,适用于连续数据)
			max: 187,
		    axisTick: { // 坐标轴刻度相关配置
		        show: false  // 是否显示坐标轴刻度
		    },
		    axisLine: { // 坐标轴轴线相关配置
		        show: false // 是否显示坐标轴轴线
		    },
		    axisLabel: { // 坐标轴刻度标签相关配置
		        color: '#ffffff',
		        fontSize: 14,
				show:false,
		    },
		    splitLine: { // 坐标轴在 grid 区域中的分隔线
		        lineStyle: { // 分割线配置
		            color: 'rgba(255,255,255,0.15)' // 分割线颜色
		        }
		    }
		},
		series: [
		    // 底部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar", // pictorialBar(象形柱图)
		        label: { // 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
		            show: false, //是否显示标签
		            position: ['17', '-30'], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
		            color: '#01E4FF',
		            fontSize: 14
		        },
		        symbolSize: [40, 20], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
		        symbolOffset: [0, 10], // 图形相对于原本位置的偏移
		        z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
		        itemStyle: { // 图形样式
		            normal: {
						
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#FFB269',
							},
							{
								offset: 1,
								color: '#FF7A69',
							},
						]),
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 中间的长方形柱状图(柱状图):bar
		    {
		        type: 'bar', // 柱状图
		        barWidth: 40, // 柱条的宽度,不设时自适应
		        barGap: '0%', // 柱子与柱子之间的距离
		        itemStyle: { // 图形样式
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
		    				[
								{
									offset: 0,
									color: '#FFB269',
								},
								{
									offset: 1,
									color: '#FF7A69',
								},
		    				])
				
		    		},
		        },
		        data: [12, 94, 62, 60]
		    },
		    // 顶部的椭圆形(象形柱图):pictorialBar
		    {
		        type: "pictorialBar",
		        symbolSize: [40, 20],
		        symbolOffset: [0, -10],
		        z: 12,
		        symbolPosition: "end",
		        itemStyle: {
		            normal: {
		    			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
		    				{
		    					offset: 0,
		    					color: '#FFB269',
		    				},
		    				{
		    					offset: 1,
		    					color: '#FF7A69',
		    				},
		    			]),
		    		},
		        },
		        data: [12, 94, 62, 60]
		    }
		]
	}
	
};

export const map = {
	simple: {
        tooltip: {
			show: false
        },
        geo: {
			map: "china",
			roam: false,
			zoom: 1.23,
			center: [105, 36], 
			label: {
				normal: {
					show: false, 
					fontSize: "10",
					color: "rgba(0,0,0,0.7)"
				},
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					areaColor: "#0d0059",
					borderColor: "#389dff",
					borderWidth: 1, 
					shadowBlur: 5,
					shadowOffsetY: 8,
					shadowOffsetX: 0,
					shadowColor: "#01012a"
				},
				emphasis: {
					areaColor: "#184cff",
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowBlur: 5,
					borderWidth: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)"
				}
			}
        },
        series: [
			{
				type: "map",
				map: "china",
				roam: false,
				zoom: 1.23,
				center: [105, 36],
				// geoIndex: 1,
				// aspectScale: 0.75, //长宽比
				showLegendSymbol: false, 
				label: {
					normal: {
						show: false
					},
					emphasis: {
						show: false,
						textStyle: {
							color: "#fff"
						}
					}
				},
				itemStyle: {
					normal: {
						areaColor: "#0d0059",
						borderColor: "#389dff",
						borderWidth: 0.5
					},
					emphasis: {
						areaColor: "#17008d",
						shadowOffsetX: 0,
						shadowOffsetY: 0,
						shadowBlur: 5,
						borderWidth: 0,
						shadowColor: "rgba(0, 0, 0, 0.5)"
					}
				}
			}
        ]
	}

};


export const pie = {
	simple:{
		series: [
			{
				type: 'pie',  //饼图
				selectedMode: 'single',
				radius: [0, '50%'],
				label: {
					show: true,
					position: 'inner',
					fontSize: 15,
					color: '#fff',
					formatter: "{d}%"
				},
				labelLine: {  //设置值域的指向线
					show: false  //隐藏
				},
				data: [
					{ value: 30, name: '远程异地评标' },
					{ value: 70, name: '非远程异地评标' }
				],
				width: '100%',
				itemStyle: {
					borderRadius: 5,
					normal:{
						color: function (params) {
							console.log('bottom打印渐变色配置',params);
							var colorList = [
								["rgba(141, 255, 199, 1)","rgba(34, 240, 238, 1)"],
								["rgba(3, 208, 255, 1)","rgba(6, 138, 240, 1)"],
							
							];
							var index = params.dataIndex;
							if (params.dataIndex >= colorList.length) {
								index = params.dataIndex - colorList.length;
							}
							return new echarts.graphic.LinearGradient(0, 0, 0, 1,
								[
									{
										offset: 0,
										color: colorList[index][0]
									},
									{
										  offset: 1,
										  color: colorList[index][1]
									}
								]);
						}
					}
				},
			},
		],

	}
}