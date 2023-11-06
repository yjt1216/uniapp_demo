<template>
	<view>
		<view class="image-box" style="display: flex;flex-wrap: wrap;">
			<view class="image-item" v-for="(item, index) in imgList" :key="index">
				<image :src="item" class="image-icon"  @tap="viewImage(index)"></image>
				
				<view class="image-delete " @click="delImg(index)">
					<uni-icons type="trash" color="red" size="20"></uni-icons>
				</view>
			</view>
			<view class="image-item" v-if="imgList.length < maxCount" @click="chooseImageFun">
				<image class="image-icon" src="/bundle/static/paizhao.png" mode="widthFix" ></image>
			</view>
		</view>
		
	</view>
</template>
<script>

let that=null;
export default {
	data() {
		return {
			maxCount: 9,
			imgList:[],
		};
	},
	onLoad() {
		that = this;
		
	},
	methods: {
		chooseImageFun() {
			uni.chooseImage({
				count: that.maxCount, //默认9
				sourceType: ['album', 'camera'], //从相册选择
				success: function(res) {
					let tempFiles = res.tempFiles;
					
					tempFiles.forEach(function(item,index){
						
						/* 判断图片大小是否超标 直接压缩 */
						uni.compressImage({
							src: item.path,
							quality: 60,
							success:function(result){
								console.log('图片result',result)
								if(that.imgList.length < that.maxCount){
									that.imgList.push(result.tempFilePath);
								}else{
									uni.showToast({
										title:'最大数量',
										icon:'none'
									})
								}
								
							}
						})
					})
					console.log('图片imgList',that.imgList)
				}
			});
			
		},
		delImg(idx) {
			that.imgList.splice(idx,1)
		},
		viewImage(index) {
			uni.previewImage({
				urls: this.imgList,
				current:index
			});
		}
	},
	
};
</script>

<style lang="less">
	page{
		background: #eee;
	}
	
	.image-box{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 2px;
		.image-item{
			border: 1px solid #eee;
			border-radius: 8px;
			width: 62px;
			height: 62px;
			margin-right:9.5px;
			margin-top: 9.5px;
			display: flex;
			background-color: #FFFFFF;
			position: relative;
			.image-icon{
				border-radius: 8px;
				width: 100%;
				height: 100%;
				display: block;
			}
			.image-delete{
				color: #ff0000;
				position: absolute;
				top: -5px;
				right: -5px;
			}
		}
		
	}
</style>
