<template>
	<view>
		<z-paging ref="paging" v-model="dataList" @query="queryList">
			<template #top>
				<nav-bar title="数据加载" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
				<z-tabs :list="tabList" @change="tabChange"></z-tabs>
			</template>
			<view class="item" v-for="(order,index) in dataList" :key="index" @click="itemClickAction(order)">
				<uni-card>
					<view class="item-title">{{order.item_name}}</view>
					<view class="item-detail">{{order.intro}}</view>
					<view class="item-address">{{order.address}}</view>
				</uni-card>
			</view>
		</z-paging>
	</view>
</template>

<script>
	import {
		apiOrderData
	} from '@/api/mock.js'
	export default {
		data(){
			return {
				dataList:[],
				//待评估 待执行 执行中 已完成
				tabList: [
					{ name: '待评估', value: 0 ,title:'audit'},
					{ name: '待执行', value: 1 ,title:'wait'},
					{ name: '执行中', value: 2 ,title:'doing'},
					{ name: '已完成', value: 3 ,title:'complete'}
				],
				tabIndex: 0 ,// 当前tab的下标
			}
		},
		methods:{
			tabChange(index){
				this.tabIndex = index
				this.$refs.paging.reload()
			},
			queryList(pageNo,pageSize){
				uni.showLoading({
					title: '加载中...'
				})
				apiOrderData().then(res=>{
					console.log('评估表单res',res)
					this.dataList = res
					this.$refs.paging.complete(res);
					uni.hideLoading()
				}).catch((err)=>{
					console.log('评估表单err',err)
					this.$refs.paging.complete(false)
					uni.hideLoading()
				})
			},
			itemClickAction(item){
				console.log('评估表单item',item)
			}
			
		}
	}
</script>

<style>
	.item {
		
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		
	}
	
	.item-detail {
		font-size: 28rpx;
	}
	.item-address{
		font-size: 28rpx;
	}
	.item-line {
		position: absolute;
		bottom: 0rpx;
		left: 0rpx;
		height: 1px;
		width: 100%;
		background-color: #eeeeee;
	}
</style>