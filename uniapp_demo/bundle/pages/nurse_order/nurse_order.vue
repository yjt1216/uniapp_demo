<template>
	<view class="nurse_order">
		<!-- 导航栏 -->
		<nav-bar title="swiper"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<!--轮播-->
		<swiper style="min-height: 300rpx" autoplay="true" interval="3000" duration="300" circular="true">
		    <swiper-item>
		        <image style="width: 100%;height: auto;" src="https://www.mescroll.com/img/swiper1.jpg" mode="widthFix"/>
		    </swiper-item>
			<swiper-item>
		        <image style="width: 100%;height: auto;" src="https://www.mescroll.com/img/swiper2.jpg" mode="widthFix"/>
		    </swiper-item>
		</swiper>
		
		<!-- 标签 -->
		<me-tabs v-model="tabIndex" :tabs="tabs" ></me-tabs>
		<!-- 订单列表 -->
		<swiper :style="{height: height}" :current="tabIndex" @change="swiperChange">
			<swiper-item v-for="(tab,i) in tabs" :key="i">
				<mescroll-item ref="mescrollItem" :i="i" :index="tabIndex" :tabs="tabs" :height="height"></mescroll-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import MescrollItem from "./order-item.vue";
	
	export default {
		components: {
			MescrollItem
		},
		data() {
			return {
				height: "", // 需要固定swiper的高度
				tabs: [
					{name:'待评估'}, {name:'待执行'}, 
					{name:'执行中'}, {name:'已完成'},
				],
				tabIndex: 0 // 当前tab的下标
			}
		},
		onLoad() {
			// 需要固定swiper的高度 (需减去悬浮tabs的高度64rpx)
			this.height = uni.getSystemInfoSync().windowHeight - uni.upx2px(64) + 'px'
		},
		onShow() {
			
		},
		methods: {
			// 轮播菜单
			swiperChange(e){
				this.tabIndex = e.detail.current
			}
			
		}
	}
</script>

<style lang="scss">
	.nurse_order {
		background-color: #fff;
	}
</style>
