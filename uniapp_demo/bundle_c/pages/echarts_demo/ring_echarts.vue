<template>
	<view>
		<u-navbar title="圆环图表" :placeholder="true" :autoBack="true"></u-navbar>
		<ui-echarts ref="echarts" :option="ringOptions"></ui-echarts>
	</view>
</template>

<script>
	
	import * as opt from '@/sheep/mock/option.js';
	export default{
		data(){
			return {
				ringOptions:{},
				ringData:[],
			}
		},
		onLoad() {
			
		},
		onReady() {
			this.ringData = [
				{ value: 30, name: '要客服务' },
				
				{ value: 28, name: '应急行业' },
				
				{ value: 26, name: '综合服务业' },
				{ value: 24, name: '建筑行业' },
				{ value: 22, name: '交通物流' },
				
				{ value: 18, name: '卫生健康' },
				{ value: 16, name: '制造能源' },
				{ value: 14, name: '教育行业' },
				{ value: 12, name: '农业农村' },
				
				{ value: 10, name: '其他' }
			];
			this.ringOptions = opt['circle']['simple'];
			console.log('渐变色',this.ringOptions);
		},
		methods:{
			
		}
	}
</script>

<style>
</style>