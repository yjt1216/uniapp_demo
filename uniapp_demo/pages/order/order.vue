<template>
	<view class="order">
		
		<order-list :orderList="orderList" @itemClick="showPopupWithIndex"></order-list>
		
		<upopup ref="popup3" @change="changePopup3">
			<view class="qrcode-box" style="margin-top: 30px;">
				<view class="qrcode">
					<uqrcode
					  ref="qrpopup3"
					  canvas-id="qrpopup3"
					  :value="signCode"
					  :size="size"
					  :start="false"
					  @click="remake('qrpopup3')"
					  @complete="complete($event, 'qrpopup3')"
					></uqrcode>
				</view>
				<text class="msg" style="color: #fff;">
					护士上门签到服务码
				</text>
				<view class="qr-btns"><button class="qr-btn" type="primary" size="mini" @click="closePopup('popup3')">关闭</button></view>
			</view>
		</upopup>
	</view>
</template>

<script>
	import upopup from "@/components/upopup/upopup.vue";
	import uqrcode from "@/uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode.vue";
	
	import orderList from "@/components/order-list/order-list";
	
	export default{
		components:{
			orderList,
			upopup,
		},
		data(){
			return {
				orderList:[
					{
						service_sign_code: "7e555074d5440c8fdd8bafec6fa6a9d6",
						item_sn: "9919db087c56115f65c64451e4bbfbe5",
						logo: "http://222.92.38.178:8091/storage/service/2024/04/19/6621fd58471b6.jpg",
						order_id: 132021,
						person_id: 1000126,
						person_name: "韩雪",
						status_text: "待服务",
						item_name: "水痘咨询",
						price: 0.01,
						item_num:3
					},
					{
						service_sign_code: "b318d44b40536f4953edcbb4c37240f0",
						item_sn: "9919db087c56115f65c64451e4bbfbe5",
						logo: "http://222.92.38.178:8091/storage/service/2024/04/19/6621fd58471b6.jpg",
						order_id: 132021,
						person_id: 1000126,
						person_name: "韩梅",
						status_text: "待服务",
						item_name: "水痘咨询",
						price: 0.01,
						item_num:12
					},
					{
						service_sign_code: "f7ae562b0b012b16040ab9d99f0885e3",
						item_sn: "9919db087c56115f65c64451e4bbfbe5",
						logo: "http://222.92.38.178:8091/storage/service/2024/04/19/6621fd58471b6.jpg",
						order_id: 132021,
						person_id: 1000126,
						person_name: "杨笑丽",
						status_text: "待服务",
						item_name: "水痘咨询",
						price: 10.5,
						item_num:458
					},
				],
				signCode:'',
				size: 200,
			}
		},
		onLoad() {
			
		},
		methods:{
			showPopupWithIndex(index) {
				console.log('用户点击index',index);
			    let item = this.orderList[index];
			    this.signCode = item.service_sign_code;
				this.showPopup('popup3');
			},
			changePopup3(e) {
				if(e.show) {
					setTimeout(() => {
						this.$refs.qrpopup3.remake();
					}, 150);
				}
			},
			showPopup(refName) {
				this.$refs[refName].open();
			},
			closePopup(refName) {
				this.$refs[refName].close();
			},
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
					console.log(refName + '生成成功',this.signCode);
				} else {
					console.log(refName + '生成失败');
				}
			},
		}
	}
</script>

<style lang="scss">
	
	
</style>