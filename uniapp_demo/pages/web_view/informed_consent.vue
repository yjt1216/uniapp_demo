<template>
	<view class="content">
		
		<!-- #ifdef MP-WEIXIN -->
		<web-view  :src="link" >
			<cover-view class="footer-box">
				<cover-view class="share-txt" @click="readingClick">
					已阅1
				</cover-view>
			 	  
			</cover-view>
		</web-view>
		<button class="share-txt" @click="readingClick">已阅</button>
		<!-- #endif -->
		
		<!-- #ifdef H5 -->
		<nav-bar title="1223"></nav-bar>
		<iframe id="iframe"
		    name="iframe"
		    :height="webHeight"
		    width="100%"
		    :src="link"
		    scrolling="auto"
			:marginheight="marginHeight"
		    frameborder="0">
			
		</iframe>
		<!-- #endif -->
		<!-- <button class="share-txt" @click="readingClick">已阅</button> -->
		<!-- <view class="footer-box">
			<view class="share-txt" @click="readingClick">
				已阅2
			</view>
		</view> -->
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				link: 'http://222.92.38.178:8091/view-article/fb0ece5c17a8bb2f193b0a66dc770cd4',
				wxLink:'https://developers.weixin.qq.com/community/develop/doc/000220fdb98fe8409cb8942f451c00',
				onOff:false,
				webHeight:600,
				marginHeight:0,
			}
		},
		onLoad:function(option){
			this.changeFrameHeight();
		},
		// onShow() {
		// 	setTimeout(()=>{
		// 		const subNVue = uni.getCurrentSubNVue();
		// 		subNVue.show()
		// 	},800)
		// },
		methods:{
			changeFrameHeight(){
				
				const deviceInfo = uni.getWindowInfo();
				console.log('App Launch window',deviceInfo);
				
				
				this.webHeight = deviceInfo.windowHeight - 100;
				this.marginHeight = deviceInfo.screenTop;
			},
			readingClick(){
				console.log('知情同意书 已阅')
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	page{
		background-color: #f1f1f1;
		height: auto;
	}
	
	.share-txt{
		width:200rpx;
		height:72rpx;
		box-shadow:0rpx 4rpx 6rpx 0rpx rgba(18,46,102,0.5);
		border-radius:36rpx;
		line-height: 72rpx;
		text-align: center;
		font-size: 28rpx;
	}
	
	.share-txt{
		z-index: 999999;
		margin-right: 40rpx;
		background-color: #39C9BC;
		color: white;
	}
	
	.footer-box {
		z-index: 999999;
		position: fixed;
		color: black;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		bottom:30rpx;
		width:60%;
		height: 72rpx;
		display: flex;
		left: 20%;
		justify-content: center;
    }
	
	
	
</style>
