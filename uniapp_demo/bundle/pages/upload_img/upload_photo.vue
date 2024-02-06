<template>
	<view class="feedback-wrap">
		<view class="feedback-btn" @click="submitHandle">提交反馈</view>
		<!-- 反馈类型 -->
		<view class="feedback-type">
			<view class="feedback-type-title">反馈类型</view>
			<view class="feedback-type-con">
				<template v-for="(item,index) in feedbackTypeList">
				   <view class="feedback-type-item" :class="{'type-active':currentIndex==index?true:false}" :key="item.code" @click="feedbackTypeHandle(index)">{{item.name}}</view>
				</template>
			</view>
		</view>
		<!-- 反馈内容 -->
		<view class="feedback-con">
			<view class="feedback-con-title">
				<text>反馈内容</text>
				<text class="feedback-con-num">{{conLength}}/200</text>
			</view>
			<view class="feedback-con-msg">
				<textarea @input="getFeedbackMessageHandle" maxlength="200" class="feedback-con-textarea" 
					placeholder="请输入反馈内容并上传图片" placeholder-class="placeholderclass">
				</textarea>
			</view>
		</view>
		<!-- 上传图片 -->
		<view class="feedback-image">
			<view class="feedback-image-title">
				<text>上传图片</text>
			</view>
			<view class="feedback-image-box">
				<template v-for="(item,index) in tempFileList">
					<view class="feedback-image-item" :key="item.path">
						<image :src="item.path" class="feedback-image-icon"></image>
						<text class="iconfont feedback-image-delete" @click="deleteImgHandle(index)">x</text>
					</view>
				</template>
				<!-- chooseCompressImageFun -->
				<view class="feedback-image-btn" @click="chooseCompressImageFun">
					<image style="width: 80rpx; height: 80rpx; background-color: #eeeeee;" :src="'/static/images/mine_paizhao.png'" ></image>
				</view>
				
			</view>
		</view>
		
		<view class="feedback-image">
			<view class="feedback-image-title">
				<text>上传图片uni</text>
			</view>
			<view class="feedback-image-box">
				<template v-for="(item,index) in tempFileList">
					<view class="feedback-image-item" :key="item.path">
						<image :src="item.path" class="feedback-image-icon"></image>
						<text class="iconfont feedback-image-delete" @click="deleteImgHandle(index)">x</text>
					</view>
				</template>
				<view class="feedback-image-btn" @click="chooseImageHandle">
					<image style="width: 80rpx; height: 80rpx; background-color: #eeeeee;" :src="'/static/images/mine_paizhao.png'" ></image>
				</view>
			</view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础用法</text>
			<view class="u-demo-block__content">
				<view class="u-page__upload-item">
				<u-upload
					:useBeforeRead="true"
				    :fileList="fileList1"
				    @afterRead="afterRead"
					@beforeRead="beforeReadImages"
				    @delete="deletePic"
				    name="1"
				    multiple
				    :maxCount="10"
					@clickPreview="clickPreview"
				></u-upload>
				</view>
			</view>
		</view>
		
		
		
		<u-popup background-color="#fff" ref="popup" type="dialog" :is-mask-click="false">
			<view class="box-pop">
				<view class="box-title">评价患者</view>
				<view class="box-sub-title">本次服务中患者是否愿意配合</view>
				<u-divider hairline="true" lineColor="#888"></u-divider>
				<view class="rate-center">
					<!-- <u-rate :count="5" v-model="cooperate" activeColor="#f0ad4e" inactiveColor="#666666"></u-rate> -->
					<uni-rate size="18" allowHalf="true" v-model="cooperate" active-color="#FA800A" color="#666666" @change="cooperateChange"></uni-rate>
				</view>
				
				<u-divider hairline="false" dashed="true" lineColor="#888"></u-divider>
				<!-- 取消 确定 -->
				<view class="box-bottom">
					<view class="bottom-item" @click="cancelEvaluateFun">取消评价</view>
					<view class="bottom-item" @click="submitEvaluateFun">提交评价</view>
				</view>
			</view>
		</u-popup>
		<helang-compress ref="helangCompress"></helang-compress>

	</view>
</template>

<script>
	let that=null;
	import helangCompress from '@/components/helang-compress/helang-compress';
	
	export default {
		components:{
			helangCompress
		},
		data() {
			return {
				currentIndex:"0",
				feedbackTypeList:[{
					code:"0",
					name:'BUG反馈'
				},{
					code:"1",
					name:'功能建议'
				},{
					code:"2",
					name:'其他问题'
				}],
				feedbackValue:"",//反馈内容
				conLength:0,
				tempFileList:[],//选择图片临时存储
				tempFileObject:[],//上传腾讯云返回图片路径
				/* 图片最大选取 5张 */
				maxChooseImages: 5,
				cooperate:0,
				fileList1: [],
			};
		},
		onLoad() {
			that = this
		},
		watch:{
			feedbackValue(newVal,oldVal){
				console.log("计算属性",newVal)
				this.conLength=newVal.length;
			}
		},
		methods:{
			async beforeReadImages(e){
				console.log('u-upload beforeRead event',e);
				
				const size = (e.file[0].size) / 1024 / 1024
				const index = e.file[0].url.indexOf('.')
				const type = e.file[0].url.substring(index + 1)
				if (type !== 'png' && type !== 'jpg' && type !== 'jpeg') {
				    console.log('上', this.fileList1.length)
				    this.$u.toast('文件格式不正确, 请上传png/jpg/jpeg图片格式文件')
				    
				    return false
				} else {
					/* 开启压缩图片 */
					//   if (size > 4.1) {
							// console.log('上', this.fileList1.length)
							// this.$u.toast('上传图片大小不能超过4MB')
							// return false
					//   } else {
							
					//   }
					/* 提取url 为一个新数组 */
					let tempImages = e.file.map(item=>item.url);
					that.$refs.helangCompress.compress({
						src: tempImages,
						maxSize: 800,
						fileType: 'jpg',
						quality: 0.75,
						minSize: 640
					}).then((res) => {
						console.log('压缩成功res',res);
						// 使用 .map() 方法将每个URL字符串转换为对象
						const resultList = res.map(url => ({ url }));
						this.fileList1 = resultList;
					}).catch((err) => {
						uni.hideLoading();
						uni.showToast({
							title: "文件大小超出限制",
							icon: "none"
						})
					})
				  
				  
				}
				
			},
			// 新增图片
			async afterRead(event) {
				console.log('u-upload afterRead event',event);
				
				
			},
			// 删除图片
			deletePic(event) {
				this.fileList1.splice(event.index, 1);
			},
			/* 预览图片 */
			clickPreview(event){
				console.log('u-upload clickPreview event',event);
			},
			/* 评价患者  取消评价或者评价患者 皆跳转到 医废入科界面*/
			cancelEvaluateFun(){
				
				this.$refs.popup.close()
				console.log(' 评价患者 取消评价');
			},
			submitEvaluateFun(){
				this.$refs.popup.close()
				console.log(' 评价患者 提交评价');
			},
			cooperateChange(e){
				console.log(' 评价患者星',e,this.cooperate);
				
			},
			
			//选择反馈类型
			feedbackTypeHandle(currentIndex){
				console.log("[反馈类型]",currentIndex)
				this.currentIndex=currentIndex;
			},
			//获取返回内容
			getFeedbackMessageHandle(e){
				console.log("[反馈内容]",e)
				this.feedbackValue=e.detail.value
			},
			//上传图片
			chooseImageHandle(){
				console.log("[上传图片]")
				
				if(that.tempFileList.length < that.maxChooseImages){
					uni.chooseMedia({
						count: that.maxChooseImages, //默认9
						mediaType:['image'],
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						camera:'back',
						success: function(res){
							// console.log('选取结果',res)
							let tempFiles= res.tempFiles;
						    tempFiles.forEach(function(item,index){
								if(that.tempFileList.length < that.maxChooseImages){
									console.log('for in ',item)
									uni.compressImage({
										src: item.tempFilePath,
										quality: 60,
										success:function(compressI){
											console.log('压缩图片compressI',compressI)
											that.tempFileList.push({
												path: compressI.tempFilePath
											})
										}
									})
									
								}else{
									console.log('图片数已达到5张')
								}
								
							})
							
						},
						
					})
				}else{
					uni.showToast({
						title:'最大5张',
						icon:'none'
					})
				}
				
			},
			chooseImageHandleH5(){
				console.log("[选择图片]")
				
				if(that.tempFileList.length < that.maxChooseImages){
					uni.chooseMedia({
						count: that.maxChooseImages, //默认9
						mediaType:['image'],
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						camera:'back',
						success: function(res){
							// console.log('选取结果',res)
							let tempFiles= res.tempFiles;
						    tempFiles.forEach(function(item,index){
								if(that.tempFileList.length < that.maxChooseImages){
									console.log('for in ',item)
									// uni.compressImage({
									// 	src: item.tempFilePath,
									// 	quality: 60,
									// 	success:function(compressI){
									// 		console.log('压缩图片compressI',compressI)
									// 		that.tempFileList.push({
									// 			path: compressI.tempFilePath
									// 		})
									// 	}
									// })
									
									that.translate(item.tempFilePath, 0.5, imgURL => {
										//查看压缩后的大小
										uni.getFileInfo({
											filePath: imgUrl,
											success: imgInfo => {
												console.log('压缩后', imgInfo.size);
											}
										})
										that.tempFileList.push({
											path: imgURL
										})
									})
									
									
								}else{
									console.log('图片数已达到5张')
								}
								
							})
							
						},
						
					})
				}else{
					uni.showToast({
						title:'最大5张',
						icon:'none'
					})
				}
				
			},
			//删除图片
			deleteImgHandle(currentIndex){
				console.log("[删除图片]")
			    this.tempFileList.splice(currentIndex,1)
				console.log(this.tempFileList)
			},
			//提交反馈意见
			submitHandle(){
				console.log("[反馈意见]")
				console.log(this.tempFileList)
				
				this.savaImageFun();
				
				// this.$refs.popup.open()
				
			},
			/* 保存图片 */
			savaImageFun(){
				that.tempFileList.forEach(function(item,index){
					console.log('保存图片item',item)
					
					uni.saveImageToPhotosAlbum({
						filePath:item.path,
						success:function(res){
							uni.showToast({
								title:'保存成功',
								icon:'none'
							})
						},
						fail:function(err){
							uni.showToast({
								title:'保存失败',
								icon:'none'
							})
						}
					})
					
				})
			},
			/* 保存压缩图片 */
			chooseCompressImageFun(){
				that.tempFileList.forEach(function(item,index){
					console.log('保存图片item',item)
					
					uni.saveImageToPhotosAlbum({
						filePath:item.path,
						success:function(res){
							uni.showToast({
								title:'保存成功',
								icon:'none'
							})
						},
						fail:function(err){
							uni.showToast({
								title:'保存失败',
								icon:'none'
							})
						}
					})
					
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-page {
		&__upload-item{
			margin-top:5px;
		}
	}
.feedback-wrap{
	width: 91.47%;
	margin: 12px auto;
	display: flex;
	flex-direction: column;
	.feedback-type{
		display: flex;
		flex-direction: column;
		.feedback-type-title{
			font-size:15px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #FEFEFE;
		}
		.feedback-type-con{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin-top: 10px;
			.feedback-type-item{
				background: #0A0E1D;
				border: 1px solid #70737F;
				border-radius: 18px;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FEFEFF;
				padding: 7.5px 17.5px;
				margin-right: 11.5px;
				margin-top: 6px;
			}
			.type-active{
				border: 1px solid #E54848;
				background: linear-gradient(0deg, #F65555 0%, #E54848 100%);
				color: #FEFEFF;
			}
		}
	}
	.feedback-con{
		display: flex;
		flex-direction: column;
		margin-top: 21.5px;
		.feedback-con-title{
			font-size:15px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #FEFEFE;
			position: relative;
			.feedback-con-num{
				position: absolute;
				right: 0;
				top: 0;
			}
		}
		.feedback-con-msg{
			min-height: 120px;
			border: 1px solid #70737F;
			border-radius: 8px;
			margin-top: 12px;
			padding: 12px 12px;
			.feedback-con-textarea{
				width: 100%;
				font-size:14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FEFEFE;
			}
			.placeholderclass{
				color: #999999;
			}
		}
		
	}
	.feedback-image{
		display: flex;
		flex-direction: column;
		margin-top: 21.5px;
		.feedback-image-title{
			font-size:15px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #333;
			position: relative;
		}
		.feedback-image-box{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			margin-top: 2px;
			.feedback-image-item{
				border: 1px solid #70737F;
				border-radius: 8px;
				width: 62px;
				height: 62px;
				margin-right:9.5px;
				margin-top: 9.5px;
				display: flex;
				background-color: #FFFFFF;
				position: relative;
				.feedback-image-icon{
					border-radius: 8px;
					width: 100%;
					height: 100%;
					display: block;
				}
				.feedback-image-delete{
					color: #ff0000;
					position: absolute;
					top: -5px;
					right: -5px;
				}
			}
			.feedback-image-btn{
				border: 1px solid #70737F;
				border-radius: 8px;
				width: 62px;
				height: 62px;
				margin-right:9.5px;
				margin-top: 9.5px;
				display: flex;
				flex-direction: column;
				font-size: 13px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #999999;
				justify-content: center;
				align-items: center;
			}
		}
	}
	.feedback-phone{
		display: flex;
		flex-direction: column;
		margin-top: 21.5px;
		.feedback-phone-title{
			font-size:15px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #FEFEFE;
			position: relative;
		}
		.feedback-phone-box{
			width: 100%;
			display: flex;
			flex-direction: row;
			margin-top:8px;
			.feedback-phone-input{
				border-bottom: 1px solid #70737F;
				width: 100%;
				height: 30px;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #FEFEFE;
			}
			.placeholderclass{
				color: #999999;
			}
		}
		
	}
	
	.box-pop{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 600rpx;
		border-radius: 10rpx;
		.box-title{
			margin-top: 20rpx;
			text-align: center;
			color: #39C9BC;
			font-size: 32rpx;
		}
		.box-sub-title{
			text-align: center;
			color: #666;
			font-size: 24rpx;
		}
		.rate-center{
			margin-left: 30rpx;
			
		}
		
	}
	.box-bottom {
		width: 100%;
		height: 120rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-left: 10rpx;
		padding-right: 10rpx;
		
		.bottom-item {
			width: 50%;
			color: black;
			text-align: center;
		}
		
	}
	
	.feedback-btn{
		margin-top: 21.5px;
		width: 400rpx;
		height: 80rpx;
		
		
	}
	
}
</style>
