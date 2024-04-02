<template>
	<view>
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
				days:'1,3,5,7',
				dayWeekList:[],
				
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
			
		}
	}
</script>

<style>
	page{ background: #f8f8f8; }
	
	.dayWeekMain{
		overflow: hidden;
	}
	.dayWeekBox{
		width: 150upx;
		padding: 30upx 0;
		text-align: center;
		border-radius: 10upx;
		margin-top: 30upx;
		margin-left: 30upx;
		float: left;
	}
	.textSize{
		display: block;
		font-size: 28upx;
	}
	
	.selBg1{ background: #fff;color: #000; }
	.selBg2{ background: red;color: #fff; }
	
</style>