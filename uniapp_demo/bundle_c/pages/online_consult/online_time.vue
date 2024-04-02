<template>
	
	<view class="w-time-picker" >
		<u-navbar :auto-back="true" :placeholder="true" title="在线咨询时段"></u-navbar>
		
		
		<view class="user-content title">
			预约日期
		</view>
		<view class="w-time-days">
			<scroll-view scroll-x>
				<view class="w-time-scroll">
					<view class="w-time-day" :style="{'color':tabIndex==index?theme:'#333','border-color':tabIndex==index?theme:'#ddd'}" 
						v-for="(day,index) in dayList" 
						:key="index" @tap="toggleDayIndex(day,index)">
						<view class="w-time-week">{{day.week}}</view>
						<view class="w-time-date">{{day.month}}/{{day.day}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="user-content title">
			预约时段
		</view>
		<view class="w-time-body">
			<scroll-view scroll-y class="w-time-list-scroll">
				<view class="w-time-list">
					<view class="w-time-item" :style="{'color':itemIndex==index?theme:'#333','border-color':itemIndex==index?theme:'#ddd'}" 
						:class="{'w-time-item-active':!item.disabled}" 
						v-for="(item,index) in timeList" :key="index" @tap="toggleItem(item,index)">
						{{item.label}}
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
				
				dayList:[],
				timeList:[],
				tabIndex:0,
				itemIndex:-1,
				
				
				time:"",
				selectTime:[],
				uniSelectTime:[],
				showclear:false,
				/* 时间间隔 默认30分钟 */
				step:60,
				
				/* 当天起始时间 */
				startHour:8,
				/* 当天截止时间 */
				endHour:18,
				/* 延后时间 默认延后2小时 */
				afterHours:2,
				theme:"#fa800a",
				
				afterDays:7,
				/* 是否可以勾选 加急服务 */
				isExpedited:false,
			}
		},
		created(){
			_this=this;
			_this.initPicker();
			_this.initHours();
			
			
			console.log('时间timeList',_this.timeList);
		},
		watch:{
			isExpedited(e){
				console.log('w-time-picker监听是否加急',e);
				_this.initPicker();
				_this.initHours();
			},
		},
		methods:{
			/* 勾选 加急 */
			change(e){
				// console.log('用户勾选加急费e',e.detail.value.length)
				if(e){}
				_this.isExpedited = e.detail.value.length == 1;
				// console.log('用户勾选加急费exCheck',_this.isExpedited)
				
			},
			submit(){
				console.log('点击选择时间uniSelectTime',this.uniSelectTime);
				
			},
			/* 选择哪一天 */
			toggleDayIndex(item,index){
				console.log('选择日期day',item);
				_this.tabIndex=index;
				_this.itemIndex=-1;
				_this.initHours(!item.isToday);
				
			},
			/* 选择哪一天的哪一个小时 */
			toggleItem(item,index){
				console.log('点击选择时间item',item,'openTime');
				if(!item.disabled){
					_this.time=item;
					let tabItem=_this.dayList[_this.tabIndex];
					let result=tabItem.year+"-"+tabItem.month+"-"+tabItem.day+" "+_this.time.label+":00";
					let date = tabItem.year+"-"+tabItem.month+"-"+tabItem.day
					_this.itemIndex=index;
					this.selectTime.push(result)
					this.uniSelectTime = this.uniarr(this.selectTime)
					if(this.uniSelectTime.length>0) this.showclear=true
				}
			},
			retTime(){
				this.uniSelectTime.splice(0,this.uniSelectTime.length)
				this.selectTime.splice(0,this.selectTime.length)
				this.showclear = false
			},
			forMatNumber(n){
				return n<10?'0'+n:n
			},
			uniarr(arr){
				return Array.from(new Set(arr))
			},
			initHours(flag){
				/* 当前时间 */
				let aDate = new Date();
				let curHour = aDate.getHours();
				_this.timeList = [];
				for(let j=_this.startHour*1;j<_this.endHour*1;j++){
					for(let k=0;k<60;k+=_this.step){
						if(flag){
							_this.timeList.push({
								label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
								disabled:false
							});
						}else{
							
							if(_this.isExpedited){
								_this.timeList.push({
									label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
									disabled:curHour+_this.afterHours<j?false:true
								});
							}else{
								_this.timeList.push({
									label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
									disabled:curHour+_this.afterHours<j?false:true
								});
							}
						}
					}
				};
			},
			
			initPicker(){
				let aDate=new Date();
				let weekList=["周日","周一","周二","周三","周四","周五","周六"];
				_this.dayList.push({
					year:aDate.getFullYear(),
					month:_this.forMatNumber(aDate.getMonth()+1),
					day:_this.forMatNumber(aDate.getDate()),
					week:weekList[aDate.getDay()],
					isToday:true
				})
				for(let i=1;i<_this.afterDays*1;i++){
					aDate.setDate(aDate.getDate()+1);
					_this.dayList.push({
						year:aDate.getFullYear(),
						month:_this.forMatNumber(aDate.getMonth()+1),
						day:_this.forMatNumber(aDate.getDate()),
						week:weekList[aDate.getDay()],
						isToday:false
					})
				};
				// console.log('dayList',_this.dayList);
			},
			
		}
	}
</script>

<style lang="scss">
	.user-content{
		margin: 20rpx;
	}
	.title{
		color: #000000;
		font-weight: bold;
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
	.w-time-days{
		overflow: hidden;
		
		
		padding: 16rpx;
		background-color: #fff;
		.w-time-scroll{
			white-space: nowrap;
		}
		.w-time-day{
			display: inline-block;
			width: 80rpx;
			text-align: center;
			border:solid 1px #ddd;
			border-radius: 6rpx;
			padding: 10rpx 0;
			margin: 0 10rpx ;
			
			color:#333;
			.w-time-week{
				font-size: 22rpx;
				line-height: 1;
			}
			.w-time-date{
				font-size: 22rpx;
				line-height: 1;
				margin-top: 10rpx;
			}
		}
		.w-time-day-active{
			color:#f00;
			border-color:#f00;
		}
	}
	.w-time-body{
		flex:1;
		overflow: hidden;
		background-color:#f5f5f5;
		.w-time-list-scroll{
			height: 100%;
		}
		.w-time-list{
			display: flex;
			flex-wrap: wrap;
			padding:20upx 10upx;
		}
		.w-time-item{
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
		.w-time-item-active{
			background-color: #fff;
			color: #000 !important;
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
	.w-time-picker{
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: rgba(66, 66, 66, 0.26);
		display: flex;
		flex-direction: column;
		
	}
</style>
