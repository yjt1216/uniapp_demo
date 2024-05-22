<template>
	<view>
		<u-navbar title="柱状图表" :placeholder="true" :autoBack="true"></u-navbar>
		<view class="echarts-box">
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
				<ui-echarts ref="echarts" :option="barOptions" style="height: 326rpx;"></ui-echarts>
			</view>
			
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
				barOptions:{},
				barData:[],
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
			}
		},
		onLoad() {
			
		},
		onReady() {
			this.barData =  [12, 94, 62, 60];
			this.barOptions = opt['statck']['simple'];
			// this.barOptions.color = linearColor;
			
			let newData = this.configColorData(this.patientAgeList,this.linearColor);
			
			this.barOptions.series[0].data = newData;
			this.barOptions.series[1].data = newData;
			this.barOptions.series[2].data = newData;
			// console.log('渐变色',this.barOptions);
		},
		methods:{
			configColorData(barData,colorPairs){
				const newArray = [];
				let colorIndex = 0; // 用于循环选取colors中的颜色对
				
				barData.forEach((item, index) => {
				    const startColor = colorPairs[colorIndex][0];
				    const endColor = colorPairs[colorIndex][1];
								
				    // 如果到达colors末尾，则重置索引以循环使用颜色
				    if (colorIndex === colorPairs.length - 1) {
				        colorIndex = 0;
				    } else {
				        colorIndex++;
				    }
								
				    newArray.push({
				        value: item.add_num,
				        name: `rose${index + 1}`,
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
			getDotColor(index){
				let colors = this.linearColor[index];
				
				return `linear-gradient(141deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.chart-bar{
		display: flex;
		flex-direction: column;
	}
	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
	.echarts-box {
		margin-top: 200rpx;
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