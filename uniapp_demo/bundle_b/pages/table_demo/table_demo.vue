<template>
	<view class="table-demo">
		<u-navbar title="表格" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		
		<!-- <view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据" >
				<uni-tr>
					<uni-th width="150" align="center">机构名称</uni-th>
					<uni-th width="25" align="center">占比</uni-th>
					<uni-th width="25" align="center">金额</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td align="center">{{ item.date }}</uni-td>
					<uni-td align="center">{{ item.name }}</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
				</uni-tr>
			</uni-table>
		</view> -->
		
		<view class="oragn-box">
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
			<view class="chart-box">
				
			</view>
		</view>
		
		
		
		
		
	</view>
</template>

<script>
	import uniTable from '@/bundle_b/components/uni-table/components/uni-table/uni-table.vue';
	import uniTr from '@/bundle_b/components/uni-table/components/uni-tr/uni-tr.vue';
	import uniTd from '@/bundle_b/components/uni-table/components/uni-td/uni-td.vue';
	import uniTh from '@/bundle_b/components/uni-table/components/uni-th/uni-th.vue';
	
	import tableData from "../../../sheep/mock/tableData.js"
	
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
				loading: false
			}
		},
		onLoad:function(){
			this.selectedIndexs = []
			this.getData(1)
		},
		methods:{
			
			
			// 分页触发
			change(e) {
				this.$refs.table.clearSelection()
				this.selectedIndexs.length = 0
				this.getData(e.current)
			},
			// 搜索
			search() {
				this.getData(1, this.searchVal)
			},
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