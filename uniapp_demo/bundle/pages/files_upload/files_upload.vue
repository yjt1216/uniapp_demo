<!-- 执行中  订单详情  status = 8 -->

<template>
	<view class="files-upload">
		<nav-bar title="执行中" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<!-- 医废登记 -->
        <view class="list-cont">
			<scroll-view class="scrool-more" style="height: 100%" scroll-y="true" scroll-with-animation="true">
				<!-- 医废登记 -->
				<view class="record-title">
					<text class="option-required"> * </text> 
					<text class="u-block__title">医废登记</text>
				</view>
				<!-- 医疗废物分类 -->
				<view class="record-title"> 
					<text class="option-required"> * </text>
					<text class="u-block__title">医疗废物分类</text>
				</view>
				<view class="tag_container">
					<zyTag v-for="(wsItem,wsIndex) in wasteSortList" :key="wsIndex" :text="wsItem.name"
						v-bind:theme="wsItem.checked===true?'dark':'plain'" @click="multiHandle(wsItem,wsIndex)" />
				</view>
				<!-- 医疗废物重量或数量 -->
				<view class="record-title">
					<text class="u-block__title">医疗废物重量或数量</text>
					<u-input class="downCheck" border="surround"
						placeholder="请输入医疗废物或重量"
					  @input="inputData($event, wasteCountValue)"></u-input>
					
				</view>
				
				<!-- 拍照签到 -->
				<view class="photo-sign" >
					<view class="project-title">
						<text class="option-required"> * </text> 
						<text class="u-block__title"> 护理记录拍照</text>
					</view>
					
				</view>
				<view class="columnDisplay borderGrey">
					<view class="imageContainer">
						<view v-for="(im,i) in recordPhotoes" :key="i" @longtap="imageMenu(i)" @tap="viewImage(i)">
							<image :src="im" class="imageBlock" mode="aspectFill"></image>
							
						</view>
						<view v-if="maxSelect > recordPhotoes.length || maxSelect == -1" class="addImageBlock" @tap="addImage">
							<image :src="'/bundle/static/mine_paizhao.png'" class="add-image" mode="aspectFill"></image>
							<text>照片/拍摄</text>
						</view>
					</view>
				</view>
				
				<view class="question-space" >
					
				</view>
			</scroll-view>
		</view>
		<!-- 提交评估  先提交 护士签名 再提交评估单填写内容-->
		<view class="footer">
			<button class="submit-btn"  @click="submitNursingRecordFun">确认签退</button>
		</view>

   </view>
</template>


<script>
	import zyTag from '@/bundle/components/zy-tag/zy-tag.vue'
	import catSignature from '@/bundle/components/sign-canvas/sign-canvas.vue'
	import {TOKEN} from '@/config/cachekey.js'
	import Cache from '@/utils/cache.js'
	import {pathToBase64} from '@/js_sdk/mmmm-image-tools/index.js'
	
	import http from '@/utils/dp_request.js'
	
	const QQMapWX = require('@/common/qqmap-wx-jssdk.min.js');
	export default {
		components:{
			zyTag,
			catSignature
		},
		data() {
			return {
				/* 服务对象信息 */
				appraisePerson:{},
				itemSn: '',
				order_id:'',
				step_id:'',
				
				mapInstance: null,
				/* 护理记录拍照签到 */
				recordPhotoes:[],
				// 添加照片数量最大 4张
				maxCount: 4,
				imageUrl:[],
				attach:'',
				/* 当前位置 */
				isAuth: -1, // -1: 未授权  0: 拒绝授权  1:已授权
				// 当前位置
				nurserLocation:{
					latitude: '',
					longitude: '',
					address: ''
				},
				/* 签名 */
				isShowSign: false,
				signImage: '',
				/* 医废分类tag */
				wasteSortList: [
					{
						checked: false,
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
				/* 医疗废物重量数量 */
				wasteCountValue:'',
				/* 保存 baseData list */
				saveBaseDataList:[]
			}
		},
		onLoad(options) {
			this.$set(this,'recordPhotoes',this.recordPhotoes.splice(1,1));
			//初始化返回结果changeRecordPhotoes
			this.$emit('changeRecordPhotoes',this.recordPhotoes);
			
			
			
			const {item_sn,order_id} = options
			console.log('护理记录订单itemSn ',item_sn)
			this.itemSn = item_sn
			this.order_id = order_id
			
			const personInfo = Cache.get('sendPersonInfo')
			this.appraisePerson = personInfo
			console.log('护理记录订单options ',this.appraisePerson)
			this.step_id = personInfo.step_id
			console.log('护理记录订单step_id ',this.step_id)
			
		},
		
		methods: {
			inputData(event, dataValue) {
			  // var value = event.target.value;
			  console.log('医疗废物重量或数量event ',event,dataValue)
			  // this.formData[dataValue] = event;
			  this.wasteCountValue = event
			},
			
			/* 提交医废收集照片 */
			submitNursingRecordFun(){
				if(this.wasteCountValue == ''){
				    uni.showToast({
				    	title:'请填写医废废物重量',
						icon:'none'
				    })
					
				    return;
				}
				
				if(this.recordPhotoes.length == 0){
				    uni.showToast({
				    	title:'请选择照片',
				    	icon:'none'
				    })
				    return;
				}
				// console.log('护理记录照片recordPhotoes',this.recordPhotoes)
				let count = 0
				// uni.showLoading({
				// 	title:'正在提交中...'
				// })
				this.uploadImagesFun(count)
				
			},
			/* 图片上传fun */
			uploadImagesFun(count){
				var that = this;
				console.log('医废照片files',this.recordPhotoes)
				
				const tokens = '3252348cc6324c00a2b585ca2ec1cc87'
				
				uni.uploadFile({
					url:'https://api.depin.tech/file/upload',
					filePath: this.recordPhotoes[count],
					name:'file',
					formData:{token: tokens,cate: '医废照片'},
					success: (uploadRes) => {
						console.log('医废照片uploadRes',uploadRes)
						const resData = JSON.parse(uploadRes.data)
						console.log('医废照片resData',resData)
						if(resData.code===0){
							this.imageUrl.push(resData.data.url)
							count++
							if(count == this.recordPhotoes.length){
								
								for(var i = 0;i<this.imageUrl.length;i++){
									this.attach += this.imageUrl[i]+','
								}
								this.attach = this.attach.substring(0,this.attach.length-1)
								
							}else{
								this.uploadImagesFun(count)
							}
						}else{
							console.log(resData)
							uni.hideLoading()
							uni.showToast({
								icon:'none',
								title:'图片上传失败'
							})
						}
						
					},
					fail: (uploadError) => {
						console.log('医废照片error',uploadError)
					}
				})
				
			},
			/* 上传签名信息 */
			uploadSignInfoFun(){
				if(this.signImage == ''){
					uni.showToast({
						title:'请签名',
						icon:'none'
					})
				}
				const params = {
					token: Cache.get(TOKEN),
					cate: '签退签字',
				}
				uni.uploadFile({
					url:'https://api.depin.tech/file/upload',
					filePath: this.signImage,
					name:'file',
					formData:params,
					success: (uploadRes) => {
						console.log('上传签名res',uploadRes)
						const {
							url,uid
						} = uploadRes
						
					},
					fail: (uploadError) => {
						console.log('上传签名error',uploadError)
					}
				})
			},
			
			/* 拍照签到 */
			addImage(){
				
				var that = this;
				if(this.recordPhotoes.length >= this.maxCount){
					uni.showToast({
						title:'最多上传四张图片',
						icon:'none',
						complete:function(res){
							that.$emit('changeRecordPhotoes',that.recordPhotoes);
						}
					})
				}
				else{
					
					uni.chooseImage({
						count:4,
						success:function(res){
							let tempFiles = tes.tempFiles;
							var photoList = [];
							tempFiles.forEach(function(item,index){
								/* 判断图片大小是否超标 直接压缩 */
								uni.compressImage({
									src: item.path,
									quality: 60,
									success:function(res){
										console.log('压缩图片res',res)
										for(var i=0;i<that.recordPhotoes.length;i++){
											photoList.push(that.recordPhotoes[i])
										}
										if(that.maxSelect > 0){
											for(var i=0;i<Math.min(that.maxSelect - that.recordPhotoes.length, res.tempFilePaths.length);i++){
												photoList.push(res.tempFilePaths[i])
											}
										}
										else{
											for(var i=0;i<res.tempFilePaths.length;i++){
												photoList.push(res.tempFilePaths[i])
											}
										}
									}
								})
							})
							
							
							
							
						},
						fail:function(err){
							console.log('选取图片err',err)
							
						}
					})
				}
			},
			/* 长按图片操作 */
			imageMenu(i){
				//console.log(i);
				var that = this;
				uni.showActionSheet({
					itemList:["向前移动","向后移动","替换图片","删除图片"],
					success:function(res){
						console.log(res.tapIndex);
						/* 向前移动 */
						if(res.tapIndex == 0){
							
							if(i > 0){
								var photoList = that.recordPhotoes;
								var img = photoList[i];
								photoList[i] = photoList[i-1];
								photoList[i-1] = img;
								var newPhotoList = [];
								for(var j=0;j<photoList.length;j++){
									newPhotoList.push(photoList[j]);
								}
								that.$set(that,'recordPhotoes',newPhotoList);
								that.$emit('changeRecordPhotoes',that.recordPhotoes);
							}
							else{
								uni.showToast({
									title:'无可替换',
									icon:'none',
									complete:function(res){
										that.$emit('changeRecordPhotoes',that.recordPhotoes);
									}
								})
							}
						}
						/* 向后移动 */
						else if(res.tapIndex == 1){
							//向后
							if(i < that.recordPhotoes.length - 1){
								var photoList = that.recordPhotoes;
								var img = photoList[i];
								photoList[i] = photoList[i+1];
								photoList[i+1] = img;
								var newPhotoList = [];
								for(var j=0;j<photoList.length;j++){
									newPhotoList.push(photoList[j]);
								}
								that.$set(that,'recordPhotoes',newPhotoList);
								that.$emit('changeRecordPhotoes',that.recordPhotoes);
							}
							else{
								uni.showToast({
									title:'无可替换',
									icon:'none',
									complete:function(res){
										that.$emit('changeRecordPhotoes',that.recordPhotoes);
									}
								})
							}
						}
						/* 替换图片 */
						else if(res.tapIndex == 2){
							uni.chooseImage({
								count:4,
								success:function(res){
									var photoList = that.recordPhotoes;
									//console.log(photoList);
									var newPhotoList = [];
									for(var j=0;j<photoList.length;j++){
										if(i!=j){
											newPhotoList.push(photoList[j]);
										}
										else{
											newPhotoList.push(res.tempFilePaths[0])
										}
									}
									//console.log(newPhotoList);
									that.$set(that,'recordPhotoes',newPhotoList);
									/*that.$nextTick(()=>{
										console.log("refresh");
									});*/
									that.$emit('changeRecordPhotoes',that.recordPhotoes);
								},
								fail:function(err){
									that.$emit('changeRecordPhotoes',that.recordPhotoes);
								}
							})
						}
						/* 删除图片 */
						else if(res.tapIndex == 3){
							uni.showModal({
								title:'消息',
								content:'您确认删除该图片吗？',
								success:(res)=>{
									if(res.confirm){
										var photoList = that.recordPhotoes;
										//console.log(photoList);
										var newPhotoList = [];
										for(var j=0;j<photoList.length;j++){
											if(i!=j){
												newPhotoList.push(photoList[j]);
											}
										}
										//console.log(newPhotoList);
										that.$set(that,'recordPhotoes',newPhotoList);
										//console.log(that.recordPhotoes);
										that.$emit('changeRecordPhotoes',that.recordPhotoes);
									}
									else{
										that.$emit('changeRecordPhotoes',that.recordPhotoes);
									}
								},
								fail:err=>{
									that.$emit('changeRecordPhotoes',that.recordPhotoes);
								}
							})
						}
					}
				})
			},
			/* 图片预览 */
			viewImage(i){
				uni.previewImage({
					urls:this.result,
					current:i
				})
			},
			
			
			/* 签名方法 */
			doss(){
				this.isShowSign = true
			},
			closeSign(){
				this.isShowSign = false
			},
			saveSign(val){
				this.isShowSign = false
				this.signImage = this.$refs.catSign.signImage
				console.log('执行中签名signImage',this.signImage)
			},
			/* 医废分类 多选标签事件 */
			multiHandle(item, index) {
				this.wasteSortList[index].checked = !this.wasteSortList[index].checked
			},
			
			
		},
		props:{
			type:{
				type:String,
				default:"image"
			},
			
			maxSelect:{
				type:Number,
				default:-1
			}
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}

	.files-upload {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.record-title{
		padding: 10rpx 20rpx;
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
	.tag_container {
		display: flex;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 10rpx;
	}
	/* 签字 */
	.question-sign{
		padding:10rpx 20rpx;
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
		width: 95%;
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
	
	/* 位置信息 */
	.location-address {
		color: gray;
		padding:10rpx 20rpx;
		.img-loaction{
			margin-right: 10rpx;
			width: 25rpx;
			height: 25rpx;
		}
	}
	.question-space{
		height: 100rpx;
	}
	/* 拍照签到 */
	.photo-sign{
		padding: 20rpx;
	}
	/* 底部按钮 */
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
	
	/* 拍照签到 */
	.columnDisplay{
		display: flex;
		flex-direction: column;
		margin-left: 2.5%;
		margin-right: 2.5%;
		width: 95%;
	}
	
	// view{
	// 	word-break: break-all;
	// }
	
	.borderGrey{
		padding-bottom: 10upx;
		border-bottom: #ececec solid 1px;
		margin-bottom: 10upx;
	}
	
	.imageContainer{
		display: block;
		width: 95%;
		padding-left: 2.5%;
		padding-right: 2.5%;
		padding-top: 10upx;
		padding-bottom: 10upx;
	}
	
	.imageBlock{
		width: 21.6vw;
		margin-right: 0.4%;
		margin-left: 0.4%;
		margin-bottom: 0.4%;
		margin-top: 0.4%;
		display: flex;
		height: 21.6vw;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F1F1F1;
		float: left;
		line-height: 23%;
	}
	.addImageBlock{
		width: 21.6vw;
		margin-right: 0.4%;
		margin-left: 0.4%;
		margin-bottom: 0.4%;
		margin-top: 0.4%;
		display: flex;
		height: 21.6vw;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F1F1F1;
		float: left;
		line-height: 23%;
		
		.add-image{
			width: 15vw;
			height: 15vw;
		}
		
	}
	.addImageBlock text{
		font-size: 20rpx;
	}
	
	
	
	
</style>
