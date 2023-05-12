
<!-- 个人 -->
<template>
  <view>
    <view class="person">
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">多选标签</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item"
				    v-for="(tagItem, tagIndex) in checkboxs"
				    :key="tagIndex">
					<u-tag class="tag-item"
					    :text="tagItem.name"
					    :plain="!tagItem.checked"
					    type="info"
					    :name="tagIndex"
					    @click="checkboxClick">
					</u-tag>
				</view>
			</view>
		</view>
		
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
					<view v-if="item.name == '其他'" class="other-view"></view>
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
		
		<!-- 签名 -->
		<view class="logo_text">
			<text class="option-required"> * </text> 
			<text class="u-block__title"> 护理人员签名确认 </text>
		</view>
		<view class="sign-boand">
			<!-- <button class="sign-btn" @tap="doss" style="margin: 10px;"></button> -->
			<view class="imgs" @tap="doss" >
				<text v-if="signImage ==''">点击此处签名确认</text>
				<image v-if="signImage !=''" class="img" :src="signImage" mode="widthFix" style="margin: 0px 24px;"></image>
			</view>
			<catSignature canvasId="canvas1" @closeSign="closeSign" @saveSign="saveSign" :visible="isShow" ref="catSign"/>
		</view>
		
	  
    </view>
 

    <button class="nextBtn" @tap="nextStep()">下一步</button>
  </view>
</template>

<script>
	import {
		apiAssessFromData
	} from '@/api/mock.js'
	import catSignature from '@/bundle/components/sign-canvas/sign-canvas.vue'
	import { 
		base64ToPath ,
		pathToBase64
	} from '../../../js_sdk/mmmm-image-tools';
	
	export default {
		components:{
			catSignature
		},
		data() {
			return {
				formData: {},
				// 签名
				isShow: false,
				signImage: '',
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
							},
							{
								name:'其他'
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
				checkboxs: [{
						checked: true,
						name:'感染性废物'
					},
					{
						checked: false,
						name:'损伤性废物'
					},
					{
						checked: false,
						name:'化学性废物'
					},
					{
						checked: false,
						name:'药物性废物'
					},
					{
						checked: false,
						name:'病理性废物'
					},
					{
						checked: false,
						name:'其他'
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
				],
				testDataList:[
					{
							"customerCount": 0,
							"contactsCount": 0,
							"businessCount": 0,
							"businessMoney": 0,
							"contractCount": 0,
							"contractMoney": 0,
							"receivablesMoney": 0,
							"recordCount": 0,
							"type": "2021"
					},
					{
							"customerCount": 0,
							"contactsCount": 0,
							"businessCount": 0,
							"businessMoney": 0,
							"contractCount": 0,
							"contractMoney": 0,
							"receivablesMoney": 0,
							"recordCount": 0,
							"type": "2022"
					},
					{
							"customerCount": 36,
							"contactsCount": 18,
							"businessCount": 1,
							"businessMoney": 10000,
							"contractCount": 7,
							"contractMoney": 490008.98,
							"receivablesMoney": 60000,
							"recordCount": 71,
							"type": "2023"
					}
				]
			};
		},

		onLoad() {
			this.getValueFromObject()
		},
		methods: {
			/* 测试object数据取值 */
			getValueFromObject(){
				const testObj = this.testDataList.slice(-1)
				console.log('测试object数据取值testObj',testObj)
				const soldData = testObj[0]
				console.log('测试object数据取值soldData',soldData)
			},
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
			/* 签名 */
			doss(){
				this.isShow = true
			},
			closeSign(){
				this.isShow = false
			},
			saveSign(val){
				this.isShow = false
				this.signImage = this.$refs.catSign.signImage
				console.log('signImage',this.signImage)
				
				this.loadBase64Url(this.signImage)
			},
			loadBase64Url(){
				const imageStr = this.signImage
				base64ToPath(imageStr).then(path=>{
					console.log('signImage path',path)
				}).catch(err=>{
					console.log('临时路径 err',err)
				})
			},
			checkboxClick(name) {
				this.checkboxs[name].checked = !this.checkboxs[name].checked
			}
		},
	};
</script>
<style lang='scss'>
	.person{
		display: flex;
		flex-direction: column;
	}
	
	.person_item{
		padding: 20rpx;
	}
	.radio-temp {
		padding: 20rpx;
	}
	.check-temp{
		padding: 20rpx;
	}
	.sign-boand{
		padding: 10rpx 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.imgs{
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #d6d6d6;
		margin-top: 20rpx;
		width: 90%;
		height: 400rpx;
		border: 1rpx solid #ddd;
		border-radius: 10rpx;
	}
	.imgs text{
		text-align: center;
	}
	.logo_text{
		padding:10rpx 20rpx;
	}
	/* 标签 */
	.u-demo-block__title{
		padding: 10rpx 20rpx;
	}
	.u-page__tag-item {
		padding:10rpx 20rpx;
	}
	.tag-item{
		width: 200rpx;
	}
	
	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	.other-view{
		background-color: red;
		width: 90%;
		height: 45rpx;
	}
</style>


