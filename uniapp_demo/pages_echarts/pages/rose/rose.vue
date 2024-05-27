<template>
	<view>
		<u-navbar title="玫瑰图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		<view class="charts-box">
			<ui-echarts ref="echarts" :option="roseOptions"></ui-echarts>
		</view>
		
	</view>
</template>

<script>
	
	import * as opt from '@/pages_echarts/static/js/option.js';
	import uiEcharts from "@/pages_echarts/components/ui-echarts/components/ui-echarts/ui-echarts.vue";
	import echarts from '@/pages_echarts/components/ui-echarts/static/echarts.min.js';
	
	export default{
		components:{
			uiEcharts
		},
		data(){
			return {
				roseOptions:{},
				roseData:[],
				linearColor:[
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
				organList:[
					{
						amount: "15068.00",
						hospital_id: 10002,
						hospital_name: "苏州市立医院",
						ratio: 46.76,
					},
					{
						amount: "9688.25",
						hospital_id: 10000,
						hospital_name: "南京市六合区人民医院",
						ratio: 30.06,
					},
					{
						amount: "4900.00",
						hospital_id: 10047,
						hospital_name: "江苏省天下第一大药",
						ratio: 15.21
					},
					{
						amount: "830.01",
						hospital_id: 10044,
						hospital_name: "测试机构003",
						ratio: 2.58
					},
					{
						amount: "76.00",
						hospital_id: 10012,
						hospital_name: "南京市栖霞区医院",
						ratio: 0.241
					},
					{
						amount: "56.03",
						hospital_id: 10043,
						hospital_name: "测试机构",
						ratio: 0.174
					},
					{
						amount: "40.02",
						hospital_id: 10001,
						hospital_name: "苏州大学第二附属医院",
						ratio: 0.125,
					},
					{
						amount: "1.00",
						hospital_id: 10035,
						hospital_name: "无锡蠡景护理站",
						ratio: 0,
					},
					{
						amount: "176.00",
						hospital_id: 10012,
						hospital_name: "南京市栖霞区医院",
						ratio: 0.241
					},
					{
						amount: "156.03",
						hospital_id: 10043,
						hospital_name: "测试机构",
						ratio: 0.174
					},
					{
						amount: "40.02",
						hospital_id: 10001,
						hospital_name: "苏州大学第二附属医院",
						ratio: 0.125,
					},
					{
						amount: "100.00",
						hospital_id: 10035,
						hospital_name: "无锡蠡景护理站",
						ratio: 0.25,
					}
				]
			}
		},
		onLoad() {
			
		},
		onReady() {
			
			
			this.roseOptions = opt['rose2']['simple'];
			
			let newArray = this.filterAndAggregate(this.organList);
			console.log('新生成渐变色数据list',newArray);
		
			let newData = this.configColor(newArray,this.linearColor);
			
			// 打印新数组（这里仅示例说明，实际运行需要在支持echarts的环境中执行）
			console.log('新生成渐变色数据data',newData);
			
			this.roseOptions.series[0].data = newData;
			
		},
		methods:{
			configColor(roseData,colorPairs){
				const newArray = [];
				let colorIndex = 0; // 用于循环选取colors中的颜色对
				
				roseData.forEach((item, index) => {
				    const startColor = colorPairs[colorIndex][0];
				    const endColor = colorPairs[colorIndex][1];
								
				    // 如果到达colors末尾，则重置索引以循环使用颜色
				    if (colorIndex === colorPairs.length - 1) {
				        colorIndex = 0;
				    } else {
				        colorIndex++;
				    }
								
				    newArray.push({
				        value: item.amount,
				        name: `${item.ratio}`,
				        itemStyle: {
				            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				                { offset: 0, color: startColor },
				                { offset: 1, color: endColor }
				            ])
				        }
				    });
				});
								
				return newArray;
			},
			// 筛选占比小于5的数据
			filterAndAggregate(oldArray) {
				
				let filteredOrganList = [];
				
			    // 筛选出ratio小于5的项
			    const lessThanFive = oldArray.filter(item => item.ratio < 5);
			
			    // 累加ratio和amount
			    let totalAmount = lessThanFive.reduce((sum, current) => sum + parseFloat(current.amount), 0);
			    let totalRatio = lessThanFive.reduce((sum, current) => sum + current.ratio, 0);
			
			    // 创建新对象表示累加结果
			    const aggregatedItem = {
			      amount: totalAmount.toFixed(2),
			      hospital_name: '其他',
			      ratio: totalRatio,
			    };
			
			    // 过滤掉ratio小于5的项，并将新对象加入到数组中
			    filteredOrganList = oldArray.filter(item => item.ratio >= 5).concat(aggregatedItem);
				
				return filteredOrganList;
			},
		}
	}
</script>

<style>
	.charts-box{
		margin: 10rpx;
		margin-top: 100rpx;
		width: 380rpx;
		height: 400rpx;
		/* background-color: palevioletred; */
	}
</style>