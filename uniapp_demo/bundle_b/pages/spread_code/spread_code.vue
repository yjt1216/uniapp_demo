<template>
	<view class="spread-code">
		<nav-bar title="推广码" backgroundColor="#fff" :blackArrow="true"></nav-bar>
		
		<canvas canvas-id="qrcode" style="width: 100px; height: 100px"></canvas>
		
	</view>
</template>

<script>
	import uQrcode from '../../../utils/qrcode.js';
	
	export default {
		data(){
			return {
				qrcode:'',
			}
		},
		onLoad:function(option){
			this.getSpreadCodeFun();
		},
		methods:{
			getSpreadCodeFun(){
				const qrText = 'https://didi.wellnurse.cn/mobile/hospital/index?hospital_id=10000&scode=16BC24';
				uQrcode.make({
					//canvasId要和上面画布的id是一样的
				    canvasId:'qrcode',
				    componentInstance:this,
				    text: qrText,
				    size: 100,
				    margin:0
				});
				
			},
		}
	}
</script>

<style lang="scss">
	.spread-code{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.payment_code{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.call-image {
		margin-top: 120rpx;
		width: 320rpx;
		height: 320rpx;
	}
	.qrcode{
		margin-top: 120rpx;
	}
</style>