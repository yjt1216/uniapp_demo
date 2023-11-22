<!-- 竖屏 签字 -->
<template>
	<view class="vertical-sign" @touchmove.stop.prevent="moveHandle">
		<nav-bar title="竖屏签字" backgroundColor="linear-gradient(to right, #39C9BC,#6DE8CC)"></nav-bar>
		
		<view class="logo_text">
			<text class="option-required"> * </text> 
			<text class="u-block__title"> 护理人员签名确认 </text>
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
			// js 触发的函数:置空即可
			moveHandle: function() {},

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
	.logo_text{
		padding:10rpx 20rpx;
	}
</style>