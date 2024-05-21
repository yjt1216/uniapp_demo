<template>
	<view>
		<u-navbar title="玫瑰图表" :autoBack="true" :placeholder="true"></u-navbar>
		
		<view class="charts-box">
			<qiun-data-charts 
				type="rose"
				:opts="opts"
				:chartData="chartData"
				:canvas2d="true"
				canvasId="AkXpGzYpSFXIeTDzCUVpnfWOwEalrNQv">
			</qiun-data-charts>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			chartData: {},
			
			customColors: [
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
			opts: {
				timing: "easeOut",
				duration: 1000,
				rotate: false,
				rotateLock: false,
				color: ["#4B65F8","#B5FEED","#F76B1C","#F65B4B","#FBF4D9","#C8E1FD","#F76B1C","#F65B4B","#FBF4D9","#C8E1FD"],
				padding: [5,5,5,5],
				fontSize: 13,
				fontColor: "#666666",
				dataLabel: false,
				dataPointShape: true,
				dataPointShapeType: "solid",
				touchMoveLimit: 60,
				enableScroll: false,
				enableMarkLine: false,
				legend: {
					show: true,
					position: "left",
					lineHeight: 25,
					float: "center",
					padding: 5,
					margin: 5,
					backgroundColor: "rgba(0,0,0,0)",
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 0,
					fontSize: 13,
					fontColor: "#666666",
					hiddenColor: "#CECECE",
					itemGap: 10
				},
				extra: {
					rose: {
						type: "area",
						minRadius: 50,
						activeOpacity: 0.5,
						activeRadius: 10,
						offsetAngle: 0,
						labelWidth: 15,
						border: false,
						borderWidth: 2,
						borderColor: "#FFFFFF",
						linearType: "custom",
						customColor: [
							"#75CEFF",
							"#1ABED5",
							"#FFE483",
							"#FFDDC8",
							"#D5A34C",
							"#505D6F",
							"#FFE483",
							"#FFDDC8",
							"#D5A34C",
							"#505D6F"
						]
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
				let res = {
					series: [
						{
							data: [
								{"name":"一班","value":66},
								{"name":"二班","value":54},
								{"name":"三班","value":18},
								{"name":"四班","value":20},
								{"name":"五班","value":22},
								{"name":"六班","value":20},
								// {"name":"七班","value":1},
							]
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
  
	.organ-order{
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.order-title{
		margin-bottom: 34rpx;
		margin-left: 20rpx;
		width: 285rpx;
		height: 37rpx;
		font-size: 26rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 500;
		color: #505D6F;
		line-height: 37rpx;
	}
	
	.charts-box{
		margin: 10rpx;
		margin-top: 100rpx;
		width: 380rpx;
		height: 400rpx;
		/* background-color: palevioletred; */
	}
	.table-box{
		/* width: 300rpx; */
		display: flex;
		flex: 1;
		flex-direction: column;
		padding-left: 10rpx;
		/* background-color: aqua; */
	}
	.table-head{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 300rpx;
	}
	
	.table-content{
		display: flex;
		flex-direction: column;
		
		width: 300rpx;
	}
	.head-name{
		font-size: 18rpx;
		width: 160rpx;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1; /* 限制显示1行 */
		-webkit-box-orient: vertical; /* 设置为竖直排布 */
		
	}
	.head-rate{
		margin-left: 6rpx;
		font-size: 18rpx;
		width: 70rpx;
	}
	.head-amount{
		margin-left: 6rpx;
		font-size: 18rpx;
		width: 70rpx;
	}
	.content-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>