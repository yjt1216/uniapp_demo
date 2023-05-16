<template>
	<view class="user">
		<view class="top-view" :style="[headBackground]">
			<!-- 登录状态 头部信息 -->
			<view v-if="isLogin" class="login-info" :style="{'padding-top':topH+'px'}">
				<image class="header-image" src="../../static/user/default_header.png"></image>
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
				
				<image class="header-image" src="../../static/user/default_header.png"></image>
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
					<image src="../../static/user/fuwuduixiang.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">服务对象</view>
				</view>
				<!-- <u-icon name="arrow-right" size="20" color="#39C9BC"></u-icon> -->
				<image class="arrow-img" :src="'/static/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<view class="menu-item" @click="serviceObject">
				<view class="u-r">
					<image src="../../static/user/peixunkecheng.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">培训课程</view>
				</view>
				<image class="arrow-img" :src="'/static/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<router-link to="/bundle/pages/user_intro/user_intro">
				<view class="menu-item" @click="serviceObject">
					<view class="u-r">
						<image src="../../static/user/shezhi.png" class="type-img"></image>
						<view class="menu-text u-m-l-20">个人介绍</view>
					</view>
					<image class="arrow-img" :src="'/static/user/arrow_right.png'"></image>
				</view>
			</router-link>
			<view class="divider"></view>
			<view class="menu-item" @click="serviceObject">
				<view class="u-r">
					<image src="../../static/user/lianxikefu.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">联系客服</view>
				</view>
				<image class="arrow-img" :src="'/static/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<view class="menu-item" >
				<view class="u-r">
					<image src="../../static/user/yonghubangzhu.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">用户帮助</view>
				</view>
				<image class="arrow-img" :src="'/static/user/arrow_right.png'"></image>
			</view>
			<view class="divider"></view>
			<view class="menu-item" >
				<view class="u-r">
					<image src="../../static/user/yinsizhengce.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">隐私政策</view>
				</view>
				<image class="arrow-img" :src="'/static/user/arrow_right.png'"></image>
			</view>
			
			<view class="divider"></view>
			<view class="menu-item" >
				<view class="u-r">
					<image src="../../static/user/yonghuxieyi.png" class="type-img"></image>
					<view class="menu-text u-m-l-20">用户协议</view>
				</view>
				<image class="arrow-img" :src="'/static/user/arrow_right.png'"></image>
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
				topH: uni.getSystemInfoSync().statusBarHeight
			}
		},
		onLoad() {
			console.log('on load')
			console.log('user isLogin',this.isLogin)
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
				
			}
			
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
	}
</style>