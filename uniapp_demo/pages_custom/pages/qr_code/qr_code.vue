<template>
	<view>
		<u-navbar title="二维码弹框" :placeholder="true" :autoBack="true"></u-navbar>
		<!-- <view class="qrcode-box">
			<view class="qrcode">
				<uqrcode ref="qr13" canvas-id="qr13" :value="text" :size="size" :start="true" 
					:auto="true" @click="remake('qr13')" @complete="complete($event, 'qr13')">
					<template v-slot:loading>
						<text class="loading">loading...</text>
					</template>
				</uqrcode>
			</view>
			<text class="msg">这是一个组件自定义loading加载效果的示例，点击二维码查看自定义loading效果</text>
			<view class="btns"><button class="btn" type="primary" size="mini" @click="save('qr13')">保存</button></view>
		</view> -->
		
		<view style="margin-bottom: 30px;">
			<upopup ref="popup1" @change="changePopup1">
				<view class="qrcode-box" style="margin-top: 30px;">
					<view class="qrcode">
						<uqrcode
						  ref="qrpopup1"
						  canvas-id="qrpopup1"
						  :value="item.serviceCode"
						  :size="size"
						  :start="false"
						  @click="remake('qrpopup1')"
						  @complete="complete($event, 'qrpopup1')"
						></uqrcode>
					</view>
					<text class="msg" style="color: #fff;">
						弹层测试，第一种写法，默认二维码组件加载完毕暂不生成，通过弹层组件的change事件去调用二维码组件的make方法去触发生成
					</text>
					<view class="btns"><button class="btn" type="primary" size="mini" @click="closePopup('popup1')">关闭</button></view>
				</view>
			</upopup>
			<button class="btn" type="primary" @click="showPopup('popup1')">弹层测试一</button>
		</view>
		<view style="margin-bottom: 30px;">
			<upopup ref="popup2" @change="changePopup2">
				<view class="qrcode-box" style="margin-top: 30px;">
					<view class="qrcode">
						<uqrcode
						  ref="qrpopup2"
						  canvas-id="qrpopup2"
						  :value="item.serviceCode"
						  :size="size"
						  :start="true"
						  @click="remake('qrpopup2')"
						  @complete="complete($event, 'qrpopup2')"
						></uqrcode>
					</view>
					<text class="msg" style="color: #fff;">
						弹层测试，第二种写法，默认二维码组件加载完毕立马生成，在某些设备弹层时canvas组件未在第一时间渲染完毕，可能会生成失败。
						优化方式，在弹层组件的change事件里延时150毫秒左右调用二维码组件的remake方法即可
					</text>
					<view class="btns"><button class="btn" type="primary" size="mini" @click="closePopup('popup2')">关闭</button></view>
				</view>
			</upopup>
			<button class="btn" type="primary" @click="showPopup('popup2')">弹层测试二</button>
		</view>
		
		<view style="margin-bottom: 30px;">
			<uni-popup ref="popup3" @change="changePopup3">
				<view class="qrcode-box" style="margin-top: 30px;">
					<view class="qrcode">
						<uqrcode
						  ref="qrpopup3"
						  canvas-id="qrpopup3"
						  :value="item.serviceCode"
						  :size="size"
						  :start="true"
						  @click="remake('qrpopup3')"
						  @complete="complete($event, 'qrpopup3')"
						></uqrcode>
					</view>
					<text class="msg" style="color: #fff;">
						弹层测试，第二种写法，默认二维码组件加载完毕立马生成，在某些设备弹层时canvas组件未在第一时间渲染完毕，可能会生成失败。
						优化方式，在弹层组件的change事件里延时150毫秒左右调用二维码组件的remake方法即可
					</text>
					<view class="btns"><button class="btn" type="primary" size="mini" @click="closePopup('popup3')">关闭</button></view>
				</view>
			</uni-popup>
			<button class="btn" type="primary" @click="showUniPopup('popup3')">弹层测试三</button>
		</view>
		
		
		
	</view>
</template>

<script>
import upopup from "@/pages_custom/components/upopup/upopup.vue";

export default {
	components:{
		upopup
	},
	data() {
		return {
			text: 'uQRCode',
			size: 200,
			item: {
				serviceCode:'7e555074d5440c8fdd8bafec6fa6a9d6'
			}
		};
	},
	/* 必须在onReady里调用，因为要确保canvas组件已成功渲染 */
	async onReady() {
		
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
		showPopup(refName) {
			this.$refs[refName].open();
		},
		closePopup(refName) {
			this.$refs[refName].close();
		},
		showUniPopup(refName){
			this.$refs[refName].open();
		},
		changePopup1(e) {
			if(e.show) {
				setTimeout(() => {
					this.$refs.qrpopup1.make();
				}, 150);
			}
		},
		changePopup2(e) {
			if(e.show) {
				setTimeout(() => {
					this.$refs.qrpopup2.remake();
				}, 150);
			}
		},
		changePopup3(e) {
			if(e.show) {
				setTimeout(() => {
					this.$refs.qrpopup3.remake();
				}, 150);
			}
		}
	}
	
};
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
