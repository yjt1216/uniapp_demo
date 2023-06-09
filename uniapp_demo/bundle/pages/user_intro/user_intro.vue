<template>
	<view class="user-intro">
		<nav-bar title="个人介绍" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<view class="intro-input">
			<u-textarea v-model="introValue" 
			:disabled="!inputEnble" placeholder="请输入内容" maxlength="30" autoHeight count ></u-textarea>
		</view>
		
		
		<!-- 切换账号 退出登录 -->
		<view class="bottom-view">
			<view class="bottom-item" @click="changeIntroFun">修改</view>
			<view class="bottom-item" @click="backFun">取消</view>
		</view>
		
	</view>
</template>

<script>
	// import MyTextarea from "@/components/my-textarea/my-textarea.vue"
	export default {
		// components: {
		// 	MyTextarea
		// },
		data(){
			return {
				introValue:'个人介绍',
				inputEnble: false
			}
		},
		onLoad() {
			this.introValue = '123'
			// this.introValue = '	唐朝，可谓歌舞盛华，乐文辉煌。与此同时，女伎们的身价也推向了巅峰。青楼之市火爆，歌舞伎成了热门之业。沦落为青楼女子虽不光彩，但依然有很多人选择这一职业，在这些女子中，琴棋书画兼备的也大有人在长安城内，有一青楼，名为“玉满楼”，别名“玉月满花”，此中之女子皆是琴棋书画兼备，相传呐，那都是卖艺不卖身的存在。我们的故事就要从这玉满楼开始说起。在长安城内，有一青楼，名为“玉满楼”，别名“玉月满花”，此中之女子皆是琴棋书画兼备，相传呐，那都是卖艺不卖身的存在。我们的故事就要从这玉满楼开始说起。		'
		},
		
		methods: {
			changeIntroFun() {
				// console.log('修改 个人介绍')
				this.inputEnble = !this.inputEnble
				console.log('修改 个人介绍',this.inputEnble)
				
			},
			backFun() {
				console.log('取消')
				uni.navigateBack()
			}
			
		}
		
		
	}
</script>

<style lang="scss">
	.user-intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.intro-input {
			margin-top: 100rpx;
			width: 90%;
			height: 600rpx;
			border: 1rpx solid #ddd;
			border-radius: 10rpx;
		}
		.bottom-view {
			background-image: linear-gradient(to right, #39C9BC,#6DE8CC);
			width: 100%;
			height: 120rpx;
			bottom: 0rpx;
			position: fixed;
			transform: translateZ(0);
			bottom: env(safe-area-inset-bottom);
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding-left: 10rpx;
			padding-right: 10rpx;
			
			.bottom-item {
				width: 50%;
				color: white;
				text-align: center;
			}
			
		}
	}
</style>