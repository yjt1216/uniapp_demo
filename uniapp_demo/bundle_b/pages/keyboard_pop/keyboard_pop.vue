<template>
	<view style="padding:50rpx;">
		<nav-bar title="键盘顶起"></nav-bar>
		<view style="margin-top:60rpx;">
			<form @submit="submit">
				<view class="gui-border-b gui-form-item" style="margin-top:80rpx;">
					<view class="gui-form-body">
						<input type="number" class="gui-form-input" v-model="driverTel" name="driverTel" placeholder="手机号" 
							@tap="hideFotter" @blur="showFotter" placeholder-style="color:#CACED0"/>
					</view>
				</view>
			</form>
			<view class="footKf" v-if="footer">
				<view class="kfBtn gui-flex gui-justify-content-center gui-align-items-center" @tap="kfBtn()">
					<text class="gui-icons kf_icon">&#xe626;</text>
					<text class="kfBtn_text">联系客服</text>
				</view>
				<view class="kfTime">服务时间：07:30-21:00</view>
			</view>
		</view>
	</view>
</template>
<script>
	var _self;
	export default {
		data() {
			return {
				footer: true,
				windowHeight: '',
				driverTel:'',
			}
		},
		onLoad() {
			_self = this;
			uni.getSystemInfo({
				success: (res)=> {
					_self.windowHeight = res.windowHeight;
				}
			});    
			uni.onWindowResize((res) => {
				if(res.size.windowHeight < _self.windowHeight){
					_self.footer= false
				}else{
					_self.footer = true
				}
			})
		},
		methods: {
			showFooter : function(){
				this.footer = true;
			},
			hideFooter : function(){
				this.footer = false;
			},
			submit(){
				console.log('submit');
			}
		},
	}
</script>
<style>
	.footKf{
		position:fixed;
		bottom: 100rpx;
		align-self: center;
		width: 480rpx;
		height: 24rpx;
		font-size: 24rpx;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #707070;
		line-height: 24rpx;
	}
</style>