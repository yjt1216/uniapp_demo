<template>
	<view class="organ-sales">
		
		<view class="table-box">
			<view class="sales-title" >机构销售额占比TOP10</view>
			<view class="table-head">
				<view class="head-name">机构名称</view>
				<view class="head-rate">占比</view>
				<view class="head-amount">金额</view>
			</view>
			<view class="table-content">
				<view class="content-item" v-for="(item, index) in tableData" :key="index">
					<view class="head-name">{{ item.hospital_name }}</view>
					<view class="head-rate">{{ item.ratio }}</view>
					<view class="head-amount">{{ item.amount }}</view>
				</view>
			</view>
		</view>
		<view class="charts-box" >
			<qiun-data-charts
				type="ring"
				:opts="ringOpts"
				:chartData="chartsDataPie"
				:tapLegend="false"
				tooltipFormat="tooltipFun"
			/>
		</view>
		
	</view>
</template>

<script>
	import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js' //在uniapp 插件库下载下来就是这个路径 可以自己改

	export default {
		name:'hospital-amount',
		props: {
			tableData: {
				type: Array,
				default(){
					return []
				}
			},
			chartsDataPie: {
				type: Object,
				default(){
					return {}
				}
			},
			title:{
				type:String,
				default(){
					return '0'
				}
			},
			subtitle:{
				type:String,
				default(){
					return '销售额'
				}
			},
		},
		watch:{
			title(val){
				console.log('watch ring销售额title',val);
				this.ringOpts.title.name = `${val}`;
			}
		},
		data(){
			return {
				ringOpts: {
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
						show: false,
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
						name: "63135.99",
						fontSize: 15,
						color: "#666666",
						offsetX: 0,
						offsetY: 0
					},
					subtitle: {
						name: "销售额",
						fontSize: 14,
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
				},
				
			}
		},
		created:function(){
			uCharts.formatter.tooltipFun = (item, category, index, opts) => {
				// console.log(item, index, "=item, category, index, opts=");
				// return item.data.storeSym ? `${item.name}地区门店数量：${item.data.storeSym}` : '暂无门面'
				return item.value ? `${item.name}：${item.value}` : '暂无'
			}
		},
		mounted() {
			
		},
		methods:{
			clickLeftImg(){},
			clickRightImg(){},
		},
	}
</script>

<style>
	
	.organ-sales{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		min-height: 560rpx;
	}
	.sales-title{
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
		-webkit-line-clamp: 1; /* 限制显示两行 */
		-webkit-box-orient: vertical; /* 设置为竖直排布 */
		/* line-height: 1.5em; // 按照你的需要调整行高 */ 
		/* height: 3em; // 行数 * 行高，这里假设是两行 */ 
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
	}
	
</style>