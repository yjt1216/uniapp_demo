<template>
	<view class="nurse-register">
		<view class="charts-box">
		  <qiun-data-charts 
		    type="ring"
		    :opts="opts"
		    :chartData="chartData"
		  />
		</view>
		
	</view>
</template>

<script>
	
	export default {
		name:'nurse-register',
		props: {
			chartData: {
				type: Object,
				default(){
					return {}
				}
			},
		},
		data(){
			return {
				//这里的 opts 是图表类型 type="ring" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['ring'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					timing: "easeOut",
					duration: 1000,
					rotate: false,
					rotateLock: false,
					color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
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
						position: "right",
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
					title: {
						name: "总和",
						fontSize: 15,
						color: "#666666",
						offsetX: 0,
						offsetY: 0
					},
					subtitle: {
						name: "927",
						fontSize: 25,
						color: "#7cb5ec",
						offsetX: 0,
						offsetY: 0
					},
					extra: {
						ring: {
							ringWidth: 30,
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: 0,
							labelWidth: 15,
							border: true,
							borderWidth: 3,
							borderColor: "#FFFFFF",
							centerColor: "#FFFFFF",
							customRadius: 0,
							linearType: "none"
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
				
			}
		},
		mounted() {
			
		},
		methods:{
			
		},
	}
</script>

<style>
	
	.nurse-register{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		min-height: 560rpx;
	}
	
	.charts-box{
		margin: 10rpx;
		margin-top: 100rpx;
		width: 100%;
		height: 400rpx;
		/* background-color: palevioletred; */
	}
	
	
</style>

