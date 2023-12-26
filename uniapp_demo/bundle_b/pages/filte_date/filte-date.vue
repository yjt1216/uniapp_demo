<template>
	<view class="filte-date">
		<u-navbar title="筛选日期" :fixed="true" :placeholder="true"></u-navbar>
		<!-- <view v-for="(item,index) in years" :key="index" class="picker-item">
		  {{ item }}年
		</view>
		<view v-for="(item,index) in months" :key="index" class="picker-item">
		  {{ item }}月
		</view> -->
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
		<view class="week-box"  v-if="filterObject.date_type == '1'">
		    <view :class="['grade-li',filterObject.date_value == item.date_value ? 'grade-li-active' : '']" 
				v-for="(item, index) in weekFilter" :key="index" @tap="itemClick(item)">
		        {{item.name}}
		    </view>
		</view>
		
		
		
		<view class="quarter-box"  v-if="filterObject.date_type == '2' ">
		    <view class="grade-month" :class="{active:filterObject.date_value==item}"
				v-for="(item, index) in months" :key="index" @tap="itemClick(item)">
		        {{item }}月
		    </view>
		</view>
		
		
		<view class="quarter-box" v-if=" filterObject.date_type == '3'">
			<view :class="['grade-li',filterObject.date_value == item.date_value ? 'grade-li-active' : '']" 
				v-for="(item, index) in quarterFilter" :key="index" @tap="itemClick(item)">
			    {{item.name}}
			</view>
		</view>
		
		<view class="quarter-box" v-if=" filterObject.date_type == '4'">
		    <view class="grade-year" :class="{active:filterObject.date_value==item}"
				v-for="(item, index) in years" :key="index" @tap="itemClick(item)">
		        {{item }}年
		    </view>
		</view>
		
	</view>
</template>

<script>
	import moment from 'moment';
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
				weekFilter:[
					{name:'上周',date_value:'1'},
					{name:'本周',date_value:'2'},
				],
				/* 月数据 */
				monthFilter:[],
				/* 季度数据 */
				quarterFilter:[
					{name:'第一季度',date_value:'1'},
					{name:'第二季度',date_value:'2'},
					{name:'第三季度',date_value:'3'},
					{name:'第四季度',date_value:'4'}
				],
				
				
				valueArr: [],
				valueIndexArr: [],
				
				years: [],
				months: [],
				
				maxDate: [],
				minDate: [],
				
				/* 当前展示数据 */
				currentDate:[],
				
				
			}
		},
		onLoad:function(option){
			this.initDate();
			this.currentDate = this.weekFilter;
		},
		methods:{
			
			clickTagFun(item) {
				console.log('用户点击item',item)
				if(this.filterObject.date_type !== item.date_type){
					this.filterObject.date_type = item.date_type;
				}
				if(this.filterObject.date_type === '4'){
					this.filterObject.date_value = this.years[0];
				}else{
					this.filterObject.date_value = '1';
				}
				
				console.log('用户切换类型filterObject',this.filterObject);
				
			},
			itemClick(item){
				if(this.filterObject.date_type == '1' || this.filterObject.date_type == '3'){
					this.filterObject.date_value = item.date_value;
				}else if(this.filterObject.date_type == '2' || this.filterObject.date_type == '4'){
					this.filterObject.date_value = item;
				}
				console.log('用户点击filterObject',this.filterObject);
			},
			/**
			 * 日期转数组
			 * @param {Object} date
			 */
			dateToArr(date) {
			  if (!date) date = new Date()
			  return moment(date).format('YYYY-MM').split('-').map(o => Number(o))
			},
			
			initDate() {
				this.valueArr = this.dateToArr(this.value)
			  
				// 计算结束日期
				if (!this.endTime) {
					const arr = this.dateToArr(this.endTime)
					// arr[0] = arr[0] + 100
					this.maxDate = [arr[0], 12, 31, 23, 59, 59]
				} else {
					this.maxDate = this.dateToArr(this.endTime)
				}
				
				// 计算开始日期
				if (!this.startTime) {
					
					const now = this.dateToArr()
					// this.minDate = [1900,1,1,0,0,0]
					// this.minDate = [now[0] - 100, 1, 1, 0, 0, 0]
					// this.minDate = [2019,1,1,0,0,0]
					this.minDate = [now[0] - 4, 1, 1, 0, 0, 0]
					
					
				} else {
					this.minDate = this.dateToArr(this.startTime)
				}
				this.getYears()
				this.getMonths()
			  
				
				this.showPicker = false
				// 获取初始位置
				this.$nextTick(() => {
					const arr = ['years', 'months']
					this.valueArr.forEach((v, i) => {
						const findIndex = this[arr[i]].findIndex(o => o === v)
						this.$set(this.valueIndexArr, i, findIndex)
					})
					console.log('initDate -- valueIndexArr',this.valueIndexArr);
				})
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
				this.years = list
				// 计算年份位置
				this.$set(this.valueIndexArr, 0, this.valueArr[0] - this.minDate[0])
			},
			
			/**
			 * 获取月份列表
			 */
			getMonths() {
				const list = Array.from({length: 12}, (v, k) => k + 1)
				const year = this.valueArr[0]
				const minYear = this.years[0]
				const maxYear = this.years[this.years.length - 1]
				
				/* 获取当前月份 */
				let nowDate = new Date();
				let min = 1 // 最小的月份
				let max = nowDate.getMonth() + 1 // 最大的月份 当前月份
				if (year === minYear) {
					min = this.minDate[1]
				} else {
					min = 1
				}
				if (year === maxYear) {
					max = this.maxDate[1]
				} else {
					max = 12
				}
				this.months = list.slice(min - 1, max - min + 1)
				// 计算月份位置
				const findIndex = this.months.findIndex(o => o === this.valueArr[1])
				if (findIndex !== -1) {
					this.$set(this.valueIndexArr, 1, findIndex)
				} else {
					this.valueArr[1] = this.months[this.months.length - 1]
					this.$set(this.valueIndexArr, 1, this.months.length - 1)
				}
			  
			},
			
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.picker-item{
		font-size: 30rpx;
	}
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
	.week-box{
		margin: 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.quarter-box{
		margin: 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.grade-month{
		margin: 20rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 50rpx;
		background: #F7F8FA;
		font-size: 28rpx;
		font-weight: 400;
		color: #182545;
		line-height: 26rpx;
		&.active{
			background: #3fa0fd;
			font-size: 28rpx;
			color: #ffffff;
		}
	}
	
	.grade-year{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 50rpx;
		background: #F7F8FA;
		font-size: 28rpx;
		font-weight: 400;
		color: #182545;
		line-height: 26rpx;
		&.active{
			background: #3fa0fd;
			font-size: 28rpx;
			color: #ffffff;
		}
	}
	// .grade-year:nth-of-type(n+5) {
	// 	margin-top: 20rpx;
	// 	justify-self: flex-start;
	// }
</style>