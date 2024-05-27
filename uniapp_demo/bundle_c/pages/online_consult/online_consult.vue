<template>
	<view>
		<u-navbar :auto-back="true" :placeholder="true" title="在线咨询"></u-navbar>
		
		<view class="swiper-container">
			<swiper class="swiper" :circular="true" :autoplay="false">
				<swiper-item v-for="(week, index) in groupedDays" :key="index">
					<view class="week-container">
						<view class="day-item" v-for="(day, idx) in week" :key="idx">
							{{ day }}
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
  
</template>

<script>
	
export default {
	// 在页面的data中初始化数据
	data() {
		return {
			currentDate: new Date('2023-05-01'), // 起始日期
			//工作日
			workDayList:["周一","周二","周三","周四","周五",],
			daysArray: [], // 存储日期的数组
			groupedDays: [[]], // 分组后的日期数组，用于Swiper展示
			theme:"#fa800a",
		};
	},
	async onLoad() {
		this.generateDaysArray();
		this.groupDays();
	},
	
	methods: {
		// 生成日期数组
		generateDaysArray() {
			const endDate = new Date('2023-05-30');
			while (this.currentDate <= endDate) {
				this.daysArray.push(this.formatDate(this.currentDate));
				this.currentDate.setDate(this.currentDate.getDate() + 1);
			}
		},
	
		// 格式化日期
		formatDate(date) {
			return `${date.getMonth() + 1}-${date.getDate()}`;
		},
	
		// 将日期数组按每7个元素分组
		groupDays() {
			this.groupedDays = [];
			for (let i = 0; i < this.daysArray.length; i += 7) {
			this.groupedDays.push(this.daysArray.slice(i, i + 7));
			}
		},
		isClickable(day){
			return this.workDayList.includes(day);
		},
	},
};
</script>

<style lang="scss" scoped>
.swiper-container {
	width: 100%;
	height: 200px;
}

.swiper {
	height: 100%;
}

.week-container {
	display: flex;
	flex-direction: row;
	white-space: nowrap;
	padding: 20rpx;
}

.day {
	text-align: center;
	width: 12%;
	border-radius: 5px;
	background-color: #f8f8f8;
	margin: 5px;
	padding: 5px;
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
</style>