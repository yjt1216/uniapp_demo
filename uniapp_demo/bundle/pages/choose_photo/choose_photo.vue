<template>
	<view class="u-page">
		<u-navbar :autoBack="true" title="上传文件" :placeholder="true"></u-navbar>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">before压缩</text>
			<view class="u-demo-block__content">
				<view class="u-page__upload-item">
				
				<u-upload
					:useBeforeRead="true"
				    :fileList="fileList1"
					@beforeRead="beforeReadImages"
				    @delete="deletePic"
					:compressed="true"
				    name="1"
				    multiple
				    :maxCount="4">
				</u-upload>
				
				</view>
			</view>
		</view>
		
		<button type="primary" @click="saveImages">保存图片</button>
		
	</view>
</template>

<script>
	let that = null;
	import {compress, compressAccurately} from 'image-conversion';
	
	export default {
		data() {
			return {
				fileList1: [],
				fileList2: [],
				fileList3: [{
					url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
				}],
				fileList4: [{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					},
					{
						url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					}
				],
				fileList5: [],
				fileList6: [],
				fileList7: [],
				maxSelect:5,
				compressWidth:375,
			}
		},
		onLoad() {
			that = this;
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			
			/* 检测图片并压缩 */
			async beforeReadImages(e){
				
				/* 提取url 为一个新数组 */
				let tempImages = e.file;
				// console.log('u-upload beforeRead tempImages',tempImages);
				tempImages.forEach(async function(item,index){
					console.log('u-upload beforeRead item',item);
					/* 判断图片大小是否超标 直接压缩 */
					// #ifdef H5
					that.compressImageH5(item);
					// #endif
					
					// #ifndef H5
					let dataMp = await that.noH5compress(item);
					console.log('压缩图data',dataMp);
					that.fileList1.push({
						url: dataMp
					})
					// #endif
					
				})
				
			},
			//非H5 压缩方法
			noH5compress(e){
				console.log('压缩图e',e);
				return new Promise((reslove)=>{
					uni.compressImage({
					  src: e,
					  quality: this.compressQuality*100,
					  success: (res) => {
						reslove(res.tempFilePath)
					  }
					})
				})
			},
			compressImageH5(filePath){
				console.log('压缩H5图片file',filePath);
				that.translate(filePath.url,0.5,imgUrl=>{
					console.log('压缩后imgUrl', imgUrl);
					//查看压缩后的大小
					uni.getFileInfo({
						filePath: imgUrl,
						success: imgInfo => {
							console.log('压缩后', imgInfo);
						}
					})
				})
				
			},
			
			saveImages(filePath){
				uni.saveImageToPhotosAlbum({
					filePath:this.fileList1[0].url,
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
			},
			/**
			* H5端图片压缩
			*  参数说明：
			*  imgSrc 图片url
			*  scale缩放比例 0-1
			*  返回base64
			*  callback 回调设置返回值 
			*/
			translate(imgSrc, scale, callback) {
				var img = new Image();
				img.src = imgSrc;
				img.onload = function() {
					var that = this;
					var h = that.height; // 默认按比例压缩
					var w = that.width;
					var canvas = document.createElement('canvas');
					var ctx = canvas.getContext('2d');
					var width = document.createAttribute("width");
					width.nodeValue = w;
					var height = document.createAttribute("height");
					height.nodeValue = h;
					canvas.setAttributeNode(width);
					canvas.setAttributeNode(height);
					ctx.drawImage(that, 0, 0, w, h);
					var base64 = canvas.toDataURL('image/jpeg', scale); //压缩比例
					canvas = null;
					callback(base64);
				}
			},

		},
	}
</script>

<style lang="scss">
	.u-page {
		&__upload-item{
			margin-top:5px;
		}
	}
</style>
