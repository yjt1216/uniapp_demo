<template>
	<view class="pop-code">
		<u-navbar title="二维码弹框" :placeholder="true" :autoBack="true"></u-navbar>
		<!-- 二维码 -->
		<view class="click-btn" >
			<button class="btn" type="primary" @click="showPopup('popup2')">弹层二维码测试二</button>
		</view>
	 
		<!-- 显示二维码弹窗 -->
		 <upopup ref="popup2" @change="changePopup1">
			<view class="qrcode-box">
				<view class="qrcode-title">测试二维码</view>
				
				<view class="qrcode">
					<uqrcode
					  ref="qrpopup1"
					  canvas-id="qrpopup1"
					  :value="item.qrCode"
					  :size="size"
					  :start="false"
					  @click="remake('qrpopup1')"
					  @complete="complete($event, 'qrpopup1')"
					></uqrcode>
				</view>
				
				
				<view class="qrcode-title_bottom">二维码</view>
			</view>
		 </upopup>

	</view>
</template>
<script>
	import upopup from "@/pages_custom/components/upopup/upopup.vue";
	
	export default {
		components:{
			upopup
		},
		data(){
		   return {
				item:{
					qrCode:'7e555074d5440c8fdd8bafec6fa6a9d6'
				}
		   }
		},
		methods:{
			remake(refName) {
				var ref = this.$refs[refName];
				/* ref通过v-for遍历后会自动包裹在数组里，所以要判断一下 */
				if (Array.isArray(ref)) {
					ref[0].remake();
				} else {
					ref.remake();
				}
			},
			complete(e, refName) {
				if (e.success) {
					console.log(refName + '生成成功');
				} else {
					console.log(refName + '生成失败');
				}
			},
			changePopup1(e) {
				if(e.show) {
					setTimeout(() => {
						this.$refs.qrpopup1.make();
					}, 250);
				}
			},
			showPopup(refName) {
				this.$refs[refName].open();
			},
			closePopup(refName) {
				this.$refs[refName].close();
			},
		}
	}
</script>
<style>
	.page {
	  /* #ifndef APP-NVUE */
	  display: flex;
	  flex-direction: column;
	  /* #endif */
	  align-items: center;
	}
	
	
	.qrcode-box {
	  /* #ifndef APP-NVUE */
	  display: flex;
	  flex-direction: column;
	  /* #endif */
	  align-items: center;
	  margin-bottom: 30px;
	  padding: 0 30px;
	}
	
	.qrcode {
	  padding: 16px;
	  background-color: #ffffff;
	  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	  border-radius: 2px;
	  overflow: hidden;
	}
	
	.msg {
	  margin-top: 15px;
	  font-size: 14px;
	  color: #9a9b9c;
	}
	
	.loading {
	  font-size: 14px;
	  color: #00aaff;
	}
	
	.error {
	  font-size: 12px;
	  color: #ff0000;
	}
	
	.save {
	  /* #ifndef APP-NVUE */
	  display: flex;
	  flex-direction: column;
	  /* #endif */
	  align-items: center;
	  width: 700rpx;
	  padding: 30px 0;
	  background-color: #ffffff;
	}
	
	.save-msg {
	  font-size: 14px;
	  color: #9a9b9c;
	}
	
	.save-image {
	  width: 500rpx;
	  height: 500rpx;
	  margin-top: 20px;
	}
	
	.btns {
	  margin-top: 10px;
	  /* #ifndef APP-NVUE */
	  display: flex;
	  /* #endif */
	  flex-direction: row;
	}
	
	.btn {
	  margin: 0 5px;
	}
	
</style>