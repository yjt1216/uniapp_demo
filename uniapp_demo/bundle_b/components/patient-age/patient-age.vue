<!-- 柱状图 -->
<template>
  <view class="charts-box">
    <qiun-data-charts 
      type="column"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="dsxQGLoaonPuEFWdOaJqEHEPhtPaZPZS"
      :animation="false"
    />
  </view>
</template>

<script>
export default {
	props:{
		
	},
	data() {
		return {
			chartData: {},
      //这里的 opts 是图表类型 type="column" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['column'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
		opts: {
				timing: "easeOut",
				duration: 1000,
				rotate: false,
				rotateLock: false,
				color: ["#49FDE1","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
				padding: [15,15,0,5],
				fontSize: 13,
				fontColor: "#666666",
				dataLabel: false,
				dataPointShape: false,
				dataPointShapeType: "solid",
				touchMoveLimit: 60,
				enableScroll: false,
				enableMarkLine: false,
				legend: {
					show: false,
				},
				xAxis: {
					disableGrid: false,
					disabled: true,
					axisLine: true,
					axisLineColor: "#CCCCCC",
					calibration: false,
					fontColor: "#666666",
					fontSize: 13,
					lineHeight: 20,
					marginTop: 0,
					rotateLabel: false,
					rotateAngle: 45,
					itemCount: 5,
					boundaryGap: "center",
					splitNumber: 5,
					gridColor: "#CCCCCC",
					gridType: "solid",
					dashLength: 4,
					gridEval: 1,
					scrollShow: false,
					scrollAlign: "left",
					scrollColor: "#A6A6A6",
					scrollBackgroundColor: "#EFEBEF",
					title: "",
					titleFontSize: 13,
					titleOffsetY: 0,
					titleOffsetX: 0,
					titleFontColor: "#666666",
					format: ""
				},
				yAxis: {
					data: [
						{
							min: null,
							type: "value",
							position: "left",
							disabled: false,
							axisLine: true,
							axisLineColor: "#CCCCCC",
							calibration: false,
							fontColor: "#666666",
							fontSize: 13,
							textAlign: "right",
							title: "",
							titleFontSize: 13,
							titleOffsetY: 0,
							titleOffsetX: 0,
							titleFontColor: "#666666",
							max: 230,
							tofix: null,
							unit: "",
							format: ""
						}
					],
					disabled: true,
					disableGrid: true,
					splitNumber: 5,
					gridType: "solid",
					dashLength: 8,
					gridColor: "#CCCCCC",
					padding: 5,
					showTitle: false
					
				},
				extra: {
					column: {
						type: "group",
						width: 20,
						activeBgColor: "#000000",
						activeBgOpacity: 0.08,
						seriesGap: 2,
						categoryGap: 3,
						barBorderCircle: false,
						linearType: "custom",
						linearOpacity: 1,
						customColor: [
						  "#49FDE1",
						  "#28C5F6"
						],
						colorStop: 0,
						meterBorder: 1,
						meterFillColor: "#AFC5FF",
						labelPosition: "outside"
					},
					tooltip: {
						showBox: true,
						showArrow: true,
						showCategory: false,
						borderWidth: 0,
						borderRadius: 0,
						borderColor: "#000000",
						borderOpacity: 0.7,
						bgColor: "#000000",
						bgOpacity: 0.7,
						gridType: "solid",
						dashLength: 4,
						gridColor: "#CCCCCC",
						boxPadding: 3,
						fontSize: 13,
						lineHeight: 20,
						fontColor: "#FFFFFF",
						legendShow: true,
						legendShape: "auto",
						splitLine: true,
						horizentalLine: false,
						xAxisLabel: false,
						yAxisLabel: false,
						labelBgColor: "#FFFFFF",
						labelBgOpacity: 0.7,
						labelFontColor: "#666666"
					},
					markLine: {
						type: "solid",
						dashLength: 4,
						data: []
					}
				}
			}
		};
	},
	onReady() {
		this.getServerData();
	},
	methods: {
		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ["2018","2019","2020","2021"],
					series: [
						{
							name: "目标值",
							data: [12,94,62,62]
						}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);
		},
	}
};
</script>

<style scoped>
	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
	.charts-box {
		width: 100%;
		height: 300px;
	}
</style>