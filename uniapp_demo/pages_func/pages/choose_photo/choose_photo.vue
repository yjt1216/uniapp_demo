<template>
	<view class="container">
		<u-navbar title="传照片" :placeholder="true" :autoBack="true"></u-navbar>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。</text>
		</uni-card>
		<uni-section title="只选择图片" type="line">
			<view class="example-body">
				<uni-file-picker 
					limit="9" 
					title="最多选择9张图片"
					@select="chooseFiles"
					@delete="delPic"
					:source-type="sourceType">
				</uni-file-picker>
			</view>
		</uni-section>
		
		<button type="primary" @click="saveImages" >保存图片</button>
		
		<uni-section title="只选择视频" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" file-mediatype="video" title="最多选择9个视频" :source-type="sourceType"></uni-file-picker>
			</view>
		</uni-section>
		<uni-section title="自定义图片和视频选择的来源" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" title="从相册选图" :source-type="['album']"></uni-file-picker>
			</view>
			<view class="example-body">
				<uni-file-picker limit="9" title="使用相机" file-mediatype="video" :source-type="['camera']"></uni-file-picker>
			</view>
		</uni-section>
		<!-- #ifdef H5 || MP-WEIXIN -->
		<uni-section title="选择任意文件" type="line">
			<view class="example-body">
				<uni-file-picker limit="5" file-mediatype="all" title="最多选择5个文件"></uni-file-picker>
			</view>
		</uni-section>
		<!-- #endif -->

		<uni-section title="自定义图片大小" type="line">
			<view class="example-body custom-image-box">
				<text class="text">选择头像</text>
				<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
					file-mediatype="image">选择</uni-file-picker>
			</view>
		</uni-section>

		<uni-section title="自定义图片大小" type="line">
			<view class="example-body ">
				<uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image">
				</uni-file-picker>
				<uni-file-picker readonly :value="fileLists" :listStyles="listStyles" file-mediatype="all">
				</uni-file-picker>
			</view>
		</uni-section>

		<helang-compress ref="helangCompress"></helang-compress>

	</view>
</template>

<script>
	let that = null;
	import helangCompress from '@/components/helang-compress/helang-compress';
	export default {
		components:{
			helangCompress
		},
		data() {
			return {
				sourceType: ['album', 'camera'],
				imageStyles: {
					width: 64,
					height: 64,
					border: {
						radius: '50%'
					}
				},
				listStyles: {
					// 是否显示边框
					border: true,
					// 是否显示分隔线
					dividline: true,
					// 线条样式
					borderStyle: {
						width: 1,
						color: 'blue',
						style: 'dashed',
						radius: 2
					}
				},
				fileLists: [{
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname: 'png',
					name: 'shuijiao.png'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname: 'png',
					name: 'uniapp-logo.png'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname: 'png',
					name: 'shuijiao.png'
				}],
				chooseImages:[],
			}
		},
		onLoad() {
			that = this;
		},
		methods: {
			chooseFiles(res){
				console.log('选择文件：',res);
				
				that.$refs.helangCompress.compress({
				    src: res.tempFilePaths,
				    maxSize: 1024,
				    fileType: 'jpg',
				    quality: 0.75,
				    minSize: 640
				}).then((res) => {
				    console.log('单张压缩',res);
					const resultList = res.map(url => ({ url }));
					that.chooseImages.push(...resultList);
				    console.log('压缩成功后chooseImages',that.chooseImages);
				}).catch((err) => {
				    uni.hideLoading();
					console.log('单张压缩err',err);
				})
			},
			saveImages(imageUrl){
				if(this.chooseImages.length > 0){
					uni.saveImageToPhotosAlbum({
						filePath:this.chooseImages[0],
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
							});
						}
					})
				}else{
					console.log('保存图片失败 数组为空');
				}
				
			},
			delPic(res){
				console.log('删除文件：',res);
				this.chooseImages.splice(res.index, 1);
				console.log('删除文件后',this.chooseImages);
			},
		}
	}
</script>

<style lang="scss">
	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
</style>
