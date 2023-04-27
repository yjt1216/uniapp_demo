<template>
	<view class="nurse_order">
		<view class="top-warp">
			<!-- 导航栏 -->
			<nav-bar title="服务订单"  backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
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
			<me-tabs v-model="tabIndex" :tabs="tabs" @change="tabChange"></me-tabs>
		</view>
		
		<!-- 订单列表 -->
		<mescroll-body @init="mescrollInit" top="120" @down="downCallback"
		 :up="upOption" @up="upCallback" @emptyclick="emptyClick">
			<!-- 数据列表 -->
			<order-list :list="goods"></order-list>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import {apiOrders} from "@/api/mock.js"
	
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				height: "", // 需要固定swiper的高度
				tabs: [
					{name:'待评估'}, {name:'待执行'}, 
					{name:'执行中'}, {name:'已完成'}
				],
				tabIndex: 0 // 当前tab的下标
			}
		},
		onLoad() {
			// 需要固定swiper的高度 (需减去悬浮tabs的高度64rpx)
			this.height = uni.getSystemInfoSync().windowHeight - uni.upx2px(64) + 'px'
		},
		onShow() {
			// 返回刷新: https://www.mescroll.com/uni.html#note 第二点
			// if(this.canReset){
			// 	let curMescroll = this.getMescroll(this.tabIndex)
			// 	curMescroll && curMescroll.resetUpScroll()
			// }
			// this.canReset = true
		},
		methods: {
			
			// 切换菜单
			tabChange() {
				this.goods = []// 先置空列表,显示加载进度
				this.mescroll.resetUpScroll() // 再刷新列表数据
			},
			upCallback(page) {
				//联网加载数据
				let curTab = this.tabs[this.tabIndex]
				
				let keyword = curTab.name // 具体项目中,您可能取的是tab中的type,status等字段
				console.log('刷新数据keyword',keyword)
				apiOrders(page.num, page.size, keyword).then(res=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(res.list.length);
					//设置列表数据
					if(page.num == 1) this.goods = []; //如果是第一页需手动制空列表
					this.goods=this.goods.concat(res.list); //追加新数据
				}).catch(()=>{
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			},
			
		}
	}
</script>

<style lang="scss">
	.nurse_order {
		background-color: #fff;
	}
</style>
