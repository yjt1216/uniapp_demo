<template>
	<view>
		
		<view v-if="type == 'image'" class="columnDisplay borderGrey">
			
			<view class="imageContainer">
				<view v-for="(im,i) in result" :key="i" @longtap="imageMenu(i)" @tap="viewImage(i)">
					<image :src="im" class="imageBlock" mode="aspectFill"></image>
				</view>
				<view v-if="maxSelect > result.length || maxSelect == -1" class="addImageBlock" @tap="addImage">
					<!-- <view>+</view> -->
					<image :src="'/bundle/static/mine_paizhao.png'" class="add-image" mode="aspectFill"></image>
					<text>照片/拍摄</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				result:[""],
				init:false,
				// 添加照片数量最大 4张
				maxCount: 4,
			}
		},
		mounted() {
			
			if(this.type == "image"){
				this.$set(this,'result',this.result.splice(1,1));
				//console.log(this.result);
			}
			
			//初始化返回结果
			this.$emit('change',this.result);
		},
		methods:{
			
			
			addImage(){
				
				var that = this;
				if(this.result.length >= this.maxCount){
					uni.showToast({
						title:'最多只能上传四张图片',
						complete:function(res){
							that.$emit('change',that.result);
						}
					})
				}
				else{
					
					uni.chooseImage({
						count:4,
						success:function(res){
							var newResult = [];
							for(var i=0;i<that.result.length;i++){
								newResult.push(that.result[i])
							}
							if(that.maxSelect > 0){
								for(var i=0;i<Math.min(that.maxSelect - that.result.length, res.tempFilePaths.length);i++){
									newResult.push(res.tempFilePaths[i])
								}
							}
							else{
								for(var i=0;i<res.tempFilePaths.length;i++){
									newResult.push(res.tempFilePaths[i])
								}
							}
							that.$set(that,'result',newResult);
							that.$emit('change',that.result);
						},
						fail:function(err){
							that.$emit('change',that.result);
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
								var result = that.result;
								var img = result[i];
								result[i] = result[i-1];
								result[i-1] = img;
								var newResult = [];
								for(var j=0;j<result.length;j++){
									newResult.push(result[j]);
								}
								that.$set(that,'result',newResult);
								that.$emit('change',that.result);
							}
							else{
								uni.showToast({
									title:'无可替换',
									icon:'none',
									complete:function(res){
										that.$emit('change',that.result);
									}
								})
							}
						}
						/* 向后移动 */
						else if(res.tapIndex == 1){
							//向后
							if(i < that.result.length - 1){
								var result = that.result;
								var img = result[i];
								result[i] = result[i+1];
								result[i+1] = img;
								var newResult = [];
								for(var j=0;j<result.length;j++){
									newResult.push(result[j]);
								}
								that.$set(that,'result',newResult);
								that.$emit('change',that.result);
							}
							else{
								uni.showToast({
									title:'无可替换',
									icon:'none',
									complete:function(res){
										that.$emit('change',that.result);
									}
								})
							}
						}
						/* 替换图片 */
						else if(res.tapIndex == 2){
							uni.chooseImage({
								count:4,
								success:function(res){
									var result = that.result;
									//console.log(result);
									var newResult = [];
									for(var j=0;j<result.length;j++){
										if(i!=j){
											newResult.push(result[j]);
										}
										else{
											newResult.push(res.tempFilePaths[0])
										}
									}
									//console.log(newResult);
									that.$set(that,'result',newResult);
									/*that.$nextTick(()=>{
										console.log("refresh");
									});*/
									that.$emit('change',that.result);
								},
								fail:function(err){
									that.$emit('change',that.result);
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
										var result = that.result;
										//console.log(result);
										var newResult = [];
										for(var j=0;j<result.length;j++){
											if(i!=j){
												newResult.push(result[j]);
											}
										}
										//console.log(newResult);
										that.$set(that,'result',newResult);
										//console.log(that.result);
										that.$emit('change',that.result);
									}
									else{
										that.$emit('change',that.result);
									}
								},
								fail:err=>{
									that.$emit('change',that.result);
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
			}
			
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
		},
	}
</script>

<style scoped lang="scss">
	.columnDisplay{
		display: flex;
		flex-direction: column;
		margin-left: 2.5%;
		margin-right: 2.5%;
		width: 95%;
	}
	
	view{
		word-break: break-all;
	}
	
	.borderGrey{
		padding-bottom: 10upx;
		border-bottom: #ececec solid 1px;
		margin-bottom: 10upx;
	}
	
	.rowDisplay{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-left: 2.5%;
		margin-right: 2.5%;
		width: 95%;
		align-items: center;
	}
	
	.boolTitle{
		min-width: 50%;
		max-width: 70%;
		display: flex;
		flex-direction: column;
		word-break: break-all;
		
	}
	
	.boolAction view{
		display: flex;
		flex-direction: column;
		word-break: break-all;
	}
	
	.boolAction{
		max-width: 50%;
		min-width: 30%;
		display: flex;
		flex-direction: row-reverse;
	}
	
	.title{
		font-size: 30upx;
		font-weight: bold;
		margin-bottom: 5upx;
	}
	
	.subTitle{
		font-size: 30upx;
		color: #a6a6a6;
		margin-bottom: 5upx;
	}
	
	input{
		background-color: #F8F8F8;
		padding-left: 10upx;
		padding-right: 10upx;
		padding-top: 10upx;
		padding-bottom: 10upx;
	}
	
	textarea{
		background-color: #F8F8F8;
		padding-left: 2.5%;
		padding-right: 2.5%;
		padding-top: 10upx;
		padding-bottom: 10upx;
		width: 95%;
		max-lines: 5;
		min-height: 50upx;
		max-height: 150upx;
		display: flex;
	}
	
	.sliderInput{
		text-align: center;
		width: 30%;
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
	
	.datePicker{
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: #F8F8F8;
		padding-left: 2.5%;
		padding-right: 2.5%;
		padding-top: 10upx;
		padding-bottom: 10upx;
		width: 95%;
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
	
	.phone{
		max-width:40%;
		background-color: #FFFFFF;
		border-bottom: 1px solid #C0C0C0;
	}
	
	.code{
		max-width:25%;
		text-align: center;
	}
	
	.sendButton{
		max-width: 25%;
		font-size: 25upx;
		text-align: center;
		padding-left: 15upx;
		padding-right: 15upx;
		padding-top: 15upx;
		padding-bottom: 15upx;
		border-radius: 10upx;
	}
	
	.password{
		min-width: 80%;
		max-width: 90%;
		background-color: #FFFFFF;
		border-bottom: 1px solid #C0C0C0;
	}
	
	.bg-green{
		background-color: #4CD964;
		color: #FFFFFF;
	}
	
	.bg-white{
		background-color: #F8F8F8;
		color: #2C405A;
	}
	
	.input-icon{
		width: 55upx;
		height: 55upx;
	}
</style>
