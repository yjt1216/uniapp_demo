<template>
	<view>
		<nav-bar title="添加患者"></nav-bar>
		
		<view class="card-title">
		    <text class="option-required">*</text>
		    <text>请拍摄或上传身份证正反面</text>
		</view>
		<view class="idCard-box">
			<view class="positive">
				<image :src="upLoadPositiveImg == ''?positiveImg:upLoadPositiveImg" @tap.prevent="uploadPositive">
				</image>
			</view>
			<view class="reverse">
				<image :src="upLoadReverseImg == ''?reverseImg:upLoadReverseImg" @tap.prevent="uploadReverse">
				</image>
			</view>
		</view>
		
		<!-- 证件类型 -->
		<view class="card-type">
			<view class="type-title">
			    <text class="option-required">*</text>
			    <text>证件类型</text>
			</view>
			<view class="card-check">
				<image class="check-agree" :src="checkType?checkDisagreeIcon:checkAgreeIcon" mode=""
					@click="agreeIdClick">
				</image>
				<text class="card-text">身份证</text>
			</view>
			<view class="card-check">
				<image class="check-agree" :src="checkType?checkAgreeIcon:checkDisagreeIcon" mode=""
					@click="agreeHZClick">
				</image>
				<text class="card-text">护照</text>
			</view>
		</view>
		<view class="card-content">
			<view class="type-title">
			    <text class="option-required">*</text>
			    <text>证件类型</text>
			</view>
			<view class="card-right">
				<input type="text" :value="cardValue" placeholder="请输入身份证号/护照号" size="100" style="text-align:right" />
			</view>
		</view>
		
		<view class="card-content">
			<view class="type-title">
			    <text class="option-required">*</text>
			    <text>姓名</text>
			</view>
			<view class="card-right">
				<input type="text" :value="cardValue" placeholder="请输入真实姓名" size="100" style="text-align:right" />
			</view>
			
		</view>
		
		<view class="card-content">
			<view class="type-title">
			    <text class="option-required">*</text>
			    <text>手机号</text>
			</view>
			<view class="card-right">
				<input type="text" :value="cardValue" placeholder="请输入联系手机号" size="100" style="text-align:right" />
			</view>
		</view>
		
		<view class="card-content">
			<view class="type-title">
			    <text class="option-required">*</text>
			    <text>与患者关系</text>
			</view>
			<view class="card-right">
				<input type="text" :value="cardValue" placeholder="请输入你们的关系" size="100" style="text-align:right" />
			</view>
		</view>
		<view class="card-content">
			<view class="type-title">
			    <text class="option-required">*</text>
			    <text>服务地址</text>
			</view>
			<view class="card-right">
				<input type="text" :value="cardValue" placeholder="请选择服务地址" size="100" style="text-align:right" />
			</view>
		</view>
		
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				// 正面身份证
				positiveImg: '',
				//自己图片路径
				upLoadPositiveImg: '/bundle_b/static/patient/positive.png',
				// 反面身份证
				reverseImg: '', 
				//自己图片路径
				upLoadReverseImg: '/bundle_b/static/patient/reverse.png',
                /* 证件类型 选择icon*/
				checkAgreeIcon:'/static/login/agree.png',
				checkDisagreeIcon:'/static/login/disagree.png',
				/* 证件类型 默认身份证0 */
				checkType:0,
				cardValue:"",
			}
		},
		onLoad() {
			
		},
		methods: {
			// file文件转base64
			getImageBase64(blob) {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.readAsDataURL(blob);
					reader.onload = () => {
						const base64 = reader.result;
						resolve(base64);
					}
					reader.onerror = error => reject(error);
				});
			},
			//选择 身份证正面
			uploadPositive() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success: (res) => {
						uni.compressImage({
							src: res.tempFilePaths[0],
							quality: 60,
							success:function(compressI){
								console.log('压缩图片compressI',compressI)
								this.upLoadPositiveImg = compressI.tempFilePath;
							}
						})
						
					}
				})
			},
			// 选择身份证反面
			uploadReverse() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success: (res) => {
						
						uni.compressImage({
							src: res.tempFilePaths[0],
							quality: 60,
							success:function(compressI){
								console.log('压缩图片compressI',compressI)
								this.upLoadPositiveImg = compressI.tempFilePath
							}
						})
					}
				})
			},
			agreeIdClick(){
				this.checkType = 0;
			},
			agreeHZClick(){
				this.checkType = 1;
			},
			
		}
	}
</script>
 
<style lang="scss" scoped>
	
	.card-title{
		margin-top: 40rpx;
		margin-left: 40rpx;
		width: 326rpx;
		height: 37rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333;
		line-height: 37rpx;
		align-items: center;
	}
	.option-required{
		color: #E02020;
	}
	
	.idCard-box {
		margin-top: 40rpx;
		width: 100%;
		display: flex;
		background-color: #fff;
 
		.positive {
			flex: 1;
			height: 200rpx;
			display: flex;
			align-items: center;
			justify-content: center;
 
			image {
				width: 80%;
				height: 100%;
			}
		}
 
		.reverse {
			flex: 1;
			height: 200rpx;
			display: flex;
			align-items: center;
			justify-content: center;
 
			image {
				width: 80%;
				height: 100%;
			}
		}
	}
	.card-type{
		margin-top: 60rpx;
		margin-left: 40rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		
		
		.card-check{
			margin-left: 50rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
	.type-title{
		width: 150rpx;
		height: 37rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333;
		line-height: 37rpx;
	}
	.check-agree{
		margin-right: 16rpx;
		height: 28rpx;
		width: 28rpx;
	}
	.card-text{
		width: 78rpx;
		height: 37rpx;
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 37rpx;
	}
	
	.card-content{
		margin-top: 40rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card-right{
		font-size: 26rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}
	
</style>