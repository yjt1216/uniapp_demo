<template>
	<view class="user">
		<view class="top-view" :style="[headBackground]">
			
			
			<!-- 登录状态 头部信息 -->
			<view v-if="isLogin" class="login-info" :style="{'padding-top':topH+'px'}">
				<image class="header-image" src="../../static/images/user/default_header.png"></image>
				<view class="login-name" >陈宜飞</view>
				<view class="login-id" >ID:20635</view>
				<!-- 星级 资历 佣金 -->
				<view class="work-info">
					<view size="md" 
						class="white  flex row-center info" >
						<text>1</text>
						<text>星级</text>
					</view>
					<view size="md"
						class="white  flex row-center info" >
						<text>护士长</text>
						<text>资历</text>
					</view>
					<view size="md"
						class="white  flex row-center info">
						<text>100000</text>
						<text>佣金</text>
					</view>
					
				</view>
			</view>
			<!-- 未登录 头部信息 -->
			<view v-if="!isLogin" class="un-login-info" :style="{'padding-top':topH+'px'}">
				
				<image class="header-image" src="../../static/images/user/default_header.png"></image>
				<view class="login-status" >未登录</view>
				<!-- 登录 注册 -->
				<view class="login-register">
					<button size="md" 
						class="white br60 flex row-center btn" @tap="goLogin">
						<text>登录</text>
					</button>
					<button size="md"
						class="white br60 flex row-center btn" @tap="goRegister">
						<text>注册</text>
					</button>
					<!-- <button size="sm" class="plain br60" hover-class="none" @tap="goLogin">登录</button> -->
					
				</view>
			</view>
			
		</view>
		<!-- list view -->
		<view class="menu-list">
			<view class="menu-item" @click="serviceObject">
				<view class="u-r">
					<image src="../../static/images/user/fuwuduixiang.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">服务对象</view>
				</view>
				<!-- <u-icon name="arrow-right" size="20" color="#39C9BC"></u-icon> -->
				<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<view class="menu-item" @click="serviceObject">
				<view class="u-r">
					<image src="../../static/images/user/peixunkecheng.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">培训课程</view>
				</view>
				<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<router-link to="/bundle/pages/user_intro/user_intro">
				<view class="menu-item" @click="serviceObject">
					<view class="u-r">
						<image src="../../static/images/user/shezhi.png" class="type-img"></image>
						<view class="menu-text u-m-l-20">个人介绍</view>
					</view>
					<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
				</view>
			</router-link>
			<view class="divider"></view>
			<view class="menu-item" @click="serviceObject">
				<view class="u-r">
					<image src="../../static/images/user/lianxikefu.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">联系客服</view>
				</view>
				<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<view class="menu-item" >
				<view class="u-r">
					<image src="../../static/images/user/yonghubangzhu.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">用户帮助</view>
				</view>
				<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<view class="menu-item" >
				<view class="u-r">
					<image src="../../static/images/user/yinsizhengce.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">隐私政策</view>
				</view>
				<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
			</view>
			
			<view class="divider"></view>
			<view class="menu-item" >
				<view class="u-r">
					<image src="../../static/images/user/yonghuxieyi.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">用户协议</view>
				</view>
				<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<view class="menu-item" >
				<view class="u-r">
					<u-icon name="scan" color="#39C9BC" size="20"></u-icon>
					<view class="menu-text u-m-l-20">收款码</view>
				</view>
				<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
			</view>
			
			<view class="divider"></view>
			<view class="menu-item" @click="clearStorage">
				<view class="u-r">
					<u-icon name="scan" color="#39C9BC" size="20"></u-icon>
					<view class="menu-text u-m-l-20">清除缓存</view>
				</view>
				
				<view class="storage-right">
					<view class="storage-size">{{storageSize}}</view>
					<image class="arrow-img" :src="'/static/images/user/arrow_right.png'"></image>
				</view>
			</view>
			<view class="divider"></view>
			
			
		</view>
		<y-tabbar ref="tabbar" native></y-tabbar>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				topH: uni.getSystemInfoSync().statusBarHeight,
				/* 小程序缓存 */
				storageSize:'0M',
			}
		},
		onLoad() {
			console.log('on load')
			console.log('user isLogin',this.isLogin)
			this.getStorageSize()//获取缓存
		},
		methods: {
			goLogin() {
				this.$Router.push({
					path: '/pages/login/login',
				})
			},
			goRegister(){
				this.$Router.push({
					path: '/pages/register/register',
				})
			},
			// 服务对象
			serviceObject(){
				
			},
			//获取app的缓存
			getStorageSize:function(){
				let that = this;
				uni.getStorageInfo({
					success(res) {
						//console.log(res.keys);
						//console.log(res.limitSize);
						let size = res.currentSize;
						if (size < 1024) {
							that.storageSize = size + ' B';
						} else if (size/1024>=1 && size/1024/1024<1) {
							that.storageSize = Math.floor(size/1024*100)/100 + ' KB';
						} else if (size/1024/1024>=1) {
							that.storageSize = Math.floor(size/1024/1024*100)/100 + ' M';
						}
					}
				})
			},
			//删除 缓存
			clearStorage:function (){
					let that = this;
					uni.showModal({
						title:'提示',
						content:'确定清除缓存吗?',
						confirmText:'立即清除',
						success(res) {
							if(res.confirm){
								uni.clearStorageSync();
								//重新获取并显示清除后的缓存大小
								that.getStorageSize();
								uni.showToast({
									title:'清除成功',
									icon:'none'
								})
								//清除完后跳到登录页面
								setTimeout(()=>{
									uni.redirectTo({
										url:'/pages/login/login',
										animationType: 'pop-in',
										animationDuration: 200
									})
								},1300)
							}
						}
					})
			 },
		},
		computed: {
			// 头部背景色
			headBackground() {
				return {
					'background-image':`linear-gradient(to right, #39C9BC,#6DE8CC)`
				}
			}
		}
		
	};
</script>

<style lang="scss" scoped>
	@import '@/styles/base.scss';
	.user {
		background-size: 100% auto;
		background-repeat: no-repeat;
		
		.top-view {
			
			height: 420rpx;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			
			.qr-code{
				width: 60rpx;
				height: 60rpx;
				background-color: red
			}
			
			.un-login-info{
				.login-status {
					color: white;
					text-align: center;
				}
				.header-image {
					
					display: block;
					width: 100rpx;
					height: 100rpx;
					margin: 10rpx auto ;
				}
				.login-register {
					margin-top: 20rpx;
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					
					.btn {
						background-color: #39C9BC;
						width: 180rpx;
						margin: 10rpx 20rpx 0; /* 上边 | 左边右边 | 下边 */
					}
				}
			}
			.login-info{
				.login-name {
					color: white;
					text-align: center;
				}
				.login-id {
					color: white;
					text-align: center;
				}
				
				.header-image {
					display: block;
					width: 100rpx;
					height: 100rpx;
					margin: 10rpx auto ;
				}
				.work-info {
					margin-top: 20rpx;
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					
					.info {
						width: 180rpx;
						margin: 10rpx 20rpx 0; /* 上边 | 左边右边 | 下边 */
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
				}
			}
			
		}
		.menu-list {
			display: flex;
			flex-direction: column;
			padding-left: 15rpx;
			padding-right: 15rpx;
			margin-top: 30rpx;
			
			.menu-item {
				display: flex;
				flex-direction: row;
				background-color: #fff;
				// border-radius: 15rpx;
				align-items: center;
				justify-content: space-between;
				padding-left: 10rpx;
				padding-right: 10rpx;
				height: 45rpx;
				.u-r{
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				
				.menu-text {
					color: black;
					margin-left: 10rpx;
					font-size: 32rpx;
					font-weight: 400;
				}
				.type-img{
					height: 40rpx;
					width: 40rpx;
				}
				.arrow-img{
					height: 32rpx;
					width: 26rpx;
				}
			}
			.divider {
				margin-top: 20rpx;
				margin-bottom: 15rpx;
				margin-left: 15rpx;
				margin-right: 15rpx;
				background-color: #666666;
				width: 95%;
				height: 1rpx;
			}
		}
		.storage-right{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
		}
		.storage-size{
			margin-right: 10rpx;
		}
	}
</style>