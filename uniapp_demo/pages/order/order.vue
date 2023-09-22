<template>
	<view class="order">
		<nav-bar title="订单"></nav-bar>
		<view class="head_box">
			<!-- tab -->
			<view class="order-nav">
				<view class="nav-item" v-for="nav in orderState" :key="nav.id"
					@tap="onNav(nav.type)">
					<view class="item-title">{{ nav.title }}</view>
					<text class="nav-line" :class="{ 'line-active': orderType === nav.type }"></text>
				</view>
			</view>
		</view>
		<view class="content_box">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				isEmpty: false,
				loadStatus: 'loadmore', //loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
				currentPage: 1,
				lastPage: 1,
				orderType: 'all',
				orderList: [],
				orderState: [{
						id: 0,
						title: '全部',
						type: 'all'
					},
					{
						id: 1,
						title: '待付款',
						type: 'nopay'
					},
					{
						id: 2,
						title: '待发货',
						type: 'nosend'
					},
					{
						id: 3,
						title: '待收货',
						type: 'noget'
					},
					{
						id: 4,
						title: '待评价',
						type: 'nocomment'
					}
				]
			}
		},
		methods:{
			// tab切换
			onNav(id) {
				if (this.orderType !== id) {
					this.orderType = id;
					this.orderList = [];
					this.currentPage = 1;
					this.lastPage = 1;
					// this.getOrderList();
				}
			},
		}
	}
</script>

<style lang="scss">
	.order-nav {
		background: #fff;
		height: 80rpx;
	
		.nav-item {
			display: flex;
			flex-direction: row;
			
			
			.item-title {
				font-size: 30rpx;
	
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				line-height: 76rpx;
			}
	
			.nav-line {
				width: 100rpx;
				height: 4rpx;
				background: #fff;
			}
	
			.line-active {
				background: rgba(230, 184, 115, 1);
			}
		}
	}
	
</style>