<template>
	<view class="filte-date">
		<u-navbar title="筛选日期" :fixed="true" :placeholder="true" :autoBack="true"></u-navbar>
		
		<view class="filter-warp">
			<view class="grade-title">经营数据</view>
			<view class="grade-ul">
				<view 
				:class="['grade-li',filterObject.date_type == item.date_type ? 'grade-li-active' : '']"
					v-for="(item,index) in gradeList" 
					:key="index" @click="clickTagFun(item)">
					{{item.label}}
				</view>
			</view>
		</view>
		<!-- <view class="filter-date-box"  v-if="filterObject.date_type == '1'">
		    <view 
				class="grade-week"
				:class="{active:filterObject.date_value==item.date_value}" 
				v-for="(item, index) in weekFilter" :key="index" @tap="itemClick(item)">
		        {{item.name}}
		    </view>
		</view> -->
		
		<view class="filter-date-box"  >
			<scroll-view scroll-x style="white-space: nowrap;">
				<view
					v-if="filterObject.date_type == '1'"
					class="grade-week"
					:class="{active:filterObject.date_value==item.date_value}" 
					v-for="(item, index) in weekFilter" :key="index" @tap="itemClick(item)">
				    {{item.name}}
				</view>
				<view
					v-if="filterObject.date_type == '2'"
					class="grade-week"
					:class="{active:filterObject.date_value==item.date_value}" 
					v-for="(item, index) in monthFilter" :key="index" @tap="itemClick(item)">
				    {{item.name}}
				</view>
				<view 
					v-if="filterObject.date_type == '3'"
					class="grade-quarter" :class="{active:filterObject.date_value==item.date_value}"
					v-for="(item, index) in quarterFilter" :key="index" @tap="itemClick(item)">
				   {{item.name}}
				</view>
				<view
					v-if="filterObject.date_type == '4'"
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
					<view style="align-self: center;">202356.65万元</view>
					<view style="align-self: center;">同比：+200%</view>
				</view>
				<!-- 设置间隔 -->
				<view class="spacer" style="width: 30rpx;"></view>
				<view class="order-box">
					<view style="margin-left: 10rpx;">订单数</view>
					<view style="align-self: center;">65849单</view>
					<view style="align-self: center;">同比：-12.6%</view>
				</view>
			</view>
			<view class="organ-nurse-box">
				<view class="organ-box">
					<view>新增护士</view>
					<view class="uni-row">
						<span class="text-font1">20</span>
						<span class="text-font2">人</span>
					</view>
					<view class="uni-row">
						<span class="text-color1">同比：</span>
						<span class="text-color2">+50%</span>
					</view>
				</view>
				<view class="spacer" style="width: 25rpx;"></view>
				<view class="organ-box">
					<view>新增机构</view>
					<view class="uni-row">
						<span class="text-font1">2</span>
						<span class="text-font2">个</span>
					</view>
					<view class="uni-row">
						<span class="text-color1">同比：</span>
						<span class="text-color2">+20.2%</span>
					</view>
				</view>
				<view class="spacer" style="width: 25rpx;"></view>
				<view class="organ-box">
					<view>新增用户</view>
					<view class="uni-row">
						<span class="text-font1">66956</span>
						<span class="text-font2">人</span>
					</view>
					<view class="uni-row">
						<span class="text-color1">同比：</span>
						<span class="text-color3">-19.32%</span>
					</view>
				</view>
			</view>
			
		</view>

		<!-- <view class="test-box">
			<scroll-view scroll-x style="white-space: nowrap;">
				<view class="grade-month" style="display: inline-block;" :class="{active:filterObject.date_value==item}"
					v-for="(item, index2) in monthFilter" :key="index2" @tap="itemClick(item)">
					  {{item.name}}
				</view>
			</scroll-view>
		</view> -->
		
		<!-- <view class="test-box">
			<scroll-view scroll-x style="white-space: nowrap;">
			   <view class="grade-week" :class="{active:filterObject.date_value==item.date_value}"
					v-if="index === 0" :key="index" style="display: inline-block; margin-left: 15rpx;" @tap="itemClick(item)">
			      {{item.name}}
			    </view>
			    <view class="grade-week" :class="{active:filterObject.date_value==item.date_value}"
					v-else v-for="(item, index) in monthFilter" :key="index" style="display: inline-block;" @tap="itemClick(item)">
			      {{item.name}}
			    </view>
			</scroll-view>
		</view> -->
		
		
	</view>
</template>

<script>
	import moment from 'moment';
	import operateData from '@/sheep/mock/operate_chart.json';
	import { arraySliceSix } from '../../../sheep/utils/tools';
	
	export default {
		
		data(){
			return {
				filterObject: {
					/* 统计时间类型； 1：周；2：月；3：季度；4：年 */
					date_type:'1',
					/* 统计时间值； 周：{1：本周；2：上周}；月：{1-12月}； 季度：{1-4季}；年：年份； */
					date_value:'1'
				},
				gradeList: [
					{
						label: '周数据',
						date_type: '1'
					},
					{
						label: '月数据',
						date_type: '2'
					},
					{
						label: '季度数据',
						date_type: '3'
					},
					{
						label: '年数据',
						date_type: '4'
					}
				],
				/* 周数据 */
				/* 周数据 */
				weekFilter:[
					{name:'上周',date_value:'1',date_type: '1'},
					{name:'本周',date_value:'2',date_type: '1'},
				],
				/* 月数据 */
				monthFilter:[],
				/* 季度数据 */
				quarterFilter:[
					{name:'第一季度',date_value:'1',date_type: '3'},
					{name:'第二季度',date_value:'2',date_type: '3'},
					{name:'第三季度',date_value:'3',date_type: '3'},
					{name:'第四季度',date_value:'4',date_type: '3'}
				],
				
				
				yearFilter: [],
				
				maxDate: [],
				minDate: [],
				
				/* 当前展示数据 */
				currentDate:[],
				
				
			}
		},
		onLoad:function(option){
			this.initDate();
			
		},
		methods:{
			swiperChange(e) {
				console.log(e)
			},
			clickTagFun(item) {
				this.currentDate = [];
				// console.log('用户点击item',item)
				if(this.filterObject.date_type !== item.date_type){
					this.filterObject.date_type = item.date_type;
				}
				
				this.filterObject.date_value = '1';
				if(this.filterObject.date_type == '1'){
					this.currentDate = this.weekFilter;
				}
				if(this.filterObject.date_type == '2'){
					this.currentDate = this.monthFilter;
				}
				if(this.filterObject.date_type == '3'){
					this.currentDate = this.quarterFilter;
				}
				if(this.filterObject.date_type == '4'){
					this.currentDate = this.yearFilter;
					this.filterObject.date_value = this.yearFilter[0];
				}
				
				console.log('用户切换类型weekFilter',this.weekFilter);
				console.log('用户切换类型currentDate',this.currentDate);
			},
			itemClick(item){
				console.log('用户点击itemClick',item);
				this.filterObject.date_value = item.date_value;
				// if(this.filterObject.date_type == '1' || this.filterObject.date_type == '3'){
				// 	this.filterObject.date_value = item.date_value;
				// }else{
				// 	/*  if(this.filterObject.date_type == '2' || this.filterObject.date_type == '4') */
				// 	this.filterObject.date_value = item;
				// }
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
			
			initDate() {
				this.currentDate = this.weekFilter;
				const arr = this.dateToArr();
				
				this.minDate = [arr[0] - 5, 1];
				this.maxDate = [arr[0], 12]; // 年月
				
				this.getYears();
				this.getMonths();
			},
			/**
			 * 获取年份列表
			 */
			getYears() {
				let list = []
				let i = this.minDate[0]
				do {
					list.push(i)
					i++
				} while (i <= this.maxDate[0])
				// this.yearFilter = list;
				
				var formList = [];
				list.forEach(value=>{
					var object = {};
					object.date_type = '4';
					object.name = value+'年';
					object.date_value = value;
					formList.push(object);
				})
				this.yearFilter = formList;
				console.log('获取年份 list = ',this.yearFilter);
			},
			
			/**
			 * 获取月份列表
			 */
			getMonths() {
				const list = Array.from({length: 12}, (v, k) => k + 1)
				
				/* 获取当前月份 */
				let nowDate = new Date();
				let min = 1 ;// 最小的月份
				let max = nowDate.getMonth() + 1 ;// 最大的月份 当前月份
				let monthList = list.slice(min - 1, max - min + 1);
				// this.monthFilter = list.slice(min - 1, max - min + 1);
				
				var formList = [];
				monthList.forEach(value=>{
					var object = {};
					object.date_type = '2';
					object.name = value+'月';
					object.date_value = value;
					formList.push(object);
				})
				this.monthFilter = formList;
				console.log('获取月份 list = ',this.monthFilter);
			},
			
			/* 虚拟数据 */
			getMockData(){
				
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	
	
	.chart-first{
		margin: 0 30rpx;
		padding: 0 20rpx;
		height: 380rpx;
		
		display: flex;
		flex-direction: column; /* 水平布局 */
		
	}
	/* 金额订单 */
	.amount-order-box{
		
		color: #FFFFFF;
		display: flex;
		flex-direction: row; /* 水平布局 */
		align-items: center; /* 垂直居中对齐 */
		justify-content: space-between; /* 子元素之间的间距相等 */
		
		background: linear-gradient(360deg, #FFFFFF 0%, #FFF0DC 100%);
		
	}
	.amount-box{
		display: flex;
		flex-direction: column;
		width: 310rpx;
		height: 136rpx;
		font-size: 26rpx;
		background: linear-gradient(180deg, #FFD53B 0%, #F76B1C 100%);
		box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(235,102,35,0.2);
		border-radius: 10rpx;
	}
	/* 间隔样式 */
	.amount-spacer {
	  flex-grow: 0; /* 不参与flex增长 */
	  flex-shrink: 0; /* 不参与flex收缩 */
	}
	.order-box{
		display: flex;
		flex-direction: column;
		width: 310rpx;
		height: 136rpx;
		background: linear-gradient(141deg, #36B4FB 0%, #4B72F8 100%);
		box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(61,116,255,0.2);
		border-radius: 10rpx;
	}
	.organ-nurse-box{
		margin-top: 38rpx;
		color: #49688E;
		display: flex;
		flex-direction: row; /* 水平布局 */
		align-items: center; /* 垂直居中对齐 */
		justify-content: space-between; /* 子元素之间的间距相等 */
	}
	.organ-box{
		width: 200rpx;
		height: 136rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 10rpx 0rpx rgba(147,152,159,0.2);
		border-radius: 10rpx;
		display: flex;
		flex-direction: column; /* 水平布局 */
		align-items: center; /* 垂直居中对齐 */
	}
	/* 设置“同比”字体颜色 */
	.text-color1 {
	  color: #49688E;
	  font-size: 20rpx;
	}
	/* 设置“+20.16”字体颜色 */
	.text-color2 {
	  color: #6DA905;
	  font-size: 20rpx;
	}
	.text-color3{
		color: #F8643B;
		font-size: 20rpx;
	}
	.text-font1{
		font-size: 32rpx;
		font-weight: 600;
		color: #49688E;
	}
	.text-font2{
		font-size: 26rpx;
		font-weight: 600;
		color: #49688E;
	}
	
	/* 筛选条件 */
	.filter-warp {
		width: 100%;
		padding: 0 34rpx;
		box-sizing: border-box;
	    max-height: 350rpx;
	    overflow: hidden;
		overflow-y: scroll
	}
	.grade-title {
		font-size: 18px;
		color: #353535;
		margin: 20px 0;
		font-weight: bold;
	}
	.grade-ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.grade-li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 140rpx;
		height: 50rpx;
		background: #F7F8FA;
		border-radius: 40rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #182545;
		line-height: 26rpx;
	}
	.grade-li-active {
		background: #3fa0fd;
		font-size: 30rpx;
		color: #ffffff;
	}
	// .grade-li:nth-of-type(n+4) {
	// 	margin-top: 20rpx;
	// }
	// .week-box{
	// 	margin: 30rpx;
	// 	display: flex;
	// 	flex-wrap: wrap;
	// 	justify-content: space-around;
	// }
	// .filter-date-box{
	// 	margin: 30rpx;
	// 	display: flex;
	// 	flex-wrap: wrap;
	// 	justify-content: space-around;
	// }
	
	.filter-date-box{
		margin: 30rpx;
		display: flex;
		flex-wrap: nowrap;
		padding: 0 30rpx;
		// justify-content: space-around;
	}
	
	.grade-week{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120rpx;
		height: 50rpx;
		background: #F7F8FA;
		font-size: 28rpx;
		font-weight: 400;
		color: #182545;
		line-height: 26rpx;
		border-radius: 8rpx;
		display: inline-block;
		&.active{
			// background: #3fa0fd;
			font-size: 28rpx;
			color: #3fa0fd;
		}
	}
	// .grade-month{
	// 	margin: 20rpx 0;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	width: 100rpx;
	// 	height: 50rpx;
	// 	background: #F7F8FA;
	// 	font-size: 28rpx;
	// 	font-weight: 400;
	// 	color: #182545;
	// 	line-height: 26rpx;
	// 	border-radius: 8rpx;
	// 	&.active{
	// 		// background: #3fa0fd;
	// 		font-size: 28rpx;
	// 		color: #3fa0fd;
	// 	}
	// }
	.grade-quarter{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 150rpx;
		height: 50rpx;
		background: #F7F8FA;
		font-size: 28rpx;
		font-weight: 400;
		color: #182545;
		line-height: 26rpx;
		border-radius: 8rpx;
		display: inline-block;
		&.active{
			// background: #3fa0fd;
			font-size: 28rpx;
			color: #3fa0fd;
		}
	}
	
	// .grade-year{
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	width: 100rpx;
	// 	height: 50rpx;
	// 	background: #F7F8FA;
	// 	font-size: 28rpx;
	// 	font-weight: 400;
	// 	color: #182545;
	// 	line-height: 26rpx;
	// 	border-radius: 8rpx;
	// 	&.active{
	// 		// background: #3fa0fd;
	// 		font-size: 28rpx;
	// 		color: #3fa0fd;
	// 	}
	// }
	// .grade-year:nth-of-type(n+5) {
	// 	margin-top: 20rpx;
	// 	justify-self: flex-start;
	// }
</style>