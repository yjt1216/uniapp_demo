<template>
	<view class="table-demo">
		<u-navbar title="表格" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		
		
		<view class="oragn-box">
			
			<view class="charts-box" >
				<!-- :style="{ width: '400rpx', height: '400rpx' }" :echartsApp="true" -->
				<!-- <qiun-data-charts type="ring" 
					:tapLegend="false"
					:opts="ringOpts"
					:chartData="chartsDataPie2" :echartsH5="true" /> -->
					
				<qiun-data-charts
					type="ring"
					:opts="ringOpts"
					:chartData="chartsDataPie2"
					:tapLegend="false"
				/>
					
			</view>
			<view class="table-box">
				<view class="table-head">
					<view class="head-name">机构名称</view>
					<view class="head-rate">占比</view>
					<view class="head-amount">金额</view>
				</view>
				<view class="table-content">
					<view class="content-item" v-for="(item, index) in tableData" :key="index">
						<view class="head-name">{{ item.date }}</view>
						<view class="head-rate">{{ item.name }}</view>
						<view class="head-amount">{{ item.address }}</view>
					</view>
				</view>
			</view>
			
		</view>
		
		
		
		
	</view>
</template>

<script>
	import uniTable from '@/bundle_b/components/uni-table/components/uni-table/uni-table.vue';
	import uniTr from '@/bundle_b/components/uni-table/components/uni-tr/uni-tr.vue';
	import uniTd from '@/bundle_b/components/uni-table/components/uni-td/uni-td.vue';
	import uniTh from '@/bundle_b/components/uni-table/components/uni-th/uni-th.vue';
	
	import tableData from "@/sheep/mock/tableData.js"
	import demodata from '@/sheep/mock/chart.json';
	
	export default {
		components:{
			uniTable,
			uniTr,
			uniTd,
			uniTh,
		},
		data(){
			return {
				searchVal: '',
				tableData: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				chartsDataPie2: {},
				
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
						name: "收益率",
						fontSize: 15,
						color: "#666666",
						offsetX: 0,
						offsetY: 0
					},
					subtitle: {
						name: "70%",
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
		onLoad:function(){
			this.selectedIndexs = []
			this.getData(1);
			
			
		},
		onReady:function(){
			// this.chartsDataPie2=JSON.parse(JSON.stringify(demodata.PieB));
			
			setTimeout(() => {

			  this.chartsDataPie2=JSON.parse(JSON.stringify(demodata.PieB));
			  
			  
			}, 300);
		},
		methods:{
			
			/* 获取图表数据 */
			// 分页触发
			
			
			// 获取数据
			getData(pageCurrent, value = '') {
				this.loading = true
				this.pageCurrent = pageCurrent
				this.request({
					pageSize: this.pageSize,
					pageCurrent: pageCurrent,
					value: value,
					success: res => {
						// console.log('data', res);
						this.tableData = res.data
						this.total = res.total
						this.loading = false
					}
				})
			},
			// 伪request请求
			request(options) {
				const { pageSize, pageCurrent, success, value } = options
				let total = tableData.length
				let data = tableData.filter((item, index) => {
					const idx = index - (pageCurrent - 1) * pageSize
					return idx < pageSize && idx >= 0
				})
				if (value) {
					data = []
					tableData.forEach(item => {
						if (item.name.indexOf(value) !== -1) {
							data.push(item)
						}
					})
					total = data.length
				}

				setTimeout(() => {
					typeof success === 'function' &&
						success({
							data: data,
							total: total
						})
				}, 500)
			}
		},
	}
</script>

<style>
	.oragn-box{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.charts-box{
		width: 400rpx;
		height: 550rpx;
	}
	.table-box{
		width: 300rpx;
		margin: 15rpx 20rpx;
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
		font-size: 16rpx;
		width: 160rpx;
	}
	.head-rate{
		font-size: 16rpx;
		width: 70rpx;
	}
	.head-amount{
		font-size: 16rpx;
		width: 70rpx;
	}
	.content-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	
	.uni-group {
		display: flex;
		align-items: center;
	}
	.uni-container{
		font-size: 15rpx;
		width: 300rpx;
	}
</style>