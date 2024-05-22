<template>
	<view class="chart-bar">
		<u-navbar title="柱状图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		<view class="charts-box">
			<view class="age-list-box">
				<view class="cate-item-box" v-for="(item, index) in patientAgeList" :key="index">
					<view class="item-dot"
						:style="{'--dot-color':getDotColor(index)}">
					</view>
					<view class="item-text">{{item.name}}</view>
					<view class="item-text">{{item.add_num}}</view>
					<view class="line-space"></view>
					<view class="item-text">{{item.ratio}}%</view>
				</view>
			</view>
			<view class="bar-box">
				<qiun-data-charts
					type="column"
					:opts="opts"
					:chartData="chartData"
					:canvas2d="true"
					canvasId="oSAPZNenilKzNXUXGdjmaiLZSGKWABfq"
					:animation="false"
					:tooltipShow="false"
					:tapLegend="false"
					:ontap="false"
					:onmouse="false">
				</qiun-data-charts>
			</view>
		  
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			chartData: {},
			opts: {
				timing: "easeOut",
				duration: 1000,
				rotate: false,
				rotateLock: false,
				color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
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
				  position: "bottom",
				  float: "center",
				  padding: 5,
				  margin: 5,
				  backgroundColor: "rgba(0,0,0,0)",
				  borderColor: "rgba(0,0,0,0)",
				  borderWidth: 0,
				  fontSize: 13,
				  fontColor: "#666666",
				  lineHeight: 11,
				  hiddenColor: "#CECECE",
				  itemGap: 10
				},
				xAxis: {
					disableGrid: true,
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
						  min: 0
						}
					  ],
					  disabled: true,
					  disableGrid: true,
					  splitNumber: 5,
					  gridType: "solid",
					  dashLength: 8,
					  gridColor: "#CCCCCC",
					  padding: 10,
					  showTitle: false
				},
				extra: {
				  column: {
					type: "group",
					width: 30,
					activeBgColor: "#000000",
					activeBgOpacity: 0.08,
					seriesGap: 2,
					categoryGap: 3,
					barBorderCircle: false,
					linearType: "custom",
					linearOpacity: 1,
					colorStop: 0,
					meterBorder: 1,
					meterFillColor: "#FFFFFF",
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
			},
			patientAgeList:[
				{
					add_num: 90,
					name: "30岁以下",
					ratio: 0
				},
				{
					add_num: 210,
					name: "30~39岁",
					ratio: 0
				},
				{
					add_num: 120,
					name: "40~49岁",
					ratio: 0
				},
				{
					add_num: 230,
					name: "50~59岁",
					ratio: 0
				},
				{
					add_num: 180,
					name: "60~69岁",
					ratio: 0
				},
				{
					add_num: 20,
					name: "70岁以上",
					ratio: 0
				}
			],
			startColors: ['#74EFFF','#49FDE1','#FF94D6','#FFB269','#8DFFC7','#03D0FF'],
			endColors: ['#5F85FF','#28C5F6','#FF7585','#FF7A69','#22F0EE','#068AF0'],
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
					categories: ["2018"],
					series: this.patientAgeList.map(item => ({
						name: item.name,
						data: [item.ratio]
					}))
				};
				console.log('ceshi',res);
				
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);
		},
		getDotColor(index){
			let startColor = this.startColors[index];
			let endColor = this.endColors[index];
			return `linear-gradient(141deg, ${startColor} 0%, ${endColor} 100%)`;
		},
	}
};
</script>

<style lang="scss" scoped>
	.chart-bar{
		display: flex;
		flex-direction: column;
	}
	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
	.charts-box {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.bar-box{
		width: 350rpx;
		height: 326rpx;
	}
	
	.age-list-box{
		margin-top: 20rpx;
		width: 225rpx;
		height: 280rpx;
	}
	
	.cate-item-box{
		display: flex;
		flex-direction: row;
		height: 40rpx;
		margin-bottom: 10rpx;
		align-items: center;
	}
	.item-dot{
		width: 10rpx;
		height: 10rpx;
		border-radius: 50%;
		background: var(--dot-color,white);
	}
	.line-space{
		height: 20rpx;
		width: 2rpx;
		margin: 0 4rpx;
		color: #000;
	}
	.item-text{
		margin-left: 6rpx;
		font-size: 18rpx;
		color: #3B5070;
	}
	
</style>