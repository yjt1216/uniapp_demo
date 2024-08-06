<template>
	<view class="content">
		<view class="list-cont">
			<scroll-view class="scrool-more" style="height: 100%" scroll-y="true" scroll-with-animation="true">
			    
			    <!-- 评估病人信息表 -->
			    <view class="appraise-patient" v-if="questionList.length > 0">
			        
			        <view class="question-list" v-for="(question,index) in questionList" :key="index" >
			            <!-- 拍照题q_photo -->
			            <view class="question-info" v-if="question.qTypeId == 'q_photo'">
			                <view class="project-title">
			                    <text v-if="question.required" class="option-required"> * </text> 
			                    <text class="u-bold__title"> {{question.title}}</text>
			                </view>
			                
			                <image v-if="qPhoto == ''" style="width: 160rpx;height: 160rpx;"
			                    src="/static/icon_add-invalid.png" @click="openPhoto(question)"></image>
			                <image v-else style="width: 160rpx;height: 160rpx;" :src="qPhoto" 
			                    @click="openPhoto(question)"></image>
			            </view>
			            
			            <!-- 信息题q_info -->
			            <view class="question-info" v-if="question.qTypeId == 'q_info'">
			                <view class="project-title">
			                    <text v-if="question.required" class="option-required"> * </text> 
			                    <text class="u-bold__title"> {{question.title}}</text>
			                </view>
			                <view class="question-info-data" v-for="(iItem,iIndex) in question.options" :key="iIndex">
			                    <text>{{iItem.data}}</text>
			                </view>
			            </view>
			            <!-- 单选题q_radio -->
			            <view class="question-radio" v-if="question.qTypeId == 'q_radio'">
			                <!-- q_radio{{index}} -->
			                <view class="project-title">
			                    <text v-if="question.required" class="option-required"> * </text> 
			                    <text class="u-bold__title"> {{question.title}}</text>
			                </view>
			                <view class="space-fill"></view>
			                <u-radio-group placement="column" shape="circle">
			                    
			                    <view v-for="(item,qIndex) in question.options" :key="qIndex">
			                        <u-radio :customStyle="{marginBottom:'8px'}" 
			                        :label="item.no + '、' + item.title" 
			                        :name="item.title" 
									:disabled="isDisabled"
			                        @change="radioChange($event, question,index)">
			                        </u-radio>
			                        <u-input v-if="item.isSelect && item.title == '其他'" class="radio-bottom-input"
			                            placeholder="请输入原因"
			                            border="bottom"  
										:disabled="isDisabled"
			                            @input="otherInputData($event, question,index)"></u-input>
			                    </view>
			                    
			                </u-radio-group>
			            </view>
			            <!-- 多选题q_check -->
			            <view class="question-check" v-if="question.qTypeId == 'q_check'">
			                <!-- q_check{{index}} -->
			                <template>
			                    <view class="project-title">
			                        <text v-if="question.required" class="option-required"> * </text> 
			                        <text class="u-bold__title"> {{question.title}}</text>
			                    </view>
			                    <view class="space-fill"></view>
			                    <u-checkbox-group placement="column" >
			                        <u-checkbox v-for="(checkItem,checkQIndex) in question.options" :customStyle="{marginBottom:'8px'}" :key="checkQIndex" 
			                        :label="checkItem.no + '、' + checkItem.title" 
			                        :name="checkItem.title" 
									:disabled="isDisabled"
			                        @change="checkboxChange($event, question,index,checkItem.title)"></u-checkbox>
			                    </u-checkbox-group>
			                </template>
			            </view>
			            <!-- 填空题q_text -->
			            
						<!-- 日历输入框 -->
						<view class="question-text" v-if="question.qTypeId == 'q_text' && question.options[0].title === 'date'">
						    
						    <template>
						        <view class="fill-in-q">
						            <view class="project-title">
						                <text v-if="question.required" class="option-required"> * </text> 
						                <text class="u-bold__title"> {{question.title}}</text>
						            </view>
						            <view class="space-fill"></view>
						            <u-input class="downCheck" border="surround" :disabled="true"  :value="question.dateInput" >
										<template slot="prefix">
											<u-icon name="calendar" color="#333" size="20" @click="openCalendar(question,index)"></u-icon>
										</template>
									</u-input>
						        </view>
						    </template>
						</view>
						<view class="question-text" v-if="question.qTypeId == 'q_text' && question.options[0].title !== 'date'">
						    <!-- q_text{{index}} -->
						    <template>
						        <view class="fill-in-q">
						            <view class="project-title">
						                <text v-if="question.required" class="option-required"> * </text> 
						                <text class="u-bold__title"> {{question.title}}</text>
						            </view>
						            <view class="space-fill"></view>
						            <u-input class="downCheck" border="surround" :disabled="isDisabled"  @input="inputData($event, question,index)"></u-input>
						        </view>
						    </template>
						</view>
						
						
			            <!-- 填空题（选填）q_text_some -->
			            <view class="question-text" v-if="question.qTypeId == 'q_text_some'">
			                <!-- q_text_some{{index}} -->
			                <template>
			                    <view class="fill-in-q">
			                        <view class="project-title">
			                            <text v-if="question.required" class="option-required"> * </text> 
			                            <text class="u-bold__title"> {{question.title}}</text>
			                        </view>
			                        <view class="space-fill"></view>
			                        <u-input class="downCheck" border="surround" :disabled="isDisabled"  @input="inputData($event, question,index)"></u-input>
			                    </view>
			                </template>
			            </view>
			        </view>
			    </view>
			    
			    <view class="question-space" ></view>
			</scroll-view>
		</view>
		
		<view class="footer" v-if="!isSubmit">
			<button class="submit-btn"  @click="checkSubmitData">提交</button>
		</view>
		
		
		<uni-calendar
			ref="calendar"
			class="uni-calendar--hook"
			:clear-date="true"
			:date="info.date"
			:insert="info.insert"
			:lunar="info.lunar"
			:startDate="info.startDate"
			:endDate="info.endDate"
			:range="info.range"
			@confirm="confirm"
			@close="close"
		></uni-calendar>
		
		
		
	</view>
</template>

<script>
	import { apiCalendarFromData } from "@/api/mock.js"
	
	
	let _this = null;
	
	
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date();
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/');
		}
		const dd = new Date(date);
	
		dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
	
		const y = dd.getFullYear();
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		};
	}
	
	export default {
		data() {
			return {
				formData: {},
				questionList: [],
				surveyForm:{},
				// 默认用户未提交 false
				isSubmit: false,
				// 默认用户可以输入 false
				isDisabled: false,
				
				// http://222.92.38.178:8091/ask/index.html#/pages/index/index?sn=91a2a0bb5c05621ff9647b2b998b8538
				testSn:'91a2a0bb5c05621ff9647b2b998b8538',
				
				showCalendar: false,
				info: {
					lunar: true,
					range: false,
					insert: false,
					selected: []
				},
				
				calendarQuestion:{
					title:'',
					index:-1,
				},
				
			}
		},
		created() {
			_this = this;
		},
		onReady(options) {
			// 获取URL参数
			// #ifdef H5
			let queryData = this.$route.query;
			
			// #endif
			
			// #ifdef MP
			let queryData = {
				sn: this.testSn
			};
			 console.log("获取URL参数options",options); 
			// #endif
			console.log("获取URL参数",queryData); 
			
			
			this.$nextTick(() => {
				this.showCalendar = true;
			});
			// TODO 模拟请求异步同步数据
			setTimeout(() => {
				this.info.date = getDate(new Date()).fullDate;
				// this.info.startDate = getDate(new Date(), -60).fullDate;
				this.info.startDate = "2000-1-1";
				// this.info.endDate = getDate(new Date(), 30).fullDate;
				this.info.endDate = "2200-1-1";
				
			}, 200);
			
			// if(queryData.sn){
			// 	this.getFormData(queryData.sn);
			// }
			this.getFormData();
			
		},
		methods: {
			// 显示日历
			clickCalendarFun(){
				
			},
			/* 填空题 */
			inputData(event, question,index) {
			  // var value = event.target.value;
			  console.log('填空题event ',event,question.title)
			  this.formData[question.title] = event;
			  question.isSelect = true
			  this.questionList[index] = question
			},
			/* 其他-填空题 */
			otherInputData(event, question,index){
			    console.log('填空题event ',event,question.title)
			    this.formData[question.title] = event;
			    question.isSelect = true
			    this.questionList[index] = question
			},
			
			/* 单选题 */
			radioChange(event, question,index){
			    console.log('单选题event ',event,question)
			    
			    if(event == '其他'){
			        question.options.forEach(item=>{
			            if(item.title == '其他'){
			                item.isSelect = !item.isSelect
			            }
			        })
			        /* question 中 options 更新 */
			        this.questionList[index] = question
			        /* $forceUpdate 刷新当前组件 */
			        this.$forceUpdate()
			        
			    }else{
			        this.formData[question.title] = event;
					this.$forceUpdate()
			    }
			    question.isSelect = true
			    this.questionList[index] = question
			},
			/* 多选题 */
			checkboxChange(event,question,index,checkboxTitle){
				if(_this.optionListIndex != index){
					_this.optionList = [];
					_this.optionListIndex = index;
				}
			    
				if(_this.optionList.indexOf(checkboxTitle) == -1){
					_this.optionList.push(checkboxTitle)
				}else{
					_this.optionList.splice(_this.optionList.indexOf(checkboxTitle),1)
				}
				// console.log('多选题 checkbox optionList：',_this.optionList);
				
			    this.formData[question.title] = _this.optionList.join(',');
			    question.isSelect = _this.optionList.length == 0 ? false : true;
			    this.questionList[index] = question
			},
			/* 获取评估表单数据 apiCalendarFromData */
			getFormData() {
				// const params = {
				// 	sn: sn
				// }
				apiCalendarFromData().then(res=>{
					console.log('评估表单res',res)
					const {
						questions
					} = res.data
					console.log('评估表单questions',questions.length)
					
					
					var formList = []
					formList = questions
					formList.forEach(formItem=>{
						var itemOptions = formItem.options;
						// 草稿数据 用户缓存当前填写的内容
						formItem['draft'] = '';
						if(itemOptions[0].title === 'date' && formItem.qTypeId === 'q_text'){
							formItem['dateInput'] = '';
						}
						itemOptions.forEach(options=>{
							options['isSelect'] = false;
						})
						
					})
					
					console.log('表单添加select属性',formList);
					this.questionList = formList
				}).catch((err)=>{
					console.log('评估表单err',err);
				})
			},
			checkSubmitData(){
				console.log('评估表单提交formData',this.formData)
				/* 判断是否填完评估单 */
				var isFullForm = true
				var loseTitle = ''
				this.questionList.forEach(question=>{
				    if(!question.isSelect && question.qTypeId != 'q_info' && question.required){
				        isFullForm = false
				        loseTitle = question.title
				        return;
				    }
				})
				/* 校验表单完整性 */
				if(isFullForm == false && this.questionList.length > 0){
				    uni.showToast({
				        title:'请将表单 ' + loseTitle +' 填写完整',
				        icon:'none'
				    })
				    return
				}
				uni.showLoading({
				    title:'正在提交中...',
					mask:true
				});
				this.submitFun();
			},
			submitFun(){
				const params = {
					sn: this.surveyForm.sn,
					record: JSON.stringify(this.formData),
				};
				appApi.submitForm(params).then(res=>{
					if(res.success === 1){
						uni.showToast({
							title:'提交成功',
							icon:'none'
						});
						this.isSubmit = true;
						this.isDisabled = true;
					}
				}).catch(err=>{
					console.error(err);
					uni.showToast({
						title:'提交失败',
						icon:'none'
					});
				})
			},
			openCalendar(question,index) {
				console.log('openCalendar caceldar:', question.title);
				this.calendarQuestion.title = question.title;
				this.calendarQuestion.index = index;
				
				console.log('openCalendar calendarQuestion:', this.calendarQuestion);
				this.$refs.calendar.open();
			},
			close() {
				console.log('弹窗关闭');
			},
			change(e) {
				console.log('change 返回:', e);
				// 模拟动态打卡
				if (this.info.selected.length > 5) return;
				this.info.selected.push({
					date: e.fulldate,
					info: '打卡'
				});
			},
			confirm(e) {
				console.log('confirm 返回:', e);
				
				this.formData[this.calendarQuestion.title] = e.fulldate;
				this.questionList[this.calendarQuestion.index].dateInput = e.fulldate;
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e);
			}
			
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
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
	
	.question-info{
	    padding: 20rpx;
	    .question-info-data{
	        padding: 10rpx;
	        color: lightgray;
	    }
	}
	
	.question-radio {
	    padding: 20rpx;
	}
	.question-check{
	    padding: 20rpx;
	}
	.question-sign{
	    padding: 20rpx;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
	.sign-space{
	    width: 700rpx;
	    height: 300rpx;
	    background-color: bisque;
	    text-align: center;
	    line-height: 300rpx;
	}
	
	.imgs{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    background-color: #d6d6d6;
	    margin-top: 10rpx;
	    width: 95%;
	    height: 400rpx;
	    border: 1rpx solid #ddd;
	    border-radius: 20rpx;
	}
	.imgs text{
	    text-align: center;
	}
	.logo_text{
	    padding:10rpx 20rpx;
	    display: flex;
	    flex-direction: row;
		justify-items: center;
	}
	
	.question-safe {
	    color: gray;
	    padding: 10rpx 20rpx;
	}
	.appraise-date {
		margin-top: 20rpx;
		padding: 10rpx 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.img-loaction{
		margin-top: 10rpx;
	    margin-right: 10rpx;
	    width: 25rpx;
	    height: 25rpx;
	}
	.question-space{
	    height: 100rpx;
	}
	.appraise-result {
	    padding: 20rpx;
	    .appraise-result-content{
	        margin-top: 20rpx;
	    }
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
	
	
	.u-bold__title{
	    font-weight: bold;
	    font-size: 30rpx;
	}
	.u-block__title{
	    font-size: 28rpx;
	    color: gray;
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
	
	
	
</style>
