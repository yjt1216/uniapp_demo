<template>
	<view>
		<u-navbar title="ring" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		<view class="charts-box">
			<qiun-data-charts 
				type="ring"
				:opts="opts"
				:chartData="hospitalAmountData"
			/>
		</view>
	</view>
</template>

<script>
	import operateChart from '@/sheep/mock/operate_chart.json';
	import { transformListWithRename } from "../../../sheep/utils/tools";
	export default {
		
	  data() {
		return {
			/* 机构销售额 */
			hospital_amount_list:[],
			hospitalAmountData: {},
			/* 机构订单数 */
			hospital_order_list:[],
			hospitalOrderData:{},
			chartData: {},
			//这里的 opts 是图表类型 type="ring" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['ring'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
			opts: {
				timing: "easeOut",
				duration: 1000,
				rotate: false,
				rotateLock: false,
				color: ["#1890FF","#91CB74","#FAC858","#EE6F66","#73C0DE","#3CA272","#FC2412","#9A60B4","#ea7ccc","#C8E1FD"],
				padding: [5,5,5,5],
				fontSize: 13,
				fontColor: "#666666",
				dataLabel: true,
				dataPointShape: true,
				dataPointShapeType: "solid",
				touchMoveLimit: 60,
				enableScroll: false,
				enableMarkLine: true,
				legend: {
					show: true,
					position: "bottom",
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
		};
	  },
	  onReady() {
		this.getServerData();
	  },
	  methods: {
		getServerData() {
		  //模拟从服务器获取数据时的延时
		  setTimeout(() => {
			// this.chartsDataPie2=JSON.parse(JSON.stringify(demodata.PieB));
			
			const orderRules = {
				'hospital_name': 'name',
				'num': 'value'
			}
			const amountRules = {
				'hospital_name': 'name',
				'ratio': 'value'
			}
			
			var hospital_amount_list = JSON.parse(JSON.stringify(operateChart.hospital_order_amount_list));
			let hospital_order_list = JSON.parse(JSON.stringify(operateChart.hospital_order_num_list));
			
			this.hospital_amount_list = hospital_amount_list;
			this.hospital_order_list = hospital_order_list;
			hospital_amount_list = hospital_amount_list.map(item => ({
			  ...item, // 保留原有属性和值
			  amount: parseFloat(item.amount) // 将amount的值转换为float
			}));
			
			this.hospitalAmountData = transformListWithRename(hospital_amount_list,amountRules);
			this.hospitalOrderData = transformListWithRename(hospital_order_list,orderRules);
			
			
			// console.log('服务项目',this.serviceCateList);
		  }, 300);
		},
	  }
	};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  .charts-box {
    width: 100%;
    height: 400px;
  }
</style>