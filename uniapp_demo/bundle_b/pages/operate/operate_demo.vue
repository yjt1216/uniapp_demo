<template>
	<view class="table-demo">
		<u-navbar title="经营统计" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		<!-- 筛选时间 -->
		<view class="top-date">
			<filter-date></filter-date>
		</view>
		
		<!-- 机构销售额占比Top10 -->
		<view class="organ-sales-box" v-if="isSalesChart">
			<image class="sales-left-img" @tap="salesOrderClick" :src="salesOrderLeftImg"></image>
			<image class="sales-right-img" :src="salesOrderRightImg"></image>
			<organ-sales :chartsDataPie="chartsDataPie2" :tableData="tableDataList"></organ-sales>
		</view>
		<!-- 机构订单数量占比Top10 -->
		<view class="organ-order-box" v-else>
			<image class="order-left-img" :src="salesOrderLeftImg"></image>
			<image class="order-right-img" :src="salesOrderRightImg" @tap="salesOrderClick"></image>
			
			<organ-order :chartsDataPie="chartsDataPie2" :tableData="tableDataList"></organ-order>
		</view>
		
		
		<!-- 服务类目下单Top10 -->
		<view class="service-cate-box">
			<view class="box-title">服务类目下单Top10</view>
			
			<view class="cate-list-box" v-if="!cateExpanded">
				<view class="cate-item-box" v-for="(item, index) in serviceCateList.slice(0, 3)" :key="index">
					<view class="cate-top">
						<view style="font-weight: 500;">{{item.cate_name}}</view>
						<view class="cate-top-right">
							<view style="font-weight: 500;">{{item.num}}</view>
							<view class="line-space"></view>
							<view style="font-weight: 500;">{{item.ratio}}%</view>
						</view>
					</view>
					<view class="cate-bottom uni-padding-wrap">
						<progress style="flex: 1;"  :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
						<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
					</view>
				</view>
			</view>
			
			<!-- 展开时显示所有项 -->
			<view class="cate-list-box" v-else>
				<view class="cate-item-box" v-for="(item, index) in serviceCateList" :key="index">
					<view class="cate-top">
						<view style="font-weight: 500;">{{item.cate_name}}</view>
						<view class="cate-top-right">
							<view style="font-weight: 500;">{{item.num}}</view>
							<view class="line-space"></view>
							<view style="font-weight: 500;">{{item.ratio}}%</view>
						</view>
					</view>
					<view class="cate-bottom">
						<progress style="flex: 1;" :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
						<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
					</view>
				</view>
			</view>
						
			<!-- 展开收起按钮 -->
			<button @click="toggleCateExpand">{{ cateExpanded ? '收起' : '展开' }}</button>
			
		</view>
		
		<!-- 护士注册数 -->
		<view class="nurse-register-box">
			<view class="box-title">护士注册数</view>
			<nurse-register :chartData="nurseRingDate"></nurse-register>
		</view>
		
		<!-- 护士数机构分布Top10 -->
		<view class="service-cate-box">
			<view class="box-title">护士数机构分布Top10</view>
			<view class="cate-list-box" v-if="!nurseExpanded">
				<view class="cate-item-box" v-for="(item, index) in hospital_nurse_list.slice(0, 3)" :key="index">
					<view class="cate-top">
						<view style="font-weight: 500;">{{item.hospital_name}}</view>
						<view class="cate-top-right">
							<view style="font-weight: 500;">{{item.num}}</view>
							<view class="line-space"></view>
							<view style="font-weight: 500;">{{item.ratio}}%</view>
						</view>
					</view>
					<view class="cate-bottom uni-padding-wrap">
						<progress style="flex: 1;"  :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
						<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
					</view>
				</view>
			</view>
			
			<!-- 展开时显示所有项 -->
			<view class="cate-list-box" v-else>
				<view class="cate-item-box" v-for="(item, index) in hospital_nurse_list" :key="index">
					<view class="cate-top">
						<view style="font-weight: 500;">{{item.hospital_name}}</view>
						<view class="cate-top-right">
							<view style="font-weight: 500;">{{item.num}}</view>
							<view class="line-space"></view>
							<view style="font-weight: 500;">{{item.ratio}}%</view>
						</view>
					</view>
					<view class="cate-bottom">
						<progress style="flex: 1;" :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
						<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
					</view>
				</view>
			</view>
						
			<!-- 展开收起按钮 -->
			<button @click="toggleNurseExpand">{{ nurseExpanded ? '收起' : '展开' }}</button>
			
		</view>
		<!-- 用户注册 -->
		<view class="nurse-register-box">
			<view class="box-title">用户注册</view>
			<nurse-register :chartData="userRingDate"></nurse-register>
		</view>
		<!-- 患者年龄分布 -->
		<view class="service-cate-box">
			<view class="box-title">患者年龄分布</view>
			<view class="cate-list-box" v-if="!nurseExpanded">
				<view class="cate-item-box" v-for="(item, index) in patientAgeList.slice(0, 3)" :key="index">
					<view class="cate-top">
						<view style="font-weight: 500;">{{item.name}}</view>
						<view class="cate-top-right">
							<view style="font-weight: 500;">{{item.add_num}}</view>
							<view class="line-space"></view>
							<view style="font-weight: 500;">{{item.ratio}}%</view>
						</view>
					</view>
					<view class="cate-bottom uni-padding-wrap">
						<progress style="flex: 1;"  :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
						<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
					</view>
				</view>
			</view>
			
			<!-- 展开时显示所有项 -->
			<view class="cate-list-box" v-else>
				<view class="cate-item-box" v-for="(item, index) in patientAgeList" :key="index">
					<view class="cate-top">
						<view style="font-weight: 500;">{{item.name}}</view>
						<view class="cate-top-right">
							<view style="font-weight: 500;">{{item.add_num}}</view>
							<view class="line-space"></view>
							<view style="font-weight: 500;">{{item.ratio}}%</view>
						</view>
					</view>
					<view class="cate-bottom uni-padding-wrap">
						<progress style="flex: 1;"  :percent="item.ratio" stroke-width="10" activeColor="#333" backgroundColor="#EEF2FA"></progress>
						<u-icon name="arrow-right" color="#5F85FF" size="16"></u-icon>
					</view>
				</view>
			</view>
						
			<!-- 展开收起按钮 -->
			<button @click="toggleNurseExpand">{{ nurseExpanded ? '收起' : '展开' }}</button>
		</view>
		<!-- 机构分布 -->
		<view class="organ-distribution">
			<view class="box-title">机构分布</view>
		</view>
		<!-- 评分统计 -->
		<view class="organ-distribution">
			<view class="box-title">评分统计</view>
		</view>
		
		
		
		<chart-map :chartsDataMap="chartsDataMap"></chart-map>
		
		
		
		
	</view>
</template>

<script>
	
	import moment from 'moment';
	
	
	import tableData from "@/sheep/mock/tableData.js"
	import demodata from '@/sheep/mock/chart.json';
	import operateChart from '@/sheep/mock/operate_chart.json';
	import mapdata from '@/sheep/mock/mapdata.json' //自己的存放路径 我这是在ucharts 实例拷下来的 下面有我的这个文件
	
	import filterDate from '@/bundle_b/components/filter-date/filter-date.vue';
	import organSales from "@/bundle_b/components/organ-sales/organ-sales.vue";
	import organOrder from "@/bundle_b/components/organ-order/organ-order.vue";
	import nurseRegister from "@/bundle_b/components/nurse-register/nurse-register.vue";
	import userRegister from "@/bundle_b/components/user-register/user-register.vue";
	import chartMap from "@/bundle_b/components/map-chart/map-chart.vue";
	export default {
		components:{
			filterDate,
			organSales,
			organOrder,
			nurseRegister,
			userRegister,
			chartMap,
		},
		data(){
			return {
				searchVal: '',
				tableDataList: [],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				chartsDataPie2: {},
				/* 是否展示销售额 默认显示销售额true */
				isSalesChart:true,
				salesOrderLeftImg:'../../static/chart/organ_order_n.png',
				salesOrderRightImg:'../../static/chart/organ_sold_s.png',
				/* 服务项目分类 */
				serviceCateList:[],
				/* 根据cateExpanded状态决定是否展示所有item 初始默认为收起状态false */
				cateExpanded: false, 
				/* 护士注册 */
				nurseRingDate: {},
				/* 用户注册 */
				userRingDate: {},
				/* 护士数机构分布list */
				hospital_nurse_list:[],
				/* 根据nurseExpanded状态决定是否展示所有item 初始默认为收起状态false */
				nurseExpanded: false, 
				/* 患者年龄分布 */
				patientAgeList:[],
				chartsDataMap:{},
			}
		},
		onLoad:function(){
			this.selectedIndexs = []
			this.getData(1);
			this.chartsDataMap = {
				series: mapdata.features,
			}
			console.log('chartsDataMap',this.chartsDataMap);
		},
		onReady:function(){
			// this.chartsDataPie2=JSON.parse(JSON.stringify(demodata.PieB));
			setTimeout(() => {
				this.chartsDataPie2=JSON.parse(JSON.stringify(demodata.PieB));
				this.serviceCateList=JSON.parse(JSON.stringify(operateChart.service_item_cate_order_num_list));
				this.hospital_nurse_list = JSON.parse(JSON.stringify(operateChart.hospital_nurse_list));
				const patientAgeData = JSON.parse(JSON.stringify(operateChart.person));
			  
				let nurserRes = {
				    series: [
				      {
				        data: [{"name":"新增护士","value":568},{"name":"原有护士","value":359}]
				      }
				    ]
				};
				let userRes = {
				    series: [
				      {
				        data: [{"name":"新增用户","value":568},{"name":"原有用户","value":359}]
				      }
				    ]
				};
				this.nurseRingDate = JSON.parse(JSON.stringify(nurserRes));
				  
				this.userRingDate = JSON.parse(JSON.stringify(userRes));
				this.patientAgeList = patientAgeData.age;
			  
			  // console.log('服务项目',this.serviceCateList);
			}, 300);
		},
		methods:{
			toggleCateExpand() {
			    this.cateExpanded = !this.cateExpanded;
			},
			toggleNurseExpand(){
				this.nurseExpanded = !this.nurseExpanded;
			},
			salesOrderClick(){
				this.isSalesChart = !this.isSalesChart;
				console.log('ring订单');
				if(this.isSalesChart){
					this.salesOrderLeftImg = '../../static/chart/organ_order_n.png';
					this.salesOrderRightImg = '../../static/chart/organ_sold_s.png';
				}else{
					this.salesOrderLeftImg = '/bundle_b/static/chart/organ_order_s.png';
					this.salesOrderRightImg = '../../static/chart/organ_sold_n.png';
				}
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
						this.tableDataList = res.data
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

<style lang="scss" scoped>
	.line-space{
		margin: 0 10rpx;
		height: 30rpx;
		width: 3rpx;
		background-color: #333;
	}
	.top-date{
		width: 100%;
		height: 700rpx;
		padding: 20rpx 0;
		// background-color: red;
	}
	.service-cate-box{
		box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		position: relative;
		// width: 710rpx;
		// height: 650rpx;
		margin: 20rpx;
		padding:10rpx 20rpx;
		display: flex;
		flex-direction: column;
	}
	
	.nurse-register-box{
		box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		position: relative;
		padding:10rpx 20rpx;
	}
	
	.organ-sales-box{
		background-image: url("../../static/chart/organ_sold_bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		position: relative; /* 确保父视图是相对定位 */
		padding: 0 20rpx;
		min-height: 600rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.sales-right-img{
		position: absolute; /* 图片需要绝对定位 */
		right: 30rpx; /* 让图片贴着父容器的右侧 */
		top: 30rpx; /* 让图片贴着父容器的顶部 */
		width: 298rpx;
		height: 56rpx;
		z-index: 9991;
	}
	.sales-left-img{
		position: absolute; /* 图片需要绝对定位 */
		left: 50rpx; /* 让图片贴着父容器的右侧 */
		top: 50rpx; /* 让图片贴着父容器的顶部 */
		width: 222rpx;
		height: 31rpx;
		z-index: 9991;
		
	}
	.organ-order-box{
		background-image: url("../../static/chart/organ_order_bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		position: relative; /* 确保父视图是相对定位 */
		padding: 0 20rpx;
		min-height: 600rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.order-left-img{
		position: absolute; /* 图片需要绝对定位 */
		left: 30rpx; /* 让图片贴着父容器的右侧 */
		top: 30rpx; /* 让图片贴着父容器的顶部 */
		width: 298rpx;
		height: 56rpx;
		z-index: 9991;
	}
	.order-right-img{
		position: absolute; /* 图片需要绝对定位 */
		right: 50rpx; /* 让图片贴着父容器的右侧 */
		top: 50rpx; /* 让图片贴着父容器的顶部 */
		width: 222rpx;
		height: 31rpx;
		z-index: 9991;
	}
	.box-title{
		margin-top: 20rpx;/* 上边 | 右边 | 下边 | 左边 */
		height: 37rpx;
		font-size: 32rpx;
		font-family: BDZYJT--GB1, BDZYJT--GB1;
		font-weight: normal;
		color: #3B5070;
		line-height: 37rpx;
	}
	.cate-item-box{
		display: flex;
		flex-direction: column;
		height: 100rpx;
		margin-bottom: 10rpx;
	}
	.cate-top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.cate-top-right{
		display: flex;
		flex-direction: row;
		padding-right: 10rpx;
	}
	.cate-bottom{
		display: flex;
		flex-direction: row;
	}
	.cate-list-box{
		margin-top: 20rpx;
	}
	
	.list-container{
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
		background-color: rgba(255, 255, 255, 1);
		border-radius: 10px;
		margin: 20rpx;
	}
</style>