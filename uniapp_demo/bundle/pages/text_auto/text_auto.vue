<template>
	<view>
		<!-- <view class="Express">
			<view class="info">
				<view :class="{hide:!iSinfo}">
					唐朝，可谓歌舞盛华，乐文辉煌。与此同时，女伎们的身价也推向了巅峰。青楼之市火爆，歌舞伎成了热门之业。沦落为青楼女子虽不光彩，但依然有很多人选择这一职业，在这些女子中，琴棋书画兼备的也大有人在长安城内，有一青楼，名为“玉满楼”，别名“玉月满花”，此中之女子皆是琴棋书画兼备，相传呐，那都是卖艺不卖身的存在。我们的故事就要从这玉满楼开始说起。在长安城内，有一青楼，名为“玉满楼”，别名“玉月满花”，此中之女子皆是琴棋书画兼备，相传呐，那都是卖艺不卖身的存在。我们的故事就要从这玉满楼开始说起。			
				</view>
				<text @tap="showinfo" v-if="!iSinfo">展开</text>
			</view>
			<text @tap="showinfo" v-if="iSinfo" class="hidebtn">收起</text>
		</view> -->
		
		
		<nav-bar title="文本" :back="false" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<view class="Express">
			<view class="info">
				<view :class="{hide:!iSinfo}">
					唐朝，可谓歌舞盛华，乐文辉煌。与此同时，女伎们的身价也推向了巅峰。青楼之市火爆，歌舞伎成了热门之业。沦落为青楼女子虽不光彩，但依然有很多人选择这一职业，在这些女子中，琴棋书画兼备的也大有人在长安城内，有一青楼，名为“玉满楼”，别名“玉月满花”，此中之女子皆是琴棋书画兼备，相传呐，那都是卖艺不卖身的存在。我们的故事就要从这玉满楼开始说起。在长安城内，有一青楼，名为“玉满楼”，别名“玉月满花”，此中之女子皆是琴棋书画兼备，相传呐，那都是卖艺不卖身的存在。我们的故事就要从这玉满楼开始说起。		
				</view>
				<!-- <text @tap="showinfo" v-if="!iSinfo">展开</text> -->
			</view>
			<!-- <text @tap="showinfo" v-if="iSinfo" class="hidebtn">收起</text> -->
			<text @tap="showinfo"  class="hidebtn">{{autoShowText}}</text>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iSinfo: false,
				autoShowText:'展开',
				config:{
					title: '这里是新疆',
					color: '#ffffff',
					backgroundColor: [1,['#a9a1ff','#6970ff','#ff55ff','#ff9999']]
				}
			}
		},
		methods: {
			showinfo() {
				this.iSinfo = !this.iSinfo
				if(this.iSinfo){
					this.autoShowText = '收起'
				}else {
					this.autoShowText = '展开'
				}
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.Express {
		display: flex;
		// width: 100%;
		flex-direction: column;
		background-color: #fff;
		padding: 30upx;
		position: relative;

		.info {
			display: flex;
			flex-direction: column;

			view {
				text-align:justify ;
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(102, 102, 102, 1);
				word-break: break-word; //换行模式
				background-color: #fff;
			}

			text {
				width: 70px;
				font-size: 14px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%);
				color: #0078FF;
				position: absolute;
				bottom: 30upx;
				right: 30upx;
			}
		}

	}

	.hidebtn {
		display: flex;
		flex: 1;
		justify-content: flex-end;
		color: #0078FF;
		font-size: 14px;
	}

	.hide {
		word-break: break-word; //换行模式
		overflow: hidden;
		text-overflow: ellipsis; //修剪文字
		display: -webkit-box;
		-webkit-line-clamp: 3; //此处为上限行数
		-webkit-box-orient: vertical;
	}
</style>

