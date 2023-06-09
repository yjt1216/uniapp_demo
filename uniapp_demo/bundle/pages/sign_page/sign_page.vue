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
				
				<view class="question-sign" >
					<view class="logo_text">
						<text class="option-required"> * </text> 
						<text class="u-block__title"> 护理人员签名确认 </text>
					</view>
					<view style="border: 1rpx dashed #555555;">
						<Signature ref="sign" v-model="signValue"></Signature>
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
	import Signature from '@/bundle/components/sign-signature/sign-signature.vue'
	
	export default {
		components:{
			Signature
		},
		data() {
			return {
				formData: {},
				// 评估表单list
				questionList: [],
				/* 签名 base64 数据类型 */
				signValue: '',
				
			};
		},
		onBackPress(event) {
			console.log('导航栏返回 拦截event',event)
		},
		onLoad() {
			this.getFormData()
		},
		methods: {
			naviLeftClick(){
				console.log('导航栏返回 拦截')
				var pages = getCurrentPages();
				console.log('导航栏pages',pages)
				uni.navigateBack()
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
	}
</style>





