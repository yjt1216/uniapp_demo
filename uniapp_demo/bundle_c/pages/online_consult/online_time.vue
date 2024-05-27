<template>
	<view class="w-time-picker" >
		<u-navbar :auto-back="true" :placeholder="true" title="在线咨询时段"></u-navbar>
		
		
		<!-- <view class="user-content title">
			预约日期
		</view> -->
		<!-- <view class="online-days">
			<scroll-view scroll-x>
				<view class="week-container">
					<view class="day-item" :class="{ 'not-clickable': !isClickable(day.week) }"
						:style="{'color':dayIndex==index?theme:'#333','border-color':dayIndex==index?theme:'#ddd'}" 
						v-for="(day,index) in dayList" 
						:key="index" @tap="toggleDayIndex(day,index)">
						<view class="day-week">{{day.week}}</view>
						<view class="day-date">{{day.month}}/{{day.day}}</view>
					</view>
				</view>
			</scroll-view>
		</view> -->
		<view class="booking-date">
			<view>预约日期</view>
			<view class="booking-right">
				<u-icon name="arrow-left" color="#505D6F" size="12" @click="leftClick"></u-icon>
				<u-icon name="arrow-right" color="#505D6F" size="12" @click="rightClick"></u-icon>
			</view>
		</view>
		<view class="online-days">
			<swiper class="swiper" :circular="true" :autoplay="false" :current="currentGroup">
				<swiper-item v-for="(week, index) in groupedDays" :key="index">
					<view class="week-container">
						<view class="day-item" v-for="(day, idx) in week" 
							:class="{ 'not-clickable': !isClickable(day.week) }"
							:style="{'color':dayIndex==idx?theme:'#333','border-color':dayIndex==idx?theme:'#ddd'}" 
							:key="idx" @tap="toggleDayIndex(day,idx)">
							<view class="day-week">{{day.week}}</view>
							<view class="day-date">{{day.month}}/{{day.day}}</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		
		
		<view class="user-content title">
			预约时段
		</view>
		<view class="online-hour">
			<scroll-view scroll-y class="hour-scroll">
				<view class="hour-list">
					<view class="hour-item" :style="{'color':itemIndex==index?theme:'#333','border-color':itemIndex==index?theme:'#ddd'}" 
						:class="{'hour-item-active':!item.disabled}" 
						v-for="(item,index) in hourList" :key="index" @tap="toggleHourItem(item,index)">
						{{item.label}}
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="user-content title">
			通话时长
		</view>
		<!-- call_duration -->
		<view class="online-duration">
			<scroll-view scroll-x class="hour-scroll">
				<view class="duration-list">
					<view class="duration-item" :style="{'color':durationIndex==index?theme:'#333','border-color':durationIndex==index?theme:'#ddd'}"
						v-for="(duration,index) in callDurationlist" :key="index" @tap="toggleDurationIndex(duration,index)">
						{{duration.name}}
					</view>
				</view>
			</scroll-view>
		</view>
		
		
		<view class="w-time-footer">
			<view class="w-time-sure w-time-btn" :style="{'background-color':theme}" @tap="submit">确定</view>
		</view>
	</view>
</template>

<script>
	let _this=null;
	import dateUtil from '@/sheep/utils/date.js';
	export default {
		data() {
			return {
				//工作日
				workDayList:["周一","周二","周三","周四","周五",],
				//一周
				dayList:[],
				// 分组后的日期数组，用于Swiper展示
				groupedDays: [[]], 
				hourList: [],
				dayIndex: null,
				itemIndex: -1,
				theme: "#fa800a",
				currentGroup: 0,
				
				selectTime: [],
				uniSelectTime: [],
				
				/* 时间间隔 默认30分钟 */
				step: 60,
				
				/* 当天起始时间 */
				startHour: 8,
				/* 当天截止时间 */
				endHour: 18,
				/* 延后时间 默认延后2小时 */
				afterHours: 2,
				
				afterDays: 30,
				/* 通话时长 */
				callDurationlist: [],
				durationIndex: -1,
			}
		},
		created(){
			_this=this;
			_this.initDays();
			_this.initHours();
			
			let durationList = ['5分钟','10分钟','15分钟','20分钟','25分钟','30分钟'];
			let transformedList = durationList.map(duration => ({ name: duration }));
			
			this.callDurationlist = transformedList;
			console.log('初始化通话时长',this.callDurationlist);
		},
		onReady() {
			this.defaultChooseDate();
		},
		methods:{
			isClickable(day){
				return this.workDayList.includes(day);
			},
			submit(){
				if(this.uniSelectTime.length === 0){
					uni.showToast({
						title:'请选择时间',
						icon:'none'
					});
					return;
				}
				console.log('点击选择时间',this.uniSelectTime);
			},
			/* 选择哪一天 */
			toggleDayIndex(item,index){
				console.log('选择日期day',item);
				if(this.isClickable(item.week)){
					_this.dayIndex=index;
					_this.itemIndex=-1;
					_this.initHours(!item.isToday);
				}else{
					uni.showToast({
						title:'休息日',
						mask:true,
						icon:'none'
					})
				}
			},
			/* 选择哪一天的哪一个小时 */
			toggleHourItem(item,index){
				console.log('点击选择时间item',item);
				if(!item.disabled){
					let tabItem = _this.dayList[_this.dayIndex];
					let result = tabItem.year+"-"+tabItem.month+"-"+tabItem.day+" "+ item.label+":00";
					let date = tabItem.year+"-"+tabItem.month+"-"+tabItem.day
					_this.itemIndex=index;
					this.selectTime.push(result)
					this.uniSelectTime = this.uniarr(this.selectTime)
				}
			},
			toggleDurationIndex(duration,index){
				console.log('选择通话时长',duration);
				_this.durationIndex = index;
			},
			retTime(){
				this.uniSelectTime.splice(0,this.uniSelectTime.length);
				this.selectTime.splice(0,this.selectTime.length);
			},
			forMatNumber(n){
				return n<10?'0'+n:n
			},
			uniarr(arr){
				return Array.from(new Set(arr))
			},
			leftClick(){
				if (this.currentGroup > 0) {
				    this.currentGroup--;
				}
				this.dayIndex = null;
				// this.defaultChooseDate();
			},
			rightClick(){
				if (this.currentGroup < this.groupedDays.length - 1) {
				    this.currentGroup++;
				}
				//重置时间选择为null
				this.dayIndex = null;
				// this.defaultChooseDate();
			},
			defaultChooseDate(){
				let defaultHour = this.hourList[0];
				this.toggleHourItem(defaultHour,0);
			},
			initHours(flag){
				/* 当前时间 */
				let aDate = new Date();
				let curHour = aDate.getHours();
				_this.hourList = [];
				for(let j=_this.startHour*1;j<_this.endHour*1;j++){
					for(let k=0;k<60;k+=_this.step){
						if(flag){
							_this.hourList.push({
								label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
								disabled:false
							});
						}else{
							
							_this.hourList.push({
								label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
								disabled:curHour+_this.afterHours<j?false:true
							});
						}
					}
				};
			},
			
			initDays(){
				let aDate = new Date();
				let weekList = ["周日","周一","周二","周三","周四","周五","周六"];
				_this.dayList.push({
					year: aDate.getFullYear(),
					month: _this.forMatNumber(aDate.getMonth()+1),
					day: _this.forMatNumber(aDate.getDate()),
					week: weekList[aDate.getDay()],
					isToday: true
				})
				for(let i = 1;i<_this.afterDays*1;i++){
					aDate.setDate(aDate.getDate()+1);
					_this.dayList.push({
						year: aDate.getFullYear(),
						month: _this.forMatNumber(aDate.getMonth()+1),
						day: _this.forMatNumber(aDate.getDate()),
						week: weekList[aDate.getDay()],
						isToday: false
					})
				};
				console.log('dayList',_this.dayList);
				this.groupDays();
			},
			// 将日期数组按每7个元素分组
			groupDays() {
				this.groupedDays = [];
				for (let i = 0; i < this.dayList.length; i += 7) {
					this.groupedDays.push(this.dayList.slice(i, i + 7));
				}
			},
		}
	}
</script>

<style lang="scss">
	.w-time-picker{
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}
	.user-content{
		margin: 20rpx;
	}
	.title{
		color: #000000;
		font-weight: bold;
	}
	.booking-date{
		margin-top: 30rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;
		
		.booking-right{
			display: flex;
			flex-direction: row;
		}
	}
	.select-box{
		display: flex;
		flex-direction: row;
		background-color: #ffffff;
		color: #FA800A;
		border-radius: 10rpx;
		height: 50rpx;
		width: 50rpx;
	}
	.meal-content-card{
		display: flex;
		flex-direction: row;
	}
	.select-box-time{
		width: 150rpx;
		margin-left: 10rpx;
		background-color: #FFFFFF;
		margin-bottom: 100rpx;
		text-align: center;
		font-size: 20rpx;
		padding: 5rpx;
	}
	
	.clear-btn{
		color: #FFFFFF;
		background-color: #FA800A;
		text-align: center;
		height: 50rpx; 
		border-radius: 5rpx; 
		padding-left: 10rpx;
		padding-right: 10rpx;
		line-height: 50rpx;
		margin-left: 10rpx;
		font-size: 20rpx;
		font-weight: bold;
	}
	.online-days{
		overflow: hidden;
		
		padding: 16rpx;
		background-color: #fff;
		.week-container{
			display: flex;
			flex-direction: row;
			white-space: nowrap;
		}
		.day-item{
			display: inline-block;
			width: 80rpx;
			text-align: center;
			border:solid 1px #ddd;
			border-radius: 6rpx;
			padding: 10rpx 0;
			margin: 0 10rpx ;
			color:#333;
			.day-week{
				font-size: 22rpx;
				line-height: 1;
			}
			.day-date{
				font-size: 22rpx;
				line-height: 1;
				margin-top: 10rpx;
			}
		}
		
	}
	.online-hour{
		flex:1;
		overflow: hidden;
		background-color:#fff;
		.hour-scroll{
			height: 100%;
		}
		.hour-list{
			display: flex;
			flex-wrap: wrap;
			padding:20upx 10upx;
		}
		.hour-item{
			width: 120upx;
			height: 64upx;
			line-height: 64upx;
			margin:0 10upx 20upx;
			text-align: center;
			border:solid 1px #ddd;
			border-radius: 6upx;
			font-size: 28upx;
			transition: all 0.3s ease;
			color: #ddd !important;
		}
		.hour-item-active{
			background-color: #fff;
			color: #000 !important;
			border-color: #FA800A;
		}
	}
	.online-duration{
		.duration-list{
			display: flex;
			flex-wrap: wrap;
			padding:20upx 10upx;
		}
		.duration-item{
			width: 120upx;
			height: 64upx;
			line-height: 64upx;
			margin:0 10upx 20upx;
			text-align: center;
			border:solid 1px #ddd;
			border-radius: 6upx;
			font-size: 28upx;
			transition: all 0.3s ease;
			color: #333 !important;
		}
		.duration-item-active{
			background-color: #fff;
			color: #000 !important;
			border-color: #FA800A;
		}
	}
	
	.w-time-footer{
		height: 88upx;
		display: flex;
		background-color: #fff;
		.w-time-btn{
			flex:1;
			text-align: center;
			line-height: 88upx;
			font-size: 30upx;
		}
		.w-time-sure{
			background-color: #f00;
			color:#fff;
		}
	}
	
</style>
