<template>
	<view class="choose-date">
		<picker mode="date" fields="month" :value="date" @change="bindDateChange">
			<view class="uni-input">{{date}}</view>
		</picker>
		<u-button @click="showDatetimePicker">打开</u-button>
		
		<!-- 年月 -->
		<u-datetime-picker
			:show="show3"
			v-model="value3"
			mode="year-month"
			closeOnClickOverlay
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
		
	</view>
</template>

<script>
	
	export default {
		data(){
			return {
				show3: false,
				value3: Number(new Date()),
				
			}
		},
		onLoad() {
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDay();
			
			month >= 1 && month <= 9 ? (month = '0' + month) : '';
			day >= 0 && day <= 9 ? (day = '0' + day) : '';
			var timer = year + '-' + month + '-' + day
			this.defaultTime = timer;
			
		},
		methods:{
			change(e) {
				console.log('change', e)
			},
			close() {
				this.show3 = false
			},
			cancel() {
				this.show3 = false
			},
			confirm(e) {
				this.show3 = false
				this.result(e.value, e.mode)
			},
			result(time, mode) {
				const timeFormat = uni.$u.timeFormat,
					toast = uni.$u.toast
				switch (mode) {
					case 'datetime':
						return toast(timeFormat(time, 'yyyy-mm-dd hh:MM'))
					case 'date':
						return toast(timeFormat(time, 'yyyy-mm-dd'))
					case 'year-month':
						return toast(timeFormat(time, 'yyyy-mm'))
					case 'time':
						return toast(time)
					default:
						return ''
				}
			},
			showDatetimePicker(index) {
				this.current = index + 1
				this.show3 = true
			},
		}
		
	}
</script>

<style>
	
</style>