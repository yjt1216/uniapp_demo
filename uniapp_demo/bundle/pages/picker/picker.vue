<template>
	<view class="picker-page">
		<nav-bar title="picker"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<view class="content" style="padding: 30rpx;">
			<view class="form-item-label"><text>时间选择器:</text></view>
			<fy-picker v-model="timeValue" mode="date">
				<view class="form-item-content">{{ !timeValue ? '请选择开始时间' : timeValue }}</view>
			</fy-picker>
		
			<view class="form-item-label"><text>单列选择器:</text></view>
			<fy-picker v-model="dataValue" :range="range" @confirm="onconfirm">
				<view class="form-item-content">{{ dataValue !== 0 && !dataValue ? '请选择' : range[dataValue] }}</view>
			</fy-picker>
		
		
			<view class="form-item-label"><text>多列选择器:</text></view>
			<fy-picker mode="multiSelector" v-model="data2Value" :range="range2" @confirm="onconfirm2">
				<view class="form-item-content">{{ data2Text ? data2Text : '请选择' }}</view>
			</fy-picker>
		
			<view class="form-item-label"><text>单列对象选择器:</text></view>
			<fy-picker v-model="data3Value" :range="range3" range-key="text" @confirm="onconfirm3">
				<view class="form-item-content">{{ data3Value !== 0 && !data3Value ? '请选择' : range3[data3Value]['text'] }}</view>
			</fy-picker>
		
			<view class="form-item-label"><text>多列对象选择器:</text></view>
			<fy-picker mode="multiSelector" v-model="data4Value" :range="range4" range-key="text" @confirm="onconfirm4">
				<view class="form-item-content">{{ data4Text ? data4Text : '请选择' }}</view>
			</fy-picker>
			
			<view class="form-item-label"><text>护士等级:</text></view>
			<!-- <fy-picker v-model="nurseLevelValue" :range="nurseLevelList" range-key="name" @confirm="onconfirm3">
				<view class="form-item-content">{{ nurseLevelValue !== 0 && !nurseLevelValue ? '请选择' : nurseLevelList[nurseLevelValue]['name'] }}</view>
			</fy-picker> -->
			
			<u-form labelPosition="left"  :model="model" ref="form">
				<!-- <u-form-item label="资   历:" :label-style="{'font-size':'20rpx'}" labelWidth="80" prop="numberValue">
					<fy-picker v-model="nurseLevelValue" :range="nurseLevelList" range-key="name" @confirm="selectNurseLeve">
						<view class="form-item-content">{{ nurseLevelValue !== 0 && !nurseLevelValue ? '请选择资历' : nurseLevelList[nurseLevelValue]['name'] }}</view>
					</fy-picker>
					<u-icon
						slot="right"
						name="arrow-right"
						color="#39C9BC"
					></u-icon>
				</u-form-item> -->
				
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
			
			<!-- <view class="uni-title uni-common-pl">地区选择器</view> -->
			<!-- <view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						当前选择
					</view>
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="range">
							<view class="uni-input">{{range[index]}}</view>
						</picker>
					</view>
				</view>
			</view> -->
			
			
		</view>
	</view>
	
	
</template>

<script>
import FyPicker from '@/components/fy-picker/fy-picker.vue'
export default {
	components: { FyPicker },
	data() {
		return {
			timeValue: '2021-07-01',

			index: 0,
			dataValue: '',
            range: ['中国', '美国', '巴西', '日本'],

			data2Value: [],
			data2Text: '',
			range2: [["a","b"], ["c","d"]],

			data3Value: '',
			range3: [{ text: '中国', value: 1 }, { text: '美国', value: 2 }, { text: '巴西', value: 3 }, { text: '日本', value: 4 }],

			data4Value: [],
			data4Text: '',
			range4: [[{ text: 'aa', value: 1 }, { text: 'bb', value: 2 }], [{ text: 'cc', value: 3 }, { text: 'dd', value: 4 }]],
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