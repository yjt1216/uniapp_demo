<template>
	<view class="pay-page">
		<nav-bar title="支付UI"></nav-bar>
		
		
		<view class="pay-box">
			<view class="wexin-box">
				<view class="left-warp">
					<image class="pay-icon" src="../../static/wxpay.png"></image>
					<view class="pay-text">微信支付</view>
				</view>
				<image class="check-icon" :src="payWay == 0 ? selectCheckIcon : checkIcon"></image>
			</view>
			<view class="wexin-box">
				<view class="left-warp">
					<image class="pay-icon" src="../../static/alipay.png"></image>
					<view class="pay-text">支付宝</view>
				</view>
				<image class="check-icon" :src="payWay == 1 ? selectCheckIcon : checkIcon" @click="selectPayClick"></image>
			</view>
			
		</view>
		
		<button @click="skipLink">确定支付</button>
		
	</view>
</template>

<script>
	import indexApi from '../../../api/index.js'
	export default {
		
		data() {
			return {
				checkIcon:'/static/images/login/disagree.png',
				selectCheckIcon:'/static/images/login/agree.png',
				/* 支付方式 支付宝支付1 默认微信支付0 */
				payWay:0, 
			};
		},
		created() {
			
		},
		onLoad() {
			
		},
		methods: {
			/* H5端时静默授权 获取open id 用于微信支付*/
			wechatLoginJM(){
				const params = {
					hospital_id: 10000,
					back_url :'pages/index/index'
				}
				
				indexApi.wechatAuthLogin(params).then(res=>{
					// console.log('H5端时静默授权登录res',res);
					
					console.log('H5端时静默授权登录resData',res.data.url);
					if(res.success == 1){
						// console.log('H5端时静默授权登录res',res.data.url);
						this.skipLink(res.data.url);
						
					}
				}).catch(err=>{
					console.log('H5端时静默授权登录err',err);
				})
			},
			skipLink(url) {
			 
			  const params = {
			  	app_id: 2,
				app_name:'depin_public_mp',
			  	back_url :'pages/index/index'
			  }
			  indexApi.getOpenId(params).then(res=>{
				  console.log('H5端时静默授权登录res',res.data);
			  }).catch(err=>{
				  console.log('H5端时静默授权登录err',err);
			  });
			  
			},
			selectPayClick(){
				if(this.payWay == 0){
					this.payWay = 1;
				}else{
					this.payWay = 0;
				}
			},
			payClick(){
				uni.showToast({
					title:this.payWay==0?'微信支付':'支付宝支付',
					icon:'none'
				})
			}
			
		},
		computed:{
			h5Env(){
				// #ifdef H5
				let ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == 'micromessenger' && (ua.match(/miniprogram/i) == 'miniprogram')) {
					// 微信小程序
					return "mp-weixin";
				}
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					// 微信公众号
					return "h5-weixin";
				}
				if (ua.match(/alipay/i) == 'alipay' && ua.match(/miniprogram/i) == 'miniprogram') {
					return "mp-alipay";
				}
				if (ua.match(/alipay/i) == 'alipay') {
					return "h5-alipay";
				}
				// 外部 H5
				return "h5";
				// #endif
			},
			// 计算当前是否是ios app
			isIosAppCom(){
				let info = uni.getSystemInfoSync();
				return info.uniPlatform === 'app' && info.osName === 'ios' ? true : false;
			},
			// 计算当前是否是PC环境
			isPcCom(){
				// #ifdef H5
				let info = uni.getSystemInfoSync();
				return info.deviceType === 'pc' ? true : false;
				// #endif
				return false;
			}
		},
	}
</script>

<style lang="scss">
	.pay-page{
		display: flex;
		flex-direction: column;
	}
	.pay-icon{
		width: 60rpx;
		height: 60rpx;
	}
	.check-icon{
		width: 40rpx;
		height: 40rpx;
		margin-right: 60rpx;
	}
	.pay-box{
		width: 100%;
		margin-top: 100rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.wexin-box {
		width: 90%;
		margin: 20rpx 60rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.left-warp{
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
</style>

