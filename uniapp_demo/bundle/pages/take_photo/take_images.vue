<template>
	<view>
		<!-- 上传照片 -->
		<view class="item-num">
		    <view class="upload-img">
		        <!-- 预览缩略图 -->
		        <view class="q-image-wrap">
		            <!-- 图片缩略图  -->
		            <block v-for="(imgItem, idx) in photoFiles" :key="idx">
		                <view class="item">
		                    <image class="q-image" :src="imgItem.url" mode="aspectFill" :data-cur="imgItem.url" @tap="refundPicPreView"></image>
		                    </image>
		                    <!-- 移除图片的按钮  -->
		                    <view class="q-image-remover" :data-idx="idx" @tap="removeImage">
		                        <text>x</text>
		                        <!-- <image src="../../static/icons/delect.png" mode=""></image> -->
		                    </view>
		                </view>
		            </block>
		            <!-- 添加图片图标 -->
		            <view class="item" v-if="photoFiles.length < 6" @tap="getUploadImg">
		                <view>+</view>
		            </view>
		        </view>
		    </view>
		</view>
		            <!-- end -->
	</view>
</template>

<script>
	export default {
		data(){
			return {
				photoFiles:[]
			}
		},
		onLoad() {
			
		},
		methods:{
			/**
			* 上传图片
			*/
			getUploadImg: function(e) {
			    var idx = e.target.dataset.idx;
			    console.log(idx);
			    var ths = this;
			    wx.chooseImage({
			        count: 1,
			        // 默认9
			        sizeType: ['compressed'],
			        sourceType: ['album', 'camera'],
			        success: function(res) {
			            // 图片的本地临时文件路径列表
			            var tempFilePaths = res.tempFilePaths;
						this.photoFiles.push(tempFilePaths[0])
			            uni.showLoading({
			                mask: true
			            });
			            
			            
			        }
			    });
			},
			/**
			* 图片点击预览
			*/
			refundPicPreView(e) {
			    var current = e.currentTarget.dataset.cur
			    var urls = []
			    this.photoFiles.forEach(el => {
			        urls.push(el.url)
			    })
			    uni.previewImage({
			        current: current,
			        urls: urls
			    })
			},
			
			/**
			* 删除图片
			*/
			removeImage: function(e){
			    var idx = e.currentTarget.dataset.idx;
			    var photoFiles = this.photoFiles;
			    photoFiles.splice(idx, 1);
			    this.setData({
			        photoFiles: photoFiles
			    })
			}
		}
	}
</script>

<style lang="scss">
	.item-num {}
	
	.item-num .upload-img {
	    padding: 40rpx 40rpx 40rpx 30rpx;
	}
	
	.item-num .upload-img .q-image-wrap {
	    display: flex;
	    /* height: 500rpx; */
	    flex-wrap: wrap;
	}
	
	.item-num .upload-img .q-image-wrap .item {
	    position: relative;
	    height: 200rpx;
	    width: 200rpx;
	    margin-right: 20rpx;
	    margin-bottom: 20rpx;
	}
	
	.item-num .upload-img .q-image-wrap .item .q-image {
	    height: 200rpx;
	    width: 200rpx;
	}
	
	.item-num .upload-img .q-image-wrap .item .q-image-remover {
	    width: 0;
	    height: 0;
	    border-top: 66rpx solid #bfde85;
	    border-left: 66rpx solid transparent;
	    position: absolute;
	    top: 0;
	    right: 0;
	}
	
	/* .item-num .upload-img .q-image-wrap .item .q-image-remover text{
	    width: 30rpx;
	    display: block;
	    height: 30rpx;
	    color: #FFFFFF;
	    text-align: center;
	    line-height: 30rpx;
	    font-size: 30rpx;
	    border-radius: 20rpx;
	    background-color: #bfde85;
	    position: absolute;
	    top: -60rpx;
	    right: 0;
	} */
	
	.item-num .upload-img .q-image-wrap .item .q-image-remover image {
	    width: 24rpx;
	    height: 24rpx;
	    position: absolute;
	    top: -60rpx;
	    right: 4rpx;
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
</style>