<template>
	<view>
		<u-navbar :auto-back="true" :placeholder="true" title="在线咨询"></u-navbar>
		<!-- <view class="list-container">
			<block v-for="(day, index) in listB" :key="index">
				<view
				  class="list-item"
				  :class="{ 'not-clickable': !isClickable(day) }"
				  @click="handleClick(day)"
				>
				  {{ day }}
				</view>
			</block>
		</view> -->
		
		<view class="online-days">
			<scroll-view scroll-x>
				<view class="days-scroll">
					<view class="day-item"
						:class="{ 'not-clickable': !isClickable(day) }"
						:style="{'color':dayIndex==index?theme:'#333','border-color':dayIndex==index?theme:'#ddd'}" 
						v-for="(day,index) in listB" 
						:key="index" @tap="toggleDayIndex(day,index)">
						 {{ day }}
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
  
</template>

<script>
export default {
  data() {
	return {
		/* 工作日 */
		listA: ['1', '2', '3', '4', '5'],
		/* 一周 */
		listB: ['1', '2', '3', '4', '5', '6', '7'],
    };
  },
  methods: {
    isClickable(day) {
      return this.listA.includes(day);
    },
	toggleDayIndex(day,index){
		if (this.isClickable(day)) {
		  // 处理点击事件逻辑
		  console.log('Clicked on:', day);
		}else{
			uni.showToast({
				title:'休息日',
				mask:true,
				icon:'none'
			})
		}
	},
  },
};
</script>

<style scoped>
.list-container {
	/* Add your desired container styles */
	white-space: nowrap;
	
}
.online-days{
	overflow: hidden;
	padding: 16rpx;
	background-color: #fff;
}
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
}
.day-week{
	font-size: 22rpx;
	line-height: 1;
}
.day-date{
	font-size: 22rpx;
	line-height: 1;
	margin-top: 10rpx;
}


.day-item.not-clickable {
	/* 防止用户点击 */
  pointer-events: none;
  
}
</style>