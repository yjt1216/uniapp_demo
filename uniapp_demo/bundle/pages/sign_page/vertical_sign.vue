<!-- 竖屏 签字 -->
<template>
	<view class="vertical-sign">
		<nav-bar title="竖屏签字" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		<view style='width:90%;min-height:600rpx;margin:0 auto;'>
			<view style='width:100%;text-align: center;font-size: 30rpx;font-weight: bold;height:100rpx;line-height: 100rpx;'>规则</view>
			<view style='font-size: 28rpx;line-height: 40rpx;text-indent:56rpx'>
				“立足新时代新征程，中国青年的奋斗目标和前行方向归结到一点，就是坚定不移听党话、跟党走，
				努力成长为堪当民族复兴重任的时代新人。”在五四青年节即将到来之际，
				习近平总书记来到中国人民大学考察调研，
				对全国广大青年提出殷切希望：“牢记党的教诲，立志民族复兴，不负韶华，不负时代，不负人民，
				在青春的赛道上奋力奔跑，争取跑出当代青年的最好成绩!”
			</view>
		</view>
		
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
			<button @click="signatureAction">签名</button>
		</view>
		<signature-pad ref="signature"></signature-pad>
		
		
		<view style="border: 1rpx dashed #555555;">
			<u-image width="700rpx" height="500rpx" :src="signFilePath" v-if="signFilePath"></u-image>
		</view>
		
	</view>
</template>

<script>
	/* 签名 */
	import SignaturePad from '@/components/SignaturePad/SignaturePad.vue';
	
	export default {
		components:{
			SignaturePad
		},
		data(){
			return {
				signFilePath: null,
				isEnd: false // 是否签名
			}
		},
		onLoad() {
			
		},
		methods:{
			signatureAction() {
				console.log('点击签名pop')
				this.$refs.signature
					.sign({
						width: '700rpx',
						height: '500rpx',
						color: '#000'
					})
					.then(path => {
						// console.log(path);
						this.signFilePath = path
					})
					.catch(error => {
						console.log('取消签名error', error);
					});
			}
			
			
		}
		
	}
</script>

<style lang="scss">
	.vertical-sign {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
</style>