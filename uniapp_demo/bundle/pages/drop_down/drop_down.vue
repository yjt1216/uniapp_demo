<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-title uni-common-pl">地区选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="monthList">
						<view class="uni-input">{{monthList[index]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">时间选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">日期选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
		
	</view>
</template>
<script>
export default {
    data() {
        const currentDate = this.getDateTest({
            format: true
        })
        return {
            title: 'picker',
            array: ['中国', '美国', '巴西', '日本'],
			monthList:[
				"1月" ,
				"2月" ,
				"3月" ,
				"4月" ,
				"5月" ,
				"6月" ,
				"7月" ,
				"8月" ,
				"9月" ,
				"10月" ,
				"11月" ,
				"12月" ,
			],
            index: 0,
            date: currentDate,
            time: '12:01'
        }
    },
    computed: {
        startDate() {
            return this.getDateTest('start');
        },
        endDate() {
            return this.getDateTest('end');
        }
    },
    methods: {
        bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.index = e.detail.value
        },
        bindDateChange: function(e) {
            this.date = e.detail.value
			console.log('选择日期date',this.date)
        },
        bindTimeChange: function(e) {
            this.time = e.detail.value
        },
        
		getDateTest(type) {
		    const date = new Date();
		    let year = date.getFullYear();
		    let month = date.getMonth() + 1;
		    
		    if (type === 'start') {
		        year = year - 60;
		    } else if (type === 'end') {
		        year = year + 2;
		    }
		    month = month > 9 ? month : '0' + month;
		    //day = day > 9 ? day : '0' + day;
		    return `${year}-${month}`;
		}
    }
}
</script>
<style></style>