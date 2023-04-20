
<template>
	<view class="content">
		<ljs-top
			title="注册" backgroundColor="linear-gradient(to top right, #CDDC39, #8BC34A, #FFEB3B)">
		</ljs-top>
		<view class="login_from">
			
			<view class="login_from_input">
				<!-- <view class="login_from_name">账号</view> -->
				<view class="login_from_fun"><input style="text-align: left;" type="text" placeholder="请输入账号"></view>
			</view>

			<view class="login_from_input">
				<!-- <view class="login_from_name">密码</view> -->
				<view class="login_from_fun"><input style="text-align: left;" type="digit" password="true" placeholder="请输入密码(6到12位)"></view>
			</view>

			<view class="login_from_input">
				<!-- <view class="login_from_name">验证码</view> -->
				<view class="login_from_fun">
					<input style="width: 40%; text-align: left" type="digit" maxlength="6" placeholder="输入验证码">
					<!-- 获取验证码 -->
					<label class="regFrom_tom_yzlabel" :style="{ color : QzyzmStare?'#cccccc':'#2ebbfe'}" @click="Qzyzm">{{Qztime}}{{Qztext}}</label>
				</view>
			</view>

			
			<view class="login_from_dl">
				<button @click="denglu">注册</button>
			</view>
			
			<view class="logo_xieyi">
				<label @click="moutcl" :class="gouxSta?'cuIcon-squarecheckfill':'cuIcon-square'"></label>
				<view class="logo_text">请勾选并阅读<text>《注册协议》</text>及<text>《隐私协议》</text></view>
			</view>
			
			
			
		</view>
		
	</view>
</template>

<script>
	
   export default {

	   data(){
			return {
				gouxSta:false,
				Qztime:'',
				QzyzmStare:false,
				Qztext:'获取验证码',
				isAgreement: false
			}
		},
		onLoad(){
			
		},
		methods: {
			
			moutcl(){
				if( this.gouxSta == false){
					this.gouxSta = true
				}else{
					this.gouxSta = false
				}
			},
			
			denglu(){
				if( this.gouxSta == false){
					uni.showToast({
						"title":"请阅读并勾选用户协议",
						"icon":'none'
					})				
				}else{
					uni.showToast({
						"title":"账号不存在",
						"icon":'none'
					})
				}		
			},
			
			
			Qzyzm(){
				var num = 60;
				if(this.QzyzmStare == false){
					this.Qztime ='60';
					this.Qztext = 's后获取';
					this.QzyzmStare = true;
					var interval = setInterval(() =>{
							--this.Qztime
						},1000)
					setTimeout(()=>{
						clearInterval(interval)
						this.Qztext = '获取验证码'
						this.Qztime = ''
						this.QzyzmStare = false
					},60000)				
				}
			},

			// 所属地区选择 start
			handleTap(picker) { this.$refs[picker].show() },
			handleChange(e) { console.log('change::', e) },
			handleConfirm(e) { console.log('confirm::', e)
				if (e) {
					const name = e.dataset.name
					const label = e.item.map(m => m.label).join('-')
					if (name && label) {
						this[name] = label
					}
				}
			},
			handleCancel(e) { console.log('cancel::', e) }	
			// 所属地区选择 end
		 }
   }
</script>

<style>
	
	page{ background: #fff; }
	
	.login_img{ 
		width: 100%; height: auto; margin-top: 90rpx; 
	}
	.login_img image{ 
		width: 170rpx; height: 170rpx; display: block; margin: 0 auto; border-radius: 50%; 
	}
	
	.login_from{ width: 100%; height: auto; box-sizing: border-box; padding: 20rpx 8%; }
	
	.login_from_input{ 
		width: 100%; height:auto; 
		display: flex; 
		flex-direction: row; 
		justify-content: space-between; 
		align-items: center; 
		border-bottom: 1rpx solid gray; 
		padding: 20rpx 0; margin: 0 auto;  
	} 
	
	.login_from_name{ width: 20%; }
	.login_from_fun{ 
		width: 90%; 
		height: 60rpx;
		display: flex; 
		flex-direction: row; 
		justify-content: flex-end; 
		align-items: center;  
		/* border: 1rpx solid gray;
		border-radius: 30rpx; */
	}
	.login_from_fun input{ width: 100%; text-align: left; font-size: 28rpx;  }
	
	
	.login_from_dl{ 
		width: 100%; height: 80rpx; line-height: 80rpx; margin-top: 150rpx;   
	}
	.login_from_dl button{ 
		width: 100%; height: 80rpx; 
		line-height: 80rpx; 
		background: #FF3B00; 
		color: #fff; 
		border-radius: 80rpx; 
	}
	
	.logo_xieyi{ 
		width: 100%; height: 80rpx; 
		line-height: 80rpx; 
		display: flex; 
		flex-direction: row; 
		margin-top: 30rpx;
		align-items: center; 
		color: #444; 
		font-size: 28rpx; 
		justify-content: center; 
	}
	.logo_xieyi label{ font-size: 36rpx; margin-right: 1%; display: block; width: 30rpx; height: 30rpx; }
	
	.cuIcon-squarecheckfill{ color: #FF3B00; }
	.logo_text text{ color: #FF3B00; }
	
	.getyzm{ width: 60%; display: flex; flex-direction: row; justify-content: flex-end; color: #FF3B00; }
	.cuicon{ font-size: 36rpx; }  
	
	.regFrom_tom_yzlabel{ 
		width: 60%; 
		text-align: right; 
		font-size: 28rpx;
	}
	.cuIcon-squarecheckfill{ 
		background: #FF3B00; 
		position: relative; 
		border: 4rpx #ccc solid; 
		box-sizing: border-box; 
		border-radius: 6rpx; 
	}
	.cuIcon-square{ 
		background: #fff; 
		border: 4rpx #ccc solid; 
		box-sizing: border-box; 
		border-radius: 6rpx; 
	}
	
</style>



