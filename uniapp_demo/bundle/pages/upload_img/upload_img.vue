<template>
	<!-- 上传银行卡页面 -->
	<view>
		<view class="grace-idcard-main">
			<view class="grace-idcard-desc">
			</view>
			<view class="grace-idcard-text">
				证件照片
			</view>
			<view class="grace-idcard-items">
				<view class="grace-idcard-uper-tip" @tap="selectImg">
					<view class="text">证件照片</view>
					<view class="text">上传您执业证人像及盖章页</view>
				</view>
				<view class="grace-idcard-preview">
					<image :src="bankCard"  @tap="previewImg" mode="widthFix"></image>
				</view>
			</view>
			<view style="margin-top:38upx;">
				<button type="primary" @tap="uploadCards">上传</button>
			</view>
		</view>
	</view>
</template>
<script>
import { pathToBase64  } from '@/js_sdk/mmmm-image-tools/index.js'
var _self;
export default {
	data() {
		return {
			bankCard : '/static/images/user/mine_renxiang.png',
			bankCardBase64:null
		};
	},
	onLoad:function(){
		_self = this;
	},
	methods: {
		// 选择银行卡正面照片
		selectImg : function() {
			uni.chooseImage({
				count:1,
				success:(res)=>{
					this.bankCard = res.tempFilePaths[0];
					//将图片url转换为base64
					pathToBase64(res.tempFilePaths[0]).then(base64=>{
						this.bankCardBase64=base64
					}).catch(error=>{
						console.log(error)
					})
				}
			})
		},
		// 预览银行卡正面照片
		previewImg: function(){
			uni.previewImage({
				urls:[_self.bankCard]
			});
		},
		// 上传银行卡
		uploadCards : function(){
			if(this.bankCard == '../../static/images/user/mine_renxiang.png'){
				uni.showToast({title:"请选择银行卡照片", icon:"none"});
				return;
			}
			uni.showLoading({title:"上传中"});
			var param={
				type:2,
				images:[
					{
						side:"front",
						image:this.bankCardBase64,
						orderNum:1
					}
					
				]
			}
			// 向后台发送请求
			this.$myRequest({
				url:"card/ocr",
				method:"POST",
				data:param
			}).then(res=>{
				console.log("上传银行卡返回结果：",res)
				if(res.data.respCode=="00000"){
					uni.hideLoading();
					uni.showToast({title:res.data.respDesc,icon:"none"})
					uni.navigateTo({
						url:"/pages/cardInfo/cardInfo?data="+JSON.stringify(res.data.result)
					})	
				}else{
					uni.hideLoading();
					uni.showToast({title:res.data.respDesc,icon:"none"})
				}
			})
		}
	},
}
</script>
<style>
view{font-size:28upx;}
.grace-idcard-main{margin:20upx 30upx;}

.grace-idcard-text{line-height:2em; margin-top:30upx;}
.grace-idcard-items{background:#FFFFFF; padding:30upx 0; display:flex; margin:30upx 0; border-radius:10upx; align-items: flex-start;}
.grace-idcard-uper-tip{width:50%; margin:0 20upx; background:#F1F1F1; padding-bottom:10upx; border-radius:10upx; text-align:center;}
.grace-idcard-uper-tip .text{width:100%; margin-top:10upx; text-align:center; line-height:2em;}
.grace-idcard-preview{width:50%; margin:0 30upx; }
.grace-idcard-preview image{width:100%; border-radius: 10rpx;}
</style>