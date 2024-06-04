<template>
	<view>
		<u-navbar :auto-back="true" :placeholder="true" title="在线咨询"></u-navbar>
		<view class="user-content title">
			预约日期
		</view>
		<view class="online-days">
			<scroll-view scroll-x>
				<view class="days-scroll">
					<view class="day-item" :style="{'color':dayIndex==index?theme:'#333','border-color':dayIndex==index?theme:'#ddd'}" 
						v-for="(day,index) in dayList" 
						:key="index" @tap="toggleDayIndex(day,index)">
						<view class="day-week">{{day.week}}</view>
						<view class="day-date">{{day.month}}/{{day.day}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>


<script>
	let _this=null;
	
	export default {
		data() {
			return {
				dayList:[],
				dayIndex:0,
				theme:"#fa800a",
				afterDays:30,
				/* 通话时长 */
				callDurationlist:[],
				durationIndex:-1,
			}
		},
		created(){
			_this=this;
			_this.initDays();
			
		},
		computed: {
		    
		},
		onReady() {
			const resultDays = this.groupedDayList();
			console.log('点击选择时间',resultDays);
		},
		methods:{
			groupedDayList() {
			    const chunkSize = 7;
			    return this.dayList.reduce((resultArray, item, index) => { 
			        const chunkIndex = Math.floor(index / chunkSize);
			        if(!resultArray[chunkIndex]) {
			            resultArray[chunkIndex] = [];
			        }
			        resultArray[chunkIndex].push(item);
					
			        return resultArray
			    }, []);
			},
			submit(){
				
				
			},
			/* 选择哪一天 */
			toggleDayIndex(item,index){
				console.log('选择日期day',item);
				_this.dayIndex=index;
				_this.itemIndex=-1;
				
			},
			
			forMatNumber(n){
				return n<10?'0'+n:n
			},
			uniarr(arr){
				return Array.from(new Set(arr))
			},
			
			
			initDays(){
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
				console.log('dayList',_this.dayList);
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
		.days-scroll{
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


