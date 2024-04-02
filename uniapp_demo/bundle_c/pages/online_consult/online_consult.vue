<template>
	<view>
		<u-navbar :auto-back="true" :placeholder="true" title="在线咨询"></u-navbar>
		<!-- 日期星期几 -->
		<view class="dayWeekMain">
			<view class="dayWeekBox"
				:class="[ item.state ? 'selBg2' : 'selBg1' ]"
				v-for="(item,index) in dayWeekList" :key="index"
				@click="selDayWeek(index,item)">
				<text class="textSize">{{ item.monDate }}</text>
				<text class="textSize">{{ item.week }}</text>
			</view>
		</view>
		
		<!-- 当天时段 -->
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/**
				 * days返回 1,3,5
				 * 当前周的周一 周三 周五
				 * 当前周的周一已过 1 = 下一周的周一
				 * */
				days:'1,2,3,4,5,6,7',
				dayWeekList:[],
				/* 当天时段 从早8点到晚17点 */
				timeList:[],
			}
		},
		onLoad() {
			
			this.dayWeekArray();
			
		},
		methods: {
			
			//获取时间
			dayWeekArray() {
				const selectedDays = this.days.split(",").map(Number);
				const now = new Date();
				const today = now.getDay(); //0-6，0代表周日
				const daysToAdd = selectedDays.map((day) => (day >= today ? day - today : 7 - (today - day))).sort((a, b) => a - b);
				for (const daysToAdd of daysToAdd) {
					const newDate = new Date(now);
					newDate.setDate(newDate.getDate() + daysToAdd);
					const year = newDate.getFullYear();
					const month = String(newDate.getMonth() + 1).padStart(2, "0");
					const date = String(newDate.getDate()).padStart(2, "0");
					let week = "";
					switch (newDate.getDay()) {
						case 0:
							week = "周天";
							break;
						case 1:
							week = "周一";
							break;
						case 2:
							week = "周二";
							break;
						case 3:
							week = "周三";
							break;
						case 4:
							week = "周四";
							break;
						case 5:
							week = "周五";
							break;
						case 6:
							week = "周六";
							break;
					}
					this.dayWeekList.push({
						year: year,
						monDate: `${month}/${date}`,
						week: week,
						state: false
					});
				}
			},
			
			//选择时间
			selDayWeek(index,item) {
				if( this.dayWeekList[index].state ){
					this.dayWeekList[index].state = false;
					console.log('未选中')
				} else{
					for( let i in this.dayWeekList ){
						this.dayWeekList[i].state = false;
					};
					this.dayWeekList[index].state = true;
					console.log('已选中：' + item.year + '/' + item.monDate + '/' + item.week)
				}
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
							// console.log(_this.isExpedited+"加急状态");
							if(_this.isExpedited){
								_this.timeList.push({
									label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
									disabled:curHour+_this.afterHours<j?false:true
								});
							}else{
								_this.timeList.push({
									label:_this.forMatNumber(j)+":"+_this.forMatNumber(k),
									disabled:true
								});
							}
							
							
						}
					}
				};
			},
			forMatNumber(n){
				return n<10?'0'+n:n
			},
		}
	}
</script>

<style>
	page{ background: #f8f8f8; }
	
	.dayWeekMain{
		overflow: hidden;
		padding: 0 20rpx;
	}
	.dayWeekBox{
		width: 100rpx;
		/* padding: 10rpx 0; */
		text-align: center;
		border-radius: 10rpx;
		/* margin-top: 30rpx;
		margin-left: 20rpx; */
		float: left;
	}
	.textSize{
		display: block;
		font-size: 24rpx;
	}
	
	.selBg1{ background: #fff;color: #000; }
	.selBg2{ background: red;color: #fff; }
	
</style>