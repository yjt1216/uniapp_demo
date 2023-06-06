<template>
	<view class="picker-page">
		<nav-bar title="picker"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<view class="content" style="padding: 30rpx;">
			
		
			<view class="form-item-label"><text>护士等级:</text></view>
			
			
			<u-form labelPosition="left"  :model="model" ref="form">
				
				
				<u-form-item label="资   历:" :label-style="{'font-size':'20rpx'}" labelWidth="80" prop="numberValue">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="nurseLevelList" range-key="name">
							<!-- <view class="uni-input">{{nurseLevelList[index].name}}</view> -->
							<view class="uni-input">{{nurseLevelValue}}</view>
						</picker>
					</view>
					<u-icon
						slot="right"
						name="arrow-right"
						color="#39C9BC"
					></u-icon>
				</u-form-item>
				
			</u-form>
			
			
		</view>
	</view>
	
	
</template>

<script>

export default {
	
	data() {
		return {
			timeValue: '2021-07-01',

			index: 0,
			
			nurseLevelValue:'请选择资历',
			nurseLevelList: 
			[
				{
					"id": 93,
					"name": "护工",
					"code": "1",
					"value": "1"
				},
				{
					"id": 94,
					"name": "护士",
					"code": "10",
					"value": "10"
				},
				{
					"id": 95,
					"name": "护师",
					"code": "11",
					"value": "11"
				},
				{
					"id": 96,
					"name": "主管护师",
					"code": "12",
					"value": "12"
				},
				{
					"id": 97,
					"name": "副主任护师",
					"code": "13",
					"value": "13"
				},
				{
					"id": 98,
					"name": "主任护师",
					"code": "14",
					"value": "14"
				},
				{
					"id": 245,
					"name": "主管",
					"code": "15",
					"value": "15"
				},
				{
					"id": 296,
					"name": "医师",
					"code": "101",
					"value": "101"
				},
				{
					"id": 297,
					"name": "主治医师",
					"code": "102",
					"value": "102"
				},
				{
					"id": 298,
					"name": "副主任医师",
					"code": "103",
					"value": "103"
				},
				{
					"id": 299,
					"name": "主任医师",
					"code": "104",
					"value": "104"
				}
			]
		}
	},
	onLoad() {

	},
	methods: {
		bindPickerChange: function(e) {
		    // console.log('picker发送选择改变，携带值为', e)
		    this.index = e.detail.value
			
			const selectItem = this.nurseLevelList[this.index]
			console.log('picker发送选择改变，携带值为selectItem', selectItem)
			
			
			const {
				code,id,name
			} = selectItem
			
			this.nurseLevelValue = name
			
			
		},
		onconfirm(e) {
            console.log(e);
        },
		onconfirm2(e) {
			this.data2Text = e.text;
		},
		onconfirm3(e) {
			console.log(e);
			console.log('data3Value',this.data3Value);
			
		},
		onconfirm4(e) {
			this.data4Text = e.text;
		},
		selectNurseLeve(e){
			const {
				text,value,selected
			} = e
			
			const {
				code,id,name
			} = selected[0]
			
			console.log('选择护士等级',e);
			console.log('选择护士等级text',text);
			console.log('选择护士等级value',value);
			console.log('选择护士等级selected',selected);
			console.log('选择护士等级name',name);
		}
		
	}
}
</script>

<style lang="scss">
// 定义混入指令，用于在非nvue环境下的flex定义，因为nvue没有display属性，会报错
@mixin vue-flex($direction: row) {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: $direction;
}
// @include vue-flex;
.form-item-label{margin-top: 30rpx;}
.form-item-content{ @include vue-flex;flex: 1;border: 1px solid #e9e9e9;height: 80rpx;border-radius: 12rpx;padding: 0 30rpx;align-items: center;justify-content: center;}
</style>