
<!-- 个人 -->
<template>
  <view>
    <view class="person">
		<view v-for="(item, index) in personMsg" :key="index">
		   <!-- 填空 -->
			<template >
			  <view class="flex align-center person_item">
				<text>{{ item.name }}</text>
				<u-input class="downCheck" border="bottom" :placeholder="item.placeValue"  @input="inputData($event, item.dataValue)"></u-input>
			  </view>
			</template>
			
		</view>
		<!-- 单选题 -->
		<view class="radio-temp" v-for="(listItem, listIndex) in redioList" :key="listIndex">
			<template>
				<text class="u-block__title">{{listItem.name}}</text>
				<u-radio-group placement="column" >
					<u-radio v-for="(item,index) in listItem.redios" :customStyle="{marginBottom:'8px'}" :key="index" 
					:label="item.name" :name="item.name" ></u-radio>
				</u-radio-group>
			</template>
		</view>
		
		<!-- 多选题 -->
		<view class="check-temp" v-for="(listItem, listIndex) in checkList" :key="listIndex">
			<template>
				<text class="u-block__title">{{listItem.name}}</text>
				<u-checkbox-group placement="column" >
					<u-checkbox v-for="(item,index) in listItem.list" :customStyle="{marginBottom:'8px'}" :key="index" 
					:label="item.name" :name="item.name" ></u-checkbox>
				</u-checkbox-group>
			</template>
		</view>
	  
    </view>
 

    <button class="nextBtn" @tap="nextStep()">下一步</button>
  </view>
</template>

<script>
	import {
		apiAssessFromData
	} from '@/api/mock.js'
	export default {
		data() {
			return {
				formData: {},
				personMsg: [
					{
						name: "姓名",
						icon: "none",
						type: "input",
						dataValue: "nameValue",
						placeValue: '请输入姓名'
					},
					{
					  name: "性别",
					  icon: "none",
					  type: "input",
					  dataValue: "sexValue",
					  placeValue: '请输入性别'
					},
					{
					  name: "年龄",
					  icon: "none",
					  type: "input",
					  dataValue: "ageValue",
					  placeValue: '请输入年龄'
					},
					{
					  name: "电话",
					  icon: "none",
					  type: "input",
					  dataValue: "telValue",
					  placeValue: '请输入电话'
					},
					{
					  name: "身份证号",
					  icon: "none",
					  type: "input",
					  dataValue: "idValue",
					  placeValue: '请输入身份证号码'
					},
				  ],
				  redioList:[
					{
						name: "更喜欢哪一种水果？",
						value: 0,
						redios:[
							{
								name:'苹果'
							},
							{
								name:'大白梨'
							},
							{
								 name: '香蕉'
							}
							  
						]
					},
					{
						name: "喜欢哪一个文具？",
						value: 1,
						redios:[
							{
								name:'橡皮擦'
							},
							{
								name:'铅笔'
							},
							{
								name: '文具盒'
							}
							  
						]
					},
					{
						name: "喜欢哪一位诗人？",
						value: 2,
						redios:[
							{
								name:'李白'
							},
							{
								name:'杜甫'
							},
							{
								name: '白居易'
							},
							{
								name: '李清照'
							}
							  
						]
					}
				  ],
				  
				  checkList:[
						{
							name: "更喜欢哪一种水果？",
							value: 0,
							list:[
								{
									name:'苹果'
								},
								{
									name:'大白梨'
								},
								{
									 name: '香蕉'
								}
								  
							]
						},
						{
							name: "喜欢哪一个文具？",
							value: 1,
							list:[
								{
									name:'橡皮擦'
								},
								{
									name:'铅笔'
								},
								{
									name: '文具盒'
								}
								  
							]
						},
						{
							name: "喜欢哪一位诗人？",
							value: 2,
							list:[
								{
									name:'李白'
								},
								{
									name:'杜甫'
								},
								{
									name: '白居易'
								},
								{
									name: '李清照'
								}
								  
							]
						}
				]
			};
		},

		onLoad() {
			
		},
		methods: {
			/* 获取评估表单数据 */
			getFormData() {
				apiAssessFromData().then(res=>{
					console.log('评估表单res',res)
				}).catch((err)=>{
					console.log('评估表单err',err)
				})
			},
			nextStep() {
			  //将数据传给父组件check
			  this.$emit("personData", this.formData);
			  console.log('input list 中数据list',this.formData)
			},
			inputData(event, dataValue) {
			  // var value = event.target.value;
			  console.log('event ',event,dataValue)
			  this.formData[dataValue] = event;
			},
		},
	};
</script>
<style lang='scss' scoped>
	
	/* .downCheck{
		
	} */
	.person_item{
		padding: 20rpx;
	}
	.radio-temp {
		padding: 20rpx;
	}
	.check-temp{
		padding: 20rpx;
	}
</style>


