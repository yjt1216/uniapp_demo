<template>
	<view class="table-demo" >
		<u-navbar title="经营统计" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		<!-- 筛选时间 -->
		<view class="bunsiness-filte-box">
			<!-- <filter-date></filter-date> -->
			<view class="filter-warp">
				<view class="grade-title">
					<image
					    class="icon_1"
					    referrerpolicy="no-referrer"
					    src="/bundle_b/static/chart/icon.png"
					/>
					<text class="text-group_1">经营数据</text>
				</view>
				<view class="grade-ul">
					<view :class="['grade-li',filterObject.date_type == item.date_type ? 'grade-li-active' : '']"
						v-for="(item,index) in gradeList" 
						:key="index" @click="clickTagFun(item)">
						{{item.label}}
					</view>
				</view>
				<view class="filter-date-box" >
					<scroll-view scroll-x style="white-space: nowrap;">
						<view
							v-if="filterObject.date_type == 1 "
							class="grade-week"
							:class="{active:filterObject.date_value==item.date_value}" 
							v-for="(item, index) in weekFilter" :key="index" @tap="itemClick(item)">
						    {{item.name}}
						</view>
						<view
							v-if="filterObject.date_type == 2 "
							class="grade-week"
							:class="{active:filterObject.date_value==item.date_value}" 
							v-for="(item, index) in monthFilter" :key="index" @tap="itemClick(item)">
						    {{item.name}}
						</view>
						<view 
							v-if="filterObject.date_type == 3 "
							class="grade-quarter" :class="{active:filterObject.date_value==item.date_value}"
							v-for="(item, index) in quarterFilter" :key="index" @tap="itemClick(item)">
						   {{item.name}}
						</view>
						<view
							v-if="filterObject.date_type == 4 "
							class="grade-week"
							:class="{active:filterObject.date_value==item.date_value}" 
							v-for="(item, index) in yearFilter" :key="index" @tap="itemClick(item)">
						    {{item.name}}
						</view>
					</scroll-view>
				</view>
				
				<view class="chart-first">
					<view class="amount-order-box">
						<view class="amount-box">
							<view style="margin-left: 10rpx;">金额</view>
							<view style="align-self: center;">{{add_order_amount.amount}}</view>
							<view style="align-self: center;">同比：{{add_order_amount.common_ratio}}</view>
						</view>
						<!-- 设置间隔 -->
						<view class="spacer" style="width: 30rpx;"></view>
						<view class="order-box">
							<view style="margin-left: 10rpx;">订单数</view>
							<view style="align-self: center;">{{add_order_num.num}}</view>
							<view style="align-self: center;">同比：{{add_order_amount.common_ratio}}</view>
						</view>
					</view>
					<view class="organ-nurse-box">
						<view class="organ-box">
							<view>新增护士</view>
							<view class="uni-row">
								<span class="text-font1">{{add_nurse.num}}</span>
								<span class="text-font2">人</span>
							</view>
							<view class="uni-row">
								<span class="text-color1">同比：</span>
								<span class="text-color2">{{add_nurse.common_ratio}}</span>
							</view>
						</view>
						<view class="spacer" style="width: 25rpx;"></view>
						<view class="organ-box">
							<view>新增机构</view>
							<view class="uni-row">
								<span class="text-font1">{{add_hospital.num}}</span>
								<span class="text-font2">个</span>
							</view>
							<view class="uni-row">
								<span class="text-color1">同比：</span>
								<span class="text-color2">{{add_hospital.common_ratio}}</span>
							</view>
						</view>
						<view class="spacer" style="width: 25rpx;"></view>
						<view class="organ-box">
							<view>新增用户</view>
							<view class="uni-row">
								<span class="text-font1">{{add_user.add_num}}</span>
								<span class="text-font2">人</span>
							</view>
							<view class="uni-row">
								<span class="text-color1">同比：</span>
								<span class="text-color3">{{add_user.common_ratio}}</span>
							</view>
						</view>
					</view>
					
				</view>
				
			</view>
		</view>
		
		
		
		<!-- 机构销售额占比Top10 -->
		<view class="organ-sales-box" v-if="isSalesChart">
			<image class="sales-left-img" @tap="salesOrderClick" :src="salesOrderLeftImg"></image>
			<image class="sales-right-img" :src="salesOrderRightImg"></image>
			<organ-sales :chartsDataPie="hospitalAmountData" :tableData="hospital_amount_list" :title="totalAmount"
				subtitle="销售额"></organ-sales>
		</view>
		<!-- 机构订单数量占比Top10 -->
		<view class="organ-order-box" v-else>
			<image class="order-left-img" :src="salesOrderLeftImg"></image>
			<image class="order-right-img" :src="salesOrderRightImg" @tap="salesOrderClick"></image>
			
			<organ-order :chartsDataPie="hospitalOrderData" :tableData="hospital_order_list"  :title="totalOrder"
				subtitle="订单数"></organ-order>
		</view>
		
		
		<!-- 服务类目下单Top10 -->
		<view class="service-cate-box">
			<view class="box-title">服务类目下单Top10</view>
			
			<service-cate :serviceCateList="serviceCateList"></service-cate>
			
		</view>
		
		<!-- 护士注册数 -->
		<view class="nurse-register-box">
			<view class="box-title">护士注册数</view>
			<nurse-register :chartData="nurseRingDate" :title="totalNurse" subtitle="总和"></nurse-register>
		</view>
		
		<!-- 护士数机构分布Top10 -->
		<view class="service-cate-box">
			<view class="box-title">护士数机构分布Top10</view>
			<service-cate :serviceCateList="hospital_nurse_list" dataType="2"></service-cate>
		</view>
		<!-- 用户注册 -->
		<view class="nurse-register-box">
			<view class="box-title">用户注册</view>
			<nurse-register :chartData="userRingDate" :title="totalUser" subtitle="总和"></nurse-register>
		</view>
		<!-- 患者年龄分布 -->
		<view class="service-cate-box">
			<view class="box-title">患者年龄分布</view>
			<service-cate :serviceCateList="patientAgeList" dataType="3"></service-cate>
		</view>
		<chart-map :chartsDataMap="chartsDataMap" ></chart-map>
		<!-- 机构分布 -->
		<view class="service-cate-box">
			<view class="box-title">机构分布</view>
			<service-cate :serviceCateList="city_order_list" dataType="4"></service-cate>
		</view>
		<!-- 评价统计 -->
		<view class="service-cate-box">
			<view class="box-title">评价统计</view>
			<view class="evaluate-stat-box">
				<view class="evaluate-box">
					<view style="margin-left: 10rpx;">评分次数</view>
					<view style="align-self: center;">{{evaluate.all_evaluate_times}}</view>
				</view>
				<!-- 设置间隔 -->
				<view class="spacer" style="width: 30rpx;"></view>
				<view class="evaluate-box">
					<view style="margin-left: 10rpx;">评分率</view>
					<view style="align-self: center;">{{evaluate.evaluate_rate}}</view>
					
				</view>
				<view class="spacer" style="width: 30rpx;"></view>
				<view class="evaluate-box">
					<view style="margin-left: 10rpx;">平均值</view>
					<view style="align-self: center;">{{evaluate.average_star}}</view>
					
				</view>
				
			</view>
		</view>
		
		<view class="hospital-table-box">
			<view class="title">默认</view>
			<view class="hospital-nurse-box"></view>
			<view class="h-table">
				<view class="h-tr h-tr-3 h-thead ">
					<view class="h-td">机构</view>
					<view class="h-td">综合评分</view>
					<view class="h-td">服务态度</view>
					<view class="h-td">服务技能</view>
					<view class="h-td">服务效果</view>
					<view class="h-td">记录总数</view>
				</view>
				<view class="h-tr h-tr-3">
					
					<view class="h-td h-td-colspan h-td-rowspan" >
						<!-- <view class="h-tr h-tr-2">
							<view class="h-td">南京鼓楼幸福颐养康复医疗中心</view>
							<view class="h-td">5</view>
							<view class="h-td">5</view>
							<view class="h-td">5</view>
							<view class="h-td">5</view>
						</view>
						<view class="h-tr h-tr-2">
							<view class="h-td">苏州大学第一附属医院</view>
							<view class="h-td">5</view>
							<view class="h-td">5.0.0.0</view>
							<view class="h-td">5</view>
							<view class="h-td">5.0.0.0</view>
						</view> -->
						<view class="h-tr h-tr-2" v-for="(hospital,index) in evaluate.hospital_list" :key="index">
							<view class="h-td">{{hospital.name}}</view>
							<view class="h-td">{{hospital.star}}</view>
							<view class="h-td">{{hospital.attitude}}</view>
							<view class="h-td">{{hospital.skill}}</view>
							<view class="h-td">{{hospital.effect}}</view>
							<view class="h-td">{{hospital.num}}</view>
						</view> 
					</view>
				</view>
				<view class="h-tr h-tr-3">
					<view class="h-td">-</view>
					<view class="h-td">-</view>
					<view class="h-td">-</view>
					<view class="h-td">-</view>
					<view class="h-td">-</view>
				</view>
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	
	import tableData from "@/sheep/mock/tableData.js"
	import demodata from '@/sheep/mock/chart.json';
	import operateChart from '@/sheep/mock/operate_chart.json';
	import mapdata from '@/sheep/mock/mapdata.json' //自己的存放路径 我这是在ucharts 实例拷下来的 下面有我的这个文件
	
	
	import organSales from "@/bundle_b/components/organ-sales/organ-sales.vue";
	import organOrder from "@/bundle_b/components/organ-order/organ-order.vue";
	import nurseRegister from "@/bundle_b/components/nurse-register/nurse-register.vue";
	
	import chartMap from "@/bundle_b/components/map-chart/map-chart.vue";
	
	import serviceCate from "@/bundle_b/components/service-cate/service-cate.vue";
	
	import localStore from "@/sheep/config/local_store.js";
	import { DEFAULT_FILTER } from '@/sheep/config/cachekey';
	import { sumValues, transformListWithRename ,renameAndAddLabelShow} from "../../../sheep/utils/tools";
	
	import moment from 'moment';
	
	
	import serviceData from "@/sheep/mock/serviceData.json";
	
	export default {
		components:{
			organSales,
			organOrder,
			serviceCate,
			nurseRegister,
			
			chartMap,
		},
		data(){
			return {
				
				/* 机构销售额 */
				hospital_amount_list:[],
				hospitalAmountData: {},
				totalAmount:'0',
				/* 机构订单数 */
				hospital_order_list:[],
				hospitalOrderData:{},
				totalOrder:'0',
				chartsDataPie2: {},
				/* 是否展示销售额 默认显示销售额true */
				isSalesChart:true,
				salesOrderLeftImg:'../../static/chart/organ_order_n.png',
				salesOrderRightImg:'../../static/chart/organ_sold_s.png',
				/* 服务项目分类 */
				serviceCateList:[],
				
				/* 护士注册 */
				nurseRingDate: {},
				totalNurse:'0',
				/* 用户注册 */
				userRingDate: {},
				totalUser:'0',
				/* 护士数机构分布list */
				hospital_nurse_list:[],
				
				/* 患者年龄分布 */
				patientAgeList:[],
				chartsDataMap:{},
				/* 城市订单占比 */
				city_order_list:[],
				filterObject: {
					/* 统计时间类型； 1：周；2：月；3：季度；4：年 */
					date_type:1,
					/* 统计时间值； 周：{1：本周；2：上周}；月：{1-12月}； 季度：{1-4季}；年：年份； */
					date_value:1
				},
				gradeList: [
					{
						label: '周数据',
						date_type: 1
					},
					{
						label: '月数据',
						date_type:2
					},
					{
						label: '季度数据',
						date_type: 3
					},
					{
						label: '年数据',
						date_type: 4
					}
				],
				/* 周数据 */
				weekFilter:[
					{name:'上周',date_value:1,date_type: 1},
					{name:'本周',date_value:2,date_type: 1},
				],
				/* 月数据 */
				monthFilter:[],
				/* 季度数据 */
				quarterFilter:[
					{ name: '第一季度', firstMonth: 1, date_type: 3 ,date_value: 1},
					{ name: '第二季度', firstMonth: 4, date_type: 3 ,date_value: 2},
					{ name: '第三季度', firstMonth: 7, date_type: 3 ,date_value: 3},
					{ name: '第四季度', firstMonth: 10, date_type: 3 ,date_value: 4}
				],
				
				yearFilter: [],
				
				maxDate: [],
				minDate: [],
				
				/* 用户选择年份 */
				selectYear:null,
				/* 用户选择月份 */
				selectMonth:null,
				/* 金额 订单 机构 用户 护士 */
				add_order_amount:{},
				add_order_num:{},
				add_hospital:{},
				add_user:{},
				add_nurse:{},
				/* 评价统计 */
				evaluate:{},
				
			}
		},
		onLoad: async function(){
			let defaultFilter = await localStore.get(DEFAULT_FILTER);
			if(defaultFilter){
				this.filterObject = defaultFilter;
			}else{
				this.filterObject.date_type = 1;
			}
			
			this.getData(1);
			// this.chartsDataMap = {
			// 	series: mapdata.features,
			// }
			// console.log('chartsDataMap',this.chartsDataMap);
			this.initDate();
		},
		onReady:function(){
			
			setTimeout(() => {
				// this.chartsDataPie2=JSON.parse(JSON.stringify(demodata.PieB));
				this.add_order_amount = JSON.parse(JSON.stringify(operateChart.add_order_amount));
				this.add_order_num = JSON.parse(JSON.stringify(operateChart.add_order_num));
				this.add_hospital = JSON.parse(JSON.stringify(operateChart.add_hospital));
				
				let addNurse =  JSON.parse(JSON.stringify(operateChart.nurse));
				let addUser = JSON.parse(JSON.stringify(operateChart.user));
				this.add_nurse = addNurse;
				this.add_user = addUser;
				this.evaluate = JSON.parse(JSON.stringify(operateChart.evaluate));
				const orderRules = {
					'hospital_name': 'name',
					'num': 'value'
				}
				const amountRules = {
					'hospital_name': 'name',
					'amount': 'value'
				}
				const mapRules = {
					'city_name': 'storeName',
					'num': 'storeSym'
				}
				
				
				var hospital_amount_list = JSON.parse(JSON.stringify(operateChart.hospital_order_amount_list));
				let hospital_order_list = JSON.parse(JSON.stringify(operateChart.hospital_order_num_list));
				
				let city_order_list = JSON.parse(JSON.stringify(operateChart.city_order_list));
				this.city_order_list = city_order_list;
				
				this.hospital_amount_list = hospital_amount_list;
				this.hospital_order_list = hospital_order_list;
				hospital_amount_list = hospital_amount_list.map(item => ({
				  ...item, // 保留原有属性和值
				  amount: parseFloat(item.amount) // 将amount的值转换为float
				}));
				let totalAmount = sumValues(hospital_amount_list,'amount');
				
				let totalOrder = sumValues(hospital_order_list,'num');
				
				
				
				this.totalAmount =`${totalAmount}`;
				this.totalOrder = `${totalOrder}`;
				
				
				
				this.hospitalAmountData = transformListWithRename(hospital_amount_list,amountRules);
				this.hospitalOrderData = transformListWithRename(hospital_order_list,orderRules);
				let mapDataChart = renameAndAddLabelShow(city_order_list,mapRules);
				
				this.serviceCateList=JSON.parse(JSON.stringify(operateChart.service_item_cate_order_num_list));
				this.hospital_nurse_list = JSON.parse(JSON.stringify(operateChart.hospital_nurse_list));
				
				const patientAgeData = JSON.parse(JSON.stringify(operateChart.person));
			  
				let nurserRes = {
				    series: [
				      {
				        data: [{name:"新增护士",value:parseFloat(addNurse.add_num)},
						{name:"原有护士",value:parseFloat(addNurse.old_num)}]
				      }
				    ]
				};
				let userRes = {
				    series: [
				      {
				        data: [
							{name:"新增用户",value: parseFloat(addUser.add_num)},
							{name:"原有用户",value:parseFloat(addUser.old_num)},
						]
				      }
				    ]
				};
				console.log('页面即将销毁userRes',nurserRes.series[0].data);
				console.log('页面即将销毁userRes',userRes.series[0].data);
				
				let totalNurse = sumValues(nurserRes.series[0].data,'value');
				let totalUser = sumValues(userRes.series[0].data,'value');
				
				this.totalNurse =`${totalNurse}`; 
				this.totalUser = `${totalUser}`; 
				this.nurseRingDate =  nurserRes;
				  
				this.userRingDate = userRes;
				
				
				
				this.patientAgeList = patientAgeData.age;
				
				let mapseries = mapdata.features.map((item) => {
					//根据接口数据查找到当前匹配的数据
					let dataItem = mapDataChart.find((x) => x.storeName == item.properties.name+'市') || {
						storeSym: 0, //门店数量
						companyNumber: 0, //缺编人数
						storeName: item.properties.name, //地区
					}
					//添加到 json data中
					item.data = dataItem
					//设置颜色
					item.color = this.addColor(dataItem?.storeSym || 0)
					return item
				})
				this.chartsDataMap.series = mapseries
			  // console.log('服务项目',this.serviceCateList);
			}, 300);
		},
		beforeDestroy: async function(){
			await localStore.set(DEFAULT_FILTER,this.filterObject);
			console.log('页面即将销毁');
		},
		methods:{
			addColor(count) {
				if (count > 800) {
					return '#bc3e10';
				} else if (count > 700) {
					return '#fc5902';
				} else if (count > 500) {
					return '#fc9c02';
				} else if (count > 400) {
					return '#fbdb0f';
				} else if (count > 200) {
					return '#93ce05';
				} else {
					return '#62ae02';
				}
			},
			
			salesOrderClick(){
				this.isSalesChart = !this.isSalesChart;
				
				this.totalAmount = '1000.99';
				this.totalOrder = '100';
				console.log('ring订单',this.totalAmount,this.totalOrder);
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
			},
			clickTagFun(item) {
				console.log('用户点击item',item);
				if(this.filterObject.date_type !== item.date_type){
					this.filterObject.date_type = item.date_type;
				}
				
				if(this.filterObject.date_type === 4){
					let nowDate = new Date();
					// this.filterObject.date_value = item.date_value;
					this.filterObject.date_value = nowDate.getFullYear();
				}else if(this.filterObject.date_type === 2){
					this.getMonths();
				}else{
					this.filterObject.date_value = 1;
				}
				
				console.log('用户切换类型filterObject',this.filterObject);
				
			},
			itemClick(item){
				this.filterObject.date_value = item.date_value;
				if(this.filterObject.date_type === 4){
					this.selectYear = item.date_value;
					console.log('用户选择年份 = ',this.selectYear);
					this.getPastQuartersInYear(this.selectYear);
				}
				if(this.filterObject.date_type === 2){
					this.selectMonth = item.date_value;
				}
				console.log('用户点击filterObject',this.filterObject);
				
			},
			/**
			 * 日期转数组
			 * @param {Object} date
			 */
			dateToArr(date) {
			  if (!date) date = new Date()
			  return moment(date).format('YYYY-MM').split('-').map(o => Number(o));
			},
			
			async initDate() {
				let nowDate = new Date();
				/* 初始化 默认年 月 */
				this.selectYear = nowDate.getFullYear();
				this.selectMonth = nowDate.getMonth() + 1;
				
				const arr = this.dateToArr();
				
				this.minDate = [arr[0] - 5, 1];
				this.maxDate = [arr[0], 12]; // 年月
				
				this.getYears();
				this.getMonths();
				this.getPastQuartersInYear(this.selectYear);
				
				
				//console.log('获取selectYear = ',this.selectYear);
				//console.log('获取周 list = ',this.weekFilter);
			},
			/**
			 * 获取年份列表
			 */
			getYears() {
				let startYear = 2019; // 假设这是你的起始年份
				let now = new Date();
				let currentYear = now.getFullYear();
				
				// 创建一个空数组来存储结果
				let yearsArray = [];
				
				// 遍历起始年份到当前年份
				for (let year = startYear; year <= currentYear; year++) {
				    yearsArray.push({
				        name: `${year}年`,
				        date_value: year, // 根据你的描述，这里使用年份作为date_value
				        date_type: 3 // 这里假设date_type固定为3，根据实际需求进行调整
				    });
				}
				
				this.yearFilter = yearsArray;
			},
			/* 获取季度 */
			getPastQuartersInYear(year) {
				let quarters = [
				  { name: '第一季度', firstMonth: 1, date_type: 3 ,date_value: 1},
				  { name: '第二季度', firstMonth: 4, date_type: 3 ,date_value: 2},
				  { name: '第三季度', firstMonth: 7, date_type: 3 ,date_value: 3},
				  { name: '第四季度', firstMonth: 10, date_type: 3 ,date_value: 4}
				];
				let pastQuarters = [];
				let currentMonth = new Date().getMonth() + 1; // getMonth()返回的月份是从0开始的，所以需要加1
				
				for (let i = 0; i < 4; i++) {
				  let quarterStartMonth = i * 3 + 1;
				  let quarterEndMonth = quarterStartMonth + 2;
							
				  if (year === (new Date()).getFullYear()) { // 如果是今年，则根据当前月份判断
				    if (quarterStartMonth <= currentMonth && quarterEndMonth >= currentMonth) {
				      pastQuarters.push(quarters[i]);
				    }
				  } else { // 如果不是今年，则记录完整的四个季度（假设我们关注的是整个年份）
				    pastQuarters.push(quarters[i]);
				  }
				}
				this.quarterFilter = pastQuarters;
				// console.log(`当前季度：${this.quarterFilter}`);
			
				return pastQuarters;
			},
			
			/**
			 * 获取月份列表
			 */
			getMonths() {
				const list = Array.from({length: 12}, (v, k) => k + 1)
				
				/* 获取当前月份 */
				let nowDate = new Date();
				let nowYear = nowDate.getFullYear();
				let min = 1 ;// 最小的月份
				/*  最大的月份为当前月份  如果选择年份不是今年 则最大年份为12*/
				let max = this.selectYear == nowYear ? nowDate.getMonth() + 1 : 12 ;//
				let monthList = list.slice(min - 1, max - min + 1);
				// this.monthFilter = list.slice(min - 1, max - min + 1);
				
				var formList = [];
				monthList.forEach(value=>{
					var object = {};
					object.date_type = 2;
					object.name = value+'月';
					object.date_value = value;
					formList.push(object);
				})
				this.monthFilter = formList;
				console.log('获取月份 list = ',this.monthFilter);
			},
			
			
		},
	}
</script>

<style lang="scss" scoped>
	@import "helang-table.scss";
	@import "date_filter.scss";
	page {
	    width: 100%;
	    height: 100%;
	}
	.table-demo{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.line-space{
		margin: 0 10rpx;
		height: 30rpx;
		width: 3rpx;
		background-color: #333;
	}
	.bunsiness-filte-box{
		width: 100%;
		height: 700rpx;
		padding: 20rpx 0;
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
	.evaluate-stat-box{
		color: #FFFFFF;
		display: flex;
		flex-direction: row; /* 水平布局 */
		align-items: center; /* 垂直居中对齐 */
		justify-content: space-between; /* 子元素之间的间距相等 */
		background: linear-gradient(360deg, #FFFFFF 0%, #FFF0DC 100%);
	}
	.evaluate-box{
		display: flex;
		flex-direction: column;
		width: 310rpx;
		height: 136rpx;
		font-size: 26rpx;
		background: linear-gradient(180deg, #FFD53B 0%, #F76B1C 100%);
		box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(235,102,35,0.2);
		border-radius: 10rpx;
		justify-content: center;
	}
	/* 间隔样式 */
	.evaluate-spacer {
	  flex-grow: 0; /* 不参与flex增长 */
	  flex-shrink: 0; /* 不参与flex收缩 */
	}
	
	.hospital-table-box{
		padding: 10rpx;
	}
	.hospital-nurse-box{
		border-radius: 20rpx;
		height: 60rpx;
		width: 200rpx;
		display: flex;
		flex-direction: row;
	}
</style>