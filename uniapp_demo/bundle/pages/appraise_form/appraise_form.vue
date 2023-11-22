<!-- 评估表单内容 -->
<template>
  <view class="appraise-form">
		<nav-bar title="待评估" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)" @goBack="naviLeftClick"></nav-bar>
		
		<!-- <u-navbar title="待评估" :titleStyle="{color:'#fff'}" :bgColor="'#39C9BC'" @leftClick="naviLeftClick">
			<view slot="left">
				<u-icon name="arrow-left" size="19" color="#fff"></u-icon>
			</view>
		</u-navbar> -->
		
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
						
						<!-- <radio-group @change="radioChangeFun">
							<label  v-for="(item, rindex) in question.options" :key="rindex">
								<view>
									<radio :value="item.title" :checked="rindex === current" />
								</view>
								<view>{{item.title}}</view>
							</label>
							<u-input v-if="item.isSelect && item.title == '其他'" class="radio-bottom-input"
								placeholder="请输入原因"
								border="bottom"  
								@input="inputData($event, question.title)"></u-input>
						</radio-group> -->
						
						
						<u-radio-group placement="column" >
							<view v-for="(item,qIndex) in question.options" :key="qIndex">
								<u-radio :customStyle="{marginBottom:'8px'}" 
								:label="item.no + '、' + item.title" 
								:name="item.title" 
								@change="radioChange($event, question,index)">
								</u-radio>
								<u-input v-if="item.isSelect && item.title == '其他'" class="radio-bottom-input"
									placeholder="请输入原因"
									border="bottom"  
									@input="inputData($event, question.title)"></u-input>
							</view>
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

<!-- 签名 -->
				
				<view class="question-sign" >
					<view class="logo_text">
						<text class="option-required"> * </text> 
						<text class="u-block__title"> 护理人员签名确认 </text>
					</view>
					<view style="border: 1rpx dashed #555555;">
						 <jushi-signature :settings="settings" @change="signatureChange"></jushi-signature>
					</view>
					
				</view>
				
				<view class="" style="margin-top: 20rpx;">
				    <text class="text">保存后的签名图片</text>
				    <view class="preview">
				         <image :src="imgUrl" mode="" style="width: 100%;"></image>
				    </view>
				</view>

		<view class="footer">
			<button class="submit-btn"  @click="submitAppraiseFun">提交评估</button>
		</view>

	</view>
</template>
<script>
	
	export default {
		data() {
			return {
				formData: {},
				// 评估表单list
				questionList: [],
				/* 签名 base64 数据类型 */
				signValue: '',
				settings:{ //签名设置
				    width: '750',//签名区域的宽
				    height: '500',//签名区域的高
				    lineWidth:3,//签名时线宽
				    textColor:'#007AFF' //签名文字颜色
				},
				imgUrl: ''
			};
		},
		onBackPress(event) {
			console.log('导航栏返回 拦截event',event)
		},
		
		onLoad() {
			//this.getFormData()
		},
		methods: {
			naviLeftClick(){
				console.log('导航栏返回 拦截')
				var pages = getCurrentPages();
				console.log('导航栏pages',pages)
				uni.navigateBack()
			},
			signatureChange(e) {
			    this.imgUrl = e
			},
			/* radio-group */
			radioChangeFun(e){
				console.log('评估表单radioChangeFun',e)
			},
			select(e){
				console.log(e);
				
			},
			/* 获取评估表单数据 */
			getFormData() {
				apiAssessFromData().then(res=>{
					console.log('评估表单res',res)
					const {
						questions
					} = res.data
					console.log('评估表单questions',questions.length)
					
					/* q_radio  q_check*/
					/* 
						查询表单item中 是否包含 其他-选项 
						如果包含 则在当前item中添加 input 控件 且item中每个选项 增添 是否选中属性 
						当其他被选中时则显示输入框 说明 选中 其他的理由
					*/
					var formList = []
					formList = questions
					formList.forEach(formItem=>{
						var itemOptions = formItem.options
						itemOptions.forEach(options=>{
							options['isSelect'] = false
						})
						
					})
					
					console.log('表单添加select属性',formList)
					this.questionList = formList
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
			radioChange(event, question,index){
				console.log('单选题event ',event,question)
				this.formData[question.title] = event;
				
				question.options.forEach(item=>{
					if(item.title == '其他'){
						item.isSelect = !item.isSelect
						console.log('单选题item ',item)
					}
				})
				this.questionList[index] = question
				/* $forceUpdate 刷新当前组件 */
				this.$forceUpdate()
				
				// if(event == '其他'){
				// 	uni.showToast({
				// 		title:dataValue+': '+'选中其他',
				// 		icon:'none'
				// 	})
					
				// }
				
			},
			/* 多选题 */
			checkboxChange(event,dataValue){
				console.log('多选题 ',event,dataValue)
				this.formData[dataValue] = event;
			},
			
			/* 提交评估 */
			submitAppraiseFun() {
				console.log('提交评估单 --- ',this.signValue)
			},
			async startSign() {
				let s = await this.$refs.sign.getSyncSignature();
				console.log('组件版本', this.$refs.sign.VERSION);
				console.log('签名数据', s);
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
	.question-sign{
		padding: 20rpx;
	}
	.sign-btn{
		background-color: #d6d6d6;
		
	}
	.imgs{
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #d6d6d6;
		margin-top: 20rpx;
		width: 90%;
		height: 400rpx;
		border: 1rpx solid #ddd;
		border-radius: 10rpx;
		
		text{
			width: 100%;
			text-align: center;
		}
	}
	
	.radio-bottom-input{
		margin-top: 20rpx;
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
		
		.xuanxiang{
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			margin-top: 10rpx;
		}
		
		.xuanxiang .s{
			width:90%;
			word-break: break-all;
			font-size: 36upx;
		}
		
		.xuanxiang .s2{
			width:50%;
			word-break: break-all;
		}
		
		
	}
	.preview{
	    margin: 10rpx;
	    border: 1rpx solid #aaaaaa;
	    border-radius: 10rpx;
	}
	.text {
	    margin: 20rpx;
	    color: #aaaaaa;
	}
	
</style>





