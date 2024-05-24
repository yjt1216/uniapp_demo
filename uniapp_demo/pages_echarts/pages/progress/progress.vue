<template>
	<view>
		<u-navbar title="进度图表" :placeholder="true" :autoBack="true"></u-navbar>
		
		<view class="echart-box">
			<ui-echarts ref="leftEcharts" :option="leftOptions"></ui-echarts>
			<ui-echarts ref="rightEcharts" :option="rightOptions"></ui-echarts>
		</view>
	</view>
</template>

<script>
	
	import * as opt from '@/pages_echarts/static/js/option.js';
	import uiEcharts from "@/pages_echarts/components/ui-echarts/components/ui-echarts/ui-echarts.vue";
	import  echarts from '@/pages_echarts/components/ui-echarts/static/echarts.min.js';
	export default{
		components:{
			uiEcharts
		},
		data(){
			return {
				leftOptions:{},
				rightOptions:{},
				userRegister:{
					add_num: 11,
					add_ratio: 0.1,
					all_num: 11177,
					common_ratio: -99.53,
					old_num: 11166,
					old_ratio: 99.9,
				},
			}
		},
		onLoad() {
			
		},
		onReady() {
			let leftData = [this.userRegister.add_num];
			let rightData = [this.userRegister.old_num];
			
			let leftTitle = `${this.userRegister.add_num}/${this.userRegister.add_ratio}%`;
			let rightTitle = `${this.userRegister.old_num}/${this.userRegister.old_ratio}%`;
			
			
			
			this.leftOptions = opt['progress']['simple'];
			this.leftOptions.series[0].data = leftData;
			this.leftOptions.title.text = leftTitle;
			
			this.rightOptions = opt['progress2']['simple'];
			this.rightOptions.series[0].data = rightData;
			this.rightOptions.title.text = rightTitle;
			
			this.leftOptions.angleAxis.max = this.userRegister.all_num;
			this.rightOptions.angleAxis.max = this.userRegister.all_num
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.echart-box{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 30rpx;
	}
</style>