<!-- 评估表单内容 -->
<template>
  <view class="appraise-form">
		<nav-bar title="待评估" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<view class="header-cont">头部</view>
        <view class="list-cont">
			<scroll-view class="scrool-more" style="height: 100%" scroll-y="true" scroll-with-animation="true">
				<view class="question-list" v-for="(question,index) in questionList" :key="index" >
					<!-- 信息题q_info -->
					<view class="question-info" v-if="question.qTypeId == 'q_info'">
						<view class="logo_text">
							<text v-if="question.required" class="option-required"> * </text> 
							<text class="u-block__title"> {{question.title}}</text>
						</view>
					</view>
					<!-- 单选题q_radio -->
					<view class="question-radio" v-if="question.qTypeId == 'q_radio'">
						<!-- q_radio{{index}} -->
						<view class="logo_text">
							<text v-if="question.required" class="option-required"> * </text> 
							<text class="u-block__title"> {{question.title}}</text>
						</view>
						<view class="space-fill"></view>
						<u-radio-group placement="column" >
							<u-radio v-for="(item,qIndex) in question.options" :customStyle="{marginBottom:'8px'}" :key="qIndex" 
							:label="item.no + '、' + item.title" :name="item.title" @change="radioChange($event, question.title)"></u-radio>
						</u-radio-group>
					</view>
					<!-- 多选题q_check -->
					<view class="question-check" v-if="question.qTypeId == 'q_check'">
						<!-- q_check{{index}} -->
						<template>
							<view class="logo_text">
								<text v-if="question.required" class="option-required"> * </text> 
								<text class="u-block__title"> {{question.title}}</text>
							</view>
							<view class="space-fill"></view>
							<u-checkbox-group placement="column" >
								<u-checkbox v-for="(checkItem,checkQIndex) in question.options" :customStyle="{marginBottom:'8px'}" :key="checkQIndex" 
								:label="checkItem.no + '、' + checkItem.title" :name="checkItem.title" @change="checkboxChange($event, question.title)"></u-checkbox>
							</u-checkbox-group>
						</template>
					</view>
					<!-- 填空题q_text -->
					<view class="question-text" v-if="question.qTypeId == 'q_text'">
						<!-- q_text{{index}} -->
						<template>
							<view class="fill-in-q">
								<view class="logo_text">
									<text v-if="question.required" class="option-required"> * </text> 
									<text class="u-block__title"> {{question.title}}</text>
								</view>
								<view class="space-fill"></view>
								<u-input class="downCheck" border="bottom"  @input="inputData($event, question.title)"></u-input>
							</view>
						</template>
					</view>
					<!-- 填空题（选填）q_text_some -->
					<view class="question-text" v-if="question.qTypeId == 'q_text_some'">
						<!-- q_text_some{{index}} -->
						<template>
							<view class="fill-in-q">
								<view class="logo_text">
									<text v-if="question.required" class="option-required"> * </text> 
									<text class="u-block__title"> {{question.title}}</text>
								</view>
								<view class="space-fill"></view>
								<u-input class="downCheck" border="bottom"  @input="inputData($event, question.title)"></u-input>
							</view>
						</template>
					</view>
				</view>
			</scroll-view>
	</view>

	<view class="footer">
		<button class="submit-btn"  @click="submitAppraiseFun">提交评估</button>
	</view>

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
				// 评估表单list
				questionList: [],
				
			};
		},

		onLoad() {
			this.getFormData()
		},
		methods: {
			/* 获取评估表单数据 */
			getFormData() {
				apiAssessFromData().then(res=>{
					console.log('评估表单res',res)
					const {
						questions
					} = res.data
					console.log('评估表单questions',questions.length)
					this.questionList = questions
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
			  console.log('填空题event ',event,dataValue)
			  this.formData[dataValue] = event;
			},
			/* 单选题 */
			radioChange(event, dataValue){
				console.log('单选题event ',event,dataValue)
				this.formData[dataValue] = event;
			},
			/* 多选题 */
			checkboxChange(event,dataValue){
				console.log('多选题 ',event,dataValue)
				this.formData[dataValue] = event;
			},
			/* 提交评估 */
			submitAppraiseFun() {
				
			}
		},
	};
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}

	.appraise-form {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.header-cont {
		width: 100%;
		height: 110rpx;
		line-height: 100rpx;
		text-align: center;
		background: red;
	}

	.list-cont {
		flex: 1;
		position: relative;

		.scrool-more {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}

		.list {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #e0e0e0;

		}
	}
	
	.u-block__title{
		font-weight: bold;
	}
	.option-required{
		color: #FF3B00;
	}
	.space-fill{
		height: 10rpx;
		width: 100%;
	}
	.question-text{
		padding: 20rpx;
	}
	.question-radio {
		padding: 20rpx;
	}
	.question-check{
		padding: 20rpx;
	}


	.footer {
		color: #fff;
		line-height: 100rpx;
		flex: 0 0 100rpx;
		/* 不放大不缩小固定100rpx */
		
		.submit-btn{
			background-image: linear-gradient(to right, #39C9BC,#6DE8CC);
			color: white;
		}
	}
</style>





