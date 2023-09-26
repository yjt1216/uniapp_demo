 <template>
 	<web-view src="https://720yun.com/t/a9cjvOsnOa3?scene_id=20949466">
 		<cover-view class="share-button">
 				<cover-view class="share-txt" >
 					搭配详情
 				</cover-view>
 				<cover-view class="share-txt">
 					商品列表
 				</cover-view>
 		</cover-view>
 	</web-view>
 		

 </template>

 <script>
 	export default {
 		data() {
 			return {
 				link: 'http://222.92.38.178:8091/view-article/fb0ece5c17a8bb2f193b0a66dc770cd4',
 				robot: 'http://222.92.38.178:8091/view-article/fb0ece5c17a8bb2f193b0a66dc770cd4',
 				monitor: 'https://didi.depin.tech/view-article/7e9b594d0912d7069dd09ae2771f4e7e',
 				webViewObj: ''
 			}
 		},
 		onLoad() {},
 		created() {
 			
 		},
 		methods: {
 		
 			
 			
 		}
 	}
 </script>

 <style>
 	.content {
 		position: relative;
 	}
	
	.share-button {
	  z-index: 999999;
	  position: fixed;
	  color: white;
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
	  margin-right: 40rpx;
	}
	

 </style>
