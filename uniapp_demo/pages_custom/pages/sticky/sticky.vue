<template>
	<view class="container">
		<u-navbar title="吸顶" :placeholder="true" :autoBack="true"></u-navbar>
		<view class="tips">
			<view>1、判断平台，ios可直接使用position: sticky</view>
			<view>2、对sticky-item容器进行绝对定位，底部内容部分使用外边距撑开sticky-item高度，减缓页面抖动</view>
			<view>3、<text class="tui-color-primary">查看基本示例</text></view>
			<view>4、<text class="tui-color-primary">查看异步加载示例</text></view>
			<!-- #ifdef APP-PLUS || H5 || MP-WEIXIN -->
			<view>5、<text class="tui-color-primary">wxs吸顶示例</text></view>
			<!-- #endif -->
		</view>
		
		<sc-sticky :scrollTop="scrollTop" :stickyTop="stickyTop" stickyHeight="80rpx">
			<template v-slot:header>
				<view class="sticky-item">
					<view class="date">本月</view>
					<view class="amount">
						<view>支出 ￥2030.88</view>
						<view>收入 ￥230.50</view>
					</view>
				</view>
			</template>
			<template v-slot:content>
				<view class="tui-box">
					容器内容
				</view>
			</template>
		</sc-sticky>
		
		
		<view class="list-view">
			<view class="tui-list-item2" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">朝朝盈-2019.06.03-收益发放</view>
						<view class="source">理财</view>
						<view class="time">今天 09:01</view>
					</view>
				</view>
				<view class="money add">
					+0.07
				</view>
			</view>
		
			<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">扫收钱码付款-给小短腿</view>
						<view class="source">生活日用</view>
						<view class="time">今天 09:01</view>
					</view>
				</view>
				<view class="money">
					-201906.07
				</view>
			</view>
		
			<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">美团点评</view>
						<view class="source">餐饮美食</view>
						<view class="time">今天 09:01</view>
					</view>
				</view>
				<view class="money">
					-888.00
				</view>
			</view>
			<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">美团点评</view>
						<view class="source">餐饮美食</view>
						<view class="time">昨天 09:01</view>
					</view>
				</view>
				<view class="money">
					-99.00
				</view>
			</view>
			<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">美团点评</view>
						<view class="source">餐饮美食</view>
						<view class="time">04-03 09:01</view>
					</view>
				</view>
				<view class="money">
					-60.00
				</view>
			</view>
			<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">美团点评</view>
						<view class="source">餐饮美食</view>
						<view class="time">04-02 19:30</view>
					</view>
				</view>
				<view class="money">
					-888.00
				</view>
			</view>
			<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">美团点评</view>
						<view class="source">餐饮美食</view>
						<view class="time">04-02 09:01</view>
					</view>
				</view>
				<view class="money">
					-40.00
				</view>
			</view>
		
		
			<view class="tui-list-item item-last" hover-class="tui-hover" :hover-stay-time="150" >
				<view class="content-box">
					<image src='/pages_custom/static/logo.png' class="logo"></image>
					<view class="des-box">
						<view class="tit">工资收入</view>
						<view class="source">工资</view>
						<view class="time">04-01 09:01</view>
					</view>
				</view>
				<view class="money add">
					+66668666.00
				</view>
			</view>
		
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				stickyTop: 0,
			}
		},
		onLoad() {
			// 计算顶部导航栏高度
			let navBarHeight = this.getNavBarHeight();
			console.info('navBarHeight = ',navBarHeight);
			// if (uni.getSystemInfoSync().platform === 'ios') {
			//     navBarHeight = 44;
			// } else {
			//     navBarHeight = 48;
			// }
			let statusBarHeight = this.geStatusBarHeight() ;
			console.info('statusBarHeight = ',statusBarHeight);
			this.stickyTop = statusBarHeight + navBarHeight;
		},
		methods: {
			// 获取状态栏高度
			geStatusBarHeight(){
			    return uni.getSystemInfoSync()['statusBarHeight']
			},
			// 获取导航栏高度
			getNavBarHeight(){
				let navbarHeight = 0;
			    // #ifdef MP-WEIXIN
			    let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			    // 导航栏高度 = 胶囊高度 + 上间距 + 下间距 + 微调	（menuButtonInfo.top - uni.getSystemInfoSync()['statusBarHeight'] = 上间距）	        
			    navbarHeight = menuButtonInfo.height + (menuButtonInfo.top - uni.getSystemInfoSync()['statusBarHeight']) * 2 + 2
			    // #endif
			    // #ifdef APP-PLUS || H5
			    navbarHeight = 44
			    // #endif
			    return navbarHeight
			},
			
		},
		//页面滚动执行方式
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tips {
		background: #fff;
		padding: 50rpx 34rpx;
		color: #555;
		font-size: 24rpx;
		line-height: 42rpx;
		position: relative;
	}

	.tips::before {
		content: '';
		position: absolute;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	/* sticky 容器 start */
	.sticky-item {
		width: 100%;
		height: 104rpx;
		padding: 20rpx 30rpx;
		background-color: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.tui-box{
		width: 100%;
		height: 300rpx;
		text-align: center;
	}
	/* sticky 容器 end */

	.date {
		height: 54rpx;
		font-size: 28rpx;
		background-color: #fff;
		padding: 0 28rpx;
		border-radius: 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		/* box-shadow: 0 0 1rpx #7A7A7A; */
	}

	.date::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1rpx solid #eaeef1;
		border-radius: 60rpx;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
	}

	.amount {
		text-align: right;
		color: #7A7A7A;
		font-size: 24rpx;
	}

	.list-view {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.list-view::after {
		content: '';
		position: absolute;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	.tui-list-item {
		width: 100%;
		padding: 30rpx 28rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.tui-list-item::after {
		left: 120rpx
	}
	.tui-list-item2{
		width: 100%;
		padding: 30rpx 28rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		border: 1rpx solid #33f3f6;
	}

	.item-last::after {
		left: 0 !important
	}

	.content-box {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.logo {
		width: 60rpx;
		height: 60rpx;
		flex-grow: 1
	}

	.des-box {
		min-height: 130rpx;
		padding-left: 28rpx;
		box-sizing: border-box;
		vertical-align: top;
		color: #333;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tit {
		font-size: 32rpx;
		max-width: 420rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.time {
		color: #888
	}

	.money {
		font-size: 38rpx;
		font-weight: 500;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 20rpx;
	}

	.add {
		color: #5677FC !important;
	}

	.tui-color-primary {
		color: #5677fc;
	}
</style>
