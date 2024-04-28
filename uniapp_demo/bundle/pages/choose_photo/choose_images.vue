<template>
	<view class="feedback-wrap">
		<u-navbar title="长传照片" :placeholder="true" :autoBack="true"></u-navbar>
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
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">after压缩</text>
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
		
		
		
		<!-- <u-popup background-color="#fff" ref="popup" type="dialog" :is-mask-click="false">
			<view class="box-pop">
				<view class="box-title">评价患者</view>
				<view class="box-sub-title">本次服务中患者是否愿意配合</view>
				<u-divider hairline="true" lineColor="#888"></u-divider>
				<view class="rate-center">
					<uni-rate size="18" allowHalf="true" v-model="cooperate" active-color="#FA800A" color="#666666" @change="cooperateChange"></uni-rate>
				</view>
				
				<u-divider hairline="false" dashed="true" lineColor="#888"></u-divider>
				
				<view class="box-bottom">
					<view class="bottom-item" @click="cancelEvaluateFun">取消评价</view>
					<view class="bottom-item" @click="submitEvaluateFun">提交评价</view>
				</view>
			</view>
		</u-popup> -->
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
				// console.log('u-upload beforeRead event',e);
				
			
			},
			// 新增图片
			async afterRead(e) {
				console.log('u-upload afterRead event',e);
				/* 提取url 为一个新数组 */
				let tempImages = e.file.map(item=>item.url);
				
				const resultList = tempImages.map(url => ({ url }));
				console.log('u-upload beforeRead resultList',resultList);
				
				tempImages.forEach(async function(item,index){
					if(that.fileList1.length < that.maxChooseImages){
						// #ifdef MP-WEIXIN
						uni.compressImage({
							src: item,
							quality: 60,
							success:function(compressI){
								console.log('压缩图片compressI',compressI)
								
								that.fileList1.push({
									url:compressI.tempFilePath
								})
								
								console.log('u-upload beforeRead fileList1',that.fileList1);
							}
						})
						// #endif
						// #ifdef H5
						let imgTest = await that.translate(item,0.6);
						console.log('图片数已达到5张',imgTest)
						that.fileList1.push({
							url: imgTest
						})
						// #endif
						
						
					}else{
						console.log('图片数已达到5张')
					}
					
				})
				
				
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
			chooseMediaHandle(){
				
				if(that.tempFileList.length < that.maxChooseImages){
					uni.chooseMedia({
						count: that.maxChooseImages, //默认9
						mediaType:['image'],
						sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album','camera'], //从相册选择
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
			chooseImageHandle(){
				console.log("[上传图片]")
				
				if(that.tempFileList.length < that.maxChooseImages){
					uni.chooseImage({
						count: that.maxChooseImages, //默认9
						mediaType:['image'],
						sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album','camera'], //从相册选择
						camera:'back',
						success: function(res){
							console.log('选取结果',res)
							let tempFiles= res.tempFilePaths;
							// let tempImages = e.file.map(item=>item.url);
						    tempFiles.forEach(async function(item,index){
								if(that.tempFileList.length < that.maxChooseImages){
									// console.log('for in ',item);
									// #ifdef MP-WEIXIN
									uni.compressImage({
										src: item.tempFilePath,
										quality: 60,
										success:function(compressI){
											console.log('压缩图片compressI',compressI)
											that.tempFileList.push({
												url: compressI.tempFilePath
											})
										}
									})
									// #endif
									// #ifdef H5
									let imgTest = await that.translate(item,0.6);
									console.log('图片数已达到5张',imgTest)
									that.tempFileList.push({
										url: imgTest
									})
									// #endif
									
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
				
			},
			/* 保存图片 */
			savaImageFun(){
				that.tempFileList.forEach(function(item,index){
					
					// #ifdef MP-WEIXIN
					uni.saveImageToPhotosAlbum({
						filePath:item.url,
						success:function(res){
							uni.showToast({
								title:'保存成功',
								icon:'none'
							})
						},
						fail:function(err){
							console.log('保存图片err',err)
							uni.showToast({
								title:'保存失败',
								icon:'none'
							})
						}
					})
					// #endif
					
					
				})
			},
			translate(imgSrc, scale) {
				//imgSrc:图片的路径
				//scale:缩放比例 0-1之间
				return new Promise((reslove, reject) => {
					var img = new Image(); //创建Image对象生成一个<img>标签
					img.src = imgSrc; //将图片路径赋给<img>标签的src
					img.onload = () => {//onload在图片加载成功后触发，在onload中完成压缩功能
						var h = img.height/2; // 获取原本图片的宽高
						var w = img.width/2;  //默认按比例压缩,根据需求修改
						var canvas = document.createElement('canvas');//创建画布
						var ctx = canvas.getContext('2d');  //设置为2d效果
						var width = document.createAttribute("width"); //创建属性节点
						width.nodeValue = w; //设置属性值
						var height = document.createAttribute("height");
						height.nodeValue = h;
						canvas.setAttributeNode(width); //设置画布宽高
						canvas.setAttributeNode(height);
						ctx.drawImage(img, 0, 0, w,h);//将图片贴到画布上
						//img:图片 0,0:粘贴的位置 w,h:粘贴图片的大小
						var base64 = canvas.toDataURL('image/png', scale);
						//'image/png':压缩返回图片的类型 scale:图片质量
						//如果要base64的流，可以直接将结果返回了
						canvas = null; //清除画布
						var blob = this.base64ToBlob(base64); //需要二进制流调用该方法拿到
						let blobUrl = window.URL.createObjectURL(blob);//blob地址
						reslove(blobUrl)
					}
				})
			 },
			// base64转Blob
			base64ToBlob(base64) { 
				var arr = base64.split(','),
				mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]),
				n = bstr.length,
				u8arr = new Uint8Array(n);
				while (n--) {
					u8arr[n] = bstr.charCodeAt(n);
				}
				return new Blob([u8arr],  {
					type: mime,
				});
			},

			
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.u-page {
		&__upload-item{
			margin-top:5px;
		}
	}
	.u-demo-block{
		margin-top: 30rpx;
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
			color: #333;
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
			color: #333;
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
